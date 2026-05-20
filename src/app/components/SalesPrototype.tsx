import svgPaths from "../imports/svg-fch20ohsl7";
import { useLanguage } from '../contexts/LanguageContext';

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
      className="bg-[rgba(0,0,0,0.05)] box-border content-stretch flex flex-col gap-4 items-start justify-start overflow-clip p-[24px] relative rounded-3xl flex-1 min-w-[200px]"
      data-name="Card"
    >
      <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full">
        <div className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full">
          <div className="font-['Inter',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[14px] text-left text-nowrap" style={{ color: statusColor }}>
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
            <div className="font-['Inter',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#111111] text-[13px] text-left text-nowrap">
              <p className="block leading-[18px] whitespace-pre">{item.label}</p>
            </div>
            <div className="bg-[rgba(0,0,0,0.05)] box-border content-stretch flex flex-row gap-2 items-center justify-center min-w-[29px] px-2 py-1 relative rounded-[100px] shrink-0 ml-6">
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
  const { t, language } = useLanguage();

  function formatPickupTime(startHour: number, endHour: number) {
    if (language === 'pt') return `${startHour}h - ${endHour}h`;
    if (language === 'es') return `${startHour}hs - ${endHour}hs`;
    const period = startHour >= 12 ? 'PM' : 'AM';
    const start12 = startHour > 12 ? startHour - 12 : startHour;
    const end12 = endHour > 12 ? endHour - 12 : endHour;
    return `${start12}-${end12} ${period}`;
  }

  const cards = [
    {
      status: t.salesOnTheWay,
      statusColor: '#6c9434',
      count: '132',
      time: formatPickupTime(10, 11),
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
      time: formatPickupTime(13, 14),
      statusBadge: t.pickup.toUpperCase(),
      items: [
        { label: t.salesBuyerMessage, value: '1' },
        { label: t.salesInvoicePending, value: '9' },
        { label: t.salesLabelPending, value: '49' },
        { label: t.salesReadyToShip, value: '30' }
      ]
    },
    {
      status: t.scheduled.toUpperCase(),
      statusColor: '#111111',
      count: '57',
      time: formatPickupTime(16, 17),
      statusBadge: t.pickup.toUpperCase(),
      items: [
        { label: t.salesBuyerMessage, value: '2' },
        { label: t.salesInvoicePending, value: '4' },
        { label: t.salesLabelPending, value: '21' },
        { label: t.salesReadyToShip, value: '30' }
      ]
    },
    {
      status: t.salesPending.toUpperCase(),
      statusColor: '#111111',
      count: '32',
      time: t.salesFlexTime,
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
    <div className="relative shrink-0 w-full" data-name="Cards section">
      <div className="box-border content-stretch flex flex-row gap-6 items-start justify-start p-[24px] w-full">
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
      className="bg-[#ffffff] relative rounded-[24px] w-full max-w-[1180px] h-[420px] shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
      style={{ overflow: 'clip' }}
      data-name="Sales prototype"
    >
      <div
        className="relative w-full h-full overscroll-x-contain"
        style={{ overflowX: 'auto', overflowY: 'hidden' }}
      >
        <div className="flex flex-col h-full w-full">
          <TopBar />
          <CardsSection />
        </div>
      </div>
    </div>
  );
}
