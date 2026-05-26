import { useState, useEffect, useRef, useCallback } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { AlignJustify, X } from 'lucide-react';

type NavItem =
  | { type: 'section'; id: string; label: string }
  | { type: 'group'; id: string; label: string; children: { id: string; label: string }[] };

const SPRING = 'cubic-bezier(0.34, 1.56, 0.64, 1)';
const FAST   = 'cubic-bezier(0.25, 0, 0.5, 1)';

export function FloatingNav() {
  const { t, language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isLocked, setIsLocked] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const wrapperRef = useRef<HTMLDivElement>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const navItems: NavItem[] = [
    { type: 'section', id: 'hero', label: language === 'en' ? 'Home' : language === 'es' ? 'Inicio' : 'Inicio' },
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
    const el = document.getElementById(id);
    if (el) {
      if (id.startsWith('project-')) {
        const rect = el.getBoundingClientRect();
        const offset = window.scrollY + rect.top - window.innerHeight / 2 + rect.height / 2;
        window.scrollTo({ top: Math.max(0, offset), behavior: 'smooth' });

        const titleEl = el.querySelector('[data-nav-title]') as HTMLElement | null;
        if (titleEl) {
          titleEl.classList.remove('nav-sweep');
          void titleEl.offsetWidth;
          titleEl.classList.add('nav-sweep');
          setTimeout(() => titleEl.classList.remove('nav-sweep'), 2500);
        }
      } else {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsLocked(false);
    setIsOpen(false);
  };

  const groupItem = navItems.find((i) => i.type === 'group') as Extract<NavItem, { type: 'group' }>;
  const isAnyProjectActive = groupItem?.children.some((c) => c.id === activeSection);

  const totalItems = navItems.reduce((acc, item) =>
    acc + (item.type === 'group' ? 1 + item.children.length : 1), 0
  );

  let staggerIdx = 0;
  const itemStyle = (): React.CSSProperties => {
    const delay = isOpen ? (totalItems - 1 - staggerIdx++) * 22 : 0;
    return isOpen
      ? {
          opacity: 1,
          transform: 'translateY(0px)',
          transition: `opacity 200ms ${delay}ms ease-out, transform 280ms ${delay}ms ${SPRING}, color 150ms ease`,
        }
      : {
          opacity: 0,
          transform: 'translateY(6px)',
          transition: 'opacity 80ms ease, transform 80ms ease, color 150ms ease',
        };
  };

  return (
    <div
      ref={wrapperRef}
      className="hidden md:flex flex-col items-end fixed bottom-8 right-8 z-50"
      onMouseLeave={scheduleClose}
    >
      <div
        className="mb-3 bg-white rounded-2xl border border-gray-100 overflow-hidden"
        style={{
          minWidth: '196px',
          transformOrigin: 'bottom right',
          opacity: isOpen ? 1 : 0,
          transform: isOpen ? 'scale(1) translateY(0px)' : 'scale(0.78) translateY(10px)',
          pointerEvents: isOpen ? 'auto' : 'none',
          boxShadow: isOpen
            ? '0 24px 64px -12px rgba(45,72,189,0.18), 0 8px 24px -6px rgba(0,0,0,0.08)'
            : '0 4px 12px rgba(0,0,0,0.04)',
          transition: isOpen
            ? `opacity 280ms ${SPRING}, transform 380ms ${SPRING}, box-shadow 320ms ease`
            : `opacity 160ms ${FAST}, transform 160ms ${FAST}, box-shadow 160ms ease`,
        }}
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
                  style={itemStyle()}
                  className={[
                    'w-full text-left px-4 py-1.5 flex items-center gap-2.5 text-base',
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
                  style={itemStyle()}
                  className={[
                    'w-full text-left px-4 py-1.5 flex items-center gap-2.5 text-base',
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
                        style={itemStyle()}
                        className={[
                          'w-full text-left py-1 flex items-center gap-2 text-sm',
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
        style={{
          boxShadow: isOpen || isLocked
            ? '0 8px 28px -4px rgba(45,72,189,0.55), 0 4px 10px -3px rgba(45,72,189,0.3)'
            : '0 4px 16px -3px rgba(45,72,189,0.4)',
          transition: 'background-color 200ms ease, box-shadow 300ms ease',
        }}
        className={[
          'flex items-center gap-2.5 px-5 py-3 rounded-full transition-colors duration-200 select-none',
          isLocked
            ? 'bg-[#1e3491] text-white'
            : 'bg-[#2d48bd] text-white hover:bg-[#1e3491]',
        ].join(' ')}
      >
        {isLocked ? <X className="w-5 h-5" /> : <AlignJustify className="w-5 h-5" />}
        <span className="text-base font-medium">{language === 'en' ? 'Navigate' : 'Navegar'}</span>
      </button>
    </div>
  );
