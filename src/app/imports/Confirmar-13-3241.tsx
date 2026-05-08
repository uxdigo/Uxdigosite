import svgPaths from "./svg-juzgyc1dn4";

function Icons() {
  return (
    <div className="absolute left-3 size-14 top-3" data-name="Icons">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 56 56"
      >
        <g clipPath="url(#clip0_13_3249)" id="Icons">
          <g id="Vector"></g>
          <path
            d={svgPaths.p24e38f80}
            fill="var(--fill-0, #6C9434)"
            id="Vector_2"
          />
        </g>
        <defs>
          <clipPath id="clip0_13_3249">
            <rect fill="white" height="56" width="56" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame14() {
  return (
    <div className="bg-[rgba(108,148,52,0.1)] overflow-clip relative rounded-[100px] shrink-0 size-20">
      <Icons />
    </div>
  );
}

function Frame15() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2 items-center justify-start leading-[0] not-italic p-0 relative shrink-0 text-left text-nowrap">
      <div className="font-['Inter',_sans-serif] font-semibold relative shrink-0 text-[#111111] text-[24px]">
        <p className="block leading-[normal] text-nowrap whitespace-pre">
          Pickup confirmed
        </p>
      </div>
      <div className="font-['Inter',_sans-serif] font-normal relative shrink-0 text-[#000000] text-[18px]">
        <p className="block leading-[24px] text-nowrap whitespace-pre">
          E-mail sent to the administrator
        </p>
      </div>
    </div>
  );
}

function Body() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full"
      data-name="Body"
    >
      <div className="flex flex-col items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-6 items-center justify-center p-[20px] relative size-full">
          <Frame14 />
          <Frame15 />
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
      <Body />
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
              Close
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

export default function Confirmar() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative rounded-3xl size-full"
      data-name="Confirmar"
    >
      <Screen />
      <ActionArea />
    </div>
  );
}