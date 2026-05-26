import { useState, useRef, useLayoutEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface ProjectSegmentedCardProps {
  title: string;
  client?: 'mercado-livre' | 'vale';
  context: string;
  problem: string;
  process: string;
  challenges: string;
  results: string;
  imagePosition?: 'left' | 'right' | 'below';
  prototypeSlot?: React.ReactNode;
  prototypeType?: 'interactive' | 'demonstrative';
}

function formatText(text: string) {
  return text.split('\n\n').map((paragraph, i) => (
    <p key={i} className="text-base md:text-lg text-[#111111] leading-relaxed" style={{ marginBottom: i < text.split('\n\n').length - 1 ? '1rem' : 0 }}>
      {paragraph}
    </p>
  ));
}

export function ProjectSegmentedCard({
  title,
  context,
  problem,
  process,
  challenges,
  results,
  imagePosition = 'right',
  prototypeSlot,
  prototypeType,
}: ProjectSegmentedCardProps) {
  const { t } = useLanguage();
  const tabs = [
    { key: 'problem', label: t.tabProblem, content: problem },
    { key: 'process', label: t.tabProcess, content: process },
    { key: 'challenges', label: t.tabChallenges, content: challenges },
    { key: 'results', label: t.tabResults, content: results },
  ];
  const [active, setActive] = useState('problem');
  const activeContent = tabs.find((tab) => tab.key === active)?.content ?? '';

  const tabsRef = useRef<HTMLDivElement>(null);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

  useLayoutEffect(() => {
    if (tabsRef.current) {
      const activeBtn = tabsRef.current.querySelector('[aria-selected="true"]') as HTMLElement;
      if (activeBtn) {
        setIndicatorStyle({
          left: activeBtn.offsetLeft,
          width: activeBtn.offsetWidth,
        });
      }
    }
  }, [active]);

  const textBlock = (
    <div className="flex flex-col gap-6">
      <h3 data-nav-title className="text-3xl md:text-4xl font-black text-[#111111] leading-tight">
        {title}
      </h3>

      <p className="text-base md:text-lg text-[#111111] leading-relaxed">
        {context}
      </p>

      {/* Segmented control */}
      <div
        ref={tabsRef}
        className="relative flex gap-1 p-1 rounded-xl w-fit"
        style={{ background: 'rgba(0,0,0,0.05)' }}
        role="tablist"
      >
        <div
          className="absolute top-1 bottom-1 bg-white rounded-lg shadow-sm pointer-events-none transition-all duration-200 ease-in-out"
          style={{ left: indicatorStyle.left, width: indicatorStyle.width }}
        />
        {tabs.map((tab) => (
          <button
            key={tab.key}
            role="tab"
            aria-selected={active === tab.key}
            onClick={() => setActive(tab.key)}
            className={`relative z-10 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
              active === tab.key
                ? 'text-[#111111]'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="min-h-[120px]">
        {formatText(activeContent)}
      </div>
    </div>
  );

  const prototypePill = prototypeType ? (
    <div className="flex justify-center mt-[18px]">
      <span className="text-xs text-gray-400 border border-gray-200 rounded-full px-3 py-1">
        {prototypeType === 'interactive' ? t.interactivePrototype : t.demonstrativePrototype}
      </span>
    </div>
  ) : null;

  const protoBlock = prototypeSlot ? (
    <div className="flex flex-col items-center">
      <div className="flex items-center justify-center">
        {prototypeSlot}
      </div>
      {prototypePill}
    </div>
  ) : null;

  // Stacked: text above, prototype below (left-aligned)
  if (imagePosition === 'below' || !protoBlock) {
    return (
      <div className="flex flex-col gap-10">
        {textBlock}
        {prototypeSlot ? (
          <div className="flex flex-col w-full">
            <div className="w-full">{prototypeSlot}</div>
            {prototypePill}
          </div>
        ) : null}
      </div>
    );
  }

  // Side by side
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
      {imagePosition === 'right' ? (
        <>
          <div>{textBlock}</div>
          <div>{protoBlock}</div>
        </>
      ) : (
        <>
          <div>{protoBlock}</div>
          <div>{textBlock}</div>
        </>
      )}
    </div>
  );
}

