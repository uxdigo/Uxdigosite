import svgPaths from "./svg-sb3did1lhg";

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

function Header() {
  return (
    <div
      className="bg-[#00544d] h-14 relative shrink-0 w-full"
      data-name="Header"
    >
      <div className="flex flex-row items-center justify-between overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-14 items-center justify-between p-[24px] relative w-full">
          <Icons />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic text-[#ffffff] text-[20px] text-center text-nowrap">
              <p className="block leading-[26px] whitespace-pre">Perigos</p>
            </div>
          </div>
          <Icons1 />
        </div>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-center leading-[0] not-italic p-0 relative shrink-0 text-[14px] text-[rgba(17,17,17,0.5)] text-left w-16"
      data-name="Text"
    >
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold relative shrink-0 w-full">
        <p className="block leading-[20px]">Tipo</p>
      </div>
      <div className="font-['Inter:Regular',_sans-serif] font-normal relative shrink-0 w-full">
        <p className="block leading-[20px]">Perigo</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-center leading-[0] not-italic p-0 relative shrink-0 text-[14px] text-[rgba(17,17,17,0.5)] text-left w-12"
      data-name="Text"
    >
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold relative shrink-0 w-full">
        <p className="block leading-[20px]">HRN</p>
      </div>
      <div className="font-['Inter:Regular',_sans-serif] font-normal relative shrink-0 w-full">
        <p className="block leading-[20px]">Atual</p>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-center leading-[0] not-italic p-0 relative shrink-0 text-[14px] text-[rgba(17,17,17,0.5)] text-left w-12"
      data-name="Text"
    >
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold relative shrink-0 w-full">
        <p className="block leading-[20px]">HRN</p>
      </div>
      <div className="font-['Inter:Regular',_sans-serif] font-normal relative shrink-0 w-full">
        <p className="block leading-[20px]">Meta</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-center leading-[0] min-h-px min-w-px not-italic p-0 relative shrink-0 text-[14px] text-[rgba(17,17,17,0.5)] text-left"
      data-name="Text"
    >
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold relative shrink-0 w-full">
        <p className="block leading-[20px]">Status</p>
      </div>
      <div className="font-['Inter:Regular',_sans-serif] font-normal relative shrink-0 w-full">
        <p className="block leading-[20px]">Perigo</p>
      </div>
    </div>
  );
}

function Frame133() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-row gap-6 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0">
      <Text />
      <Text1 />
      <Text2 />
      <Text3 />
    </div>
  );
}

function List() {
  return (
    <div className="relative rounded-3xl shrink-0 w-full" data-name="List">
      <div className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-3xl" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-5 py-3 relative w-full">
          <Frame133 />
        </div>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-start justify-center p-0 relative shrink-0"
      data-name="Text"
    >
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#111111] text-[14px] text-left w-16">
        <p className="block leading-[20px]">Mecânico</p>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-start justify-center p-0 relative shrink-0 text-[14px] text-left w-12"
      data-name="Text"
    >
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#111111] w-full">
        <p className="block leading-[20px]">505</p>
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-start justify-center p-0 relative shrink-0 text-[14px] text-left w-12"
      data-name="Text"
    >
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#111111] w-full">
        <p className="block leading-[20px]">15</p>
      </div>
    </div>
  );
}

function ErrorOutline() {
  return (
    <div className="relative shrink-0 size-6" data-name="Error outline">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="Error outline">
          <path
            d={svgPaths.p5671dc0}
            fill="var(--fill-0, #B32525)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Text7() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-2 grow items-start justify-center min-h-px min-w-px p-0 relative shrink-0"
      data-name="Text"
    >
      <ErrorOutline />
    </div>
  );
}

function Frame136() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-row gap-6 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0">
      <Text4 />
      <Text5 />
      <Text6 />
      <Text7 />
    </div>
  );
}

function Icons4() {
  return (
    <div className="relative shrink-0 size-4" data-name="Icons">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g clipPath="url(#clip0_15_472)" id="Icons">
          <g id="Vector" opacity="0.87"></g>
          <path
            d={svgPaths.p9082300}
            fill="var(--fill-0, #008F83)"
            id="Vector_2"
          />
        </g>
        <defs>
          <clipPath id="clip0_15_472">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function List1() {
  return (
    <div
      className="bg-[rgba(0,0,0,0.05)] relative rounded-3xl shrink-0 w-full"
      data-name="List"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-5 py-3 relative w-full">
          <Frame136 />
          <Icons4 />
        </div>
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-start justify-center p-0 relative shrink-0"
      data-name="Text"
    >
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#111111] text-[14px] text-left w-16">
        <p className="block leading-[20px]">Elétrico</p>
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-start justify-center p-0 relative shrink-0 text-[14px] text-left w-12"
      data-name="Text"
    >
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#111111] w-full">
        <p className="block leading-[20px]">505</p>
      </div>
    </div>
  );
}

function Text10() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-start justify-center p-0 relative shrink-0 text-[14px] text-left w-12"
      data-name="Text"
    >
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#111111] w-full">
        <p className="block leading-[20px]">55</p>
      </div>
    </div>
  );
}

