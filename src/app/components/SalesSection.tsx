import { SalesPrototype } from './SalesPrototype';
import { useLanguage } from '../contexts/LanguageContext';
import { ProjectBadges } from './Badges';

interface SalesMetric {
  value: string;
  label: string;
  variant: 'positive' | 'negative' | 'neutral';
}

interface SalesSectionProps {
  title: string;
  description: string;
  description2?: string;
  metrics: SalesMetric[];
}

export function SalesSection({ 
  title, 
  description, 
  description2,
  metrics
}: SalesSectionProps) {
  const { t } = useLanguage();
  
  return (
    <div className="space-y-8">
      {/* Content */}
      <div className="w-full">
        <div className="flex flex-col">
          <div className="flex flex-col gap-4 mb-6">
            <div className="flex items-center gap-3">
              <ProjectBadges client="mercado-livre" prototypeText={t.demonstrativePrototype} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111]">
              {title}
            </h2>
          </div>
          
          <div className="space-y-4 text-base md:text-lg text-[#111111] leading-relaxed">
            <p>{description}</p>
            {description2 && <p>{description2}</p>}
          </div>
          
          {/* Metrics em grid simples */}
          {metrics.length > 0 && (
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
      
      {/* Interactive Sales Prototype - Positioned Below */}
      <div className="w-full flex justify-center">
        <div className="w-full flex items-center justify-center py-8">
          <SalesPrototype />
        </div>
      </div>
    </div>
  );
}