import imgBgArt5Png from "figma:asset/c9409509c1751a1d4a62612d79d28896a1c65aab.png";
import imgUxdigoFavicon from "figma:asset/78b0abff2f6aea46477ad1cc6e1336a344909729.png";
import imgRodrigoAvatar from "figma:asset/536348351d2b6fffb0be4983d10057d66341cb73.png";
import { useLanguage, LanguageProvider } from './contexts/LanguageContext';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { LanguageSelector } from './components/LanguageSelector';
import { Button } from './components/Button';
import { Container } from './components/Container';
import { ProjectCard } from './components/ProjectCard';
import { SalesSection } from './components/SalesSection';
import { WidgetSection } from './components/WidgetSection';
import { RiskSection } from './components/RiskSection';
import { Linkedin } from 'lucide-react';

function WinkingEmoji() {
  return (
    <span className="inline-block w-5 h-5 ml-1 align-text-bottom">
      <svg
        className="w-full h-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g clipPath="url(#clip0_1_128)">
          <circle cx="9" cy="9" r="9" fill="#FFCC4D" />
          <path d="M6 7C6 6.45 5.55 6 5 6S4 6.45 4 7" stroke="#664500" strokeWidth="1" fill="none" />
          <circle cx="13" cy="7" r="1" fill="#664500" />
          <path d="M6 11C7 12 8 12.5 9 12.5S11 12 12 11" stroke="#664500" strokeWidth="1" fill="none" />
        </g>
        <defs>
          <clipPath id="clip0_1_128">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </span>
  );
}

function Header() {
  const { t } = useLanguage();
  
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <header className="bg-white sticky top-0 z-50 border-b border-gray-100">
      <Container>
        <div className="flex items-center justify-between py-4 md:py-6">
          <div className="flex items-center">
            <ImageWithFallback 
              src={imgUxdigoFavicon} 
              alt="UXDigo" 
              className="w-8 h-8 md:w-10 md:h-10 object-contain"
            />
          </div>
          
          <nav className="flex items-center gap-4">
            <button 
              onClick={scrollToContact}
              className="text-sm md:text-base text-[#111111] hover:text-[#2d48bd] transition-colors"
            >
              {t.contact}
            </button>
            <LanguageSelector />
          </nav>
        </div>
      </Container>
    </header>
  );
}

