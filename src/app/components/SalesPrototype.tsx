import svgPaths from "../imports/svg-fch20ohsl7";
import { useLanguage } from '../contexts/LanguageContext';
import { useRef, useState, useEffect } from 'react';

function Pill({ value }: { value: string }) {
  return (
    <div
      className="bg-[rgba(45,72,189,0.1)] box-border content-stretch flex flex-row gap-2 items-center justify-center min-w-[29px] px-2 py-1 relative rounded-[100px] shrink-0"
      data-name="Pill"
    >
      <div className="basis-0 font-['Inter',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#2d48bd] text-[14px] text-center">
        <p className="block leading-[20px]">{value}</p>
      </div>
    </div>
  );
}

function PillWithLabel({ label, value }: { label: string; value: string }) {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="Pill with label"
    >
      <div className="font-['Inter',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#111111] text-[16px] text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">{label}</p>
      </div>
      <Pill value={value} />
    </div>
  );
}

function Segment({ label, value, isActive = false }: { label: string; value: string; isActive?: boolean }) {
  return (
    <div
      className={`${isActive ? 'bg-[#ffffff]' : ''} box-border content-stretch flex flex-row gap-2 items-center justify-center px-3 py-2 relative ${isActive ? 'rounded-3xl' : ''} shrink-0`}
      data-name="Segment"
    >
      {isActive && <div className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-3xl" />}
      <PillWithLabel label={label} value={value} />
    </div>
  );
}



function PickupManagementButton() {
  const { t } = useLanguage();
  
  return (
    <div
      className="bg-[rgba(45,72,189,0.25)] box-border content-stretch flex flex-row gap-2 h-11 items-center justify-center px-6 py-4 relative rounded-3xl shrink-0"
      data-name="Button"
    >
      <div className="font-['Inter',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#2d48bd] text-[16px] text-center text-nowrap tracking-[0.32px]">
        <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">
          {t.pickupManagement}
        </p>
      </div>
    </div>
  );
}

function TopBar() {
  const { t } = useLanguage();
  
  return (
    <div
      className="bg-[rgba(0,0,0,0.05)] relative shrink-0 w-full"
      data-name="Top bar"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-[24px] relative w-full">
          <div
            className="bg-[rgba(0,0,0,0.05)] box-border content-stretch flex flex-row gap-1 items-center justify-start p-[8px] relative rounded-3xl shrink-0"
            data-name="Segmented control"
          >
            <div className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-3xl" />
            <Segment label={t.salesToday} value="284" isActive={true} />
            <Segment label={t.salesUpcoming} value="39" />
            <Segment label={t.salesInTransit} value="401" />
            <Segment label={t.salesCompleted} value="935" />
          </div>
          <div className="basis-0 box-border content-stretch flex flex-row gap-4 grow items-center justify-end min-h-px min-w-px p-0 relative shrink-0">
            <PickupManagementButton />
          </div>
        </div>
      </div>
    </div>
  );
}

function StatusCard({ status, statusColor, count, time, statusBadge, items }: {
  status: string;
  statusColor: string;
  count: string;
  time: string;
  statusBadge: string;
  items: Array<{ label: string; value: string }>;
}) {
  return (
    <div
      className="bg-[rgba(0,0,0,0.05)] box-border content-stretch flex flex-col gap-4 items-start justify-start overflow-clip p-[24px] relative rounded-3xl flex-1"
      data-name="Card"
    >
      <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full">
        <div className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full">
          <div className={`font-['Inter',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[14px] text-left text-nowrap`} style={{ color: statusColor }}>
            <p className="block leading-[20px] whitespace-pre">{status}</p>
          </div>
          <Pill value={count} />
        </div>
        <div className="box-border content-stretch flex flex-row font-['Inter',_sans-serif] font-normal gap-1 items-center justify-start leading-[0] not-italic p-0 relative shrink-0 text-left text-nowrap w-full">
          <div className="relative shrink-0 text-[#000000] text-[20px]">
            <p className="block leading-[26px] text-nowrap whitespace-pre">
              {statusBadge}
            </p>
          </div>
          <div className="relative shrink-0 text-[14px] text-[rgba(17,17,17,0.5)]">
            <p className="block leading-[20px] text-nowrap whitespace-pre">
              {time}
            </p>
          </div>
        </div>
      </div>
      
      <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full">
        {items.map((item, index) => (
          <div key={index} className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full">
            <div className="font-['Inter',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#111111] text-[16px] text-left text-nowrap">
              <p className="block leading-[22px] whitespace-pre">{item.label}</p>
            </div>
            <div className="bg-[rgba(0,0,0,0.05)] box-border content-stretch flex flex-row gap-2 items-center justify-center min-w-[29px] px-2 py-1 relative rounded-[100px] shrink-0">
              <div className="basis-0 font-['Inter',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#111111] text-[14px] text-center">
                <p className="block leading-[20px]">{item.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CardsSection() {
  const { t } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Mouse/Touch handlers for drag functionality (only on mobile)
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!isMobile || !scrollRef.current) return;
    
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!isMobile || !scrollRef.current) return;
    
    setIsDragging(true);
    setStartX(e.touches[0].pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMobile || !isDragging || !scrollRef.current) return;
    
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isMobile || !isDragging || !scrollRef.current) return;
    
    const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    if (!isMobile) return;
    setIsDragging(false);
  };

  const handleTouchEnd = () => {
    if (!isMobile) return;
    setIsDragging(false);
  };
  
  const cards = [
    {
      status: t.salesOnTheWay,
      statusColor: '#6c9434',
      count: '132',
      time: '10-11 AM',
      statusBadge: t.pickup.toUpperCase(),
      items: [
        { label: t.salesBuyerMessage, value: '3' },
        { label: t.salesInvoicePending, value: '7' },
        { label: t.salesLabelPending, value: '29' },
        { label: t.salesReadyToShip, value: '93' }
      ]
    },
    {
      status: t.scheduled.toUpperCase(),
      statusColor: '#111111',
      count: '89',
      time: '01-02 PM',
      statusBadge: t.pickup.toUpperCase(),
      items: [
        { label: t.salesBuyerMessage, value: '1' },
        { label: t.salesInvoicePending, value: '9' },
        { label: t.salesLabelPending, value: '49' },
        { label: t.salesReadyToShip, value: '30' }
      ]
    },
    {
      status: t.salesPending.toUpperCase(),
      statusColor: '#111111',
      count: '32',
      time: t.salesUntil4PM,
      statusBadge: 'FLEX',
      items: [
        { label: t.salesBuyerMessage, value: '7' },
        { label: t.salesInvoicePending, value: '2' },
        { label: t.salesLabelPending, value: '12' },
        { label: t.salesReadyToShip, value: '10' }
      ]
    }
  ];
  
  return (
    <div 
      ref={scrollRef}
      className={`relative shrink-0 w-full ${isMobile ? 'overflow-x-hidden cursor-grab active:cursor-grabbing sales-mobile-drag' : 'overflow-x-auto'}`}
      data-name="Cards section"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div 
        className="box-border content-stretch flex flex-row gap-6 items-start justify-start p-[24px] pb-[24px] min-w-max"
        style={{ userSelect: isDragging && isMobile ? 'none' : 'auto' }}
      >
        {cards.map((card, index) => (
          <StatusCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
}

export function SalesPrototype() {
  return (
    <div
      className="bg-[#ffffff] relative rounded-[24px] w-full max-w-[1200px] h-[420px] shadow-[0_8px_30px_rgba(0,0,0,0.12)] overflow-hidden"
      data-name="Sales prototype"
    >
      <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative size-full">
        <TopBar />
        <CardsSection />
      </div>
    </div>
  );
}