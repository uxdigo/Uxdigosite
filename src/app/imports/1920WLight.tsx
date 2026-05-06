import svgPaths from "./svg-0lb1t5vyed";
import imgBgArt5Png from "figma:asset/c9409509c1751a1d4a62612d79d28896a1c65aab.png";
import imgFigureHsImageOk41024X1024Png from "figma:asset/5dc4a86fb0bee7124bb76c33675a8d56dd153240.png";
import imgSallesOk81024X410Png from "figma:asset/3ca6db42a14e054be039d6b34e1524548e48c3b2.png";
import imgUxdigoFavicon from "figma:asset/df1cdf7bebb373e5aa10fa4949fbe0fa2130dbee.png";

function Heading1() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start max-w-[672px] p-0 relative shrink-0 w-full"
      data-name="Heading 1"
    >
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[69px] not-italic relative shrink-0 text-[#111111] text-[60px] text-left tracking-[-1.2px] w-full">
        <p className="block mb-0">Welcome to my UX</p>
        <p className="block">Space</p>
      </div>
    </div>
  );
}

function Component1F609Svg() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="1f609.svg">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g clipPath="url(#clip0_1_128)" id="1f609.svg">
          <path
            d={svgPaths.p3e1e800}
            fill="var(--fill-0, #FFCC4D)"
            id="Vector"
          />
          <path
            d={svgPaths.p33d49500}
            fill="var(--fill-0, #664500)"
            id="Vector_2"
          />
          <path
            d={svgPaths.p3cf8b600}
            fill="var(--fill-0, #664500)"
            id="Vector_3"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_128">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Component1F609SvgFill() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-center overflow-clip p-0 relative shrink-0 size-[18px]"
      data-name="1f609.svg fill"
    >
      <Component1F609Svg />
    </div>
  );
}

function Component() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row items-start justify-start left-[358.97px] overflow-clip p-0 size-[18px] top-[61.39px]"
      data-name="😉"
    >
      <Component1F609SvgFill />
    </div>
  );
}

function Container() {
  return (
    <div
      className="h-[86.39px] max-w-[672px] relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[87px] justify-center leading-[28.8px] left-0 not-italic text-[#111111] text-[18px] text-left top-[42.295px] translate-y-[-50%] w-[510.171px]">
        <p className="block mb-0">
          A space where I blend human-centered design with data,
        </p>
        <p className="block mb-0">
          business goals and AI to create smarter experiences. By the
        </p>
        <p className="block">{`way, I’m Rodrigo, but you can call me Digo. `}</p>
      </div>
      <Component />
    </div>
  );
}

function Link() {
  return (
    <div
      className="bg-[#2d48bd] box-border content-stretch flex flex-row items-start justify-center px-[25.994px] py-[14.006px] relative rounded-[32px] shrink-0"
      data-name="Link"
    >
      <button className="[white-space-collapse:collapse] cursor-pointer flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[18px] text-center text-nowrap">
        <p className="block leading-[28.8px] whitespace-pre">My projects</p>
      </button>
    </div>
  );
}

function Container1() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <Link />
    </div>
  );
}

function Container2() {
  return (
    <div
      className="[flex-flow:wrap] box-border content-center flex gap-0 items-center justify-start max-w-[672px] pb-0 pt-4 px-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container1 />
    </div>
  );
}

function Container3() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-8 items-start justify-start p-0 relative shrink-0 w-[512px]"
      data-name="Container"
    >
      <Heading1 />
      <Container />
      <Container2 />
    </div>
  );
}

function BgArt5Png() {
  return (
    <div
      className="[background-size:100%_100%] bg-no-repeat bg-top-left max-w-[640px] rounded-3xl shrink-0 size-[640px]"
      data-name="bg-art-5.png"
      style={{ backgroundImage: `url('${imgBgArt5Png}')` }}
    />
  );
}

function Figure() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start max-w-[672px] p-0 relative shrink-0 w-[640px]"
      data-name="Figure"
    >
      <BgArt5Png />
    </div>
  );
}

