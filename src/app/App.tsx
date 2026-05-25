import imgBgArt5Png from "figma:asset/c9409509c1751a1d4a62612d79d28896a1c65aab.png";
import imgUxdigoFavicon from "figma:asset/78b0abff2f6aea46477ad1cc6e1336a344909729.png";
import imgRodrigoAvatar from "figma:asset/536348351d2b6fffb0be4983d10057d66341cb73.png";
import { useState, useEffect } from 'react';
import { useLanguage, LanguageProvider, Language } from './contexts/LanguageContext';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { LanguageSelector } from './components/LanguageSelector';
import { FlagIcon } from './components/FlagIcon';
import { Button } from './components/Button';
import { Container } from './components/Container';
import { ProjectSegmentedCard } from './components/ProjectSegmentedCard';
import { HandshakePrototype } from './components/HandshakePrototype';
import { OneBipPrototype } from './components/OneBipPrototype';
import { PickupWidget } from './components/PickupWidget';
import { SalesPrototype } from './components/SalesPrototype';
import { RiskPrototype } from './components/RiskPrototype';
import { Linkedin, Menu, X } from 'lucide-react';
import { FloatingNav } from './components/FloatingNav';

function WinkingEmoji() {
  return (
    <span className="inline-block w-5 h-5 ml-1 align-text-bottom">
      <svg className="w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
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

function MobileDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { t, language, changeLanguage } = useLanguage();

  const langs: { code: Language; label: string; flag: 'br' | 'gb' | 'es' }[] = [
    { code: 'pt', label: 'Português', flag: 'br' },
    { code: 'en', label: 'English', flag: 'gb' },
    { code: 'es', label: 'Español', flag: 'es' },
  ];

  const drawerGroups = [
    { id: 'hero', label: language === 'en' ? 'Home' : language === 'es' ? 'Inicio' : 'Início', children: null as null | { id: string; label: string }[] },
    {
      id: 'projects',
      label: language === 'en' ? 'Projects' : language === 'es' ? 'Proyectos' : 'Projetos',
      children: [
        { id: 'project-handshake', label: t.handshakeTitle },
        { id: 'project-onebip', label: 'One Bip' },
        { id: 'project-sales', label: t.salesTitle },
        { id: 'project-widget', label: t.widgetTitle },
        { id: 'project-risk', label: t.riskTitle },
      ],
    },
    { id: 'about', label: t.aboutTitle, children: null as null | { id: string; label: string }[] },
    { id: 'contact', label: t.contactTitle, children: null as null | { id: string; label: string }[] },
  ];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    onClose();
  };

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <div className={['fixed inset-0 z-[60]', open ? 'pointer-events-auto' : 'pointer-events-none'].join(' ')}>
      <div
        className={['absolute inset-0 bg-black/30 transition-opacity duration-300', open ? 'opacity-100' : 'opacity-0'].join(' ')}
        onClick={onClose}
      />
      <div
        className={[
          'absolute right-0 top-0 h-full w-72 bg-white shadow-2xl flex flex-col transition-transform duration-300',
          open ? 'translate-x-0' : 'translate-x-full',
        ].join(' ')}
      >
        <div className="flex items-center justify-end px-4 py-4 border-b border-gray-50">
          <button onClick={onClose} className="p-1 text-gray-400 hover:text-gray-700">
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto">
          <div className="px-5 py-4 border-b border-gray-100">
            <p className="text-[10px] font-semibold tracking-widest uppercase text-gray-400 mb-3">
              {language === 'en' ? 'Language' : 'Idioma'}
            </p>
            <div className="flex flex-col gap-1">
              {langs.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  className={[
                    'flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors',
                    language === lang.code ? 'bg-blue-50 text-[#2d48bd] font-semibold' : 'text-gray-600 hover:bg-gray-50',
                  ].join(' ')}
                >
                  <FlagIcon country={lang.flag} className="w-5 h-5" />
                  {lang.label}
                </button>
              ))}
            </div>
          </div>
          <div className="px-5 py-4">
            <p className="text-[10px] font-semibold tracking-widest uppercase text-gray-400 mb-3">
              {language === 'en' ? 'Navigation' : language === 'es' ? 'Navegación' : 'Navegação'}
            </p>
            <div className="flex flex-col">
              {drawerGroups.map((item) => (
                <div key={item.id}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className="w-full text-left py-2.5 text-sm font-medium text-gray-700 hover:text-[#2d48bd] transition-colors"
                  >
                    {item.label}
                  </button>
                  {item.children && (
                    <div className="ml-3 pl-3 border-l-2 border-gray-100 mb-1">
                      {item.children.map((child) => (
                        <button
                          key={child.id}
                          onClick={() => scrollTo(child.id)}
                          className="w-full text-left py-1.5 text-xs text-gray-400 hover:text-[#2d48bd] transition-colors"
                        >
                          {child.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DesktopHeader() {
  const { t } = useLanguage();
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <header className="hidden md:block bg-white sticky top-0 z-50 border-b border-gray-100">
      <Container>
        <div className="flex items-center justify-between py-6">
          <ImageWithFallback src={imgUxdigoFavicon} alt="UXDigo" className="w-10 h-10 object-contain" />
          <nav className="flex items-center gap-4">
            <button onClick={scrollToContact} className="text-base text-[#111111] hover:text-[#2d48bd] transition-colors">
              {t.contact}
            </button>
            <LanguageSelector />
          </nav>
        </div>
      </Container>
    </header>
  );
}

function MobileHeader() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (y <= 10) {
        setVisible(true);
      } else if (y < lastY - 2) {
        setVisible(true);
      } else if (y > lastY + 2) {
        setVisible(false);
      }
      lastY = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <div className="md:hidden h-[57px]" />
      <header
        className={[
          'md:hidden fixed top-0 left-0 right-0 z-50',
          'bg-white border-b border-gray-100 transition-transform duration-300',
          visible ? 'translate-y-0' : '-translate-y-full',
        ].join(' ')}
      >
        <Container>
          <div className="flex items-center justify-between py-4">
            <ImageWithFallback src={imgUxdigoFavicon} alt="UXDigo" className="w-8 h-8 object-contain" />
            <button onClick={() => setDrawerOpen(true)} className="p-1 text-[#111111]" aria-label="Menu">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </Container>
      </header>
      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}

function Header() {
  return (
    <>
      <DesktopHeader />
      <MobileHeader />
    </>
  );
}

function HeroSection() {
  const { t } = useLanguage();
  const scrollToProjects = () => { document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); };
  const scrollToContact = () => { document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); };
  return (
    <section id="hero" className="bg-white py-16 md:py-24">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8 order-2 lg:order-1">
            <div>
              <h1 className="text-5xl font-black text-[#111111] leading-tight mb-6">{t.heroTitle}</h1>
              <div className="text-lg md:text-xl text-[#111111] leading-relaxed"><p>{t.heroDescription}</p></div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <Button onClick={scrollToProjects} size="lg">{t.myProjects}</Button>
              <Button onClick={scrollToContact} variant="secondary" size="lg">{t.contact}</Button>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="aspect-square w-full max-w-lg mx-auto lg:max-w-none">
              <ImageWithFallback src={imgBgArt5Png} alt="UX Design Illustration" className="w-full h-full object-contain rounded-3xl" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function ProjectsSection() {
  const { t } = useLanguage();
  return (
    <section id="projects" className="bg-white py-16 md:py-24">
      <Container>
        <div className="mb-16 md:mb-20">
          <div className="flex items-center gap-6">
            <div className="flex-shrink-0">
              <h2 className="text-sm md:text-base text-gray-400 font-medium tracking-widest uppercase">{t.projectsTitle}</h2>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-gray-200 to-transparent"></div>
          </div>
        </div>
        <div className="space-y-32">
          <div id="project-handshake">
            <ProjectSegmentedCard title={t.handshakeTitle} client="mercado-livre" context={t.handshakeContext} problem={t.handshakeProblem} process={t.handshakeProcessTab} challenges={t.handshakeChallenges} results={t.handshakeResults} imagePosition="right" prototypeSlot={<HandshakePrototype />} prototypeType="interactive" />
          </div>
          <div id="project-onebip">
            <ProjectSegmentedCard title="One Bip" client="mercado-livre" context={t.oneBipContext} problem={t.oneBipProblem} process={t.oneBipProcessTab} challenges={t.oneBipChallenges} results={t.oneBipResults} imagePosition="right" prototypeSlot={<OneBipPrototype />} prototypeType="interactive" />
          </div>
          <div id="project-sales">
            <ProjectSegmentedCard title={t.salesTitle} client="mercado-livre" context={t.salesContext} problem={t.salesProblem} process={t.salesProcessTab} challenges={t.salesChallenges} results={t.salesResults} imagePosition="below" prototypeSlot={<SalesPrototype />} prototypeType="demonstrative" />
          </div>
          <div id="project-widget">
            <ProjectSegmentedCard title={t.widgetTitle} client="mercado-livre" context={t.widgetContext} problem={t.widgetProblem} process={t.widgetProcessTab} challenges={t.widgetChallenges} results={t.widgetResults} imagePosition="right" prototypeSlot={<PickupWidget />} prototypeType="interactive" />
          </div>
          <div id="project-risk">
            <ProjectSegmentedCard title={t.riskTitle} client="vale" context={t.riskContext} problem={t.riskProblem} process={t.riskProcessTab} challenges={t.riskChallenges} results={t.riskResults} imagePosition="right" prototypeSlot={<RiskPrototype />} prototypeType="demonstrative" />
          </div>
        </div>
        <div className="mt-16 md:mt-20 pt-8 border-t border-gray-100">
          <p className="text-sm text-gray-400 text-center max-w-2xl mx-auto leading-relaxed">{t.prototypesDisclaimer}</p>
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
              <ImageWithFallback src={imgRodrigoAvatar} alt="Rodrigo Avatar" className="w-full h-full object-cover rounded-3xl shadow-2xl" />
            </div>
          </div>
          <div className="order-2 space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-6">{t.aboutTitle}</h2>
              <div className="text-base md:text-lg text-[#111111] leading-relaxed space-y-6">
                <p>{t.aboutParagraph1}</p>
                <p>{t.aboutParagraph2}</p>
                <p>{t.aboutParagraph3}</p>
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
  const handleContact = () => { window.open('https://www.linkedin.com/in/rodrigochavesmagalhaes/', '_blank'); };
  return (
    <section id="contact" className="bg-white py-16 md:py-24">
      <Container>
        <div className="max-w-2xl">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-6">{t.contactTitle}</h2>
              <div className="text-lg md:text-xl text-[#111111] leading-relaxed"><p>{t.contactDescription}</p></div>
            </div>
            <div>
              <Button onClick={handleContact} size="lg">{t.chatOnLinkedIn}</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Footer() {
  const { t } = useLanguage();
  const handleLinkedInClick = () => { window.open('https://www.linkedin.com/in/rodrigochavesmagalhaes/', '_blank'); };
  return (
    <footer className="bg-white border-t border-gray-100 py-12 md:py-8">
      <Container>
        <div className="grid grid-cols-[auto_1fr_auto] items-center gap-6">
          <button
            onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex items-center"
            aria-label="Voltar ao início"
          >
            <ImageWithFallback src={imgUxdigoFavicon} alt="UXDigo" className="w-8 h-8 md:w-16 md:h-16 object-contain" />
          </button>
          <p className="text-xs text-gray-400 text-center leading-relaxed">{t.footerCredit}</p>
          <div className="flex justify-end">
            <button
              onClick={handleLinkedInClick}
              className="flex items-center justify-center w-8 h-8 md:w-16 md:h-16 text-gray-400 hover:text-gray-600 transition-colors duration-200"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5 md:w-8 md:h-8" />
            </button>
          </div>
        </div>
      </Container>
    </footer>
  );
}

function AppContent() {
  return (
    <div className="bg-white min-h-screen overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingNav />
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
