import imgUxdigoFavicon from "figma:asset/78b0abff2f6aea46477ad1cc6e1336a344909729.png";
import { useNavigate } from 'react-router';
import { useLanguage, LanguageProvider } from '../../contexts/LanguageContext';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { LanguageSelector } from '../../components/LanguageSelector';
import { BackButton } from '../../components/BackButton';
import { ImagePlaceholder } from '../../components/ImagePlaceholder';
import { Container } from '../../components/Container';
import { OneBipPrototype } from '../../components/OneBipPrototype';
import { Linkedin } from 'lucide-react';

function Header() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  return (
    <header className="bg-white sticky top-0 z-50 border-b border-gray-100">
      <Container>
        <div className="flex items-center justify-between py-4 md:py-5">
          <div className="flex items-center gap-4">
            <button onClick={() => navigate('/')}>
              <ImageWithFallback src={imgUxdigoFavicon} alt="UXDigo" className="w-8 h-8 object-contain" />
            </button>
            <span className="text-gray-300">|</span>
            <BackButton label={t.backToProjects} />
          </div>
          <LanguageSelector />
        </div>
      </Container>
    </header>
  );
}

function KpiChip({ value, label }: { value: string; label: string; variant?: 'positive' | 'negative' }) {
  return (
    <div className="flex flex-col gap-1 p-4 border border-gray-200 rounded-xl">
      <span className="text-xs font-semibold uppercase tracking-wide text-gray-500">
        {value}
      </span>
      <span className="text-sm font-medium text-gray-800 leading-snug">{label}</span>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-8">
      <Container>
        <div className="flex items-center justify-between">
          <ImageWithFallback src={imgUxdigoFavicon} alt="UXDigo" className="w-10 h-10 object-contain" />
          <button
            onClick={() => window.open('https://www.linkedin.com/in/rodrigochavesmagalhaes/', '_blank')}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </button>
        </div>
      </Container>
    </footer>
  );
}

function OneBipContent() {
  const { t } = useLanguage();

  const kpis = [
    { value: t.significantReduction, label: t.oneBipCollectionTime, variant: 'negative' as const },
    { value: t.substantialImprovement, label: t.oneBipGrouping, variant: 'positive' as const },
    { value: t.considerableImprovement, label: t.oneBipDriverExperience, variant: 'positive' as const },
    { value: t.significantIncrease, label: t.oneBipOperationalVisibility, variant: 'positive' as const },
  ];

  return (
    <div className="bg-white min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-white pt-12 pb-8 md:pt-20 md:pb-12">
          <Container>
            <div className="max-w-3xl space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#111111] leading-tight">
                One Bip
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl">
                {t.oneBipDescription}
              </p>
            </div>
          </Container>
        </section>

        {/* KPIs */}
        <section className="bg-white pb-12 md:pb-16">
          <Container>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {kpis.map((kpi, i) => <KpiChip key={i} {...kpi} />)}
            </div>
          </Container>
        </section>

        {/* Context images */}
        <section className="bg-gray-50 py-12 md:py-20">
          <Container>
            <div className="space-y-6">
              <h2 className="text-xl md:text-2xl font-bold text-[#111111]">{t.contextAndDiscovery}</h2>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl whitespace-pre-line">
                {t.oneBipProcess}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                <ImagePlaceholder label={t.feasibilityAnalysis} aspectRatio="16/9" />
                <ImagePlaceholder label={t.useCaseMapping} aspectRatio="16/9" />
                <ImagePlaceholder label={t.designSystemAdaptation} aspectRatio="16/9" />
                <ImagePlaceholder label={t.handoffAndIterations} aspectRatio="16/9" />
              </div>
            </div>
          </Container>
        </section>

        {/* Prototype */}
        <section className="bg-white py-12 md:py-20">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-xl md:text-2xl font-bold text-[#111111]">{t.interactivePrototype}</h2>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  {t.oneBipPrototypeNote}
                </p>
              </div>
              <div className="flex justify-center">
                <div className="w-full max-w-sm">
                  <OneBipPrototype />
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default function OneBipPage() {
  return (
    <LanguageProvider>
      <OneBipContent />
    </LanguageProvider>
  );
}
