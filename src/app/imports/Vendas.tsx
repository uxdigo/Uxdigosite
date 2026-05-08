import svgPaths from "./svg-fch20ohsl7";

function Pill() {
  return (
    <div
      className="bg-[rgba(45,72,189,0.1)] box-border content-stretch flex flex-row gap-2 items-center justify-center min-w-[29px] px-2 py-1 relative rounded-[100px] shrink-0"
      data-name="Pill"
    >
      <div className="basis-0 font-['Inter',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#2d48bd] text-[14px] text-center">
        <p className="block leading-[20px]">284</p>
      </div>
    </div>
  );
}

function PillWithLabel() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="Pill with label"
    >
      <div className="font-['Inter',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#111111] text-[16px] text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">Today</p>
      </div>
      <Pill />
    </div>
  );
}

function Segment() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row gap-2 items-center justify-center px-3 py-2 relative rounded-3xl shrink-0"
      data-name="Segment"
    >
      <div className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-3xl" />
      <PillWithLabel />
    </div>
  );
}

function Pill1() {
  return (
    <div
      className="bg-[rgba(45,72,189,0.1)] box-border content-stretch flex flex-row gap-2 items-center justify-center min-w-[29px] px-2 py-1 relative rounded-[100px] shrink-0"
      data-name="Pill"
    >
      <div className="basis-0 font-['Inter',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#2d48bd] text-[14px] text-center">
        <p className="block leading-[20px]">39</p>
      </div>
    </div>
  );
}

function PillWithLabel1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="Pill with label"
    >
      <div className="font-['Inter',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#111111] text-[16px] text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">Upcoming</p>
      </div>
      <Pill1 />
    </div>
  );
}

function Segment1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-center px-2 py-1 relative shrink-0"
      data-name="Segment"
    >
      <PillWithLabel1 />
    </div>
  );
}

function Pill2() {
  return (
    <div
      className="bg-[rgba(45,72,189,0.1)] box-border content-stretch flex flex-row gap-2 items-center justify-center min-w-[29px] px-2 py-1 relative rounded-[100px] shrink-0"
      data-name="Pill"
    >
      <div className="basis-0 font-['Inter',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#2d48bd] text-[14px] text-center">
        <p className="block leading-[20px]">401</p>
      </div>
    </div>
  );
}

function PillWithLabel2() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="Pill with label"
    >
      <div className="font-['Inter',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#111111] text-[16px] text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">In transit</p>
      </div>
      <Pill2 />
    </div>
  );
}

function Segment2() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-center px-2 py-1 relative shrink-0"
      data-name="Segment"
    >
      <PillWithLabel2 />
    </div>
  );
}

function Pill3() {
  return (
    <div
      className="bg-[rgba(45,72,189,0.1)] box-border content-stretch flex flex-row gap-2 items-center justify-center min-w-[29px] px-2 py-1 relative rounded-[100px] shrink-0"
      data-name="Pill"
    >
      <div className="basis-0 font-['Inter',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#2d48bd] text-[14px] text-center">
        <p className="block leading-[20px]">935</p>
      </div>
    </div>
  );
}

function PillWithLabel3() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="Pill with label"
    >
      <div className="font-['Inter',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#111111] text-[16px] text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">Completed</p>
      </div>
      <Pill3 />
    </div>
  );
}

function Segment3() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-center px-2 py-1 relative shrink-0"
      data-name="Segment"
    >
      <PillWithLabel3 />
    </div>
  );
}

function SegmentedControl() {
  return (
    <div
      className="bg-[rgba(0,0,0,0.05)] box-border content-stretch flex flex-row gap-1 items-center justify-start p-[8px] relative rounded-3xl shrink-0"
      data-name="Segmented control"
    >
      <div className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-3xl" />
      <Segment />
      <Segment1 />
      <Segment2 />
      <Segment3 />
    </div>
  );
}

