import svgPaths from "./svg-cibc52d4cw";

function Text() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-2 grow items-start justify-center min-h-px min-w-px p-0 relative shrink-0"
      data-name="Text"
    >
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#111111] text-[20px] text-left w-full">
        <p className="block leading-[normal]">Pickup management</p>
      </div>
    </div>
  );
}

function Icons1() {
  return (
    <div className="relative shrink-0 size-7" data-name="Icons">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 28 28"
      >
        <g clipPath="url(#clip0_4_1497)" id="Icons">
          <g id="Vector"></g>
          <path
            d={svgPaths.p247421f0}
            fill="var(--fill-0, #2D48BD)"
            id="Vector_2"
          />
        </g>
        <defs>
          <clipPath id="clip0_4_1497">
            <rect fill="white" height="28" width="28" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function List() {
  return (
    <div className="relative shrink-0 w-full" data-name="List">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-6 py-5 relative w-full">
          <Text />
          <Icons1 />
        </div>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-2 grow items-start justify-center min-h-px min-w-px p-0 relative shrink-0"
      data-name="Text"
    >
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#111111] text-[16px] text-left w-full">
        <p className="block leading-[22px]">Pending</p>
      </div>
    </div>
  );
}

function Icons3() {
  return (
    <div className="relative shrink-0 size-5" data-name="Icons">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="Icons">
          <path
            d={svgPaths.p85abc80}
            fill="var(--fill-0, #2D48BD)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function List1() {
  return (
    <div className="relative rounded-3xl shrink-0 w-[312px]" data-name="List">
      <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start overflow-clip px-6 py-4 relative w-[312px]">
        <Text1 />
        <Icons3 />
      </div>
      <div className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-3xl" />
    </div>
  );
}

function Title() {
  return (
    <div
      className="box-border content-stretch flex flex-row font-['Inter:Regular',_sans-serif] font-normal gap-1 items-center justify-start leading-[0] not-italic p-0 relative shrink-0 text-left text-nowrap w-full"
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
      className="basis-0 box-border content-stretch flex flex-col gap-2 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Title and status"
    >
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#6c9434] text-[14px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">ON THE WAY</p>
      </div>
      <Title />
    </div>
  );
}

function Icons4() {
  return (
    <div className="relative shrink-0 size-7" data-name="Icons">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 28 28"
      >
        <g clipPath="url(#clip0_4_1488)" id="Icons">
          <g id="Vector"></g>
          <path
            d={svgPaths.p14058300}
            fill="var(--fill-0, #2D48BD)"
            id="Vector_2"
          />
        </g>
        <defs>
          <clipPath id="clip0_4_1488">
            <rect fill="white" height="28" width="28" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Upper() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-4 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Upper"
    >
      <TitleAndStatus />
      <Icons4 />
    </div>
  );
}

function Card() {
  return (
    <div
      className="bg-[rgba(0,0,0,0.05)] relative rounded-3xl shrink-0 w-full"
      data-name="Card"
    >
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-[24px] relative w-full">
          <Upper />
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#000000] text-[16px] text-left w-full">
            <p className="block leading-[22px]">
              The pickup is on its way. Have your packages ready and have your
              authorization code ready to confirm the process.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Title1() {
  return (
    <div
      className="box-border content-stretch flex flex-row font-['Inter:Regular',_sans-serif] font-normal gap-1 items-center justify-start leading-[0] not-italic p-0 relative shrink-0 text-left text-nowrap w-full"
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
      className="basis-0 box-border content-stretch flex flex-col gap-2 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Title and status"
    >
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#111111] text-[14px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">SCHEDULED</p>
      </div>
      <Title1 />
    </div>
  );
}

function Icons5() {
  return (
    <div className="relative shrink-0 size-7" data-name="Icons">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 28 28"
      >
        <g id="Icons">
          <path
            d={svgPaths.p3aa51700}
            fill="var(--fill-0, #2D48BD)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Upper1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-4 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Upper"
    >
      <TitleAndStatus1 />
      <Icons5 />
    </div>
  );
}

function Card1() {
  return (
    <div
      className="bg-[rgba(0,0,0,0.05)] relative rounded-3xl shrink-0 w-full"
      data-name="Card"
    >
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-[24px] relative w-full">
          <Upper1 />
        </div>
      </div>
    </div>
  );
}

function Title2() {
  return (
    <div
      className="box-border content-stretch flex flex-row font-['Inter:Regular',_sans-serif] font-normal gap-1 items-center justify-start leading-[0] not-italic p-0 relative shrink-0 text-left text-nowrap w-full"
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

function TitleAndStatus2() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-2 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Title and status"
    >
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#111111] text-[14px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">SCHEDULED</p>
      </div>
      <Title2 />
    </div>
  );
}

function Icons6() {
  return (
    <div className="relative shrink-0 size-7" data-name="Icons">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 28 28"
      >
        <g id="Icons">
          <path
            d={svgPaths.p3aa51700}
            fill="var(--fill-0, #2D48BD)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Upper2() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-4 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Upper"
    >
      <TitleAndStatus2 />
      <Icons6 />
    </div>
  );
}

function Card2() {
  return (
    <div
      className="bg-[rgba(0,0,0,0.05)] relative rounded-3xl shrink-0 w-full"
      data-name="Card"
    >
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-[24px] relative w-full">
          <Upper2 />
        </div>
      </div>
    </div>
  );
}

function Board() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full"
      data-name="Board"
    >
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-[24px] relative size-full">
          <List1 />
          <Card />
          <Card1 />
          <Card2 />
        </div>
      </div>
    </div>
  );
}

export default function A() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-col items-center justify-start p-0 relative rounded-3xl size-full"
      data-name="A"
    >
      <List />
      <div className="h-0 relative shrink-0 w-full" data-name="Divider">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 360 1"
          >
            <line
              id="Divider"
              stroke="var(--stroke-0, black)"
              strokeOpacity="0.1"
              x2="360"
              y1="0.5"
              y2="0.5"
            />
          </svg>
        </div>
      </div>
      <Board />
    </div>
  );
}