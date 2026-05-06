import { useLanguage } from '../contexts/LanguageContext';
import { RiskPrototype } from './RiskPrototype';
import { ProjectBadges } from './Badges';

interface RiskSectionProps {
  title: string;
  description: string;
  metrics: Array<{
    value: string;
    label: string;
    variant: 'positive' | 'negative' | 'neutral';
  }>;
}

export function RiskSection({ title, description, metrics }: RiskSectionProps) {
  const { t } = useLanguage();
  
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-stretch">
      {/* Content */}
      <div className="w-full">
        <div className="flex flex-col h-full">
          <div className="flex flex-col gap-4 mb-6">
            <div className="flex items-center gap-3">
              <ProjectBadges client="vale" prototypeText={t.demonstrativePrototype} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111]">
              {title}
            </h2>
          </div>
          
          <div className="space-y-4 text-base md:text-lg text-[#111111] leading-relaxed mb-8">
            <p>{description}</p>
          </div>
          
          {/* Metrics em grid simples */}
          {metrics.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {metrics.map((metric, index) => (
                <div key={index} className="p-4 border border-gray-200 rounded-lg">
                  <div className="text-sm font-medium text-gray-600 mb-2 leading-tight">
                    {metric.value}
                  </div>
                  <div className="text-base font-bold text-gray-900 leading-relaxed">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Interactive Risk Prototype */}
      <div className="w-full">
        <div className="w-full flex items-center justify-center py-8" style={{ minHeight: '650px', height: 'auto' }}>
          <RiskPrototype />
        </div>
      </div>
    </div>
  );
}