function Icons() {
  return (
    <div className="relative shrink-0 size-6" data-name="Icons">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g clipPath="url(#clip0_13_3040)" id="Icons">
          <g id="Group">
            <g id="Vector"></g>
            <g id="Vector_2" opacity="0.87"></g>
          </g>
          <path
            d={svgPaths.p1ea3e200}
            fill="var(--fill-0, #2D48BD)"
            id="Vector_3"
          />
        </g>
        <defs>
          <clipPath id="clip0_13_3040">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-0" data-name="Group">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="Group">
          <g id="Vector"></g>
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div
      className="absolute bottom-[8.333%] left-[12.5%] right-[16.667%] top-[8.333%]"
      data-name="Group"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 17 20"
      >
        <g id="Group">
          <path
            d={svgPaths.pae25820}
            fill="var(--fill-0, #2D48BD)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Icons1() {
  return (
    <div className="overflow-clip relative shrink-0 size-6" data-name="Icons">
      <Group1 />
      <Group2 />
    </div>
  );
}

function CodigoFoco() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-0.5 items-start justify-start p-0 relative shrink-0"
      data-name="Código foco"
    >
      <div className="font-['Inter',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#000000] text-[16px] text-center text-nowrap">
        <p className="block leading-[22px] whitespace-pre">
          Authorization code:
        </p>
      </div>
      <div className="font-['Inter',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#2d48bd] text-[16px] text-center text-nowrap">
        <p className="block leading-[22px] whitespace-pre">A1B2C3D4</p>
      </div>
      <Icons1 />
    </div>
  );
}

function Codigo() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-start justify-start p-0 relative shrink-0"
      data-name="Código"
    >
      <Icons />
      <CodigoFoco />
    </div>
  );
}

function Button() {
  return (
    <div
      className="bg-[rgba(45,72,189,0.25)] box-border content-stretch flex flex-row gap-2 h-11 items-center justify-center px-6 py-4 relative rounded-3xl shrink-0"
      data-name="Button"
    >
      <div className="font-['Inter',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#2d48bd] text-[16px] text-center text-nowrap tracking-[0.32px]">
        <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">
          Pickup management
        </p>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-row gap-4 grow items-center justify-end min-h-px min-w-px p-0 relative shrink-0">
      <Codigo />
      <Button />
    </div>
  );
}

function Up() {
  return (
    <div
      className="bg-[rgba(0,0,0,0.05)] relative shrink-0 w-full"
      data-name="Up"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-[24px] relative w-full">
          <SegmentedControl />
          <Frame16 />
        </div>
      </div>
    </div>
  );
}

function Pill4() {
  return (
    <div
      className="bg-[rgba(45,72,189,0.1)] box-border content-stretch flex flex-row gap-2 items-center justify-center min-w-[29px] px-2 py-1 relative rounded-[100px] shrink-0"
      data-name="Pill"
    >
      <div className="basis-0 font-['Inter',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#2d48bd] text-[14px] text-center">
        <p className="block leading-[20px]">132</p>
      </div>
    </div>
  );
}

function Title() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full"
      data-name="Title"
    >
      <div className="font-['Inter',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#6c9434] text-[14px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">ON THE WAY</p>
      </div>
      <Pill4 />
    </div>
  );
}

function Title1() {
  return (
    <div
      className="box-border content-stretch flex flex-row font-['Inter',_sans-serif] font-normal gap-1 items-center justify-start leading-[0] not-italic p-0 relative shrink-0 text-left text-nowrap w-full"
      data-name="Title"
    >
      <div className="relative shrink-0 text-[#000000] text-[20px]">
        <p className="block leading-[26px] text-nowrap whitespace-pre">
          PICKUP
        </p>
      </div>
      <div className="relative shrink-0 text-[14px] text-[rgba(17,17,17,0.5)]">
        <p className="block leading-[20px] text-nowrap whitespace-pre">
          10-11 AM
        </p>
      </div>
    </div>
  );
}

function TitleAndStatus() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Title and status"
    >
      <Title />
      <Title1 />
    </div>
  );
}

function Pill5() {
  return (
    <div
      className="bg-[rgba(0,0,0,0.05)] box-border content-stretch flex flex-row gap-2 items-center justify-center min-w-[29px] px-2 py-1 relative rounded-[100px] shrink-0"
      data-name="Pill"
    >
      <div className="basis-0 font-['Inter',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#111111] text-[14px] text-center">
        <p className="block leading-[20px]">3</p>
      </div>
    </div>
  );
}

function PillWithLabel4() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full"
      data-name="Pill with label"
    >
      <div className="font-['Inter',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#111111] text-[16px] text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">Buyer message</p>
      </div>
      <Pill5 />
    </div>
  );
}