function ErrorOutline1() {
  return (
    <div className="relative shrink-0 size-6" data-name="Error outline">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="Error outline">
          <path
            d={svgPaths.p5671dc0}
            fill="var(--fill-0, #B32525)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Text11() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-2 grow items-start justify-center min-h-px min-w-px p-0 relative shrink-0"
      data-name="Text"
    >
      <ErrorOutline1 />
    </div>
  );
}

function Frame137() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-row gap-6 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0">
      <Text8 />
      <Text9 />
      <Text10 />
      <Text11 />
    </div>
  );
}

function Icons6() {
  return (
    <div className="relative shrink-0 size-4" data-name="Icons">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g clipPath="url(#clip0_15_472)" id="Icons">
          <g id="Vector" opacity="0.87"></g>
          <path
            d={svgPaths.p9082300}
            fill="var(--fill-0, #008F83)"
            id="Vector_2"
          />
        </g>
        <defs>
          <clipPath id="clip0_15_472">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function List2() {
  return (
    <div
      className="bg-[rgba(0,0,0,0.05)] relative rounded-3xl shrink-0 w-full"
      data-name="List"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-5 py-3 relative w-full">
          <Frame137 />
          <Icons6 />
        </div>
      </div>
    </div>
  );
}

function Text12() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-start justify-center p-0 relative shrink-0"
      data-name="Text"
    >
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#111111] text-[14px] text-left w-16">
        <p className="block leading-[20px]">Elétrico</p>
      </div>
    </div>
  );
}

function Text13() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-start justify-center p-0 relative shrink-0 text-[14px] text-left w-12"
      data-name="Text"
    >
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#111111] w-full">
        <p className="block leading-[20px]">55</p>
      </div>
    </div>
  );
}

function Text14() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-start justify-center p-0 relative shrink-0 text-[14px] text-left w-12"
      data-name="Text"
    >
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#111111] w-full">
        <p className="block leading-[20px]">5</p>
      </div>
    </div>
  );
}

function ErrorOutline2() {
  return (
    <div className="relative shrink-0 size-6" data-name="Error outline">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="Error outline">
          <path
            d={svgPaths.p5671dc0}
            fill="var(--fill-0, #CA5A15)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Text15() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-2 grow items-start justify-center min-h-px min-w-px p-0 relative shrink-0"
      data-name="Text"
    >
      <ErrorOutline2 />
    </div>
  );
}

function Frame138() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-row gap-6 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0">
      <Text12 />
      <Text13 />
      <Text14 />
      <Text15 />
    </div>
  );
}

function Icons8() {
  return (
    <div className="relative shrink-0 size-4" data-name="Icons">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g clipPath="url(#clip0_15_472)" id="Icons">
          <g id="Vector" opacity="0.87"></g>
          <path
            d={svgPaths.p9082300}
            fill="var(--fill-0, #008F83)"
            id="Vector_2"
          />
        </g>
        <defs>
          <clipPath id="clip0_15_472">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function List3() {
  return (
    <div
      className="bg-[rgba(0,0,0,0.05)] relative rounded-3xl shrink-0 w-full"
      data-name="List"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-5 py-3 relative w-full">
          <Frame138 />
          <Icons8 />
        </div>
      </div>
    </div>
  );
}

function Text16() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-start justify-center p-0 relative shrink-0"
      data-name="Text"
    >
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#111111] text-[14px] text-left w-16">
        <p className="block leading-[20px]">Mecânico</p>
      </div>
    </div>
  );
}

function Text17() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-start justify-center p-0 relative shrink-0 text-[14px] text-left w-12"
      data-name="Text"
    >
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#111111] w-full">
        <p className="block leading-[20px]">5</p>
      </div>
    </div>
  );
}

function Text18() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-start justify-center p-0 relative shrink-0 text-[14px] text-left w-12"
      data-name="Text"
    >
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#111111] w-full">
        <p className="block leading-[20px]">5</p>
      </div>
    </div>
  );
}