function Container4() {
  return (
    <div
      className="max-w-[1280px] relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-row items-center justify-center max-w-inherit relative size-full">
        <div className="box-border content-stretch flex flex-row gap-28 items-center justify-center max-w-inherit pl-0 pr-4 py-0 relative w-full">
          <Container3 />
          <Figure />
        </div>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div
      className="bg-[#ffffff] relative shrink-0 w-full"
      data-name="Background"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start pb-24 pt-8 px-80 relative w-full">
          <Container4 />
        </div>
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start max-w-[672px] p-0 relative shrink-0 w-full"
      data-name="Heading 2"
    >
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#111111] text-[48px] text-left tracking-[-0.96px] w-full">
        <p className="block leading-[55.2px]">Handshake</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start max-w-[672px] p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[28.8px] not-italic relative shrink-0 text-[#111111] text-[18px] text-left text-nowrap w-full whitespace-pre">
        <p className="block mb-0">
          Product designed to reduce or eliminate fraud in Mercado
        </p>
        <p className="block mb-0">
          Livre’s package pickup process. It enables a data verification
        </p>
        <p className="block mb-0">
          flow between the seller and the driver, ensuring data integrity,
        </p>
        <p className="block">
          user satisfaction, and safety for everyone involved.
        </p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start max-w-[672px] pb-0 pt-[15.995px] px-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[28.8px] not-italic relative shrink-0 text-[#111111] text-[18px] text-left w-full">
        <p className="block mb-0">
          Throughout the design process, we conducted several
        </p>
        <p className="block mb-0">
          workshops, interviews, and usability tests. The solution was
        </p>
        <p className="block mb-0">
          crafted with great care and attention to detail to deliver accurate
        </p>
        <p className="block">
          information within an extremely dynamic context.
        </p>
      </div>
    </div>
  );
}

function Overlay() {
  return (
    <div
      className="bg-[rgba(0,0,0,0.02)] relative rounded-3xl shrink-0 w-full"
      data-name="Overlay"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[14.7px] items-start justify-start px-12 py-24 relative w-full">
          <Heading2 />
          <Container5 />
          <Container6 />
        </div>
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start max-w-[672px] p-0 relative shrink-0 w-full"
      data-name="Heading 3"
    >
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#2d48bd] text-[36px] text-left tracking-[-0.72px] w-full">
        <p className="block leading-[41.4px]">+$XM USD</p>
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start max-w-[672px] p-0 relative shrink-0 w-full"
      data-name="Heading 3"
    >
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#111111] text-[20px] text-left tracking-[-0.4px] w-full">
        <p className="block leading-[23px]">Saved per month</p>
      </div>
    </div>
  );
}

function Overlay1() {
  return (
    <div
      className="bg-[rgba(0,0,0,0.02)] relative rounded-3xl shrink-0 w-full"
      data-name="Overlay"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start pb-8 pt-[31px] px-6 relative w-full">
          <Heading3 />
          <Heading4 />
        </div>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px p-0 relative self-stretch shrink-0"
      data-name="Container"
    >
      <Overlay1 />
    </div>
  );
}

function Heading5() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start max-w-[672px] p-0 relative shrink-0 w-full"
      data-name="Heading 3"
    >
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#2d48bd] text-[36px] text-left tracking-[-0.72px] w-full">
        <p className="block leading-[41.4px]">-X%</p>
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start max-w-[672px] p-0 relative shrink-0 w-full"
      data-name="Heading 3"
    >
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#111111] text-[20px] text-left tracking-[-0.4px] w-full">
        <p className="block leading-[23px]">Contact rate</p>
      </div>
    </div>
  );
}

function Overlay2() {
  return (
    <div
      className="bg-[rgba(0,0,0,0.02)] relative rounded-3xl shrink-0 w-full"
      data-name="Overlay"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start pb-8 pt-[31px] px-6 relative w-full">
          <Heading5 />
          <Heading6 />
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px p-0 relative self-stretch shrink-0"
      data-name="Container"
    >
      <Overlay2 />
    </div>
  );
}

function Container9() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-8 items-start justify-center p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container7 />
      <Container8 />
    </div>
  );
}

function Container10() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-8 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Container"
    >
      <Overlay />
      <Container9 />
    </div>
  );
}

function FigureHsImageOk41024X1024Png() {
  return (
    <div
      className="[background-size:100%_100%] bg-no-repeat bg-top-left max-w-[624px] shrink-0 size-[624px]"
      data-name="Figure → HS-image-OK-4-1024x1024.png"
      style={{ backgroundImage: `url('${imgFigureHsImageOk41024X1024Png}')` }}
    />
  );
}

function Overlay3() {
  return (
    <div
      className="basis-0 bg-[rgba(0,0,0,0.02)] box-border content-stretch flex flex-col grow items-center justify-start min-h-px min-w-px px-0 py-8 relative rounded-3xl self-stretch shrink-0"
      data-name="Overlay"
    >
      <FigureHsImageOk41024X1024Png />
    </div>
  );
}

