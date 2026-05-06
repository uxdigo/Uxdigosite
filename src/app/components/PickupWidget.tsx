import { useState, useRef, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import A from '../imports/A';
import B from '../imports/B';
import C from '../imports/C';
import svgPathsA from '../imports/svg-cibc52d4cw';
import svgPathsB from '../imports/svg-ko3ldpiudb';
import svgPathsDownload from '../imports/svg-a656dp785e';
import svgPathsC from '../imports/svg-25tmm0uhnz';
import { useLanguage } from '../contexts/LanguageContext';

type PickupState = 'pending' | 'finished' | 'canceled';

interface PickupData {
  id: string;
  time: string;
  status: string;
  statusColor: string;
  content?: string;
  hasButton?: boolean;
  buttonText?: string;
  buttonColor?: string;
  alertType?: 'warning' | 'info';
  alertText?: string;
  alertIcon?: string;
}

const getPickupData = (t: any): Record<PickupState, PickupData[]> => ({
  pending: [
    {
      id: '1',
      time: '10-11 AM',
      status: t.onTheWay,
      statusColor: '#6c9434',
      content: t.pickupOnTheWayText
    },
    {
      id: '2',
      time: '01-02 PM',
      status: t.scheduled,
      statusColor: '#111111',
      content: t.scheduledPickupText
    }
  ],
  finished: [
    {
      id: '1',
      time: '08-09 PM',
      status: t.completed,
      statusColor: '#111111',
      content: `${t.pickupCompletedText1}\n${t.weCollected} 208 ${t.packages}.\n${t.canDownloadReceipt}`,
      hasButton: true,
      buttonText: t.pickupReceipt,
      buttonColor: '#2d48bd'
    },
    {
      id: '2',
      time: '09-10 AM',
      status: t.completed,
      statusColor: '#111111',
      content: `${t.morningPickupCompleted}\n${t.weCollected} 156 ${t.packages}.\n${t.allItemsProcessed}`,
      hasButton: true,
      buttonText: t.pickupReceipt,
      buttonColor: '#2d48bd'
    }
  ],
  canceled: [
    {
      id: '1',
      time: '09-10 AM',
      status: t.canceled.toUpperCase(),
      statusColor: '#111111',
      content: t.pickupCanceledLocationText,
      alertType: 'warning',
      alertText: t.reputationAtRisk,
      alertIcon: 'warning',
      hasButton: true,
      buttonText: t.contact,
      buttonColor: 'rgba(45,72,189,0.25)'
    },
    {
      id: '2',
      time: '08-09 AM',
      status: t.canceled.toUpperCase(),
      statusColor: '#111111',
      content: t.pickupCanceledRouteText,
      alertType: 'info',
      alertText: t.noRiskToReputation,
      alertIcon: 'info'
    }
  ]
});

interface CustomCardProps {
  pickup: PickupData;
  isExpanded: boolean;
  onToggle: () => void;
}

function CustomCard({ pickup, isExpanded, onToggle }: CustomCardProps) {
  const { t } = useLanguage();
  
  return (
    <div className="bg-[rgba(0,0,0,0.05)] relative rounded-3xl shrink-0 w-full" data-name="Card">
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-6 items-start justify-start p-[24px] relative w-full">
          {/* Header */}
          <div
            className="box-border content-stretch flex flex-row gap-4 items-center justify-start p-0 relative shrink-0 w-full cursor-pointer"
            onClick={onToggle}
          >
            <div className="basis-0 box-border content-stretch flex flex-col gap-2 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0">
              {pickup.status !== t.completed.toUpperCase() && pickup.status !== t.canceled.toUpperCase() && (
                <div 
                  className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[14px] text-left text-nowrap"
                  style={{ color: pickup.statusColor }}
                >
                  <p className="block leading-[20px] whitespace-pre">{pickup.status}</p>
                </div>
              )}
              
              {/* Title and Time */}
              <div className="box-border content-stretch flex flex-row font-['Inter:Regular',_sans-serif] font-normal gap-1 items-center justify-start leading-[0] not-italic p-0 relative shrink-0 text-left text-nowrap w-full">
                <div className="relative shrink-0 text-[#000000] text-[20px]">
                  <p className="block leading-[26px] text-nowrap whitespace-pre">{t.pickup}</p>
                </div>
                <div className="relative shrink-0 text-[14px] text-[rgba(17,17,17,0.5)]">
                  <p className="block leading-[20px] text-nowrap whitespace-pre">{pickup.time}</p>
                </div>
              </div>
            </div>
            
            <div className="relative shrink-0 size-7">
              {isExpanded ? (
                <ChevronUp className="w-full h-full text-[#2D48BD]" />
              ) : (
                <ChevronDown className="w-full h-full text-[#2D48BD]" />
              )}
            </div>
          </div>
          
          {/* Expandable Content */}
          {isExpanded && pickup.content && (
            <>
              {/* Text Content */}
              <div className="box-border content-stretch flex flex-col font-['Inter:Regular',_sans-serif] font-normal gap-2 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-[#000000] text-left w-full">
                {pickup.content.split('\n').map((line, index) => {
                  // Regex to match numbers with optional units (packages, items, hours, etc.)
                  const boldNumberRegex = new RegExp('(\\d+(?:\\.\\d+)?(?:\\s*(?:packages?|items?|hours?|minutes?|days?|boxes?|units?|pacotes?|itens?|horas?|minutos?|dias?|caixas?|unidades?|paquetes?|artículos?))?)', 'gi');
                  const parts = line.split(boldNumberRegex);
                  
                  return (
                    <div key={index} className="relative shrink-0 text-[16px] w-full">
                      <p className="block leading-[22px] font-[Inter]">
                        {parts.map((part, partIndex) => {
                          // Create a new regex for testing to avoid issues with global flag
                          const testRegex = new RegExp('\\d+(?:\\.\\d+)?(?:\\s*(?:packages?|items?|hours?|minutes?|days?|boxes?|units?|pacotes?|itens?|horas?|minutos?|dias?|caixas?|unidades?|paquetes?|artículos?))?', 'i');
                          if (testRegex.test(part)) {
                            return (
                              <span key={partIndex} className="font-['Inter:Semi_Bold',_sans-serif] font-semibold not-italic">
                                {part}
                              </span>
                            );
                          }
                          return part;
                        })}
                      </p>
                    </div>
                  );
                })}
              </div>
              
              {/* Alert */}
              {pickup.alertType && (
                <div 
                  className={`relative rounded-xl shrink-0 w-full ${
                    pickup.alertType === 'warning' 
                      ? 'bg-[rgba(179,37,37,0.1)]' 
                      : 'bg-[rgba(45,72,189,0.1)]'
                  }`}
                >
                  <div className="flex flex-row items-center overflow-clip relative size-full">
                    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-5 py-4 relative w-full">
                      <div className="relative shrink-0 size-5" data-name="Icons">
                        {pickup.alertType === 'warning' ? (
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                            <g id="Icons">
                              <path
                                d={svgPathsC.p137a3500}
                                fill="#B32525"
                                id="Vector"
                              />
                            </g>
                          </svg>
                        ) : (
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                            <g clipPath="url(#clip0_13_3811)" id="Icons">
                              <g id="Group">
                                <g id="Vector"></g>
                                <g id="Vector_2" opacity="0.87"></g>
                              </g>
                              <path
                                d={svgPathsC.p3084a600}
                                fill="#2D48BD"
                                id="Vector_3"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_13_3811">
                                <rect fill="white" height="20" width="20" />
                              </clipPath>
                            </defs>
                          </svg>
                        )}
                      </div>
                      <div className="basis-0 box-border content-stretch flex flex-col gap-2 grow items-start justify-center min-h-px min-w-px p-0 relative shrink-0">
                        <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#111111] text-[16px] text-left w-full">
                          <p className="block leading-[22px]">{pickup.alertText}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Button */}
              {pickup.hasButton && (
                <div 
                  className={`h-[51px] relative rounded-3xl shrink-0 w-full ${
                    pickup.buttonColor === '#2d48bd' ? 'bg-[#2d48bd]' : 'bg-[rgba(45,72,189,0.25)]'
                  }`}
                >
                  <div className="flex flex-row items-center justify-center relative size-full">
                    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center px-6 py-4 relative size-full">
                      {pickup.buttonColor === '#2d48bd' && (
                        <div className="relative shrink-0 size-6">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                            <g id="Icons">
                              <path
                                d={svgPathsDownload.p14d60300}
                                fill="white"
                                id="Vector"
                              />
                            </g>
                          </svg>
                        </div>
                      )}
                      <div 
                        className={`font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[14px] text-center text-nowrap tracking-[0.32px] ${
                          pickup.buttonColor === '#2d48bd' ? 'text-[#ffffff]' : 'text-[#2d48bd]'
                        }`}
                      >
                        <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">{pickup.buttonText}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export function PickupWidget() {
  const { t } = useLanguage();
  const [selectedState, setSelectedState] = useState<PickupState>('pending');
  const [expandedCards, setExpandedCards] = useState<Set<string>>(new Set(['1'])); // First card expanded by default
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleStateChange = (state: PickupState) => {
    setSelectedState(state);
    // Reset expanded cards and expand first card by default
    setExpandedCards(new Set(['1']));
  };

  const toggleCard = (cardId: string) => {
    const newExpanded = new Set(expandedCards);
    if (newExpanded.has(cardId)) {
      newExpanded.delete(cardId);
    } else {
      newExpanded.add(cardId);
    }
    setExpandedCards(newExpanded);
  };

  const pickupData = getPickupData(t);
  const currentData = pickupData[selectedState];

  return (
    <div className="w-full flex flex-col items-center">
      <div 
        className="w-[360px] max-w-full mx-auto transition-all duration-300 ease-in-out"
        style={{ 
          filter: 'drop-shadow(0 4px 6px rgb(0 0 0 / 0.1))'
        }}
      >
        {/* Widget Container */}
        <div className="bg-[#ffffff] box-border content-stretch flex flex-col items-center justify-start p-0 relative rounded-3xl w-full h-[600px]">
          {/* Header */}
          <div className="relative shrink-0 w-full">
            <div className="flex flex-row items-center overflow-clip relative size-full">
              <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-6 py-5 relative w-full">
                <div className="basis-0 box-border content-stretch flex flex-col gap-2 grow items-start justify-center min-h-px min-w-px p-0 relative shrink-0">
                  <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#111111] text-[20px] text-left w-full">
                    <p className="block leading-[normal]">{t.pickupManagement}</p>
                  </div>
                </div>
                <div className="relative shrink-0 size-7">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
                    <g clipPath="url(#clip0_4_1497)">
                      <path
                        d={svgPathsA.p247421f0}
                        fill="#2D48BD"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_4_1497">
                        <rect fill="white" height="28" width="28" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 360 1">
                <line
                  stroke="black"
                  strokeOpacity="0.1"
                  x2="360"
                  y1="0.5"
                  y2="0.5"
                />
              </svg>
            </div>
          </div>

          {/* Board */}
          <div className="flex-1 w-full relative overflow-hidden">
            <div className="relative w-full h-full">
              <div 
                ref={scrollContainerRef}
                className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-[24px] relative w-full h-full widget-scroll"
              >
                
                {/* Dropdown */}
                <div className="relative rounded-3xl shrink-0 w-full max-w-[312px]">
                  <select
                    value={selectedState}
                    onChange={(e) => handleStateChange(e.target.value as PickupState)}
                    className="box-border content-stretch flex flex-row gap-2 items-center justify-start overflow-clip px-6 py-4 relative w-full bg-transparent border border-[rgba(0,0,0,0.1)] border-solid rounded-3xl font-['Inter:Regular',_sans-serif] font-normal text-[#111111] text-[16px] appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#2D48BD] focus:ring-opacity-50"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%232D48BD' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                      backgroundPosition: 'right 20px center',
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: '20px'
                    }}
                  >
                    <option value="pending">{t.pending}</option>
                    <option value="finished">{t.finished}</option>
                    <option value="canceled">{t.canceled}</option>
                  </select>
                </div>

                {/* Cards Container with Scroll */}
                <div className="space-y-4 w-full">
                  {currentData.map((pickup) => (
                    <CustomCard
                      key={pickup.id}
                      pickup={pickup}
                      isExpanded={expandedCards.has(pickup.id)}
                      onToggle={() => toggleCard(pickup.id)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}