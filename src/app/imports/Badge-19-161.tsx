import imgImage12 from "figma:asset/4dceaa695116ed1f213c53d69942dca5442c90ff.png";

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
            className="aspect-[4096/3095] bg-center bg-contain bg-no-repeat shrink-0 w-full"
            data-name="image 12"
            style={{ backgroundImage: `url('${imgImage12}')` }}
          />
        </div>
      </div>
    </div>
  );
}