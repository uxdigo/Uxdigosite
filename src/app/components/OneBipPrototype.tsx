import { useCallback, useEffect, useMemo, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import {
  PrototypeBottomSheet,
  PrototypeHeader,
  PrototypePhoneFrame,
  PrototypePrimaryButton,
  PrototypeSecondaryButton,
} from './PrototypeChrome';

type ScreenType =
  | 'home'
  | 'scan'
  | 'review'
  | 'generating'
  | 'done';

interface OneBipPrototypeProps {
  className?: string;
}

const NEW_GROUP_ID = 37;
const SCAN_TARGET = 150;
const HOME_GROUP_COUNTS = {
  inPreparation: 5,
  readyToSend: 3,
  finished: 7,
};
const localeMap = {
  pt: 'pt-BR',
  en: 'en-US',
  es: 'es-MX',
} as const;

export function OneBipPrototype({ className = '' }: OneBipPrototypeProps) {
  const { language } = useLanguage();
  const [screen, setScreen] = useState<ScreenType>('home');
  const [showCreateSheet, setShowCreateSheet] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [packages, setPackages] = useState(0);
  const [progress, setProgress] = useState(0);

  const currentDate = useMemo(() => {
    const baseDate = new Date(2025, 3, 12);
    return new Intl.DateTimeFormat(localeMap[language], {
      month: 'long',
      day: 'numeric',
    }).format(baseDate);
  }, [language]);

  const labels = useMemo(
    () => ({
      home: language === 'en' ? 'Home' : language === 'es' ? 'Inicio' : 'Início',
      packageGroups:
        language === 'en'
          ? 'Package groups'
          : language === 'es'
            ? 'Grupos de paquetes'
            : 'Grupos de pacotes',
      inPreparation:
        language === 'en'
          ? 'In preparation'
          : language === 'es'
            ? 'En preparación'
            : 'Em preparação',
      readyToSend:
        language === 'en'
          ? 'Ready to ship'
          : language === 'es'
            ? 'Para enviar'
            : 'Para enviar',
      finished:
        language === 'en' ? 'Finished' : language === 'es' ? 'Finalizados' : 'Finalizados',
      createGroup:
        language === 'en'
          ? 'Create group'
          : language === 'es'
            ? 'Crear grupo'
            : 'Criar grupo',
      enterGroupName:
        language === 'en'
          ? 'Enter the group name'
          : language === 'es'
            ? 'Ingresa el nombre del grupo'
            : 'Insira o nome do grupo',
      creationIntro:
        language === 'en'
          ? 'Create a package group before pickup and generate its final label.'
          : language === 'es'
            ? 'Crea un grupo de paquetes antes de la colecta y genera su etiqueta final.'
            : 'Crie um grupo de pacotes antes da coleta e gere a etiqueta final.',
      scanner:
        language === 'en' ? 'Scanner' : language === 'es' ? 'Escáner' : 'Scanner',
      camera:
        language === 'en' ? 'Camera' : language === 'es' ? 'Cámara' : 'Câmera',
      scanLine1:
        language === 'en' ? 'Scan' : language === 'es' ? 'Escanea' : 'Escaneie',
      scanLine2:
        language === 'en'
          ? 'the package label'
          : language === 'es'
            ? 'la etiqueta del paquete'
            : 'a etiqueta do pacote',
      addedPackages:
        language === 'en'
          ? 'Packages added to'
          : language === 'es'
            ? 'Paquetes agregados a'
            : 'Pacotes adicionados em',
      finishScanning:
        language === 'en'
          ? 'Finish scanning'
          : language === 'es'
            ? 'Terminar escaneo'
            : 'Terminar de escanear',
      scanningHint:
        language === 'en'
          ? 'Wait for the scan to finish to continue.'
          : language === 'es'
            ? 'Espera a que termine el escaneo para continuar.'
            : 'Espere a bipagem terminar para continuar.',
      groupName:
        language === 'en'
          ? 'Group name'
          : language === 'es'
            ? 'Nombre del grupo'
            : 'Nome do grupo',
      edit: language === 'en' ? 'Edit' : language === 'es' ? 'Editar' : 'Editar',
      addedPackagesLabel:
        language === 'en'
          ? 'Added packages'
          : language === 'es'
            ? 'Paquetes agregados'
            : 'Pacotes adicionados',
      status: language === 'en' ? 'Status' : language === 'es' ? 'Estado' : 'Status',
      creating:
        language === 'en' ? 'Creating' : language === 'es' ? 'En creación' : 'Em criação',
      generateLabel:
        language === 'en'
          ? 'Generate label'
          : language === 'es'
            ? 'Generar etiqueta'
            : 'Gerar etiqueta',
      generatingLabel:
        language === 'en'
          ? 'Generating label'
          : language === 'es'
            ? 'Generando etiqueta'
            : 'Gerando etiqueta',
      labelReady:
        language === 'en'
          ? 'Label ready to download'
          : language === 'es'
            ? 'Etiqueta lista para descargar'
            : 'Etiqueta pronta para baixar',
      downloadLabel:
        language === 'en'
          ? 'Download label'
          : language === 'es'
            ? 'Descargar etiqueta'
            : 'Baixar etiqueta',
      backToHome:
        language === 'en'
          ? 'Back to home'
          : language === 'es'
            ? 'Volver al inicio'
            : 'Voltar ao início',
      groupPrefix: language === 'en' ? 'Group' : 'Grupo',
    }),
    [language],
  );

  const formatGroupName = useCallback(
    (id: number) => `${labels.groupPrefix} ${id}`,
    [labels.groupPrefix],
  );

  const go = useCallback(
    (nextScreen: ScreenType) => {
      if (isTransitioning || nextScreen === screen) return;
      setIsTransitioning(true);
      setShowCreateSheet(false);
      window.setTimeout(() => {
        setScreen(nextScreen);
        setIsTransitioning(false);
      }, 150);
    },
    [isTransitioning, screen],
  );

  const finishDraftGroup = useCallback(() => {
    go('home');
  }, [go]);

  useEffect(() => {
    if (screen !== 'scan') return;

    setPackages(0);
    const duration = 2200;
    const interval = 40;
    const step = (SCAN_TARGET / duration) * interval;

    const timer = window.setInterval(() => {
      setPackages((prev) => {
        const next = Math.round(prev + step);
        if (next >= SCAN_TARGET) {
          window.clearInterval(timer);
          return SCAN_TARGET;
        }
        return next;
      });
    }, interval);

    return () => window.clearInterval(timer);
  }, [screen]);

  useEffect(() => {
    if (screen !== 'generating') return;

    setProgress(0);
    const duration = 2500;
    const interval = 40;
    const step = (100 / duration) * interval;

    const progressTimer = window.setInterval(() => {
      setProgress((prev) => {
        const next = prev + step;
        if (next >= 100) {
          window.clearInterval(progressTimer);
          return 100;
        }
        return next;
      });
    }, interval);

    const navigationTimer = window.setTimeout(() => {
      setShowCreateSheet(false);
      setScreen('done');
      setIsTransitioning(false);
    }, duration + 400);

    return () => {
      window.clearInterval(progressTimer);
      window.clearTimeout(navigationTimer);
    };
  }, [screen]);

  const SectionCard = ({ children }: { children: React.ReactNode }) => (
    <div className="relative rounded-3xl w-full overflow-hidden bg-white border border-[rgba(0,0,0,0.1)]">
      {children}
    </div>
  );

  const Pill = ({ count }: { count: number }) => (
    <div className="bg-[rgba(45,72,189,0.1)] flex h-6 min-w-6 items-center justify-center px-1 rounded-full shrink-0">
      <p className="text-[#2d48bd] text-sm font-normal leading-5 text-center whitespace-nowrap">
        {count}
      </p>
    </div>
  );

  const StaticGroupSummaryRow = ({ label, count }: { label: string; count: number }) => (
    <div className="bg-[rgba(0,0,0,0.05)] relative rounded-3xl shrink-0 w-full">
      <div className="flex items-center gap-2 p-5">
        <div className="flex flex-1 flex-col gap-2 items-start">
          <p className="text-[#111111] text-[18px] font-normal leading-[24px] text-left w-full">
            {label}
          </p>
        </div>
        <Pill count={count} />
      </div>
    </div>
  );

  const HomeScreen = () => (
    <div className="flex flex-col size-full">
      <PrototypeHeader title={labels.home} showBack={false} showMenu />
      <div className="flex-1 overflow-hidden relative">
        <div className="flex flex-col gap-6 p-5 size-full overflow-y-auto widget-scroll">
          <div className="flex flex-col gap-2 shrink-0">
            <p className="text-2xl font-semibold text-black leading-normal">{labels.packageGroups}</p>
            <p className="text-sm text-[rgba(17,17,17,0.5)] leading-5">{currentDate}</p>
          </div>

          <StaticGroupSummaryRow label={labels.inPreparation} count={HOME_GROUP_COUNTS.inPreparation} />
          <StaticGroupSummaryRow label={labels.readyToSend} count={HOME_GROUP_COUNTS.readyToSend} />
          <StaticGroupSummaryRow label={labels.finished} count={HOME_GROUP_COUNTS.finished} />
        </div>
      </div>
      <div className="shrink-0 p-5">
        <PrototypePrimaryButton label={labels.createGroup} onClick={() => setShowCreateSheet(true)} />
      </div>
      {showCreateSheet ? (
        <PrototypeBottomSheet
          title={labels.enterGroupName}
          onClose={() => setShowCreateSheet(false)}
          cta={
            <PrototypePrimaryButton
              label={labels.createGroup}
              onClick={() => {
                setShowCreateSheet(false);
                go('scan');
              }}
            />
          }
        >
          <div className="flex items-center px-3 py-4 border border-[rgba(0,0,0,0.1)] rounded-xl">
            <p className="flex-1 text-[#111111] text-lg font-normal leading-6">
              {formatGroupName(NEW_GROUP_ID)}
            </p>
          </div>
        </PrototypeBottomSheet>
      ) : null}
    </div>
  );

  const ScanScreen = () => {
    const scanComplete = packages >= SCAN_TARGET;

    return (
      <div className="flex flex-col size-full">
        <PrototypeHeader title={labels.createGroup} onBack={() => go('home')} showBack showMenu />
        <div className="flex-1 overflow-hidden relative">
          <div className="flex flex-col gap-6 p-5 size-full">
            <div className="bg-[rgba(0,0,0,0.05)] relative rounded-3xl shrink-0 w-full border border-[rgba(0,0,0,0.1)]">
              <div className="flex items-center p-2 gap-1">
                <div className="flex-1 relative rounded-3xl bg-white border border-[rgba(0,0,0,0.1)] px-3 py-2">
                  <p className="text-[#111111] text-base font-normal leading-[22px] text-center">
                    {labels.scanner}
                  </p>
                </div>
                <div className="flex-1 relative rounded-3xl px-2 py-1">
                  <p className="text-[#111111] text-base font-normal leading-[22px] text-center opacity-50">
                    {labels.camera}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex-1 flex flex-col items-center justify-center gap-4">
              <div className="relative">
                <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
                  <path d="M10 30V10H30" stroke="#2d48bd" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M90 10H110V30" stroke="#2d48bd" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M110 90V110H90" stroke="#2d48bd" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M30 110H10V90" stroke="#2d48bd" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                  <rect x="28" y="38" width="4" height="44" rx="2" fill="#111111" opacity="0.15" />
                  <rect x="36" y="38" width="8" height="44" rx="2" fill="#111111" opacity="0.15" />
                  <rect x="48" y="38" width="3" height="44" rx="2" fill="#111111" opacity="0.15" />
                  <rect x="55" y="38" width="6" height="44" rx="2" fill="#111111" opacity="0.15" />
                  <rect x="65" y="38" width="4" height="44" rx="2" fill="#111111" opacity="0.15" />
                  <rect x="73" y="38" width="8" height="44" rx="2" fill="#111111" opacity="0.15" />
                  <rect x="85" y="38" width="3" height="44" rx="2" fill="#111111" opacity="0.15" />
                  <rect x="10" y="58" width="100" height="3" rx="1.5" fill="#2d48bd" opacity="0.6" />
                </svg>
              </div>
              <div className="text-center">
                <p className="text-2xl font-semibold text-[rgba(17,17,17,0.5)] leading-normal">
                  {labels.scanLine1}
                </p>
                <p className="text-xl font-normal text-[rgba(17,17,17,0.5)] leading-[26px]">
                  {labels.scanLine2}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="shrink-0 flex flex-col items-center gap-4 p-5">
          <div className="flex flex-col items-center gap-2">
            <p className="text-5xl font-semibold text-[#111111] leading-normal">{packages}</p>
            <p className="text-sm text-[rgba(17,17,17,0.5)] leading-5 text-center">
              {labels.addedPackages}{' '}
              <span className="font-semibold">{formatGroupName(NEW_GROUP_ID)}</span>
            </p>
            {!scanComplete ? (
              <p className="text-sm text-[rgba(17,17,17,0.45)] leading-5 text-center">
                {labels.scanningHint}
              </p>
            ) : null}
          </div>
          <PrototypePrimaryButton
            label={labels.finishScanning}
            onClick={() => go('review')}
            disabled={!scanComplete}
          />
        </div>
      </div>
    );
  };

  const ReviewScreen = () => (
    <div className="flex flex-col size-full relative">
      <PrototypeHeader title={labels.createGroup} onBack={() => go('scan')} showBack showMenu />
      <div className="flex-1 overflow-hidden relative">
        <div className="flex flex-col p-5 size-full">
          <SectionCard>
            <div className="relative w-full">
              <div className="flex items-center gap-2 p-5">
                <div className="flex flex-1 flex-col gap-2 items-start">
                  <p className="text-sm text-[rgba(17,17,17,0.5)] leading-5 text-left w-full">
                    {labels.groupName}
                  </p>
                  <p className="text-[#111111] text-lg font-normal leading-6 text-left w-full">
                    {formatGroupName(NEW_GROUP_ID)}
                  </p>
                </div>
                <p className="text-[#2d48bd] text-base font-normal leading-[22px] whitespace-nowrap">
                  {labels.edit}
                </p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 border-b border-[rgba(0,0,0,0.1)]" />
            </div>
            <div className="relative w-full">
              <div className="flex items-center gap-2 p-5">
                <div className="flex flex-1 flex-col gap-2 items-start">
                  <p className="text-sm text-[rgba(17,17,17,0.5)] leading-5 text-left w-full">
                    {labels.addedPackagesLabel}
                  </p>
                  <p className="text-[#111111] text-lg font-normal leading-6 text-left w-full">
                    {SCAN_TARGET}
                  </p>
                </div>
                <p className="text-[#2d48bd] text-base font-normal leading-[22px] whitespace-nowrap">
                  {labels.edit}
                </p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 border-b border-[rgba(0,0,0,0.1)]" />
            </div>
            <div className="flex items-center gap-2 p-5">
              <div className="flex flex-1 flex-col gap-2 items-start">
                <p className="text-sm text-[rgba(17,17,17,0.5)] leading-5 text-left w-full">
                  {labels.status}
                </p>
                <p className="text-[#111111] text-lg font-normal leading-6 text-left w-full">
                  {labels.creating}
                </p>
              </div>
            </div>
          </SectionCard>
        </div>
      </div>

      <div className="shrink-0 p-5">
        <PrototypePrimaryButton label={labels.generateLabel} onClick={() => go('generating')} />
      </div>
    </div>
  );

  const GeneratingScreen = () => (
    <div className="flex flex-col size-full">
      <PrototypeHeader title={labels.createGroup} showBack={false} showMenu />
      <div className="flex-1 flex flex-col items-center justify-center p-5">
        <div className="flex flex-col items-center gap-3">
          <div className="relative h-3 w-[212px] rounded-full bg-white border border-[rgba(0,0,0,0.1)] overflow-hidden">
            <div
              className="absolute left-0 top-0 h-full bg-[#2d48bd] rounded-full transition-all duration-75 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-sm font-semibold text-[rgba(17,17,17,0.5)] leading-5 text-center">
            {labels.generatingLabel}
          </p>
        </div>
      </div>
    </div>
  );

  const DoneScreen = () => (
    <div className="flex flex-col size-full">
      <PrototypeHeader title={labels.createGroup} showBack={false} showMenu />
      <div className="flex-1 flex flex-col items-center justify-center p-5">
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-col items-center">
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
              <rect x="10" y="6" width="60" height="68" rx="4" fill="#f5f5f5" stroke="rgba(0,0,0,0.1)" strokeWidth="1.5" />
              <rect x="20" y="18" width="40" height="4" rx="2" fill="rgba(0,0,0,0.1)" />
              <rect x="20" y="26" width="28" height="4" rx="2" fill="rgba(0,0,0,0.08)" />
              <rect x="20" y="38" width="3" height="16" rx="1" fill="rgba(0,0,0,0.15)" />
              <rect x="26" y="38" width="5" height="16" rx="1" fill="rgba(0,0,0,0.15)" />
              <rect x="34" y="38" width="2" height="16" rx="1" fill="rgba(0,0,0,0.15)" />
              <rect x="39" y="38" width="4" height="16" rx="1" fill="rgba(0,0,0,0.15)" />
              <rect x="46" y="38" width="3" height="16" rx="1" fill="rgba(0,0,0,0.15)" />
              <rect x="52" y="38" width="5" height="16" rx="1" fill="rgba(0,0,0,0.15)" />
              <circle cx="58" cy="58" r="14" fill="#6C9434" />
              <path d="M52 58L56 62L64 54" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <p className="text-2xl font-semibold text-[#111111] text-center leading-normal">
            {labels.labelReady}
          </p>
        </div>
      </div>
      <div className="shrink-0 flex flex-col gap-2 p-5">
        <PrototypePrimaryButton label={labels.downloadLabel} onClick={finishDraftGroup} />
        <PrototypeSecondaryButton label={labels.backToHome} onClick={finishDraftGroup} />
      </div>
    </div>
  );

  const renderScreen = () => {
    switch (screen) {
      case 'home':
        return HomeScreen();
      case 'scan':
        return ScanScreen();
      case 'review':
        return ReviewScreen();
      case 'generating':
        return GeneratingScreen();
      case 'done':
        return DoneScreen();
      default:
        return HomeScreen();
    }
  };

  return (
    <PrototypePhoneFrame className={className} isTransitioning={isTransitioning}>
      {renderScreen()}
    </PrototypePhoneFrame>
  );
}
