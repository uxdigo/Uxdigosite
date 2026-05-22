import type { ReactNode } from 'react';

const SVG_CHEVRON_LEFT = "M10.4725 0.3675C9.9825 -0.1225 9.1925 -0.1225 8.7025 0.3675L0.2925 8.7775C-0.0975 9.1675 -0.0975 9.7975 0.2925 10.1875L8.7025 18.5975C9.1925 19.0875 9.9825 19.0875 10.4725 18.5975C10.9625 18.1075 10.9625 17.3175 10.4725 16.8275L3.1325 9.4875L10.4825 2.1375C10.9625 1.6475 10.9625 0.8575 10.4725 0.3675Z";
const SVG_DOTS = "M2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4ZM2 6C0.9 6 0 6.9 0 8C0 9.1 0.9 10 2 10C3.1 10 4 9.1 4 8C4 6.9 3.1 6 2 6ZM2 12C0.9 12 0 12.9 0 14C0 15.1 0.9 16 2 16C3.1 16 4 15.1 4 14C4 12.9 3.1 12 2 12Z";
const SVG_CLOSE = "M12.8925 0.3025C12.5025 -0.0874998 11.8725 -0.0874998 11.4825 0.3025L6.5925 5.1825L1.7025 0.2925C1.3125 -0.0975 0.6825 -0.0975 0.2925 0.2925C-0.0975 0.6825 -0.0975 1.3125 0.2925 1.7025L5.1825 6.5925L0.2925 11.4825C-0.0975 11.8725 -0.0975 12.5025 0.2925 12.8925C0.6825 13.2825 1.3125 13.2825 1.7025 12.8925L6.5925 8.0025L11.4825 12.8925C11.8725 13.2825 12.5025 13.2825 12.8925 12.8925C13.2825 12.5025 13.2825 11.8725 12.8925 11.4825L8.0025 6.5925L12.8925 1.7025C13.2725 1.3225 13.2725 0.6825 12.8925 0.3025Z";

export function PrototypePhoneFrame({
  children,
  className = '',
  isTransitioning = false,
}: {
  children: ReactNode;
  className?: string;
  isTransitioning?: boolean;
}) {
  return (
    <div
      className={`relative w-[360px] max-w-full h-[600px] mx-auto transition-all duration-150 ease-in-out shadow-[0_8px_30px_rgba(0,0,0,0.12)] rounded-3xl overflow-hidden bg-white ${isTransitioning ? 'opacity-50' : 'opacity-100'} ${className}`}
    >
      {children}
    </div>
  );
}

export function PrototypeHeader({
  title,
  onBack,
  showBack = false,
  showMenu = false,
}: {
  title: string;
  onBack?: () => void;
  showBack?: boolean;
  showMenu?: boolean;
}) {
  return (
    <div className="bg-[#ffe600] h-14 relative shrink-0 w-full">
      <div className="flex items-center h-full px-6 relative w-full">
        {showBack ? (
          <button
            onClick={onBack}
            className="absolute left-6 size-6 flex items-center justify-center hover:opacity-70 transition-opacity"
          >
            <svg className="size-full" fill="none" viewBox="0 0 20 20">
              <path d={SVG_CHEVRON_LEFT} fill="#111111" />
            </svg>
          </button>
        ) : (
          <div className="absolute left-6 size-6 opacity-0" />
        )}
        <p className="flex-1 text-[#111111] text-[20px] font-normal leading-[26px] text-center">
          {title}
        </p>
        {showMenu ? (
          <button className="absolute right-6 size-6 flex items-center justify-center opacity-40">
            <svg className="size-full" fill="none" viewBox="0 0 4 16">
              <path d={SVG_DOTS} fill="#111111" />
            </svg>
          </button>
        ) : (
          <div className="absolute right-6 size-6 opacity-0" />
        )}
      </div>
    </div>
  );
}

export function PrototypePrimaryButton({
  label,
  onClick,
  disabled = false,
}: {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`relative rounded-3xl shrink-0 w-full transition-colors duration-200 ${
        disabled
          ? 'bg-[#9aa7df] cursor-not-allowed'
          : 'bg-[#2d48bd] hover:bg-[#2640a3] active:bg-[#223a95]'
      }`}
    >
      <div className="flex items-center justify-center px-6 py-4">
        <p className="text-white text-lg font-semibold tracking-[0.36px] whitespace-nowrap">
          {label}
        </p>
      </div>
    </button>
  );
}

export function PrototypeSecondaryButton({
  label,
  onClick,
}: {
  label: string;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="bg-[rgba(45,72,189,0.25)] relative rounded-3xl shrink-0 w-full hover:bg-[rgba(45,72,189,0.35)] active:bg-[rgba(45,72,189,0.42)] transition-colors duration-200"
    >
      <div className="flex items-center justify-center px-6 py-4">
        <p className="text-[#2d48bd] text-lg font-semibold tracking-[0.36px] whitespace-nowrap">
          {label}
        </p>
      </div>
    </button>
  );
}

export function PrototypeBottomSheet({
  title,
  children,
  cta,
  onClose,
}: {
  title: string;
  children: ReactNode;
  cta?: ReactNode;
  onClose: () => void;
}) {
  return (
    <div
      onClick={onClose}
      className="absolute inset-0 bg-[rgba(17,17,17,0.3)] rounded-3xl overflow-hidden z-20"
      style={{ animation: 'prototypeBottomSheetScrimIn 90ms linear both' }}
    >
      <style>
        {`
          @keyframes prototypeBottomSheetScrimIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          @keyframes prototypeBottomSheetIn {
            from {
              opacity: 0.96;
              transform: translateY(100%);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
      <div
        onClick={(event) => event.stopPropagation()}
        className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl"
        style={{
          animation: 'prototypeBottomSheetIn 180ms cubic-bezier(0, 0, 0.2, 1) 35ms both',
          willChange: 'transform',
        }}
      >
        <div className="flex flex-col p-5 gap-6">
          <div className="flex items-start justify-between">
            <p className="text-xl font-semibold text-[#111111]">{title}</p>
            <button
              onClick={onClose}
              className="size-6 flex items-center justify-center"
            >
              <svg className="size-[14px]" fill="none" viewBox="0 0 14 14">
                <path d={SVG_CLOSE} fill="#111111" />
              </svg>
            </button>
          </div>
          {children}
        </div>
        {cta ? <div className="px-5 pb-5">{cta}</div> : null}
      </div>
    </div>
  );
}