function HeroSection() {
  const { t } = useLanguage();
  
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <section className="bg-white py-16 md:py-24">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8 order-2 lg:order-1">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#111111] leading-tight mb-6">
                {t.heroTitle1}<br />
                {t.heroTitle2}
              </h1>
              
              <div className="text-lg md:text-xl text-[#111111] leading-relaxed">
                <p>
                  {t.heroDescription1} {t.heroDescription2} {t.heroDescription3}
                  <WinkingEmoji />
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <Button onClick={scrollToProjects} size="lg">
                {t.myProjects}
              </Button>
              <Button onClick={scrollToContact} variant="secondary" size="lg">
                {t.contact}
              </Button>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="aspect-square w-full max-w-lg mx-auto lg:max-w-none">
              <ImageWithFallback 
                src={imgBgArt5Png} 
                alt="UX Design Illustration" 
                className="w-full h-full object-contain rounded-3xl"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function ProjectsSection() {
  const { t } = useLanguage();
  
  const handshakeMetrics = [
    { value: t.significantReduction, label: t.operationCosts, variant: 'negative' as const },
    { value: t.significantIncrease, label: t.userTrustHandshake, variant: 'positive' as const },
    { value: t.notableReduction, label: t.savedPerMonth, variant: 'negative' as const },
    { value: t.significantImprovement, label: t.eventDocumentation, variant: 'positive' as const }
  ];
  
  const salesMetrics = [
    { value: t.substantialImprovement, label: t.contactRate, variant: 'positive' as const },
    { value: t.considerableImprovement, label: t.dispatchRate, variant: 'positive' as const },
    { value: t.significantReduction, label: t.solvedProblems, variant: 'negative' as const },
    { value: t.significantImprovement, label: t.userSatisfaction, variant: 'positive' as const }
  ];
  
  const widgetMetrics = [
    { value: t.substantialImprovement, label: t.internalManagement, variant: 'positive' as const },
    { value: t.considerableImprovement, label: t.packageDispatch, variant: 'positive' as const },
    { value: t.significantIncrease, label: t.userTrust, variant: 'positive' as const },
    { value: t.notableReduction, label: t.reducedContacts, variant: 'negative' as const }
  ];
  
  const riskMetrics = [
    { value: t.consolidation, label: t.documentStandardization, variant: 'positive' as const },
    { value: t.substantialImprovement, label: t.processAgility, variant: 'positive' as const },
    { value: t.notableImprovement, label: t.toolUnification, variant: 'positive' as const },
    { value: t.significantReduction, label: t.accidentPotential, variant: 'negative' as const }
  ];
  
  return (
    <section id="projects" className="bg-white py-16 md:py-24">
      <Container>
        <div className="mb-16 md:mb-20">
          <div className="flex items-center gap-6">
            <div className="flex-shrink-0">
              <h2 className="text-sm md:text-base text-gray-400 font-medium tracking-widest uppercase">
                {t.projectsTitle}
              </h2>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-gray-200 to-transparent"></div>
          </div>
        </div>
        
        <div className="space-y-32">
          <ProjectCard
            title={t.handshakeTitle}
            description={[
              `${t.handshakeDescription1} ${t.handshakeDescription2} ${t.handshakeDescription3} ${t.handshakeDescription4}`
            ]}
            process={[
              `${t.handshakeProcess1} ${t.handshakeProcess2} ${t.handshakeProcess3} ${t.handshakeProcess4}`
            ]}
            metrics={handshakeMetrics}
            imagePosition="right"
            hasPrototype={true}
          />
          
          <SalesSection
            title={t.salesTitle}
            description={`${t.salesDescription1} ${t.salesDescription2} ${t.salesDescription3} ${t.salesDescription4}`}
            description2={t.salesDescription5}
            metrics={salesMetrics}
          />
          
          <WidgetSection
            title={t.widgetTitle}
            description={`${t.widgetDescription1} ${t.widgetDescription2} ${t.widgetDescription3} ${t.widgetDescription4}`}
            metrics={widgetMetrics}
          />
          
          <RiskSection
            title={t.riskTitle}
            description={`${t.riskDescription1} ${t.riskDescription2} ${t.riskDescription3} ${t.riskDescription4}`}
            metrics={riskMetrics}
          />
        </div>
        
        <div className="mt-16 md:mt-20 pt-8 border-t border-gray-100">
          <p className="text-sm text-gray-400 text-center max-w-2xl mx-auto leading-relaxed">
            {t.prototypesDisclaimer}
          </p>
        </div>
      </Container>
    </section>
  );
}

function AboutSection() {
  const { t } = useLanguage();
  
  return (
    <section id="about" className="bg-gray-50 py-16 md:py-24">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-1">
            <div className="aspect-square w-full max-w-sm mx-auto lg:max-w-md">
              <ImageWithFallback 
                src={imgRodrigoAvatar} 
                alt="Rodrigo Avatar" 
                className="w-full h-full object-cover rounded-3xl shadow-2xl"
              />
            </div>
          </div>
          
          <div className="order-2 space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-6">
                {t.aboutTitle}
              </h2>
              
              <div className="text-lg md:text-xl text-[#111111] leading-relaxed space-y-6">
                <p>
                  {t.aboutParagraph1}
                </p>
                <p>
                  {t.aboutParagraph2}
                </p>
                <p>
                  {t.aboutParagraph3}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function ContactSection() {
  const { t } = useLanguage();
  
  const handleContact = () => {
    window.open('https://www.linkedin.com/in/rodrigochavesmagalhaes/', '_blank');
  };
  
  return (
    <section id="contact" className="bg-white py-16 md:py-24">
      <Container>
        <div className="max-w-2xl">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-6">
                {t.contactTitle}
              </h2>
              
              <div className="text-lg md:text-xl text-[#111111] leading-relaxed">
                <p>
                  {t.contactDescription1} {t.contactDescription2} {t.contactDescription3}
                </p>
              </div>
            </div>
            
            <div>
              <Button onClick={handleContact} size="lg">
                {t.chatOnLinkedIn}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Footer() {
  const { t } = useLanguage();
  
  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/rodrigochavesmagalhaes/', '_blank');
  };
  
  return (
    <footer className="bg-white border-t border-gray-100 py-8">
      <Container>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <ImageWithFallback 
              src={imgUxdigoFavicon} 
              alt="UXDigo" 
              className="w-12 h-12 md:w-16 md:h-16 object-contain"
            />
          </div>
          
          <button
            onClick={handleLinkedInClick}
            className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 text-gray-400 hover:text-gray-600 transition-colors duration-200"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-6 h-6 md:w-8 md:h-8" />
          </button>
        </div>
      </Container>
    </footer>
  );
}

function AppContent() {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}