function Pill6() {
  return (
    <div
      className="bg-[rgba(0,0,0,0.05)] box-border content-stretch flex flex-row gap-2 items-center justify-center min-w-[29px] px-2 py-1 relative rounded-[100px] shrink-0"
      data-name="Pill"
    >
      <div className="basis-0 font-['Inter',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#111111] text-[14px] text-center">
        <p className="block leading-[20px]">7</p>
      </div>
    </div>
  );
}

function PillWithLabel5() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full"
      data-name="Pill with label"
    >
      <div className="font-['Inter',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#111111] text-[16px] text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">Invoice pending</p>
      </div>
      <Pill6 />
    </div>
  );
}

function Pill7() {
  return (
    <div
      className="bg-[rgba(0,0,0,0.05)] box-border content-stretch flex flex-row gap-2 items-center justify-center min-w-[29px] px-2 py-1 relative rounded-[100px] shrink-0"
      data-name="Pill"
    >
      <div className="basis-0 font-['Inter',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#111111] text-[14px] text-center">
        <p className="block leading-[20px]">29</p>
      </div>
    </div>
  );
}

function PillWithLabel6() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full"
      data-name="Pill with label"
    >
      <div className="font-['Inter',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#111111] text-[16px] text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">Label pending</p>
      </div>
      <Pill7 />
    </div>
  );
}

function Pill8() {
  return (
    <div
      className="bg-[rgba(0,0,0,0.05)] box-border content-stretch flex flex-row gap-2 items-center justify-center min-w-[29px] px-2 py-1 relative rounded-[100px] shrink-0"
      data-name="Pill"
    >
      <div className="basis-0 font-['Inter',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#111111] text-[14px] text-center">
        <p className="block leading-[20px]">93</p>
      </div>
    </div>
  );
}

function PillWithLabel7() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full"
      data-name="Pill with label"
    >
      <div className="font-['Inter',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#111111] text-[16px] text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">Ready to ship</p>
      </div>
      <Pill8 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full">
      <PillWithLabel4 />
      <PillWithLabel5 />
      <PillWithLabel6 />
      <PillWithLabel7 />
    </div>
  );
}

function Card() {
  return (
    <div
      className="bg-[rgba(0,0,0,0.05)] box-border content-stretch flex flex-col gap-4 items-start justify-start overflow-clip p-[24px] relative rounded-3xl shrink-0 w-[293px]"
      data-name="Card"
    >
      <TitleAndStatus />
      <Frame12 />
    </div>
  );
}

function Pill9() {
  return (
    <div
      className="bg-[rgba(45,72,189,0.1)] box-border content-stretch flex flex-row gap-2 items-center justify-center min-w-[29px] px-2 py-1 relative rounded-[100px] shrink-0"
      data-name="Pill"
    >
      <div className="basis-0 font-['Inter',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#2d48bd] text-[14px] text-center">
        <p className="block leading-[20px]">89</p>
      </div>
    </div>
  );
}

function Title2() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full"
      data-name="Title"
    >
      <div className="font-['Inter',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#111111] text-[14px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">SCHEDULED</p>
      </div>
      <Pill9 />
    </div>
  );
}

function Title3() {
  return (
    <div
      className="box-border content-stretch flex flex-row font-['Inter',_sans-serif] font-normal gap-1 items-center justify-start leading-[0] not-italic p-0 relative shrink-0 text-left text-nowrap w-full"
      data-name="Title"
    >
      <div className="relative shrink-0 text-[#000000] text-[20px]">
        <p className="block leading-[26px] text-nowrap whitespace-pre">
          PICKUP
        </p>
      </div>
      <div className="relative shrink-0 text-[14px] text-[rgba(17,17,17,0.5)]">
        <p className="block leading-[20px] text-nowrap whitespace-pre">
          01-02 PM
        </p>
      </div>
    </div>
  );
}

function TitleAndStatus1() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Title and status"
    >
      <Title2 />
      <Title3 />
    </div>
  );
}

function Pill10() {
  return (
    <div
      className="bg-[rgba(0,0,0,0.05)] box-border content-stretch flex flex-row gap-2 items-center justify-center min-w-[29px] px-2 py-1 relative rounded-[100px] shrink-0"
      data-name="Pill"
    >
      <div className="basis-0 font-['Inter',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#111111] text-[14px] text-center">
        <p className="block leading-[20px]">1</p>
      </div>
    </div>
  );
}

