import { HandshakePrototype } from './HandshakePrototype';
import { useLanguage } from '../contexts/LanguageContext';
import { ProjectBadges } from './Badges';

interface Metric {
  value: string;
  label: string;
  variant: 'positive' | 'negative';
}

interface ProjectCardProps {
  title: string;
  description: string[];
  process: string[];
  metrics: Metric[];
  imagePosition: 'left' | 'right';
  hasPrototype: boolean;
}

export function ProjectCard({ 
  title, 
  description, 
  process, 
  metrics, 
  imagePosition,
  hasPrototype
}: ProjectCardProps) {
  const { t } = useLanguage();
  
  const content = (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center gap-3">
        <ProjectBadges client="mercado-livre" prototypeText={t.interactivePrototype} />
      </div>
      
      <div>
        <h3 className="text-2xl md:text-3xl font-bold text-[#111111] mb-6">
          {title}
        </h3>
        
        <div className="space-y-4 text-base md:text-lg text-[#111111] leading-relaxed">
          {description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        
        <div className="mt-6 space-y-4 text-base md:text-lg text-[#111111] leading-relaxed">
          {process.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {metrics.map((metric, index) => (
          <div key={index} className="p-4 border border-gray-200 rounded-lg">
            <div className={`text-sm font-medium mb-2 ${
              metric.variant === 'positive' ? 'text-gray-600' : 'text-gray-600'
            }`}>
              {metric.value}
            </div>
            <div className="text-base font-bold text-gray-900 leading-relaxed">
              {metric.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const prototypeElement = hasPrototype && (
    <div className="w-full h-full">
      <HandshakePrototype />
    </div>
  );

  if (imagePosition === 'left') {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <div className="order-2 lg:order-1">
          {prototypeElement}
        </div>
        
        <div className="order-1 lg:order-2">
          {content}
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
      <div>
        {content}
      </div>
      
      <div className="w-full h-full">
        {prototypeElement}
      </div>
    </div>
  );
}