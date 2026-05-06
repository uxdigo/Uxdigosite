import { useState, useEffect, useRef } from 'react';
import Widget1 from '../imports/Widget1';
import Widget2 from '../imports/Widget2';
import Widget3 from '../imports/Widget3';

type WidgetState = 'pending' | 'finished' | 'canceled';

interface InteractiveWidgetProps {
  onStateChange?: (state: WidgetState) => void;
}

export function InteractiveWidget({ onStateChange }: InteractiveWidgetProps) {
  const [currentState, setCurrentState] = useState<WidgetState>('pending');
  const containerRef = useRef<HTMLDivElement>(null);

  const handleStateChange = (newState: WidgetState) => {
    setCurrentState(newState);
    onStateChange?.(newState);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleClick = (event: MouseEvent) => {
      event.preventDefault();
      event.stopPropagation();
      
      const target = event.target as HTMLElement;
      
      // Find the text content by traversing up the DOM
      let element: HTMLElement | null = target;
      let textContent = '';
      
      while (element && element !== container && !textContent) {
        textContent = element.textContent?.trim() || '';
        
        // Stop if we found meaningful text
        if (textContent && (
          textContent === 'Today' || 
          textContent === 'Pending' || 
          textContent === 'Finished' || 
          textContent === 'Canceled'
        )) {
          break;
        }
        
        element = element.parentElement;
      }
      
      // Handle state changes based on the clicked text
      switch (textContent) {
        case 'Today':
          if (currentState !== 'pending') {
            handleStateChange('pending');
          }
          break;
        case 'Pending':
          if (currentState === 'pending') {
            handleStateChange('finished');
          } else {
            handleStateChange('pending');
          }
          break;
        case 'Finished':
          if (currentState === 'finished') {
            handleStateChange('canceled');
          } else {
            handleStateChange('finished');
          }
          break;
        case 'Canceled':
          if (currentState === 'canceled') {
            handleStateChange('pending');
          } else {
            handleStateChange('canceled');
          }
          break;
      }
      
      // Alternative approach: check if we clicked on a filter button area
      const filterButton = target.closest('[data-name="List"]');
      if (filterButton) {
        const filterContainer = filterButton.closest('[data-name="Filter"]');
        if (filterContainer) {
          const allFilterButtons = filterContainer.querySelectorAll('[data-name="List"]');
          const buttonIndex = Array.from(allFilterButtons).indexOf(filterButton as Element);
          
          if (buttonIndex === 0) {
            // First button - "Today"
            if (currentState !== 'pending') {
              handleStateChange('pending');
            }
          } else if (buttonIndex === 1) {
            // Second button - varies by widget state
            const buttonText = filterButton.textContent?.trim() || '';
            if (buttonText.includes('Pending')) {
              handleStateChange('finished');
            } else if (buttonText.includes('Finished')) {
              handleStateChange('canceled');
            } else if (buttonText.includes('Canceled')) {
              handleStateChange('pending');
            }
          }
        }
      }
    };

    container.addEventListener('click', handleClick, true);
    return () => container.removeEventListener('click', handleClick, true);
  }, [currentState]);

  // Create wrapper components that preserve original styling but add interactivity hints
  const InteractiveWidget1 = () => (
    <div className="w-full h-full relative">
      <Widget1 />
      {/* Invisible overlay for better click detection */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[60px] left-[24px] right-[24px] h-[60px] pointer-events-auto cursor-pointer opacity-0 hover:opacity-10 hover:bg-blue-500 transition-opacity" />
      </div>
    </div>
  );

  const InteractiveWidget2 = () => (
    <div className="w-full h-full relative">
      <Widget2 />
      {/* Invisible overlay for better click detection */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[60px] left-[24px] right-[24px] h-[60px] pointer-events-auto cursor-pointer opacity-0 hover:opacity-10 hover:bg-blue-500 transition-opacity" />
      </div>
    </div>
  );

  const InteractiveWidget3 = () => (
    <div className="w-full h-full relative">
      <Widget3 />
      {/* Invisible overlay for better click detection */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[60px] left-[24px] right-[24px] h-[60px] pointer-events-auto cursor-pointer opacity-0 hover:opacity-10 hover:bg-blue-500 transition-opacity" />
      </div>
    </div>
  );

  const renderCurrentWidget = () => {
    switch (currentState) {
      case 'finished':
        return <InteractiveWidget2 />;
      case 'canceled':
        return <InteractiveWidget3 />;
      default:
        return <InteractiveWidget1 />;
    }
  };

  return (
    <div className="w-full flex flex-col items-center gap-4">
      {/* State indicator - remove this after testing */}
      <div className="text-sm text-gray-500 text-center">
        Estado atual: <strong>{currentState}</strong> - Clique nos filtros dentro do widget para mudar
      </div>
      
      {/* Widget container with proper dimensions */}
      <div 
        ref={containerRef}
        className="relative w-[360px] h-auto min-h-[500px] cursor-pointer transition-all duration-300 ease-in-out shadow-[0_8px_30px_rgba(0,0,0,0.12)] rounded-3xl overflow-hidden"
      >
        {renderCurrentWidget()}
      </div>
      
      {/* Manual controls for testing - remove after confirming functionality */}
      <div className="flex gap-2">
        <button
          onClick={() => handleStateChange('pending')}
          className={`px-3 py-1 text-xs rounded transition-colors ${
            currentState === 'pending' 
              ? 'bg-blue-500 text-white' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Pending
        </button>
        <button
          onClick={() => handleStateChange('finished')}
          className={`px-3 py-1 text-xs rounded transition-colors ${
            currentState === 'finished' 
              ? 'bg-blue-500 text-white' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Finished
        </button>
        <button
          onClick={() => handleStateChange('canceled')}
          className={`px-3 py-1 text-xs rounded transition-colors ${
            currentState === 'canceled' 
              ? 'bg-blue-500 text-white' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Canceled
        </button>
      </div>
    </div>
  );
}