import svgPaths from "./svg-g53j3frsrh";

function Icons() {
  return (
    <div className="relative shrink-0 size-6" data-name="Icons">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g clipPath="url(#clip0_5_811)" id="Icons">
          <g id="Vector"></g>
          <g id="Group">
            <path
              d={svgPaths.p326f7500}
              fill="var(--fill-0, #111111)"
              id="Vector_2"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_5_811">
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
      className="bg-[#ffe600] h-14 relative shrink-0 w-full"
      data-name="Header"
    >
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-14 items-center justify-center p-[24px] relative w-full">
          <div className="font-['Inter',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#111111] text-[20px] text-center text-nowrap">
            <p className="block leading-[26px] whitespace-pre">
              Pending packages
            </p>
          </div>
          <Icons />
        </div>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-2 grow items-start justify-center min-h-px min-w-px p-0 relative shrink-0"
      data-name="Text"
    >
      <div className="font-['Inter',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#111111] text-[18px] text-left w-full">
        <p className="block leading-[24px]">7 packages</p>
      </div>
    </div>
  );
}

function List() {
  return (
    <div
      className="bg-[rgba(0,0,0,0.05)] relative shrink-0 w-full"
      data-name="List"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-[20px] relative w-full">
          <Text />
        </div>
      </div>
    </div>
  );
}

function List1() {
  return (
    <div
      className="box-border content-stretch flex flex-col font-['Inter',_sans-serif] font-normal gap-4 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-[#000000] text-[14px] text-left"
      data-name="List"
    >
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
  );
}

function ShipIdCol() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0"
      data-name="Ship ID col"
    >
      <div
        className="font-['Inter',_sans-serif] font-normal leading-[0] min-w-full not-italic relative shrink-0 text-[14px] text-[rgba(17,17,17,0.5)] text-left"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[20px]">Ship ID</p>
      </div>
      <List1 />
    </div>
  );
}

function Icons2() {
  return (
    <div className="relative shrink-0 size-4" data-name="Icons">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Icons">
          <path
            d={svgPaths.p1f8bbcc0}
            fill="var(--fill-0, #B32525)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function IconWithLabel() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-end justify-start p-0 relative shrink-0 w-full"
      data-name="Icon with label"
    >
      <Icons2 />
      <div className="font-['Inter',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#111111] text-[14px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">Not ready</p>
      </div>
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
        <g id="Icons">
          <path
            d={svgPaths.p1f8bbcc0}
            fill="var(--fill-0, #B32525)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function IconWithLabel4() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-end justify-start p-0 relative shrink-0 w-full"
      data-name="Icon with label"
    >
      <Icons6 />
      <div className="font-['Inter',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#111111] text-[14px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">Poor condition</p>
      </div>
    </div>
  );
}

function List2() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative shrink-0"
      data-name="List"
    >
      {[...Array(4).keys()].map((_, i) => (
        <IconWithLabel key={i} />
      ))}
      {[...Array(2).keys()].map((_, i) => (
        <IconWithLabel4 key={i} />
      ))}
      <div className="font-['Inter',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#000000] text-[14px] text-left w-full">
        <p className="block leading-[20px]">Vehicle full</p>
      </div>
    </div>
  );
}

function ReasonCol() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0"
      data-name="Reason col"
    >
      <div
        className="font-['Inter',_sans-serif] font-normal leading-[0] min-w-full not-italic relative shrink-0 text-[14px] text-[rgba(17,17,17,0.5)] text-left"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[20px]">Reason</p>
      </div>
      <List2 />
    </div>
  );
}

function Message() {
  return (
    <div
      className="bg-[rgba(0,0,0,0.05)] relative shrink-0 w-full"
      data-name="Message"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row gap-6 items-start justify-start px-5 py-4 relative w-full">
          <ShipIdCol />
          <ReasonCol />
        </div>
      </div>
    </div>
  );
}

function Box() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative rounded-3xl shrink-0 w-full"
      data-name="Box"
    >
      <List />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 320 1"
          >
            <line
              id="Line 1"
              stroke="var(--stroke-0, black)"
              strokeOpacity="0.05"
              x2="320"
              y1="0.5"
              y2="0.5"
            />
          </svg>
        </div>
      </div>
      <Message />
    </div>
  );
}

function Body() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full"
      data-name="Body"
    >
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-6 items-start justify-start p-[20px] relative size-full">
          <Box />
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

function Icons8() {
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
            d={svgPaths.p137a3500}
            fill="var(--fill-0, #B32525)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Text1() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-2 grow items-start justify-center min-h-px min-w-px p-0 relative shrink-0"
      data-name="Text"
    >
      <div className="font-['Inter',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#111111] text-[16px] text-left w-full">
        <p className="block leading-[22px]">Reputation at risk</p>
      </div>
    </div>
  );
}

function List3() {
  return (
    <div
      className="bg-[rgba(179,37,37,0.1)] relative rounded-xl shrink-0 w-full"
      data-name="List"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-5 py-4 relative w-full">
          <Icons8 />
          <Text1 />
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div
      className="bg-[rgba(45,72,189,0.25)] relative rounded-3xl shrink-0 w-full"
      data-name="Button"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center px-6 py-4 relative w-full">
          <div className="font-['Inter',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#2d48bd] text-[18px] text-center text-nowrap tracking-[0.36px]">
            <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">
              Change
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
          <List3 />
          <Button />
        </div>
      </div>
    </div>
  );
}

export default function Faltantes() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative rounded-3xl size-full"
      data-name="Faltantes"
    >
      <Screen />
      <ActionArea />
    </div>
  );
}