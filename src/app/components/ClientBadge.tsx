import MercadoLibreBadge from "../imports/Badge-19-243";
import ValeBadge from "../imports/Badge-19-250";

interface ClientBadgeProps {
  client: 'mercado-livre' | 'vale';
}

export function ClientBadge({ client }: ClientBadgeProps) {
  const clientData = {
    'mercado-livre': {
      component: MercadoLibreBadge,
      tooltip: 'Mercado Livre'
    },
    'vale': {
      component: ValeBadge,
      tooltip: 'Vale'
    }
  };

  const { component: BadgeComponent, tooltip } = clientData[client];

  return (
    <div className="flex items-center gap-2 border border-gray-200 rounded-full px-3 py-1.5 w-fit">
      <div className="h-5 w-5 shrink-0">
        <BadgeComponent />
      </div>
      <span className="text-xs font-medium text-gray-500 tracking-wide">
        {tooltip}
      </span>
    </div>
  );
}