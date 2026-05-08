import svgPaths from "./svg-wckvkle1zf";

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
              Pickup details
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Title() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-left w-full"
      data-name="Title"
    >
      <div className="font-['Inter',_sans-serif] font-semibold relative shrink-0 text-[#000000] text-[24px] w-full">
        <p className="block leading-[normal]">Review and confirm</p>
      </div>
      <div className="font-['Inter',_sans-serif] font-normal relative shrink-0 text-[14px] text-[rgba(17,17,17,0.5)] w-full">
        <p className="block leading-[20px]">09:40 AM - April 12</p>
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
        <p className="block leading-[24px]">185 packages</p>
      </div>
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
        <g clipPath="url(#clip0_5_633)" id="Icons">
          <g id="Vector" opacity="0.87"></g>
          <path
            d={svgPaths.p35ac2d80}
            fill="var(--fill-0, #2D48BD)"
            id="Vector_2"
          />
        </g>
        <defs>
          <clipPath id="clip0_5_633">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function List() {
  return (
    <div
      className="bg-[rgba(0,0,0,0.05)] relative rounded-3xl shrink-0 w-full"
      data-name="List"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-[20px] relative w-full">
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
      <div className="font-['Inter',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#111111] text-[18px] text-left w-full">
        <p className="block leading-[24px]">7 packages pending</p>
      </div>
    </div>
  );
}

function Icons3() {
  return (
    <div className="relative shrink-0 size-6" data-name="Icons">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g clipPath="url(#clip0_5_633)" id="Icons">
          <g id="Vector" opacity="0.87"></g>
          <path
            d={svgPaths.p35ac2d80}
            fill="var(--fill-0, #2D48BD)"
            id="Vector_2"
          />
        </g>
        <defs>
          <clipPath id="clip0_5_633">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function List1() {
  return (
    <div
      className="bg-[rgba(0,0,0,0.05)] relative shrink-0 w-full"
      data-name="List"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-[20px] relative w-full">
          <Text1 />
          <Icons3 />
        </div>
      </div>
    </div>
  );
}

function Icons4() {
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

function Text2() {
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

function List2() {
  return (
    <div
      className="bg-[rgba(179,37,37,0.1)] relative rounded-xl shrink-0 w-full"
      data-name="List"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-5 py-4 relative w-full">
          <Icons4 />
          <Text2 />
        </div>
      </div>
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
        <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start pb-4 pt-0 px-5 relative w-full">
          <List2 />
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
      <List1 />
      <Message />
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
          <Title />
          <List />
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

function Button() {
  return (
    <div
      className="bg-[#2d48bd] relative rounded-3xl shrink-0 w-full"
      data-name="Button"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center px-6 py-4 relative w-full">
          <div className="font-['Inter',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[18px] text-center text-nowrap tracking-[0.36px]">
            <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">
              Confirm
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button1() {
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
          <Button />
          <Button1 />
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