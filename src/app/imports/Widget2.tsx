import svgPaths from "./svg-wk0qvof3t3";

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
        <p className="block leading-[22px]">Today</p>
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
    <div
      className="basis-0 bg-[rgba(0,0,0,0.05)] grow min-h-px min-w-px relative rounded-3xl shrink-0"
      data-name="List"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-5 py-4 relative w-full">
          <Text1 />
          <Icons3 />
        </div>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-2 grow items-start justify-center min-h-px min-w-px p-0 relative shrink-0"
      data-name="Text"
    >
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#111111] text-[16px] text-left w-full">
        <p className="block leading-[22px]">Finished</p>
      </div>
    </div>
  );
}

function Icons5() {
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

function List2() {
  return (
    <div
      className="basis-0 bg-[rgba(0,0,0,0.05)] grow min-h-px min-w-px relative rounded-3xl shrink-0"
      data-name="List"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-5 py-4 relative w-full">
          <Text2 />
          <Icons5 />
        </div>
      </div>
    </div>
  );
}

function Filter() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-4 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Filter"
    >
      <List1 />
      <List2 />
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
          08-09 PM
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
      <Title />
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
      className="box-border content-stretch flex flex-row gap-4 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Upper"
    >
      <TitleAndStatus />
      <Icons6 />
    </div>
  );
}

function Text3() {
  return (
    <div
      className="box-border content-stretch flex flex-col font-['Inter:Regular',_sans-serif] font-normal gap-2 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-[#000000] text-[16px] text-left w-full"
      data-name="Text"
    >
      <div className="relative shrink-0 w-full">
        <p className="block leading-[22px]">
          The pickup was successfully completed.
        </p>
      </div>
      <div className="relative shrink-0 w-full">
        <p className="block leading-[22px]">We collected 208 packages.</p>
      </div>
      <div className="relative shrink-0 w-full">
        <p className="block leading-[22px]">
          You can download the pickup receipt to see more details.
        </p>
      </div>
    </div>
  );
}

function TextUpper() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Text + Upper"
    >
      <Upper />
      <Text3 />
    </div>
  );
}

function Icons7() {
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
            d={svgPaths.p14d60300}
            fill="var(--fill-0, white)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div
      className="bg-[#2d48bd] h-[51px] relative rounded-3xl shrink-0 w-full"
      data-name="Button"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-[51px] items-center justify-center px-6 py-4 relative w-full">
          <Icons7 />
          <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[16px] text-center text-nowrap tracking-[0.32px]">
            <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">
              Pick up receipt
            </p>
          </div>
        </div>
      </div>
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
        <div className="box-border content-stretch flex flex-col gap-6 items-start justify-start p-[24px] relative w-full">
          <TextUpper />
          <Button />
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
          09-10 AM
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
      <Title1 />
    </div>
  );
}

function Icons8() {
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
      className="box-border content-stretch flex flex-row gap-4 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Upper"
    >
      <TitleAndStatus1 />
      <Icons8 />
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

function Board() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full"
      data-name="Board"
    >
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-[24px] relative size-full">
          <Filter />
          <Card />
          <Card1 />
        </div>
      </div>
    </div>
  );
}

export default function Widget2() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-col items-center justify-start p-0 relative rounded-3xl size-full"
      data-name="Widget 2"
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