function Shield() {
  return (
    <div className="relative shrink-0 size-6" data-name="Shield">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="Shield">
          <path
            d={svgPaths.p164caf00}
            fill="var(--fill-0, #111111)"
            fillOpacity="0.3"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Text19() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-2 grow items-start justify-center min-h-px min-w-px p-0 relative shrink-0"
      data-name="Text"
    >
      <Shield />
    </div>
  );
}

function Frame139() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-row gap-6 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0">
      <Text16 />
      <Text17 />
      <Text18 />
      <Text19 />
    </div>
  );
}

function Icons10() {
  return (
    <div className="relative shrink-0 size-4" data-name="Icons">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g clipPath="url(#clip0_15_472)" id="Icons">
          <g id="Vector" opacity="0.87"></g>
          <path
            d={svgPaths.p9082300}
            fill="var(--fill-0, #008F83)"
            id="Vector_2"
          />
        </g>
        <defs>
          <clipPath id="clip0_15_472">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function List4() {
  return (
    <div
      className="bg-[rgba(0,0,0,0.05)] relative rounded-3xl shrink-0 w-full"
      data-name="List"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-5 py-3 relative w-full">
          <Frame139 />
          <Icons10 />
        </div>
      </div>
    </div>
  );
}

function Text20() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-start justify-center p-0 relative shrink-0"
      data-name="Text"
    >
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#111111] text-[14px] text-left w-16">
        <p className="block leading-[20px]">Térmico</p>
      </div>
    </div>
  );
}

function Text21() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-start justify-center p-0 relative shrink-0 text-[14px] text-left w-12"
      data-name="Text"
    >
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#111111] w-full">
        <p className="block leading-[20px]">5</p>
      </div>
    </div>
  );
}

function Text22() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-start justify-center p-0 relative shrink-0 text-[14px] text-left w-12"
      data-name="Text"
    >
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#111111] text-nowrap w-full">
        <p className="block leading-[20px] whitespace-pre">5</p>
      </div>
    </div>
  );
}

function Shield1() {
  return (
    <div className="relative shrink-0 size-6" data-name="Shield">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="Shield">
          <path
            d={svgPaths.p164caf00}
            fill="var(--fill-0, #111111)"
            fillOpacity="0.3"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Text23() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-2 grow items-start justify-center min-h-px min-w-px p-0 relative shrink-0"
      data-name="Text"
    >
      <Shield1 />
    </div>
  );
}

function Frame140() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-row gap-6 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0">
      <Text20 />
      <Text21 />
      <Text22 />
      <Text23 />
    </div>
  );
}

function Icons12() {
  return (
    <div className="relative shrink-0 size-4" data-name="Icons">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g clipPath="url(#clip0_15_472)" id="Icons">
          <g id="Vector" opacity="0.87"></g>
          <path
            d={svgPaths.p9082300}
            fill="var(--fill-0, #008F83)"
            id="Vector_2"
          />
        </g>
        <defs>
          <clipPath id="clip0_15_472">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function List5() {
  return (
    <div
      className="bg-[rgba(0,0,0,0.05)] relative rounded-3xl shrink-0 w-full"
      data-name="List"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-5 py-3 relative w-full">
          <Frame140 />
          <Icons12 />
        </div>
      </div>
    </div>
  );
}

function Frame134() {
  return (
    <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative shrink-0 w-full">
      <List />
      <List1 />
      <List2 />
      <List3 />
      <List4 />
      <List5 />
    </div>
  );
}

function Frame135() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-0 relative rounded-lg shrink-0 w-full">
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(17,17,17,0.3)] text-center w-[223px]">
        <p className="block leading-[20px]">Máquina 130AB possui 5 perigos</p>
      </div>
    </div>
  );
}

function Body() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow min-h-px min-w-px relative shrink-0 w-full"
      data-name="Body"
    >
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-6 items-start justify-start p-[20px] relative size-full">
          <Frame134 />
          <Frame135 />
        </div>
      </div>
    </div>
  );
}

function Screen() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px overflow-clip p-0 relative shrink-0 w-full"
      data-name="Screen"
    >
      <Header />
      <Body />
    </div>
  );
}

function Button() {
  return (
    <div
      className="bg-[#008f83] relative rounded-3xl shrink-0 w-full"
      data-name="Button"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center px-6 py-4 relative w-full">
          <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[18px] text-center text-nowrap tracking-[0.36px]">
            <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">
              Adicionar perigo
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ActionArea() {
  return (
    <div className="relative shrink-0 w-full" data-name="Action area">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-[20px] relative w-full">
          <Button />
        </div>
      </div>
    </div>
  );
}

export default function Base() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative rounded-3xl size-full"
      data-name="Base"
    >
      <Screen />
      <ActionArea />
    </div>
  );
}