function Container11() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-8 items-start justify-center max-w-[1280px] p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container10 />
      <Overlay3 />
    </div>
  );
}

function BackgroundHorizontalBorder() {
  return (
    <div
      className="bg-[#ffffff] relative shrink-0 w-full"
      data-name="Background+HorizontalBorder"
    >
      <div className="absolute border-[#ffffff] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start pb-[97px] pt-8 px-80 relative w-full">
          <Container11 />
        </div>
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start max-w-[672px] p-0 relative shrink-0 w-full"
      data-name="Heading 2"
    >
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#111111] text-[48px] text-left tracking-[-0.96px] w-full">
        <p className="block leading-[55.2px]">Sales section</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start max-w-[672px] p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[28.8px] not-italic relative shrink-0 text-[#111111] text-[18px] text-left w-full">
        <p className="block mb-0">
          I worked on improving the seller’s sales section by restructuring it
          into a self-
        </p>
        <p className="block mb-0">
          management system with clearer task organization and prioritization.
        </p>
        <p className="block mb-0">
          My focus was on designing scalable logic and flows that adapt to a
          fast-paced
        </p>
        <p className="block">
          environment — whether it’s a solo seller or a high-volume operation.
        </p>
      </div>
    </div>
  );
}

function SallesOk81024X410Png() {
  return (
    <div
      className="[background-size:100%_100%] bg-[0%_49.96%] bg-no-repeat h-[269.06px] max-w-[672px] rounded-3xl shrink-0 w-[672px]"
      data-name="Salles-OK-8-1024x410.png"
      style={{ backgroundImage: `url('${imgSallesOk81024X410Png}')` }}
    />
  );
}

function Figure1() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Figure"
    >
      <SallesOk81024X410Png />
    </div>
  );
}

function Overlay4() {
  return (
    <div
      className="basis-0 bg-[rgba(0,0,0,0.02)] box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px p-0 relative rounded-3xl self-stretch shrink-0"
      data-name="Overlay"
    >
      <Figure1 />
    </div>
  );
}

function Container13() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-center max-w-[672px] pb-0 pt-[17.3px] px-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Overlay4 />
    </div>
  );
}

function Overlay5() {
  return (
    <div
      className="bg-[rgba(0,0,0,0.02)] box-border content-stretch flex flex-col gap-[14.7px] items-start justify-start px-12 py-24 relative rounded-3xl shrink-0 w-[768px]"
      data-name="Overlay"
    >
      <Heading7 />
      <Container12 />
      <Container13 />
    </div>
  );
}

function Heading8() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start max-w-[672px] p-0 relative shrink-0 w-full"
      data-name="Heading 3"
    >
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#2d48bd] text-[36px] text-left tracking-[-0.72px] w-full">
        <p className="block leading-[41.4px]">+X%</p>
      </div>
    </div>
  );
}

function Heading9() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start max-w-[672px] p-0 relative shrink-0 w-full"
      data-name="Heading 3"
    >
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#111111] text-[20px] text-left tracking-[-0.4px] w-full">
        <p className="block leading-[23px]">Dispatch rate on time</p>
      </div>
    </div>
  );
}

function Overlay6() {
  return (
    <div
      className="bg-[rgba(0,0,0,0.02)] relative rounded-3xl shrink-0 w-full"
      data-name="Overlay"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start pb-8 pt-[31px] px-6 relative w-full">
          <Heading8 />
          <Heading9 />
        </div>
      </div>
    </div>
  );
}

function Heading10() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start max-w-[672px] p-0 relative shrink-0 w-full"
      data-name="Heading 3"
    >
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#2d48bd] text-[36px] text-left tracking-[-0.72px] w-full">
        <p className="block leading-[41.4px]">+X%</p>
      </div>
    </div>
  );
}

function Heading11() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start max-w-[672px] p-0 relative shrink-0 w-full"
      data-name="Heading 3"
    >
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#111111] text-[20px] text-left tracking-[-0.4px] w-full">
        <p className="block leading-[23px]">Solved problems</p>
      </div>
    </div>
  );
}

function Overlay7() {
  return (
    <div
      className="bg-[rgba(0,0,0,0.02)] relative rounded-3xl shrink-0 w-full"
      data-name="Overlay"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start pb-8 pt-[31px] px-6 relative w-full">
          <Heading10 />
          <Heading11 />
        </div>
      </div>
    </div>
  );
}

