import { useState } from 'react';
import { ChevronLeft } from 'lucide-react';
import Base from '../imports/Base';
import Enviados from '../imports/Enviados';
import Faltantes from '../imports/Faltantes';
import svgPathsBase from '../imports/svg-wckvkle1zf';
import svgPathsEnviados from '../imports/svg-a2mnbu1no2';
import svgPathsFaltantes from '../imports/svg-g53j3frsrh';

type ScreenType = 'base' | 'enviados' | 'faltantes' | 'confirmacao' | 'modificacao' | 'confirmacao-sem-modificacao';

interface NavigablePrototypeProps {
  className?: string;
}

export function NavigablePrototype({ className = "" }: NavigablePrototypeProps) {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('base');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const navigateToScreen = (screen: ScreenType) => {
    if (isTransitioning || screen === currentScreen) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentScreen(screen);
      setIsTransitioning(false);
    }, 150);
  };

  const goBack = () => {
    if (currentScreen === 'enviados' || currentScreen === 'faltantes') {
      navigateToScreen('base');
    }
  };

  // Enhanced Base component with click handlers
  const EnhancedBase = () => {
    return (
      <div 
        className="bg-[#ffffff] box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative rounded-3xl size-full"
        data-name="Base"
      >
        {/* Header */}
        <div className="bg-[#ffe600] h-14 relative shrink-0 w-full" data-name="Header">
          <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
            <div className="box-border content-stretch flex flex-row gap-2 h-14 items-center justify-center p-[24px] relative w-full">
              <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#111111] text-[20px] text-center text-nowrap">
                <p className="block leading-[26px] whitespace-pre">Pickup details</p>
              </div>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="basis-0 bg-[#ffffff] grow min-h-px min-w-px relative shrink-0 w-full" data-name="Body">
          <div className="overflow-clip relative size-full">
            <div className="box-border content-stretch flex flex-col gap-6 items-start justify-start p-[20px] relative size-full">
              
              {/* Title */}
              <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-left w-full" data-name="Title">
                <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold relative shrink-0 text-[#000000] text-[24px] w-full">
                  <p className="block leading-[normal]">Review and confirm</p>
                </div>
                <div className="font-['Inter:Regular',_sans-serif] font-normal relative shrink-0 text-[14px] text-[rgba(17,17,17,0.5)] w-full">
                  <p className="block leading-[20px]">09:40 AM - April 12</p>
                </div>
              </div>

              {/* 185 packages - Clickable */}
              <div 
                className="bg-[rgba(0,0,0,0.05)] relative rounded-3xl shrink-0 w-full cursor-pointer hover:bg-[rgba(0,0,0,0.08)] transition-colors duration-200" 
                data-name="List"
                onClick={() => navigateToScreen('enviados')}
              >
                <div className="flex flex-row items-center overflow-clip relative size-full">
                  <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-[20px] relative w-full">
                    <div className="basis-0 box-border content-stretch flex flex-col gap-2 grow items-start justify-center min-h-px min-w-px p-0 relative shrink-0" data-name="Text">
                      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#111111] text-[18px] text-left w-full">
                        <p className="block leading-[24px]">185 packages</p>
                      </div>
                    </div>
                    <div className="relative shrink-0 size-6" data-name="Icons">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                        <g clipPath="url(#clip0_5_633)" id="Icons">
                          <g id="Vector" opacity="0.87"></g>
                          <path d={svgPathsBase.p35ac2d80} fill="#2D48BD" id="Vector_2" />
                        </g>
                        <defs>
                          <clipPath id="clip0_5_633">
                            <rect fill="white" height="24" width="24" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* 7 packages pending - Clickable */}
              <div className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative rounded-3xl shrink-0 w-full" data-name="Box">
                <div 
                  className="bg-[rgba(0,0,0,0.05)] relative shrink-0 w-full cursor-pointer hover:bg-[rgba(0,0,0,0.08)] transition-colors duration-200" 
                  data-name="List"
                  onClick={() => navigateToScreen('faltantes')}
                >
                  <div className="flex flex-row items-center overflow-clip relative size-full">
                    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-[20px] relative w-full">
                      <div className="basis-0 box-border content-stretch flex flex-col gap-2 grow items-start justify-center min-h-px min-w-px p-0 relative shrink-0" data-name="Text">
                        <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#111111] text-[18px] text-left w-full">
                          <p className="block leading-[24px]">7 packages pending</p>
                        </div>
                      </div>
                      <div className="relative shrink-0 size-6" data-name="Icons">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                          <g clipPath="url(#clip0_5_633)" id="Icons">
                            <g id="Vector" opacity="0.87"></g>
                            <path d={svgPathsBase.p35ac2d80} fill="#2D48BD" id="Vector_2" />
                          </g>
                          <defs>
                            <clipPath id="clip0_5_633">
                              <rect fill="white" height="24" width="24" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Reputation at risk message */}
                <div className="bg-[rgba(0,0,0,0.05)] relative shrink-0 w-full" data-name="Message">
                  <div className="relative size-full">
                    <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start pb-4 pt-0 px-5 relative w-full">
                      <div className="bg-[rgba(179,37,37,0.1)] relative rounded-xl shrink-0 w-full" data-name="List">
                        <div className="flex flex-row items-center overflow-clip relative size-full">
                          <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-5 py-4 relative w-full">
                            <div className="relative shrink-0 size-5" data-name="Icons">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                                <g id="Icons">
                                  <path d={svgPathsBase.p137a3500} fill="#B32525" id="Vector" />
                                </g>
                              </svg>
                            </div>
                            <div className="basis-0 box-border content-stretch flex flex-col gap-2 grow items-start justify-center min-h-px min-w-px p-0 relative shrink-0" data-name="Text">
                              <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#111111] text-[16px] text-left w-full">
                                <p className="block leading-[22px]">Reputation at risk</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Area */}
        <div className="relative shrink-0 w-full" data-name="Action area">
          <div className="relative size-full">
            <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-[20px] relative w-full">
              <div className="bg-[#2d48bd] relative rounded-3xl shrink-0 w-full" data-name="Button">
                <div className="flex flex-row items-center justify-center relative size-full">
                  <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center px-6 py-4 relative w-full">
                    <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[18px] text-center text-nowrap tracking-[0.36px]">
                      <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">Confirm</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[rgba(45,72,189,0.25)] relative rounded-3xl shrink-0 w-full" data-name="Button">
                <div className="flex flex-row items-center justify-center relative size-full">
                  <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center px-6 py-4 relative w-full">
                    <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#2d48bd] text-[18px] text-center text-nowrap tracking-[0.36px]">
                      <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">Change</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Enhanced Enviados component with back button
  const EnhancedEnviados = () => {
    return (
      <div className="bg-[#ffffff] box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative rounded-3xl size-full" data-name="Enviados">
        {/* Header with back button */}
        <div className="bg-[#ffe600] h-14 relative shrink-0 w-full" data-name="Header">
          <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
            <div className="box-border content-stretch flex flex-row gap-2 h-14 items-center justify-between p-[24px] relative w-full">
              <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#111111] text-[20px] text-center text-nowrap">
                <p className="block leading-[26px] whitespace-pre">Shipped packages</p>
              </div>
              <button 
                onClick={goBack}
                className="relative shrink-0 size-6 cursor-pointer hover:opacity-70 transition-opacity duration-200" 
                data-name="Icons"
              >
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <g clipPath="url(#clip0_5_811)" id="Icons">
                    <g id="Vector"></g>
                    <g id="Group">
                      <path d={svgPathsEnviados.p326f7500} fill="#111111" id="Vector_2" />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_5_811">
                      <rect fill="white" height="24" width="24" />
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Body - resto do componente Enviados */}
        <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Body">
          <div className="overflow-clip relative size-full">
            <div className="box-border content-stretch flex flex-col gap-6 items-start justify-start p-[20px] relative size-full">
              <div className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative rounded-3xl shrink-0 w-full" data-name="Box">
                <div className="bg-[rgba(0,0,0,0.05)] relative shrink-0 w-full" data-name="List">
                  <div className="flex flex-row items-center overflow-clip relative size-full">
                    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-[20px] relative w-full">
                      <div className="basis-0 box-border content-stretch flex flex-col gap-2 grow items-start justify-center min-h-px min-w-px p-0 relative shrink-0" data-name="Text">
                        <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#111111] text-[18px] text-left w-full">
                          <p className="block leading-[24px]">185 packages</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="h-0 relative shrink-0 w-full">
                  <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 320 1">
                      <line id="Line 1" stroke="black" strokeOpacity="0.05" x2="320" y1="0.5" y2="0.5" />
                    </svg>
                  </div>
                </div>
                
                <div className="bg-[rgba(0,0,0,0.05)] relative shrink-0 w-full" data-name="Message">
                  <div className="relative size-full">
                    <div className="box-border content-stretch flex flex-row gap-6 items-start justify-start px-5 py-4 relative w-full">
                      <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0" data-name="Ship ID col">
                        <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] min-w-full not-italic relative shrink-0 text-[14px] text-[rgba(17,17,17,0.5)] text-left" style={{ width: "min-content" }}>
                          <p className="block leading-[20px]">Ship ID</p>
                        </div>
                        <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative shrink-0 font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic text-[#000000] text-[14px] text-left" data-name="List">
                          {Array.from({ length: 15 }, (_, i) => (
                            <div key={i} className="relative shrink-0 w-full">
                              <p className="block leading-[20px]">#{200003123250 + i}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Enhanced Faltantes component with back button
  const EnhancedFaltantes = () => {
    return (
      <div className="bg-[#ffffff] box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative rounded-3xl size-full" data-name="Faltantes">
        {/* Header with back button */}
        <div className="bg-[#ffe600] h-14 relative shrink-0 w-full" data-name="Header">
          <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
            <div className="box-border content-stretch flex flex-row gap-2 h-14 items-center justify-between p-[24px] relative w-full">
              <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#111111] text-[20px] text-center text-nowrap">
                <p className="block leading-[26px] whitespace-pre">Pending packages</p>
              </div>
              <button 
                onClick={goBack}
                className="relative shrink-0 size-6 cursor-pointer hover:opacity-70 transition-opacity duration-200" 
                data-name="Icons"
              >
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <g clipPath="url(#clip0_5_811)" id="Icons">
                    <g id="Vector"></g>
                    <g id="Group">
                      <path d={svgPathsFaltantes.p326f7500} fill="#111111" id="Vector_2" />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_5_811">
                      <rect fill="white" height="24" width="24" />
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Body">
          <div className="overflow-clip relative size-full">
            <div className="box-border content-stretch flex flex-col gap-6 items-start justify-start p-[20px] relative size-full">
              <div className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative rounded-3xl shrink-0 w-full" data-name="Box">
                <div className="bg-[rgba(0,0,0,0.05)] relative shrink-0 w-full" data-name="List">
                  <div className="flex flex-row items-center overflow-clip relative size-full">
                    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-[20px] relative w-full">
                      <div className="basis-0 box-border content-stretch flex flex-col gap-2 grow items-start justify-center min-h-px min-w-px p-0 relative shrink-0" data-name="Text">
                        <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#111111] text-[18px] text-left w-full">
                          <p className="block leading-[24px]">7 packages</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="h-0 relative shrink-0 w-full">
                  <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 320 1">
                      <line id="Line 1" stroke="black" strokeOpacity="0.05" x2="320" y1="0.5" y2="0.5" />
                    </svg>
                  </div>
                </div>
                
                <div className="bg-[rgba(0,0,0,0.05)] relative shrink-0 w-full" data-name="Message">
                  <div className="relative size-full">
                    <div className="box-border content-stretch flex flex-row gap-6 items-start justify-start px-5 py-4 relative w-full">
                      <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0" data-name="Ship ID col">
                        <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] min-w-full not-italic relative shrink-0 text-[14px] text-[rgba(17,17,17,0.5)] text-left" style={{ width: "min-content" }}>
                          <p className="block leading-[20px]">Ship ID</p>
                        </div>
                        <div className="box-border content-stretch flex flex-col font-['Inter:Regular',_sans-serif] font-normal gap-4 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-[#000000] text-[14px] text-left" data-name="List">
                          {['#200003123210', '#200003123212', '#200003123215', '#200003123217', '#200003123221', '#200003123222', '#200003123225'].map((id, index) => (
                            <div key={index} className="relative shrink-0 w-full">
                              <p className="block leading-[20px]">{id}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0" data-name="Reason col">
                        <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] min-w-full not-italic relative shrink-0 text-[14px] text-[rgba(17,17,17,0.5)] text-left" style={{ width: "min-content" }}>
                          <p className="block leading-[20px]">Reason</p>
                        </div>
                        <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative shrink-0" data-name="List">
                          {Array.from({ length: 4 }, (_, i) => (
                            <div key={i} className="box-border content-stretch flex flex-row gap-1 items-end justify-start p-0 relative shrink-0 w-full" data-name="Icon with label">
                              <div className="relative shrink-0 size-4" data-name="Icons">
                                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                                  <g id="Icons">
                                    <path d={svgPathsFaltantes.p1f8bbcc0} fill="#B32525" id="Vector" />
                                  </g>
                                </svg>
                              </div>
                              <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#111111] text-[14px] text-left text-nowrap">
                                <p className="block leading-[20px] whitespace-pre">Not ready</p>
                              </div>
                            </div>
                          ))}
                          {Array.from({ length: 2 }, (_, i) => (
                            <div key={i + 4} className="box-border content-stretch flex flex-row gap-1 items-end justify-start p-0 relative shrink-0 w-full" data-name="Icon with label">
                              <div className="relative shrink-0 size-4" data-name="Icons">
                                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                                  <g id="Icons">
                                    <path d={svgPathsFaltantes.p1f8bbcc0} fill="#B32525" id="Vector" />
                                  </g>
                                </svg>
                              </div>
                              <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#111111] text-[14px] text-left text-nowrap">
                                <p className="block leading-[20px] whitespace-pre">Poor condition</p>
                              </div>
                            </div>
                          ))}
                          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#000000] text-[14px] text-left w-full">
                            <p className="block leading-[20px]">Vehicle full</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Area */}
        <div className="relative shrink-0 w-full" data-name="Action area">
          <div className="relative size-full">
            <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-[20px] relative w-full">
              <div className="bg-[rgba(179,37,37,0.1)] relative rounded-xl shrink-0 w-full" data-name="List">
                <div className="flex flex-row items-center overflow-clip relative size-full">
                  <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-5 py-4 relative w-full">
                    <div className="relative shrink-0 size-5" data-name="Icons">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                        <g id="Icons">
                          <path d={svgPathsFaltantes.p137a3500} fill="#B32525" id="Vector" />
                        </g>
                      </svg>
                    </div>
                    <div className="basis-0 box-border content-stretch flex flex-col gap-2 grow items-start justify-center min-h-px min-w-px p-0 relative shrink-0" data-name="Text">
                      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#111111] text-[16px] text-left w-full">
                        <p className="block leading-[22px]">Reputation at risk</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[rgba(45,72,189,0.25)] relative rounded-3xl shrink-0 w-full" data-name="Button">
                <div className="flex flex-row items-center justify-center relative size-full">
                  <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center px-6 py-4 relative w-full">
                    <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#2d48bd] text-[18px] text-center text-nowrap tracking-[0.36px]">
                      <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">Change</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderCurrentScreen = () => {
    switch (currentScreen) {
      case 'base':
        return <EnhancedBase />;
      case 'enviados':
        return <EnhancedEnviados />;
      case 'faltantes':
        return <EnhancedFaltantes />;
      default:
        return <EnhancedBase />;
    }
  };

  return (
    <div className={`relative w-full h-full ${className}`}>
      <div 
        className={`transition-opacity duration-150 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
        style={{ width: '360px', height: '600px' }}
      >
        {renderCurrentScreen()}
      </div>
      
      {/* Navigation indicator */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2 opacity-50">
        <div className={`w-2 h-2 rounded-full transition-colors duration-200 ${currentScreen === 'base' ? 'bg-[#2d48bd]' : 'bg-gray-300'}`} />
        <div className={`w-2 h-2 rounded-full transition-colors duration-200 ${currentScreen === 'enviados' ? 'bg-[#2d48bd]' : 'bg-gray-300'}`} />
        <div className={`w-2 h-2 rounded-full transition-colors duration-200 ${currentScreen === 'faltantes' ? 'bg-[#2d48bd]' : 'bg-gray-300'}`} />
      </div>
    </div>
  );
}