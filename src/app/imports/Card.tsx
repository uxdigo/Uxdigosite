import svgPaths from "./svg-1x509csfvd";

function Title() {
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

function Icons() {
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
      <Icons />
    </div>
  );
}

function Text() {
  return (
    <div
      className="box-border content-stretch flex flex-col font-['Inter',_sans-serif] font-normal gap-2 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-[#000000] text-left w-full"
      data-name="Text"
    >
      <div className="relative shrink-0 text-[16px] w-full">
        <p className="block leading-[22px]">
          The pickup was successfully completed.
        </p>
      </div>
      <div className="relative shrink-0 text-[0px] w-full">
        <p className="leading-[22px] text-[16px]">
          <span>{`We collected `}</span>
          <span className="font-['Inter',_sans-serif] font-semibold not-italic">
            208 packages
          </span>
          .
        </p>
      </div>
      <div className="relative shrink-0 text-[16px] w-full">
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
      <Text />
    </div>
  );
}

function Icons1() {
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
          <Icons1 />
          <div className="font-['Inter',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[16px] text-center text-nowrap tracking-[0.32px]">
            <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">
              Pick up receipt
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Card() {
  return (
    <div
      className="bg-[rgba(0,0,0,0.05)] relative rounded-3xl size-full"
      data-name="Card"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-6 items-start justify-start overflow-clip p-[24px] relative size-full">
          <TextUpper />
          <Button />
        </div>
      </div>
    </div>
  );
}