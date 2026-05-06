import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
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
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="h-8 w-14 cursor-pointer transition-transform hover:scale-105">
            <BadgeComponent />
          </div>
        </TooltipTrigger>
        <TooltipContent 
          side="top" 
          className="bg-white border border-gray-200 text-gray-800 px-3 py-2 text-sm font-medium shadow-lg"
        >
          {tooltip}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}