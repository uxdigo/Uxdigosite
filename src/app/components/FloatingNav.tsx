import { useState, useEffect, useRef, useCallback } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { AlignJustify, X } from 'lucide-react';

type NavItem =
  | { type: 'section'; id: string; label: string }
  | { type: 'group'; id: string; label: string; children: { id: string; label: string }[] };

export function FloatingNav() {
  const { t, language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isLocked, setIsLocked] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const wrapperRef = useRef<HTMLDivElement>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);


  const navItems: NavItem[] = [
    { type: 'section', id: 'hero', label: language === 'en' ? 'Home' : language === 'es' ? 'Inicio' : 'Início' },
    {
      type: 'group',
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
    { type: 'section', id: 'about', label: t.aboutTitle },
    { type: 'section', id: 'contact', label: t.contactTitle },
  ];

  const allIds = navItems.flatMap((item) =>
    item.type === 'group' ? item.children.map((c) => c.id) : [item.id]
  );

  useEffect(() => {
    const sectionRatios: Record<string, number> = {};
    const observers = allIds.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            sectionRatios[id] = entry.intersectionRatio;
          });
          let maxRatio = 0;
          let currentId = activeSection;
          for (const [sectionId, ratio] of Object.entries(sectionRatios)) {
            if (ratio > maxRatio) {
              maxRatio = ratio;
              currentId = sectionId;
            }
          }
          setActiveSection(currentId);
        },
        { threshold: Array.from({ length: 21 }, (_, i) => i / 20) }
      );
      observer.observe(el);
      return observer;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, [t]);

  const openPanel = useCallback(() => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    setIsOpen(true);
  }, []);

  const scheduleClose = useCallback(() => {
    if (isLocked) return;
    closeTimerRef.current = setTimeout(() => setIsOpen(false), 150);
  }, [isLocked]);

  const handleFabClick = () => {
    if (isLocked) {
      setIsLocked(false);
      setIsOpen(false);
    } else {
      setIsLocked(true);
      setIsOpen(true);
    }
  };

  useEffect(() => {
    if (!isLocked) return;
    const handleOutside = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setIsLocked(false);
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutside);
    return () => document.removeEventListener('mousedown', handleOutside);
  }, [isLocked]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsLocked(false);
    setIsOpen(false);
  };

  const groupItem = navItems.find((i) => i.type === 'group') as Extract<NavItem, { type: 'group' }>;
  const isAnyProjectActive = groupItem?.children.some((c) => c.id === activeSection);

  return (
    <div
      ref={wrapperRef}
      className="hidden md:flex flex-col items-end fixed bottom-8 right-8 z-50"
      onMouseLeave={scheduleClose}
    >
      <div
        className={[
          'mb-3 bg-white rounded-2xl shadow-xl border border-gray-100',
          'overflow-hidden transition-all duration-200 origin-bottom-right',
          isOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none',
        ].join(' ')}
        style={{ minWidth: '196px' }}
        onMouseEnter={openPanel}
      >
        <div className="px-4 pt-4 pb-2 border-b border-gray-50">
          <span className="text-[10px] font-semibold tracking-widest uppercase text-gray-400">
            {language === 'en' ? 'Navigate' : 'Navegar'}
          </span>
        </div>

        <div className="py-2">
          {navItems.map((item) => {
            if (item.type === 'section') {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={[
                    'w-full text-left px-4 py-1.5 flex items-center gap-2.5 text-sm transition-colors duration-150',
                    isActive ? 'text-[#2d48bd] font-semibold' : 'text-gray-500 hover:text-gray-800',
                  ].join(' ')}
                >
                  <span
                    className={[
                      'flex-shrink-0 rounded-full transition-all duration-150',
                      isActive ? 'w-2 h-2 bg-[#2d48bd]' : 'w-1.5 h-1.5 bg-gray-200',
                    ].join(' ')}
                  />
                  <span className="truncate">{item.label}</span>
                </button>
              );
            }

            return (
              <div key={item.id}>
                <button
                  onClick={() => scrollTo('projects')}
                  className={[
                    'w-full text-left px-4 py-1.5 flex items-center gap-2.5 text-sm transition-colors duration-150',
                    isAnyProjectActive ? 'text-[#2d48bd] font-semibold' : 'text-gray-500 hover:text-gray-800',
                  ].join(' ')}
                >
                  <span
                    className={[
                      'flex-shrink-0 rounded-full transition-all duration-150',
                      isAnyProjectActive ? 'w-2 h-2 bg-[#2d48bd]' : 'w-1.5 h-1.5 bg-gray-200',
                    ].join(' ')}
                  />
                  <span className="truncate">{item.label}</span>
                </button>

                <div className="ml-[22px] pl-3 border-l-2 border-gray-100 mb-0.5">
                  {item.children.map((child) => {
                    const isActive = activeSection === child.id;
                    return (
                      <button
                        key={child.id}
                        onClick={() => scrollTo(child.id)}
                        className={[
                          'w-full text-left py-1 flex items-center gap-2 text-xs transition-colors duration-150',
                          isActive ? 'text-[#2d48bd] font-semibold' : 'text-gray-400 hover:text-gray-700',
                        ].join(' ')}
                      >
                        <span
                          className={[
                            'flex-shrink-0 rounded-full transition-all duration-150',
                            isActive ? 'w-1.5 h-1.5 bg-[#2d48bd]' : 'w-1 h-1 bg-gray-300',
                          ].join(' ')}
                        />
                        <span className="truncate">{child.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <button
        onClick={handleFabClick}
        onMouseEnter={openPanel}
        className={[
          'flex items-center gap-2 px-4 py-2.5 rounded-full shadow-lg transition-all duration-200 select-none',
          isLocked
            ? 'bg-[#2d48bd] text-white shadow-blue-200'
            : 'bg-white text-gray-700 border border-gray-100 hover:shadow-md',
        ].join(' ')}
      >
        {isLocked ? <X className="w-4 h-4" /> : <AlignJustify className="w-4 h-4" />}
        <span className="text-sm font-medium">{language === 'en' ? 'Navigate' : 'Navegar'}</span>
      </button>
    </div>
  );
}
