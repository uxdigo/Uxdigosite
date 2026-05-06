import svgPaths from "./svg-a656dp785e";

function Icons() {
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

export default function Button() {
  return (
    <div
      className="bg-[#2d48bd] relative rounded-3xl size-full"
      data-name="Button"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center px-6 py-4 relative size-full">
          <Icons />
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