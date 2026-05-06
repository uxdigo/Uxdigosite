import imgImage11 from "figma:asset/731efdf97404bb3910ab54b80d08afa4496f44a0.png";

export default function Badge() {
  return (
    <div
      className="bg-[#ffffff] relative rounded-[100px] size-full"
      data-name="Badge"
    >
      <div className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start px-3 py-2 relative size-full">
          <div
            className="[background-size:350%_120%] aspect-[1505/1042] bg-no-repeat bg-center shrink-0 w-full"
            data-name="image 11"
            style={{ backgroundImage: `url('${imgImage11}')` }}
          />
        </div>
      </div>
    </div>
  );
}