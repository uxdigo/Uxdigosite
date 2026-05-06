import { Badge } from './ui/badge';
import { ClientBadge } from './ClientBadge';

export function PrototypeBadge({ text }: { text: string }) {
  return (
    <Badge 
      variant="outline" 
      className="w-fit bg-gradient-to-r from-gray-50 to-gray-100 border-gray-200 text-gray-600 hover:bg-gradient-to-r hover:from-gray-100 hover:to-gray-150 hover:border-gray-300 transition-all duration-200 px-3 py-1.5 rounded-full"
      style={{ fontSize: '12px', fontWeight: '600' }}
    >
      {text}
    </Badge>
  );
}

interface ProjectBadgesProps {
  client: 'mercado-livre' | 'vale';
  prototypeText: string;
}

export function ProjectBadges({ client, prototypeText }: ProjectBadgesProps) {
  return (
    <div className="flex items-center gap-3">
      <ClientBadge client={client} />
      <PrototypeBadge text={prototypeText} />
    </div>
  );
}