function PillWithLabel8() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full"
      data-name="Pill with label"
    >
      <div className="font-['Inter',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#111111] text-[16px] text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">Buyer message</p>
      </div>
      <Pill10 />
    </div>
  );
}

function Pill11() {
  return (
    <div
      className="bg-[rgba(0,0,0,0.05)] box-border content-stretch flex flex-row gap-2 items-center justify-center min-w-[29px] px-2 py-1 relative rounded-[100px] shrink-0"
      data-name="Pill"
    >
      <div className="basis-0 font-['Inter',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#111111] text-[14px] text-center">
        <p className="block leading-[20px]">9</p>
      </div>
    </div>
  );
}

function PillWithLabel9() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full"
      data-name="Pill with label"
    >
      <div className="font-['Inter',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#111111] text-[16px] text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">Invoice pending</p>
      </div>
      <Pill11 />
    </div>
  );
}

function Pill12() {
  return (
    <div
      className="bg-[rgba(0,0,0,0.05)] box-border content-stretch flex flex-row gap-2 items-center justify-center min-w-[29px] px-2 py-1 relative rounded-[100px] shrink-0"
      data-name="Pill"
    >
      <div className="basis-0 font-['Inter',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#111111] text-[14px] text-center">
        <p className="block leading-[20px]">49</p>
      </div>
    </div>
  );
}

function PillWithLabel10() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full"
      data-name="Pill with label"
    >
      <div className="font-['Inter',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#111111] text-[16px] text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">Label pending</p>
      </div>
      <Pill12 />
    </div>
  );
}

function Pill13() {
  return (
    <div
      className="bg-[rgba(0,0,0,0.05)] box-border content-stretch flex flex-row gap-2 items-center justify-center min-w-[29px] px-2 py-1 relative rounded-[100px] shrink-0"
      data-name="Pill"
    >
      <div className="basis-0 font-['Inter',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#111111] text-[14px] text-center">
        <p className="block leading-[20px]">30</p>
      </div>
    </div>
  );
}

function PillWithLabel11() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full"
      data-name="Pill with label"
    >
      <div className="font-['Inter',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#111111] text-[16px] text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">Ready to ship</p>
      </div>
      <Pill13 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full">
      <PillWithLabel8 />
      <PillWithLabel9 />
      <PillWithLabel10 />
      <PillWithLabel11 />
    </div>
  );
}

function Card1() {
  return (
    <div
      className="bg-[rgba(0,0,0,0.05)] box-border content-stretch flex flex-col gap-4 items-start justify-start overflow-clip p-[24px] relative rounded-3xl shrink-0 w-[293px]"
      data-name="Card"
    >
      <TitleAndStatus1 />
      <Frame13 />
    </div>
  );
}

function Pill14() {
  return (
    <div
      className="bg-[rgba(45,72,189,0.1)] box-border content-stretch flex flex-row gap-2 items-center justify-center min-w-[29px] px-2 py-1 relative rounded-[100px] shrink-0"
      data-name="Pill"
    >
      <div className="basis-0 font-['Inter',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#2d48bd] text-[14px] text-center">
        <p className="block leading-[20px]">32</p>
      </div>
    </div>
  );
}

function Title4() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full"
      data-name="Title"
    >
      <div className="font-['Inter',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#111111] text-[14px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">PENDING</p>
      </div>
      <Pill14 />
    </div>
  );
}

function Title5() {
  return (
    <div
      className="box-border content-stretch flex flex-row font-['Inter',_sans-serif] font-normal gap-1 items-center justify-start leading-[0] not-italic p-0 relative shrink-0 text-left text-nowrap w-full"
      data-name="Title"
    >
      <div className="relative shrink-0 text-[#000000] text-[20px]">
        <p className="block leading-[26px] text-nowrap whitespace-pre">FLEX</p>
      </div>
      <div className="relative shrink-0 text-[14px] text-[rgba(17,17,17,0.5)]">
        <p className="block leading-[20px] text-nowrap whitespace-pre">
          UNTIL 4 PM
        </p>
      </div>
    </div>
  );
}

