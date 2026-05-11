import { useState } from 'react';
import Base from '../imports/Base-5-1350';
import Enviados from '../imports/Enviados-5-1504';
import Faltantes from '../imports/Faltantes-13-3512';
import Confirmar from '../imports/Confirmar-13-3241';
import svgPathsBase from '../imports/svg-z3lrr0l6d3';
import svgPathsEnviados from '../imports/svg-7mycvkczh6';
import svgPathsFaltantes from '../imports/svg-jf9suoh31a';
import svgPathsConfirmar from '../imports/svg-juzgyc1dn4';
import { useLanguage } from '../contexts/LanguageContext';

type ScreenType = 'base' | 'enviados' | 'faltantes' | 'confirmation';

interface HandshakePrototypeProps {
  className?: string;
}

export function HandshakePrototype({ className = "" }: HandshakePrototypeProps) {
  const { t, language } = useLanguage();
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('base');

  const localeMap: Record<string, string> = {
    pt: 'pt-BR',
    en: 'en-US',
    es: 'es-MX'
  };
  const pickupDate = new Date(2025, 3, 12); // April 12, 2025
  const formattedDate = new Intl.DateTimeFormat(localeMap[language], {
    month: 'long',
    day: 'numeric'
  }).format(pickupDate);
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
    } else if (currentScreen === 'confirmation') {
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
              <div className="font-['Inter',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#111111] text-[20px] text-center text-nowrap">
                <p className="block leading-[26px] whitespace-pre">{t.pickupDetails}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Screen */}
        <div className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px overflow-clip p-0 relative shrink-0 w-full" data-name="Screen">
          {/* Body */}
          <div className="basis-0 bg-[#ffffff] grow min-h-px min-w-px relative shrink-0 w-full" data-name="Body">
            <div className="overflow-clip relative size-full">
              <div className="box-border content-stretch flex flex-col gap-6 items-start justify-start p-[20px] relative size-full">
                
                {/* Title */}
                <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-left w-full" data-name="Title">
                  <div className="font-['Inter',_sans-serif] font-semibold relative shrink-0 text-[#000000] text-[24px] w-full">
                    <p className="block leading-[normal]">{t.reviewAndConfirm}</p>
                  </div>
                  <div className="font-['Inter',_sans-serif] font-normal relative shrink-0 text-[14px] text-[rgba(17,17,17,0.5)] w-full">
                    <p className="block leading-[20px]">09:40 AM - {formattedDate}</p>
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
                        <div className="font-['Inter',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#111111] text-[18px] text-left w-full">
                          <p className="block leading-[24px]">{t.packagesCount185}</p>
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
                          <div className="font-['Inter',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#111111] text-[18px] text-left w-full">
                            <p className="block leading-[24px]">{t.packagesPending7}</p>
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
                                <div className="font-['Inter',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#111111] text-[16px] text-left w-full">
                                  <p className="block leading-[22px]">{t.reputationAtRisk}</p>
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
        </div>

        {/* Action Area */}
        <div className="relative shrink-0 w-full" data-name="Action area">
          <div className="relative size-full">
            <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-[20px] relative w-full">
              <button 
                onClick={() => navigateToScreen('confirmation')}
                className="bg-[#2d48bd] relative rounded-3xl shrink-0 w-full cursor-pointer hover:bg-[#2640a3] transition-colors duration-200" 
                data-name="Button"
              >
                <div className="flex flex-row items-center justify-center relative size-full">
                  <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center px-6 py-4 relative w-full">
                    <div className="font-['Inter',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[18px] text-center text-nowrap tracking-[0.36px]">
                      <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">{t.confirm}</p>
                    </div>
                  </div>
                </div>
              </button>
              <div className="bg-[rgba(45,72,189,0.25)] relative rounded-3xl shrink-0 w-full" data-name="Button">
                <div className="flex flex-row items-center justify-center relative size-full">
                  <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center px-6 py-4 relative w-full">
                    <div className="font-['Inter',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#2d48bd] text-[18px] text-center text-nowrap tracking-[0.36px]">
                      <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">{t.change}</p>
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
        {/* Fixed Header with back button on right */}
        <div className="bg-[#ffe600] h-14 relative shrink-0 w-full sticky top-0 z-20" data-name="Header">
          <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
            <div className="box-border content-stretch flex flex-row gap-2 h-14 items-center justify-between p-[24px] relative w-full">
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
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="font-['Inter',_sans-serif] font-normal leading-[0] not-italic text-[#111111] text-[20px] text-center">
                  <p className="block leading-[26px] px-2">{t.shippedPackages}</p>
                </div>
              </div>
              <div className="relative shrink-0 size-6"></div>
            </div>
          </div>
        </div>

        {/* Scrollable Screen */}
        <div className="flex-1 box-border content-stretch flex flex-col items-start justify-start overflow-hidden p-0 relative w-full" data-name="Screen">
          {/* Body with scroll */}
          <div className="flex-1 relative w-full overflow-hidden" data-name="Body">
            <div className="absolute inset-0 overflow-hidden">
              <div className="box-border content-stretch flex flex-col items-start justify-start p-[20px] h-full overflow-y-auto widget-scroll">
                <div className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative rounded-3xl w-full flex-1" data-name="Box">
                  <div className="bg-[rgba(0,0,0,0.05)] relative w-full" data-name="List">
                    <div className="flex flex-row items-center overflow-clip relative size-full">
                      <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-[20px] relative w-full">
                        <div className="basis-0 box-border content-stretch flex flex-col gap-2 grow items-start justify-center min-h-px min-w-px p-0 relative shrink-0" data-name="Text">
                          <div className="font-['Inter',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#111111] text-[18px] text-left w-full">
                            <p className="block leading-[24px]">{t.packagesCount185}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="h-0 relative w-full">
                    <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 320 1">
                        <line id="Line 1" stroke="black" strokeOpacity="0.05" x2="320" y1="0.5" y2="0.5" />
                      </svg>
                    </div>
                  </div>
                  
                  <div className="bg-[rgba(0,0,0,0.05)] relative flex-1 w-full" data-name="Message">
                    <div className="relative h-full">
                      <div className="box-border content-stretch flex flex-row gap-6 items-start justify-start px-5 py-4 relative w-full h-full">
                        <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0" data-name="Ship ID col">
                          <div className="font-['Inter',_sans-serif] font-normal leading-[0] min-w-full not-italic relative shrink-0 text-[14px] text-[rgba(17,17,17,0.5)] text-left" style={{ width: "min-content" }}>
                            <p className="block leading-[20px]">{t.shipId}</p>
                          </div>
                          <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative shrink-0 font-['Inter',_sans-serif] font-normal leading-[0] not-italic text-[#000000] text-[14px] text-left" data-name="List">
                            {Array.from({ length: 50 }, (_, i) => (
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
      </div>
    );
  };

  // Enhanced Faltantes component with back button - using correct Figma model
  const EnhancedFaltantes = () => {
    return (
      <div className="bg-[#ffffff] box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative rounded-3xl size-full" data-name="Faltantes">
        {/* Screen */}
        <div className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px overflow-clip p-0 relative shrink-0 w-full" data-name="Screen">
          {/* Header */}
          <div className="bg-[#ffe600] h-14 relative shrink-0 w-full" data-name="Header">
            <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
              <div className="box-border content-stretch flex flex-row gap-2 h-14 items-center justify-between p-[24px] relative w-full">
                <button 
                  onClick={goBack}
                  className="relative shrink-0 size-6 cursor-pointer hover:opacity-70 transition-opacity duration-200" 
                  data-name="Icons"
                >
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                    <g clipPath="url(#clip0_13_3519)" id="Icons">
                      <g id="Vector"></g>
                      <g id="Group">
                        <path d={svgPathsFaltantes.p326f7500} fill="#111111" id="Vector_2" />
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_13_3519">
                        <rect fill="white" height="24" width="24" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="font-['Inter',_sans-serif] font-normal leading-[0] not-italic text-[#111111] text-[20px] text-center">
                    <p className="block leading-[26px] px-2">{t.pendingPackages}</p>
                  </div>
                </div>
                <div className="relative shrink-0 size-6"></div>
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Body">
            <div className="overflow-clip relative size-full">
              <div className="box-border content-stretch flex flex-col gap-6 items-start justify-start p-[20px] relative size-full">
                {/* Box */}
                <div className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative rounded-3xl shrink-0 w-full" data-name="Box">
                  {/* List */}
                  <div className="bg-[rgba(0,0,0,0.05)] relative shrink-0 w-full" data-name="List">
                    <div className="flex flex-row items-center overflow-clip relative size-full">
                      <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-[20px] relative w-full">
                        <div className="basis-0 box-border content-stretch flex flex-col gap-2 grow items-start justify-center min-h-px min-w-px p-0 relative shrink-0" data-name="Text">
                          <div className="font-['Inter',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#111111] text-[18px] text-left w-full">
                            <p className="block leading-[24px]">{t.packages7}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Divider */}
                  <div className="h-0 relative shrink-0 w-full">
                    <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 320 1">
                        <line id="Line 1" stroke="black" strokeOpacity="0.05" x2="320" y1="0.5" y2="0.5" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Message */}
                  <div className="bg-[rgba(0,0,0,0.05)] relative shrink-0 w-full" data-name="Message">
                    <div className="relative size-full">
                      <div className="box-border content-stretch flex flex-row gap-6 items-start justify-start px-5 py-4 relative w-full">
                        {/* Ship ID col */}
                        <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0" data-name="Ship ID col">
                          <div className="font-['Inter',_sans-serif] font-normal leading-[0] min-w-full not-italic relative shrink-0 text-[14px] text-[rgba(17,17,17,0.5)] text-left" style={{ width: "min-content" }}>
                            <p className="block leading-[20px]">{t.shipId}</p>
                          </div>
                          <div className="box-border content-stretch flex flex-col font-['Inter',_sans-serif] font-normal gap-4 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-[#000000] text-[14px] text-left" data-name="List">
                            <div className="relative shrink-0 w-full">
                              <p className="block leading-[20px]">#200003123210</p>
                            </div>
                            <div className="relative shrink-0 w-full">
                              <p className="block leading-[20px]">#200003123212</p>
                            </div>
                            <div className="relative shrink-0 w-full">
                              <p className="block leading-[20px]">#200003123215</p>
                            </div>
                            <div className="relative shrink-0 w-full">
                              <p className="block leading-[20px]">#200003123217</p>
                            </div>
                            <div className="relative shrink-0 w-full">
                              <p className="block leading-[20px]">#200003123221</p>
                            </div>
                            <div className="relative shrink-0 w-full">
                              <p className="block leading-[20px]">#200003123222</p>
                            </div>
                            <div className="relative shrink-0 w-full">
                              <p className="block leading-[20px]">#200003123225</p>
                            </div>
                          </div>
                        </div>
                        
                        {/* Reason col */}
                        <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0" data-name="Reason col">
                          <div className="font-['Inter',_sans-serif] font-normal leading-[0] min-w-full not-italic relative shrink-0 text-[14px] text-[rgba(17,17,17,0.5)] text-left" style={{ width: "min-content" }}>
                            <p className="block leading-[20px]">{t.reason}</p>
                          </div>
                          <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative shrink-0" data-name="List">
                            {/* Not ready items */}
                            {Array.from({ length: 4 }, (_, i) => (
                              <div key={i} className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0 w-full" data-name="Icon with label">
                                <div className="relative shrink-0 size-4" data-name="Icons">
                                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                                    <g id="Icons">
                                      <path d={svgPathsFaltantes.p1f8bbcc0} fill="#B32525" id="Vector" />
                                    </g>
                                  </svg>
                                </div>
                                <div className="font-['Inter',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#111111] text-[14px] text-left text-nowrap">
                                  <p className="block leading-[20px] whitespace-pre">{t.notReady}</p>
                                </div>
                              </div>
                            ))}
                            {/* Poor condition items */}
                            {Array.from({ length: 2 }, (_, i) => (
                              <div key={i} className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0 w-full" data-name="Icon with label">
                                <div className="relative shrink-0 size-4" data-name="Icons">
                                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                                    <g id="Icons">
                                      <path d={svgPathsFaltantes.p1f8bbcc0} fill="#B32525" id="Vector" />
                                    </g>
                                  </svg>
                                </div>
                                <div className="font-['Inter',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#111111] text-[14px] text-left text-nowrap">
                                  <p className="block leading-[20px] whitespace-pre">{t.poorCondition}</p>
                                </div>
                              </div>
                            ))}
                            {/* Vehicle full */}
                            <div className="font-['Inter',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#000000] text-[14px] text-left w-full">
                              <p className="block leading-[20px]">{t.vehicleFull}</p>
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
              {/* Reputation at risk alert */}
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
                      <div className="font-['Inter',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#111111] text-[16px] text-left w-full">
                        <p className="block leading-[22px]">{t.reputationAtRisk}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Change button */}
              <div className="bg-[rgba(45,72,189,0.25)] relative rounded-3xl shrink-0 w-full" data-name="Button">
                <div className="flex flex-row items-center justify-center relative size-full">
                  <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center px-6 py-4 relative w-full">
                    <div className="font-['Inter',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#2d48bd] text-[18px] text-center text-nowrap tracking-[0.36px]">
                      <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">{t.change}</p>
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

  // Enhanced Confirmation component - using correct Figma model
  const EnhancedConfirmation = () => {
    return (
      <div className="bg-[#ffffff] box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative rounded-3xl size-full" data-name="Confirmar">
        {/* Screen */}
        <div className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px overflow-clip p-0 relative shrink-0 w-full" data-name="Screen">
          {/* Body */}
          <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Body">
            <div className="flex flex-col items-center justify-center overflow-clip relative size-full">
              <div className="box-border content-stretch flex flex-col gap-6 items-center justify-center p-[20px] relative size-full">
                {/* Frame14 - Success icon container */}
                <div className="bg-[rgba(108,148,52,0.1)] overflow-clip relative rounded-[100px] shrink-0 size-20">
                  <div className="absolute left-3 size-14 top-3" data-name="Icons">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 56">
                      <g clipPath="url(#clip0_13_3249)" id="Icons">
                        <g id="Vector"></g>
                        <path d={svgPathsConfirmar.p24e38f80} fill="#6C9434" id="Vector_2" />
                      </g>
                      <defs>
                        <clipPath id="clip0_13_3249">
                          <rect fill="white" height="56" width="56" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>

                {/* Frame15 - Text content */}
                <div className="box-border content-stretch flex flex-col gap-2 items-center justify-start leading-[0] not-italic p-0 relative shrink-0 text-left text-nowrap">
                  <div className="font-['Inter',_sans-serif] font-semibold relative shrink-0 text-[#111111] text-[24px]">
                    <p className="block leading-[normal] text-nowrap whitespace-pre">{t.packageSuccessfullyConfirmed}</p>
                  </div>
                  <div className="font-['Inter',_sans-serif] font-normal relative shrink-0 text-[#000000] text-[18px]">
                    <p className="block leading-[24px] text-nowrap whitespace-pre">{t.packagesConfirmedDriverNotified}</p>
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
              {/* Close Button */}
              <button 
                onClick={goBack}
                className="bg-[rgba(45,72,189,0.25)] relative rounded-3xl shrink-0 w-full cursor-pointer hover:bg-[rgba(45,72,189,0.35)] transition-colors duration-200" 
                data-name="Button"
              >
                <div className="flex flex-row items-center justify-center relative size-full">
                  <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center px-6 py-4 relative w-full">
                    <div className="font-['Inter',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#2d48bd] text-[18px] text-center text-nowrap tracking-[0.36px]">
                      <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">{t.close}</p>
                    </div>
                  </div>
                </div>
              </button>
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
      case 'confirmation':
        return <EnhancedConfirmation />;
      default:
        return <EnhancedBase />;
    }
  };

  return (
    <div 
      className={`w-[360px] max-w-full h-[600px] mx-auto transition-all duration-150 ease-in-out shadow-[0_8px_30px_rgba(0,0,0,0.12)] rounded-3xl overflow-hidden ${isTransitioning ? 'opacity-50' : 'opacity-100'} ${className}`}
    >
      {renderCurrentScreen()}
    </div>
  );
}