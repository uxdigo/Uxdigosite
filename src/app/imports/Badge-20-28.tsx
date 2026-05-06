import imgImage13 from "figma:asset/483bc1c7d1a08c5f76f0e719586c55579a206afe.png";

export default function Badge() {
  return (
    <div
      className="bg-[#ffffff] relative rounded-[100px] size-full"
      data-name="Badge"
    >
      <div className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <div className="flex flex-col items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2 items-center justify-center px-2 py-1.5 relative size-full">
          <div
            className="bg-center bg-cover bg-no-repeat h-5 shrink-0 w-[29px]"
            data-name="image 13"
            style={{ backgroundImage: `url('${imgImage13}')` }}
          />
        </div>
      </div>
    </div>
  );
}