function TitleAndStatus2() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Title and status"
    >
      <Title4 />
      <Title5 />
    </div>
  );
}

function Pill15() {
  return (
    <div
      className="bg-[rgba(0,0,0,0.05)] box-border content-stretch flex flex-row gap-2 items-center justify-center min-w-[29px] px-2 py-1 relative rounded-[100px] shrink-0"
      data-name="Pill"
    >
      <div className="basis-0 font-['Inter',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#111111] text-[14px] text-center">
        <p className="block leading-[20px]">7</p>
      </div>
    </div>
  );
}

function PillWithLabel12() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full"
      data-name="Pill with label"
    >
      <div className="font-['Inter',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#111111] text-[16px] text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">Buyer message</p>
      </div>
      <Pill15 />
    </div>
  );
}

function Pill16() {
  return (
    <div
      className="bg-[rgba(0,0,0,0.05)] box-border content-stretch flex flex-row gap-2 items-center justify-center min-w-[29px] px-2 py-1 relative rounded-[100px] shrink-0"
      data-name="Pill"
    >
      <div className="basis-0 font-['Inter',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#111111] text-[14px] text-center">
        <p className="block leading-[20px]">2</p>
      </div>
    </div>
  );
}

function PillWithLabel13() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full"
      data-name="Pill with label"
    >
      <div className="font-['Inter',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#111111] text-[16px] text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">Invoice pending</p>
      </div>
      <Pill16 />
    </div>
  );
}

function Pill17() {
  return (
    <div
      className="bg-[rgba(0,0,0,0.05)] box-border content-stretch flex flex-row gap-2 items-center justify-center min-w-[29px] px-2 py-1 relative rounded-[100px] shrink-0"
      data-name="Pill"
    >
      <div className="basis-0 font-['Inter',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#111111] text-[14px] text-center">
        <p className="block leading-[20px]">12</p>
      </div>
    </div>
  );
}

function PillWithLabel14() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full"
      data-name="Pill with label"
    >
      <div className="font-['Inter',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#111111] text-[16px] text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">Label pending</p>
      </div>
      <Pill17 />
    </div>
  );
}

function Pill18() {
  return (
    <div
      className="bg-[rgba(0,0,0,0.05)] box-border content-stretch flex flex-row gap-2 items-center justify-center min-w-[29px] px-2 py-1 relative rounded-[100px] shrink-0"
      data-name="Pill"
    >
      <div className="basis-0 font-['Inter',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#111111] text-[14px] text-center">
        <p className="block leading-[20px]">10</p>
      </div>
    </div>
  );
}

function PillWithLabel15() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full"
      data-name="Pill with label"
    >
      <div className="font-['Inter',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#111111] text-[16px] text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">Ready to ship</p>
      </div>
      <Pill18 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full">
      <PillWithLabel12 />
      <PillWithLabel13 />
      <PillWithLabel14 />
      <PillWithLabel15 />
    </div>
  );
}

function Card2() {
  return (
    <div
      className="bg-[rgba(0,0,0,0.05)] box-border content-stretch flex flex-col gap-4 items-start justify-start overflow-clip p-[24px] relative rounded-3xl shrink-0 w-[293px]"
      data-name="Card"
    >
      <TitleAndStatus2 />
      <Frame14 />
    </div>
  );
}

function Pill19() {
  return (
    <div
      className="bg-[rgba(45,72,189,0.1)] box-border content-stretch flex flex-row gap-2 items-center justify-center min-w-[29px] px-2 py-1 relative rounded-[100px] shrink-0"
      data-name="Pill"
    >
      <div className="basis-0 font-['Inter',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#2d48bd] text-[14px] text-center">
        <p className="block leading-[20px]">74</p>
      </div>
    </div>
  );
}

function Title6() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full"
      data-name="Title"
    >
      <div className="font-['Inter',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#111111] text-[14px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">SCHEDULED</p>
      </div>
      <Pill19 />
    </div>
  );
}

function Title7() {
  return (
    <div
      className="box-border content-stretch flex flex-row font-['Inter',_sans-serif] font-normal gap-1 items-center justify-start leading-[0] not-italic p-0 relative shrink-0 text-left text-nowrap w-full"
      data-name="Title"
    >
      <div className="relative shrink-0 text-[#000000] text-[20px]">
        <p className="block leading-[26px] text-nowrap whitespace-pre">
          PICKUP
        </p>
      </div>
      <div className="relative shrink-0 text-[14px] text-[rgba(17,17,17,0.5)]">
        <p className="block leading-[20px] text-nowrap whitespace-pre">
          05-06 PM
        </p>
      </div>
    </div>
  );
}