function Heading12() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start max-w-[672px] p-0 relative shrink-0 w-full"
      data-name="Heading 3"
    >
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#2d48bd] text-[36px] text-left tracking-[-0.72px] w-full">
        <p className="block leading-[41.4px]">+X%</p>
      </div>
    </div>
  );
}

function Heading13() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start max-w-[672px] p-0 relative shrink-0 w-full"
      data-name="Heading 3"
    >
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#111111] text-[20px] text-left tracking-[-0.4px] w-full">
        <p className="block leading-[23px]">User satisfaction</p>
      </div>
    </div>
  );
}

function Overlay8() {
  return (
    <div
      className="bg-[rgba(0,0,0,0.02)] relative rounded-3xl shrink-0 w-full"
      data-name="Overlay"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[16.01px] items-start justify-start pb-[31.99px] pt-[31px] px-6 relative w-full">
          <Heading12 />
          <Heading13 />
        </div>
      </div>
    </div>
  );
}

function Heading14() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start max-w-[672px] p-0 relative shrink-0 w-full"
      data-name="Heading 3"
    >
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#2d48bd] text-[36px] text-left tracking-[-0.72px] w-full">
        <p className="block leading-[41.4px]">-X%</p>
      </div>
    </div>
  );
}

function Heading15() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start max-w-[672px] p-0 relative shrink-0 w-full"
      data-name="Heading 3"
    >
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#111111] text-[20px] text-left tracking-[-0.4px] w-full">
        <p className="block leading-[23px]">Contact rate</p>
      </div>
    </div>
  );
}

function Overlay9() {
  return (
    <div
      className="bg-[rgba(0,0,0,0.02)] relative rounded-3xl shrink-0 w-full"
      data-name="Overlay"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start pb-8 pt-[31px] px-6 relative w-full">
          <Heading14 />
          <Heading15 />
        </div>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-8 items-start justify-start p-0 relative shrink-0 w-[480px]"
      data-name="Container"
    >
      <Overlay6 />
      <Overlay7 />
      <Overlay8 />
      <Overlay9 />
    </div>
  );
}

function Container15() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-8 items-start justify-center max-w-[1280px] p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Overlay5 />
      <Container14 />
    </div>
  );
}

function BackgroundHorizontalBorder1() {
  return (
    <div
      className="bg-[#ffffff] relative shrink-0 w-full"
      data-name="Background+HorizontalBorder"
    >
      <div className="absolute border-[#ffffff] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start pb-[97px] pt-8 px-80 relative w-full">
          <Container15 />
        </div>
      </div>
    </div>
  );
}

function Heading16() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start max-w-[672px] p-0 relative shrink-0 w-full"
      data-name="Heading 2"
    >
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#111111] text-[36px] text-left text-nowrap tracking-[-0.72px]">
        <p className="adjustLetterSpacing block leading-[41.4px] whitespace-pre">
          Contact me
        </p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start max-w-[672px] pb-[0.59px] pt-0 px-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[28.8px] not-italic relative shrink-0 text-[#111111] text-[18px] text-left text-nowrap whitespace-pre">
        <p className="block mb-0">
          If my work resonated with you and you believe I can help improve your
          product or
        </p>
        <p className="block mb-0">
          your users’ experience, I’d love to hear from you. Let’s build
          something
        </p>
        <p className="block">meaningful together.</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[14.8px] items-start justify-start order-2 p-0 relative shrink-0"
      data-name="Container"
    >
      <Heading16 />
      <Container16 />
    </div>
  );
}

function Link1() {
  return (
    <div
      className="bg-[#2d48bd] box-border content-stretch flex flex-row items-start justify-center px-[25.994px] py-[14.006px] relative rounded-[32px] shrink-0"
      data-name="Link"
    >
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[18px] text-center text-nowrap">
        <p className="block leading-[28.8px] whitespace-pre">Contact</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <Link1 />
    </div>
  );
}

function Container19() {
  return (
    <div
      className="[flex-flow:wrap] box-border content-center flex gap-0 items-center justify-end order-1 p-0 relative shrink-0"
      data-name="Container"
    >
      <Container18 />
    </div>
  );
}

function Container20() {
  return (
    <div
      className="[flex-flow:row-reverse_wrap] box-border content-center flex items-center justify-between max-w-[1280px] p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container17 />
      <Container19 />
    </div>
  );
}

function Background1() {
  return (
    <div
      className="bg-[#ffffff] relative shrink-0 w-full"
      data-name="Background"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start pb-24 pt-[95px] px-80 relative w-full">
          <Container20 />
        </div>
      </div>
    </div>
  );
}

