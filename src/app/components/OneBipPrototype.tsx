import { useCallback, useEffect, useMemo, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import {
  PrototypeBottomSheet,
  PrototypeHeader,
  PrototypePhoneFrame,
  PrototypePrimaryButton,
  PrototypeSecondaryButton,
} from './PrototypeChrome';

const SVG_CHEVRON_RIGHT = "M7.38 21.01C7.87 21.5 8.66 21.5 9.15 21.01L17.46 12.7C17.85 12.31 17.85 11.68 17.46 11.29L9.15 2.98C8.66 2.49 7.87 2.49 7.38 2.98C6.89 3.47 6.89 4.26 7.38 4.75L14.62 12L7.37 19.25C6.89 19.73 6.89 20.53 7.38 21.01Z";

interface Group {
  id: number;
  packages: number;
  status: 'in_preparation' | 'ready_to_send' | 'finished';
}

type ScreenType =
  | 'home'
  | 'groups-in-prep'
  | 'groups-ready'
  | 'groups-finished'
  | 'scan'
  | 'review'
  | 'generating'
  | 'done';

interface OneBipPrototypeProps {
  className?: string;
}

const INITIAL_GROUPS: Group[] = [
  { id: 36, packages: 127, status: 'in_preparation' },
  { id: 35, packages: 132, status: 'in_preparation' },
  { id: 34, packages: 155, status: 'in_preparation' },
  { id: 33, packages: 90, status: 'in_preparation' },
  { id: 32, packages: 128, status: 'in_preparation' },
  { id: 31, packages: 151, status: 'ready_to_send' },
  { id: 30, packages: 162, status: 'ready_to_send' },
];

const FINISHED_SENT_GROUPS: Group[] = [
  { id: 29, packages: 151, status: 'finished' },
  { id: 28, packages: 162, status: 'finished' },
  { id: 27, packages: 145, status: 'finished' },
  { id: 26, packages: 155, status: 'finished' },
  { id: 25, packages: 140, status: 'finished' },
];

const FINISHED_CANCELED_GROUPS: Group[] = [
  { id: 24, packages: 118, status: 'finished' },
  { id: 23, packages: 104, status: 'finished' },
];

const NEW_GROUP_ID = 37;
const SCAN_TARGET = 150;
const localeMap = {
  pt: 'pt-BR',
  en: 'en-US',
  es: 'es-MX',
} as const;

export function OneBipPrototype({ className = '' }: OneBipPrototypeProps) {
  const { language } = useLanguage();
  const [screen, setScreen] = useState<ScreenType>('home');
  const [showCreateSheet, setShowCreateSheet] = useState(false);
  const [showConfirmSheet, setShowConfirmSheet] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [packages, setPackages] = useState(0);
  const [progress, setProgress] = useState(0);
  const [groups, setGroups] = useState<Group[]>(INITIAL_GROUPS);
  const [finishedTab, setFinishedTab] = useState<'sent' | 'canceled'>('sent');

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
      saveGroup:
        language === 'en'
          ? 'Save group'
          : language === 'es'
            ? 'Guardar grupo'
            : 'Salvar grupo',
      confirmAction:
        language === 'en'
          ? 'Confirm the action'
          : language === 'es'
            ? 'Confirma la acción'
            : 'Confirme a ação',
      confirmCopy:
        language === 'en'
          ? 'After generating the label, the group can no longer be edited.'
          : language === 'es'
            ? 'Después de generar la etiqueta, ya no será posible editar el grupo.'
            : 'Ao gerar a etiqueta não será mais possível editar o grupo.',
      confirmAndGenerate:
        language === 'en'
          ? 'Confirm and generate'
          : language === 'es'
            ? 'Confirmar y generar'
            : 'Confirmar e gerar',
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
      sent: language === 'en' ? 'Shipped' : language === 'es' ? 'Enviados' : 'Enviados',
      canceled:
        language === 'en' ? 'Canceled' : language === 'es' ? 'Cancelados' : 'Cancelados',
      packagesWord:
        language === 'en' ? 'packages' : language === 'es' ? 'paquetes' : 'pacotes',
      groupPrefix: language === 'en' ? 'Group' : 'Grupo',
    }),
    [language],
  );

  const formatGroupName = useCallback(
    (id: number) => `${labels.groupPrefix} ${id}`,
    [labels.groupPrefix],
  );

  const inPrep = useMemo(
    () => groups.filter((group) => group.status === 'in_preparation'),
    [groups],
  );
  const readyToSend = useMemo(
    () => groups.filter((group) => group.status === 'ready_to_send'),
    [groups],
  );
  const visibleFinishedGroups = useMemo(
    () => (finishedTab === 'sent' ? FINISHED_SENT_GROUPS : FINISHED_CANCELED_GROUPS),
    [finishedTab],
  );

  const go = useCallback(
    (nextScreen: ScreenType) => {
      if (isTransitioning || nextScreen === screen) return;
      setIsTransitioning(true);
      setShowCreateSheet(false);
      setShowConfirmSheet(false);
      window.setTimeout(() => {
        setScreen(nextScreen);
        setIsTransitioning(false);
      }, 150);
    },
    [isTransitioning, screen],
  );

  const upsertDraftGroup = useCallback((status: Group['status']) => {
    setGroups((prev) => {
      const nextGroup: Group = {
        id: NEW_GROUP_ID,
        packages: SCAN_TARGET,
        status,
      };
      return [nextGroup, ...prev.filter((group) => group.id !== NEW_GROUP_ID)];
    });
  }, []);

  const saveDraftGroup = useCallback(() => {
    upsertDraftGroup('in_preparation');
    go('home');
  }, [go, upsertDraftGroup]);

  const finishDraftGroup = useCallback(() => {
    upsertDraftGroup('ready_to_send');
    go('home');
  }, [go, upsertDraftGroup]);

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
      setShowConfirmSheet(false);
      setScreen('done');
      setIsTransitioning(false);
    }, duration + 400);

    return () => {
      window.clearInterval(progressTimer);
      window.clearTimeout(navigationTimer);
    };
  }, [screen]);

  const Pill = ({ count }: { count: number }) => (
    <div className="bg-[rgba(45,72,189,0.1)] flex h-6 min-w-6 items-center justify-center px-1 rounded-full shrink-0">
      <p className="text-[#2d48bd] text-sm font-normal leading-5 text-center whitespace-nowrap">
        {count}
      </p>
    </div>
  );

  const ChevronRight = () => (
    <div className="size-6 shrink-0 overflow-clip relative">
      <svg className="absolute inset-0 size-full" fill="none" viewBox="0 0 24 24">
        <path d={SVG_CHEVRON_RIGHT} fill="#2D48BD" />
      </svg>
    </div>
  );

  const SectionCard = ({ children }: { children: React.ReactNode }) => (
    <div className="relative rounded-3xl w-full overflow-hidden bg-white border border-[rgba(0,0,0,0.1)]">
      {children}
    </div>
  );

  const GroupRow = ({ group, showDivider = false }: { group: Group; showDivider?: boolean }) => (
    <div className="relative w-full">
      <div className="flex items-center gap-2 p-5">
        <div className="flex flex-1 flex-col gap-2 items-start">
          <p className="text-[#111111] text-[18px] font-normal leading-[24px] text-left w-full">
            {formatGroupName(group.id)}
          </p>
          <p className="text-base text-[rgba(17,17,17,0.5)] leading-[22px] text-left w-full">
            {group.packages} {labels.packagesWord}
          </p>
        </div>
        <ChevronRight />
      </div>
      {showDivider ? (
        <div className="absolute bottom-0 left-5 right-5 h-px bg-[rgba(0,0,0,0.08)]" />
      ) : null}
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

          <button
            onClick={() => go('groups-in-prep')}
            className="bg-[rgba(0,0,0,0.05)] relative rounded-3xl shrink-0 w-full hover:bg-[rgba(0,0,0,0.08)] active:bg-[rgba(0,0,0,0.1)] transition-colors duration-200"
          >
            <div className="flex items-center gap-2 p-5">
              <div className="flex flex-1 flex-col gap-2 items-start">
                <p className="text-[#111111] text-[18px] font-normal leading-[24px] text-left w-full">
                  {labels.inPreparation}
                </p>
              </div>
              <Pill count={inPrep.length} />
              <ChevronRight />
            </div>
          </button>

          <button
            onClick={() => go('groups-ready')}
            className="bg-[rgba(0,0,0,0.05)] relative rounded-3xl shrink-0 w-full hover:bg-[rgba(0,0,0,0.08)] active:bg-[rgba(0,0,0,0.1)] transition-colors duration-200"
          >
            <div className="flex items-center gap-2 p-5">
              <div className="flex flex-1 flex-col gap-2 items-start">
                <p className="text-[#111111] text-[18px] font-normal leading-[24px] text-left w-full">
                  {labels.readyToSend}
                </p>
              </div>
              <Pill count={readyToSend.length} />
              <ChevronRight />
            </div>
          </button>

          <button
            onClick={() => go('groups-finished')}
            className="bg-[rgba(0,0,0,0.05)] relative rounded-3xl shrink-0 w-full hover:bg-[rgba(0,0,0,0.08)] active:bg-[rgba(0,0,0,0.1)] transition-colors duration-200"
          >
            <div className="flex items-center gap-2 p-5">
              <div className="flex flex-1 flex-col gap-2 items-start">
                <p className="text-[#111111] text-[18px] font-normal leading-[24px] text-left w-full">
                  {labels.finished}
                </p>
              </div>
              <Pill count={FINISHED_SENT_GROUPS.length + FINISHED_CANCELED_GROUPS.length} />
              <ChevronRight />
            </div>
          </button>
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

  const GroupsInPrepScreen = () => (
    <div className="flex flex-col size-full relative">
      <PrototypeHeader title={labels.inPreparation} onBack={() => go('home')} showBack showMenu />
      <div className="flex-1 overflow-hidden relative">
        <div className="flex flex-col p-5 size-full overflow-y-auto widget-scroll">
          <SectionCard>
            {inPrep.map((group, index) => (
              <GroupRow
                key={group.id}
                group={group}
                showDivider={index < inPrep.length - 1}
              />
            ))}
          </SectionCard>
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

  const GroupsReadyScreen = () => (
    <div className="flex flex-col size-full">
      <PrototypeHeader title={labels.readyToSend} onBack={() => go('home')} showBack showMenu />
      <div className="flex-1 overflow-hidden relative">
        <div className="flex flex-col p-5 size-full overflow-y-auto widget-scroll">
          <SectionCard>
            {readyToSend.map((group, index) => (
              <GroupRow
                key={group.id}
                group={group}
                showDivider={index < readyToSend.length - 1}
              />
            ))}
          </SectionCard>
        </div>
      </div>
    </div>
  );

  const GroupsFinishedScreen = () => (
    <div className="flex flex-col size-full">
      <PrototypeHeader title={labels.finished} onBack={() => go('home')} showBack showMenu />
      <div className="flex-1 overflow-hidden relative">
          <div className="flex flex-col gap-6 p-5 size-full overflow-y-auto widget-scroll">
            <div className="bg-[rgba(0,0,0,0.05)] relative rounded-3xl shrink-0 w-full border border-[rgba(0,0,0,0.1)]">
              <div className="relative grid grid-cols-2 gap-1 p-2" role="tablist">
                <div
                  className="absolute top-2 bottom-2 left-2 rounded-3xl bg-white border border-[rgba(0,0,0,0.1)] shadow-sm pointer-events-none"
                  style={{
                    width: 'calc(50% - 10px)',
                    left: finishedTab === 'canceled' ? 'calc(50% + 2px)' : '8px',
                    transition: 'left 220ms cubic-bezier(0.2, 0, 0, 1)',
                    willChange: 'left',
                  }}
                />
                {(['sent', 'canceled'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setFinishedTab(tab)}
                    role="tab"
                    aria-selected={finishedTab === tab}
                    className={`relative z-10 rounded-3xl px-3 py-2 transition-colors duration-200 ${
                      finishedTab === tab ? 'text-[#111111]' : 'text-[rgba(17,17,17,0.65)]'
                    }`}
                  >
                    <p className="text-base font-normal leading-[22px] text-center whitespace-nowrap">
                      {tab === 'sent' ? labels.sent : labels.canceled}
                    </p>
                  </button>
                ))}
              </div>
            </div>

          <SectionCard>
            {visibleFinishedGroups.map((group, index) => (
              <GroupRow
                key={group.id}
                group={group}
                showDivider={index < visibleFinishedGroups.length - 1}
              />
            ))}
          </SectionCard>
        </div>
      </div>
    </div>
  );

  const ScanScreen = () => {
    const scanComplete = packages >= SCAN_TARGET;

    return (
      <div className="flex flex-col size-full">
        <PrototypeHeader title={labels.createGroup} onBack={() => go('groups-in-prep')} showBack showMenu />
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

      <div className="shrink-0 flex flex-col gap-2 p-5">
        <PrototypePrimaryButton label={labels.generateLabel} onClick={() => setShowConfirmSheet(true)} />
        <PrototypeSecondaryButton label={labels.saveGroup} onClick={saveDraftGroup} />
      </div>

      {showConfirmSheet ? (
        <PrototypeBottomSheet
          title={labels.confirmAction}
          onClose={() => setShowConfirmSheet(false)}
          cta={
            <PrototypePrimaryButton
              label={labels.confirmAndGenerate}
              onClick={() => {
                setShowConfirmSheet(false);
                go('generating');
              }}
            />
          }
        >
          <p className="text-[#111111] text-base font-normal leading-[22px]">
            {labels.confirmCopy}
          </p>
        </PrototypeBottomSheet>
      ) : null}
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
      case 'groups-in-prep':
        return GroupsInPrepScreen();
      case 'groups-ready':
        return GroupsReadyScreen();
      case 'groups-finished':
        return GroupsFinishedScreen();
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