function TitleAndStatus3() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Title and status"
    >
      <Title6 />
      <Title7 />
    </div>
  );
}

function Pill20() {
  return (
    <div
      className="bg-[rgba(0,0,0,0.05)] box-border content-stretch flex flex-row gap-2 items-center justify-center min-w-[29px] px-2 py-1 relative rounded-[100px] shrink-0"
      data-name="Pill"
    >
      <div className="basis-0 font-['Inter',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#111111] text-[14px] text-center">
        <p className="block leading-[20px]">1</p>
      </div>
    </div>
  );
}

function PillWithLabel16() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full"
      data-name="Pill with label"
    >
      <div className="font-['Inter',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#111111] text-[16px] text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">Buyer message</p>
      </div>
      <Pill20 />
    </div>
  );
}

function Pill21() {
  return (
    <div
      className="bg-[rgba(0,0,0,0.05)] box-border content-stretch flex flex-row gap-2 items-center justify-center min-w-[29px] px-2 py-1 relative rounded-[100px] shrink-0"
      data-name="Pill"
    >
      <div className="basis-0 font-['Inter',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#111111] text-[14px] text-center">
        <p className="block leading-[20px]">9</p>
      </div>
    </div>
  );
}

function PillWithLabel17() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full"
      data-name="Pill with label"
    >
      <div className="font-['Inter',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#111111] text-[16px] text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">Invoice pending</p>
      </div>
      <Pill21 />
    </div>
  );
}

function Pill22() {
  return (
    <div
      className="bg-[rgba(0,0,0,0.05)] box-border content-stretch flex flex-row gap-2 items-center justify-center min-w-[29px] px-2 py-1 relative rounded-[100px] shrink-0"
      data-name="Pill"
    >
      <div className="basis-0 font-['Inter',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#111111] text-[14px] text-center">
        <p className="block leading-[20px]">34</p>
      </div>
    </div>
  );
}

function PillWithLabel18() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full"
      data-name="Pill with label"
    >
      <div className="font-['Inter',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#111111] text-[16px] text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">Label pending</p>
      </div>
      <Pill22 />
    </div>
  );
}

function Pill23() {
  return (
    <div
      className="bg-[rgba(0,0,0,0.05)] box-border content-stretch flex flex-row gap-2 items-center justify-center min-w-[29px] px-2 py-1 relative rounded-[100px] shrink-0"
      data-name="Pill"
    >
      <div className="basis-0 font-['Inter',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#111111] text-[14px] text-center">
        <p className="block leading-[20px]">30</p>
      </div>
    </div>
  );
}

function PillWithLabel19() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full"
      data-name="Pill with label"
    >
      <div className="font-['Inter',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#111111] text-[16px] text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">Ready to ship</p>
      </div>
      <Pill23 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full">
      <PillWithLabel16 />
      <PillWithLabel17 />
      <PillWithLabel18 />
      <PillWithLabel19 />
    </div>
  );
}

function Card3() {
  return (
    <div
      className="bg-[rgba(0,0,0,0.05)] box-border content-stretch flex flex-col gap-4 items-start justify-start overflow-clip p-[24px] relative rounded-3xl shrink-0 w-[293px]"
      data-name="Card"
    >
      <TitleAndStatus3 />
      <Frame15 />
    </div>
  );
}

function Up1() {
  return (
    <div className="h-[309px] relative shrink-0 w-full" data-name="Up">
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-6 h-[309px] items-start justify-start p-[24px] relative w-full">
          <Card />
          <Card1 />
          <Card2 />
          <Card3 />
        </div>
      </div>
    </div>
  );
}

export default function Vendas() {
  return (
    <div
      className="bg-[#ffffff] relative rounded-tl-[24px] rounded-tr-[24px] size-full"
      data-name="Vendas"
    >
      <div className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative size-full">
        <Up />
        <Up1 />
      </div>
      <div className="absolute border-[1px_0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-tl-[24px] rounded-tr-[24px]" />
    </div>
  );
}