function Main() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 p-0 right-0 top-[107px]"
      data-name="Main"
    >
      <Background />
      <BackgroundHorizontalBorder />
      <BackgroundHorizontalBorder1 />
      <Background1 />
    </div>
  );
}

function Link2() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start px-0 py-[0.5px] relative shrink-0"
      data-name="Link"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#111111] text-[16px] text-left text-nowrap tracking-[-0.32px]">
        <p className="adjustLetterSpacing block leading-[18.4px] whitespace-pre">
          uxdigo
        </p>
      </div>
    </div>
  );
}

function Heading17() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Heading 1"
    >
      <Link2 />
    </div>
  );
}

function Svg() {
  return (
    <div className="relative shrink-0 size-9" data-name="SVG">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 36 36"
      >
        <g id="SVG">
          <path
            d={svgPaths.p4b7200}
            fill="var(--fill-0, #111111)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Link3() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0"
      data-name="Link"
    >
      <Svg />
    </div>
  );
}

function Item() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative rounded-[9999px] shrink-0"
      data-name="Item"
    >
      <Link3 />
    </div>
  );
}

function List() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-end p-0 relative shrink-0"
      data-name="List"
    >
      <Item />
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div
      className="[flex-flow:wrap] box-border content-center flex gap-8 items-center justify-center max-w-[1280px] pb-0 pt-[33px] px-0 relative shrink-0 w-full"
      data-name="HorizontalBorder"
    >
      <div className="absolute border-[1px_0px_0px] border-[rgba(204,204,204,0.65)] border-solid inset-0 pointer-events-none" />
      <Heading17 />
      <List />
    </div>
  );
}

function FooterFooter() {
  return (
    <div
      className="absolute bg-[#ffffff] box-border content-stretch flex flex-col items-start justify-start left-0 pb-8 pt-16 px-80 right-0 top-[2850.17px]"
      data-name="Footer → Footer"
    >
      <HorizontalBorder />
    </div>
  );
}

function UxdigoFavicon() {
  return (
    <div
      className="[background-size:100%_100%] bg-no-repeat bg-top-left max-h-[42px] max-w-[42px] shrink-0 size-[42px]"
      data-name="uxdigo favicon"
      style={{ backgroundImage: `url('${imgUxdigoFavicon}')` }}
    />
  );
}

function Link4() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0"
      data-name="Link"
    >
      <UxdigoFavicon />
    </div>
  );
}

function Container21() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <Link4 />
    </div>
  );
}

function Container22() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start pl-0 pr-4 py-0 relative shrink-0"
      data-name="Container"
    >
      <Container21 />
    </div>
  );
}

function Link5() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start pb-[0.59px] pt-0 px-0 relative shrink-0"
      data-name="Link"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#111111] text-[16px] text-left text-nowrap">
        <p className="block leading-[25.6px] whitespace-pre">Contact</p>
      </div>
    </div>
  );
}

function ListItem() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0"
      data-name="List → Item"
    >
      <Link5 />
    </div>
  );
}

function Container23() {
  return (
    <div
      className="[flex-flow:wrap] box-border content-center flex gap-0 items-center justify-end p-0 relative shrink-0"
      data-name="Container"
    >
      <ListItem />
    </div>
  );
}

function Container24() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <Container23 />
    </div>
  );
}

function NavNavegacaoDoCabecalho() {
  return (
    <div
      className="[flex-flow:wrap] box-border content-center flex gap-0 items-center justify-end p-0 relative shrink-0"
      data-name="Nav - Navegação do cabeçalho"
    >
      <Container24 />
    </div>
  );
}

function Header() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-between max-w-[1280px] p-0 relative shrink-0 w-full"
      data-name="Header"
    >
      <Container22 />
      <NavNavegacaoDoCabecalho />
    </div>
  );
}

function Header1() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-col items-start justify-start pb-[33px] pointer-events-auto pt-8 px-80 sticky top-0"
      data-name="Header"
    >
      <div className="absolute border-[0px_0px_1px] border-[rgba(133,133,133,0.12)] border-solid inset-0 pointer-events-none" />
      <Header />
    </div>
  );
}

export default function Component1920WLight() {
  return (
    <div className="bg-[#ffffff] relative size-full" data-name="1920w light">
      <Main />
      <FooterFooter />
      <div className="absolute inset-0 pointer-events-none">
        <Header1 />
      </div>
    </div>
  );
}