import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import svgPaths from "../imports/svg-sb3did1lhg";

function Icons() {
  return (
    <div className="relative shrink-0 size-6" data-name="Icons">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g clipPath="url(#clip0_15_476)" id="Icons">
          <g id="Vector"></g>
          <g id="Group">
            <path
              d={svgPaths.p326f7500}
              fill="var(--fill-0, white)"
              id="Vector_2"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_15_476">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icons1() {
  return (
    <div className="relative shrink-0 size-6" data-name="Icons">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g clipPath="url(#clip0_15_481)" id="Icons">
          <g id="Vector"></g>
          <path
            d={svgPaths.p3fdba000}
            fill="var(--fill-0, white)"
            id="Vector_2"
          />
        </g>
        <defs>
          <clipPath id="clip0_15_481">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export function RiskPrototype() {
  const { t } = useLanguage();

  return (
    <div className="w-[360px] mx-auto" style={{ height: '600px' }}>
      <div className="bg-white rounded-3xl shadow-lg overflow-hidden h-full">
        <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
          {/* Header */}
          <div className="bg-[#00544d] h-14 relative shrink-0 w-full">
            <div className="flex flex-row items-center justify-between overflow-clip relative size-full">
              <div className="box-border content-stretch flex flex-row gap-2 h-14 items-center justify-between p-[24px] relative w-full">
                <Icons />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic text-[#ffffff] text-[20px] text-center text-nowrap">
                    <p className="block leading-[26px] whitespace-pre">{t.riskHazards}</p>
                  </div>
                </div>
                <Icons1 />
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="basis-0 bg-[#ffffff] grow min-h-px min-w-px relative shrink-0 w-full">
            <div className="overflow-clip relative size-full">
              <div className="box-border content-stretch flex flex-col gap-6 items-start justify-start p-[20px] relative size-full">
                
                {/* Table Header */}
                <div className="relative rounded-3xl shrink-0 w-full">
                  <div className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-3xl" />
                  <div className="flex flex-row items-center relative size-full">
                    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-5 py-3 relative w-full">
                      <div className="basis-0 box-border content-stretch flex flex-row gap-6 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0">
                        
                        {/* Tipo Perigo */}
                        <div className="box-border content-stretch flex flex-col items-start justify-center leading-[0] not-italic p-0 relative shrink-0 text-[14px] text-[rgba(17,17,17,0.5)] text-left w-16">
                          <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold relative shrink-0 w-full">
                            <p className="block leading-[20px]">{t.riskHazardType.split('\n')[0]}</p>
                          </div>
                          <div className="font-['Inter:Regular',_sans-serif] font-normal relative shrink-0 w-full">
                            <p className="block leading-[20px]">{t.riskHazardType.split('\n')[1]}</p>
                          </div>
                        </div>

                        {/* HRN Atual */}
                        <div className="box-border content-stretch flex flex-col items-start justify-center leading-[0] not-italic p-0 relative shrink-0 text-[14px] text-[rgba(17,17,17,0.5)] text-left w-12">
                          <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold relative shrink-0 w-full">
                            <p className="block leading-[20px]">{t.riskCurrentHRN.split('\n')[0]}</p>
                          </div>
                          <div className="font-['Inter:Regular',_sans-serif] font-normal relative shrink-0 w-full">
                            <p className="block leading-[20px]">{t.riskCurrentHRN.split('\n')[1]}</p>
                          </div>
                        </div>

                        {/* HRN Meta */}
                        <div className="box-border content-stretch flex flex-col items-start justify-center leading-[0] not-italic p-0 relative shrink-0 text-[14px] text-[rgba(17,17,17,0.5)] text-left w-12">
                          <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold relative shrink-0 w-full">
                            <p className="block leading-[20px]">{t.riskTargetHRN.split('\n')[0]}</p>
                          </div>
                          <div className="font-['Inter:Regular',_sans-serif] font-normal relative shrink-0 w-full">
                            <p className="block leading-[20px]">{t.riskTargetHRN.split('\n')[1]}</p>
                          </div>
                        </div>

                        {/* Status Perigo */}
                        <div className="basis-0 box-border content-stretch flex flex-col grow items-start justify-center leading-[0] min-h-px min-w-px not-italic p-0 relative shrink-0 text-[14px] text-[rgba(17,17,17,0.5)] text-left">
                          <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold relative shrink-0 w-full">
                            <p className="block leading-[20px]">{t.riskHazardStatus.split('\n')[0]}</p>
                          </div>
                          <div className="font-['Inter:Regular',_sans-serif] font-normal relative shrink-0 w-full">
                            <p className="block leading-[20px]">{t.riskHazardStatus.split('\n')[1]}</p>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>

                {/* Risk Items */}
                <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative shrink-0 w-full">
                  
                  {/* Risk Item 1 - Mecânico */}
                  <div className="bg-[rgba(0,0,0,0.05)] relative rounded-3xl shrink-0 w-full">
                    <div className="flex flex-row items-center overflow-clip relative size-full">
                      <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-5 py-3 relative w-full">
                        <div className="basis-0 box-border content-stretch flex flex-row gap-6 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0">
                          
                          <div className="box-border content-stretch flex flex-col gap-2 items-start justify-center p-0 relative shrink-0">
                            <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#111111] text-[14px] text-left w-16">
                              <p className="block leading-[20px]">{t.riskMechanical}</p>
                            </div>
                          </div>

                          <div className="box-border content-stretch flex flex-col gap-2 items-start justify-center p-0 relative shrink-0 text-[14px] text-left w-12">
                            <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#111111] w-full">
                              <p className="block leading-[20px]">505</p>
                            </div>
                          </div>

                          <div className="box-border content-stretch flex flex-col gap-2 items-start justify-center p-0 relative shrink-0 text-[14px] text-left w-12">
                            <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#111111] w-full">
                              <p className="block leading-[20px]">15</p>
                            </div>
                          </div>

                          <div className="basis-0 box-border content-stretch flex flex-col gap-2 grow items-start justify-center min-h-px min-w-px p-0 relative shrink-0">
                            <div className="relative shrink-0 size-6">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                                <g id="Error outline">
                                  <path d={svgPaths.p5671dc0} fill="var(--fill-0, #B32525)" id="Vector" />
                                </g>
                              </svg>
                            </div>
                          </div>

                        </div>
                        <div className="relative shrink-0 size-4">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                            <g clipPath="url(#clip0_15_472)" id="Icons">
                              <g id="Vector" opacity="0.87"></g>
                              <path d={svgPaths.p9082300} fill="var(--fill-0, #008F83)" id="Vector_2" />
                            </g>
                            <defs>
                              <clipPath id="clip0_15_472">
                                <rect fill="white" height="16" width="16" />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Risk Item 2 - Elétrico */}
                  <div className="bg-[rgba(0,0,0,0.05)] relative rounded-3xl shrink-0 w-full">
                    <div className="flex flex-row items-center overflow-clip relative size-full">
                      <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-5 py-3 relative w-full">
                        <div className="basis-0 box-border content-stretch flex flex-row gap-6 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0">
                          
                          <div className="box-border content-stretch flex flex-col gap-2 items-start justify-center p-0 relative shrink-0">
                            <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#111111] text-[14px] text-left w-16">
                              <p className="block leading-[20px]">{t.riskElectrical}</p>
                            </div>
                          </div>

                          <div className="box-border content-stretch flex flex-col gap-2 items-start justify-center p-0 relative shrink-0 text-[14px] text-left w-12">
                            <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#111111] w-full">
                              <p className="block leading-[20px]">505</p>
                            </div>
                          </div>

                          <div className="box-border content-stretch flex flex-col gap-2 items-start justify-center p-0 relative shrink-0 text-[14px] text-left w-12">
                            <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#111111] w-full">
                              <p className="block leading-[20px]">55</p>
                            </div>
                          </div>

                          <div className="basis-0 box-border content-stretch flex flex-col gap-2 grow items-start justify-center min-h-px min-w-px p-0 relative shrink-0">
                            <div className="relative shrink-0 size-6">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                                <g id="Error outline">
                                  <path d={svgPaths.p5671dc0} fill="var(--fill-0, #B32525)" id="Vector" />
                                </g>
                              </svg>
                            </div>
                          </div>

                        </div>
                        <div className="relative shrink-0 size-4">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                            <g clipPath="url(#clip0_15_472)" id="Icons">
                              <g id="Vector" opacity="0.87"></g>
                              <path d={svgPaths.p9082300} fill="var(--fill-0, #008F83)" id="Vector_2" />
                            </g>
                            <defs>
                              <clipPath id="clip0_15_472">
                                <rect fill="white" height="16" width="16" />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Risk Item 3 - Elétrico (segunda instância) */}
                  <div className="bg-[rgba(0,0,0,0.05)] relative rounded-3xl shrink-0 w-full">
                    <div className="flex flex-row items-center overflow-clip relative size-full">
                      <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-5 py-3 relative w-full">
                        <div className="basis-0 box-border content-stretch flex flex-row gap-6 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0">
                          
                          <div className="box-border content-stretch flex flex-col gap-2 items-start justify-center p-0 relative shrink-0">
                            <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#111111] text-[14px] text-left w-16">
                              <p className="block leading-[20px]">{t.riskElectrical}</p>
                            </div>
                          </div>

                          <div className="box-border content-stretch flex flex-col gap-2 items-start justify-center p-0 relative shrink-0 text-[14px] text-left w-12">
                            <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#111111] w-full">
                              <p className="block leading-[20px]">55</p>
                            </div>
                          </div>

                          <div className="box-border content-stretch flex flex-col gap-2 items-start justify-center p-0 relative shrink-0 text-[14px] text-left w-12">
                            <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#111111] w-full">
                              <p className="block leading-[20px]">5</p>
                            </div>
                          </div>

                          <div className="basis-0 box-border content-stretch flex flex-col gap-2 grow items-start justify-center min-h-px min-w-px p-0 relative shrink-0">
                            <div className="relative shrink-0 size-6">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                                <g id="Error outline">
                                  <path d={svgPaths.p5671dc0} fill="var(--fill-0, #CA5A15)" id="Vector" />
                                </g>
                              </svg>
                            </div>
                          </div>

                        </div>
                        <div className="relative shrink-0 size-4">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                            <g clipPath="url(#clip0_15_472)" id="Icons">
                              <g id="Vector" opacity="0.87"></g>
                              <path d={svgPaths.p9082300} fill="var(--fill-0, #008F83)" id="Vector_2" />
                            </g>
                            <defs>
                              <clipPath id="clip0_15_472">
                                <rect fill="white" height="16" width="16" />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Risk Item 4 - Mecânico (segunda instância) */}
                  <div className="bg-[rgba(0,0,0,0.05)] relative rounded-3xl shrink-0 w-full">
                    <div className="flex flex-row items-center overflow-clip relative size-full">
                      <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-5 py-3 relative w-full">
                        <div className="basis-0 box-border content-stretch flex flex-row gap-6 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0">
                          
                          <div className="box-border content-stretch flex flex-col gap-2 items-start justify-center p-0 relative shrink-0">
                            <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#111111] text-[14px] text-left w-16">
                              <p className="block leading-[20px]">{t.riskMechanical}</p>
                            </div>
                          </div>

                          <div className="box-border content-stretch flex flex-col gap-2 items-start justify-center p-0 relative shrink-0 text-[14px] text-left w-12">
                            <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#111111] w-full">
                              <p className="block leading-[20px]">5</p>
                            </div>
                          </div>

                          <div className="box-border content-stretch flex flex-col gap-2 items-start justify-center p-0 relative shrink-0 text-[14px] text-left w-12">
                            <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#111111] w-full">
                              <p className="block leading-[20px]">5</p>
                            </div>
                          </div>

                          <div className="basis-0 box-border content-stretch flex flex-col gap-2 grow items-start justify-center min-h-px min-w-px p-0 relative shrink-0">
                            <div className="relative shrink-0 size-6">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                                <g id="Shield">
                                  <path d={svgPaths.p164caf00} fill="var(--fill-0, #111111)" fillOpacity="0.3" id="Vector" />
                                </g>
                              </svg>
                            </div>
                          </div>

                        </div>
                        <div className="relative shrink-0 size-4">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                            <g clipPath="url(#clip0_15_472)" id="Icons">
                              <g id="Vector" opacity="0.87"></g>
                              <path d={svgPaths.p9082300} fill="var(--fill-0, #008F83)" id="Vector_2" />
                            </g>
                            <defs>
                              <clipPath id="clip0_15_472">
                                <rect fill="white" height="16" width="16" />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Risk Item 5 - Térmico */}
                  <div className="bg-[rgba(0,0,0,0.05)] relative rounded-3xl shrink-0 w-full">
                    <div className="flex flex-row items-center overflow-clip relative size-full">
                      <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-5 py-3 relative w-full">
                        <div className="basis-0 box-border content-stretch flex flex-row gap-6 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0">
                          
                          <div className="box-border content-stretch flex flex-col gap-2 items-start justify-center p-0 relative shrink-0">
                            <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#111111] text-[14px] text-left w-16">
                              <p className="block leading-[20px]">{t.riskThermal}</p>
                            </div>
                          </div>

                          <div className="box-border content-stretch flex flex-col gap-2 items-start justify-center p-0 relative shrink-0 text-[14px] text-left w-12">
                            <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#111111] w-full">
                              <p className="block leading-[20px]">5</p>
                            </div>
                          </div>

                          <div className="box-border content-stretch flex flex-col gap-2 items-start justify-center p-0 relative shrink-0 text-[14px] text-left w-12">
                            <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#111111] text-nowrap w-full">
                              <p className="block leading-[20px] whitespace-pre">5</p>
                            </div>
                          </div>

                          <div className="basis-0 box-border content-stretch flex flex-col gap-2 grow items-start justify-center min-h-px min-w-px p-0 relative shrink-0">
                            <div className="relative shrink-0 size-6">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                                <g id="Shield">
                                  <path d={svgPaths.p164caf00} fill="var(--fill-0, #111111)" fillOpacity="0.3" id="Vector" />
                                </g>
                              </svg>
                            </div>
                          </div>

                        </div>
                        <div className="relative shrink-0 size-4">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                            <g clipPath="url(#clip0_15_472)" id="Icons">
                              <g id="Vector" opacity="0.87"></g>
                              <path d={svgPaths.p9082300} fill="var(--fill-0, #008F83)" id="Vector_2" />
                            </g>
                            <defs>
                              <clipPath id="clip0_15_472">
                                <rect fill="white" height="16" width="16" />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Footer text */}
                <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-0 relative rounded-lg shrink-0 w-full">
                  <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(17,17,17,0.3)] text-center w-[223px]">
                    <p className="block leading-[20px]">{t.riskMachineHasHazards}</p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Action Area */}
          <div className="relative shrink-0 w-full">
            <div className="relative size-full">
              <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-[20px] relative w-full">
                <div className="bg-[#008f83] relative rounded-3xl shrink-0 w-full">
                  <div className="flex flex-row items-center justify-center relative size-full">
                    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center px-6 py-4 relative w-full">
                      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[18px] text-center text-nowrap tracking-[0.36px]">
                        <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">
                          {t.riskAddHazard}
                        </p>
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
}