import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'pt' | 'en' | 'es';

export interface Translations {
  contact: string;
  chatOnLinkedIn: string;
  heroTitle1: string;
  heroTitle2: string;
  heroDescription1: string;
  heroDescription2: string;
  heroDescription3: string;
  myProjects: string;
  projectsTitle: string;
  handshakeTitle: string;
  handshakeDescription1: string;
  handshakeDescription2: string;
  handshakeDescription3: string;
  handshakeDescription4: string;
  handshakeProcess1: string;
  handshakeProcess2: string;
  handshakeProcess3: string;
  handshakeProcess4: string;
  savedPerMonth: string;
  contactRate: string;
  userTrustHandshake: string;
  operationCosts: string;
  eventDocumentation: string;
  salesTitle: string;
  salesDescription1: string;
  salesDescription2: string;
  salesDescription3: string;
  salesDescription4: string;
  salesDescription5: string;
  dispatchRate: string;
  solvedProblems: string;
  userSatisfaction: string;
  widgetTitle: string;
  widgetDescription1: string;
  widgetDescription2: string;
  widgetDescription3: string;
  widgetDescription4: string;
  internalManagement: string;
  packageDispatch: string;
  userTrust: string;
  reducedContacts: string;
  riskTitle: string;
  riskDescription1: string;
  riskDescription2: string;
  riskDescription3: string;
  riskDescription4: string;
  documentStandardization: string;
  processAgility: string;
  toolUnification: string;
  accidentPotential: string;
  aboutTitle: string;
  aboutParagraph1: string;
  aboutParagraph2: string;
  aboutParagraph3: string;
  contactTitle: string;
  contactDescription1: string;
  contactDescription2: string;
  contactDescription3: string;
  footer: string;
  significantImprovement: string;
  substantialImprovement: string;
  notableImprovement: string;
  considerableImprovement: string;
  significantReduction: string;
  significantIncrease: string;
  notableReduction: string;
  consolidation: string;
  interactivePrototype: string;
  demonstrativePrototype: string;
  scheduledPickupText: string;
  pickupManagement: string;
  pending: string;
  finished: string;
  canceled: string;
  onTheWay: string;
  scheduled: string;
  completed: string;
  pickup: string;
  pickupOnTheWayText: string;
  pickupCompletedText1: string;
  pickupCompletedText2: string;
  pickupCanceledLocationText: string;
  pickupCanceledRouteText: string;
  reputationAtRisk: string;
  noRiskToReputation: string;
  pickupReceipt: string;
  packages: string;
  weCollected: string;
  canDownloadReceipt: string;
  morningPickupCompleted: string;
  allItemsProcessed: string;
  pickupDetails: string;
  reviewAndConfirm: string;
  packagesCount185: string;
  packagesPending7: string;
  packages7: string;
  confirm: string;
  change: string;
  shippedPackages: string;
  pendingPackages: string;
  shipId: string;
  reason: string;
  notReady: string;
  poorCondition: string;
  vehicleFull: string;
  close: string;
  packageSuccessfullyConfirmed: string;
  packagesConfirmedDriverNotified: string;
  packagesConfirmationSuccessful: string;
  authorizationCode: string;
  salesToday: string;
  salesUpcoming: string;
  salesInTransit: string;
  salesCompleted: string;
  salesOnTheWay: string;
  salesPending: string;
  salesUntil4PM: string;
  salesBuyerMessage: string;
  salesInvoicePending: string;
  salesLabelPending: string;
  salesReadyToShip: string;
  riskHazards: string;
  riskHazardType: string;
  riskCurrentHRN: string;
  riskTargetHRN: string;
  riskHazardStatus: string;
  riskMechanical: string;
  riskElectrical: string;
  riskThermal: string;
  riskMachineHasHazards: string;
  riskAddHazard: string;
  prototypesDisclaimer: string;
  salesFlexTime: string;
  footerCredit: string;
  heroTitle: string;
  heroDescription: string;
  tabProblem: string;
  tabProcess: string;
  tabChallenges: string;
  tabResults: string;
  handshakeContext: string;
  handshakeProblem: string;
  handshakeProcessTab: string;
  handshakeChallenges: string;
  handshakeResults: string;
  salesContext: string;
  salesProblem: string;
  salesProcessTab: string;
  salesChallenges: string;
  salesResults: string;
  widgetContext: string;
  widgetProblem: string;
  widgetProcessTab: string;
  widgetChallenges: string;
  widgetResults: string;
  riskContext: string;
  riskProblem: string;
  riskProcessTab: string;
  riskChallenges: string;
  riskResults: string;
  contactDescription: string;
  backToProjects: string;
  contextAndDiscovery: string;
  prototypeDescription: string;
  discoveryWorkshop: string;
  userFlow: string;
  usabilityTest: string;
  iterationProcess: string;
  stakeholderMap: string;
  viewCaseStudy: string;
  handshakeTeaserDescription: string;
  oneBipTeaserDescription: string;
  salesTeaserDescription: string;
  widgetTeaserDescription: string;
  riskTeaserDescription: string;
  oneBipDescription: string;
  oneBipProcess: string;
  oneBipPrototypeNote: string;
  oneBipCollectionTime: string;
  oneBipGrouping: string;
  oneBipDriverExperience: string;
  oneBipOperationalVisibility: string;
  feasibilityAnalysis: string;
  useCaseMapping: string;
  designSystemAdaptation: string;
  handoffAndIterations: string;
  oneBipContext: string;
  oneBipProblem: string;
  oneBipProcessTab: string;
  oneBipChallenges: string;
  oneBipResults: string;
}

const translations: Record<Language, Translations> = {
  pt: {
    contact: 'Contato',
    chatOnLinkedIn: 'Conversar no LinkedIn',
    heroTitle1: 'Experiências eficientes',
    heroTitle2: 'para pessoas e produtos',
    heroDescription1: 'Com projetos no Mercado Livre e na Vale, transformo comportamento do usuário,',
    heroDescription2: 'contexto de negócio e decisões de produto em soluções mais claras, eficientes e sustentáveis.',
    heroDescription3: 'Sou Rodrigo, mas pode me chamar de Digo. ',
    myProjects: 'Mostrar projetos',
    projectsTitle: 'Projetos',
    handshakeTitle: 'Handshake',
    handshakeDescription1: 'Participei do design de uma experiência para tornar mais clara a confirmação',
    handshakeDescription2: 'de coleta de pacotes em operações de alto volume. O objetivo era reduzir',
    handshakeDescription3: 'ambiguidades operacionais e criar um registro mais consistente entre',
    handshakeDescription4: 'vendedores e motoristas durante a coleta.',
    handshakeProcess1: 'Apliquei metodologia centrada no usuário através de workshops',
    handshakeProcess2: 'colaborativos, entrevistas qualitativas e testes de usabilidade',
    handshakeProcess3: 'iterativos. Contribuí para a criação de fluxos escaláveis que',
    handshakeProcess4: 'entregam informações críticas de forma clara em contextos operacionais dinâmicos.',
    savedPerMonth: 'Tempo de coleta',
    contactRate: 'Gestão de envios',
    userTrustHandshake: 'Confiança do usuário',
    operationCosts: 'Clareza operacional',
    eventDocumentation: 'Documentação de eventos',
    salesTitle: 'Seção de vendas',
    salesDescription1: 'Contribuí para o redesign da experiência de vendas, criando um sistema de',
    salesDescription2: 'autogerenciamento que otimiza a produtividade por meio de organização',
    salesDescription3: 'inteligente de tarefas. O objetivo era reduzir a fricção operacional e',
    salesDescription4: 'criar fluxos adaptativos para diferentes perfis, de vendedores individuais a operações enterprise.',
    salesDescription5: 'Realizamos workshops, mesas de trabalho com muitos outros times, gerenciamos uma grande quantidade de stakeholders e criamos um novo modelo de lógica aplicado ao sistema de gerenciamento logístico.',
    dispatchRate: 'Taxa de despacho no prazo',
    solvedProblems: 'Problemas operacionais',
    userSatisfaction: 'Satisfação do usuário',
    widgetTitle: 'Widget de envios',
    widgetDescription1: 'Desenvolvi em equipe um sistema de widgets contextuais que organiza dados',
    widgetDescription2: 'operacionais em informações acionáveis. O desafio era dar mais autonomia',
    widgetDescription3: 'aos vendedores através de transparência informacional, apoiando decisões',
    widgetDescription4: 'com visibilidade sobre status de coletas e performance operacional.',
    internalManagement: 'Operação de despacho',
    packageDispatch: 'Envios realizados',
    userTrust: 'Confiança do usuário',
    reducedContacts: 'Autonomia',
    riskTitle: 'Apreciação de Risco',
    riskDescription1: 'Contribuí para o desenvolvimento de um sistema digital para avaliação e controle',
    riskDescription2: 'de riscos operacionais em máquinas, substituindo processos manuais',
    riskDescription3: 'e descentralizados. O objetivo era trazer mais padronização,',
    riskDescription4: 'eficiência e visibilidade para o processo de apreciação de riscos.',
    documentStandardization: 'Padronização dos documentos',
    processAgility: 'Processo de apreciação',
    toolUnification: 'Unificação de ferramentas',
    accidentPotential: 'Rastreabilidade',
    aboutTitle: 'Sobre mim',
    aboutParagraph1: 'Sou Rodrigo, tenho 2 gatos lindos e trabalho em UX desde o início de 2020, mas já tive contato com interfaces desde os anos 2000, construindo blogs e sites por diversão. Fui forjado no boom da internet. 😂',
    aboutParagraph2: 'Sou apaixonado por essa profissão, por entender e ajudar pessoas. Gosto de criar histórias, de me sentir parte delas para que sejam incríveis ou simples, quando precisarem ser. Fui advogado antes, e de lá trouxe essa vontade de cuidar das pessoas.',
    aboutParagraph3: 'Gosto muito de aprender, estou em constante contato com novas tecnologias, inclusive a IA, onde cada vez mais busco me orientar e aperfeiçoar. Sigo sempre curioso.',
    contactTitle: 'Entre em contato',
    contactDescription1: 'Se meu trabalho despertou seu interesse e você acredita que posso ajudar a',
    contactDescription2: 'melhorar seu produto ou a experiência dos seus usuários, adoraria conversar',
    contactDescription3: 'com você. Vamos construir algo significativo juntos.',
    footer: 'uxdigo',
    significantImprovement: 'Melhoria',
    substantialImprovement: 'Otimização',
    notableImprovement: 'Integração',
    considerableImprovement: 'Aumento',
    significantReduction: 'Redução',
    significantIncrease: 'Fortalecimento',
    notableReduction: 'Queda',
    consolidation: 'Consolidação',
    interactivePrototype: 'Protótipo Interativo',
    demonstrativePrototype: 'Protótipo Demonstrativo',
    scheduledPickupText: 'A coleta está programada para o horário designado. Por favor, tenha os pacotes prontos até o horário inicial previsto.',
    pickupManagement: 'Gestão de envios',
    pending: 'Pendentes',
    finished: 'Finalizadas',
    canceled: 'Canceladas',
    onTheWay: 'A CAMINHO',
    scheduled: 'PROGRAMADA',
    completed: 'CONCLUÍDA',
    pickup: 'COLETA',
    pickupOnTheWayText: 'A coleta está a caminho. Tenha seus pacotes prontos e seu código de autorização em mãos para confirmar o processo.',
    pickupCompletedText1: 'A coleta foi concluída com sucesso.',
    pickupCompletedText2: 'Coletamos 208 pacotes.',
    pickupCanceledLocationText: 'Esta coleta foi cancelada porque o local não estava aberto quando chegamos.',
    pickupCanceledRouteText: 'Esta coleta foi cancelada devido a um inconveniente na rota.',
    reputationAtRisk: 'Reputação em risco',
    noRiskToReputation: 'Sem risco à reputação',
    pickupReceipt: 'Comprovante de coleta',
    packages: 'pacotes',
    weCollected: 'Coletamos',
    canDownloadReceipt: 'Você pode baixar o comprovante de coleta para ver mais detalhes.',
    morningPickupCompleted: 'Coleta matinal concluída com sucesso.',
    allItemsProcessed: 'Todos os itens foram processados e estão agora a caminho de seus destinos.',
    pickupDetails: 'Detalhes da coleta',
    reviewAndConfirm: 'Revisar e confirmar',
    packagesCount185: '185 pacotes',
    packagesPending7: '7 pacotes pendentes',
    packages7: '7 pacotes',
    confirm: 'Confirmar',
    change: 'Alterar',
    shippedPackages: 'Pacotes enviados',
    pendingPackages: 'Pacotes pendentes',
    shipId: 'ID do Envio',
    reason: 'Motivo',
    notReady: 'Não pronto',
    poorCondition: 'Má condição',
    vehicleFull: 'Veículo lotado',
    close: 'Fechar',
    packageSuccessfullyConfirmed: 'Coleta confirmada',
    packagesConfirmedDriverNotified: 'E-mail enviado ao administrador',
    packagesConfirmationSuccessful: 'Coleta confirmada',
    authorizationCode: 'Código de autorização',
    salesToday: 'Hoje',
    salesUpcoming: 'Próximas',
    salesInTransit: 'Em trânsito',
    salesCompleted: 'Concluídas',
    salesOnTheWay: 'A CAMINHO',
    salesPending: 'PENDENTE',
    salesUntil4PM: 'ATÉ 16H',
    salesBuyerMessage: 'Mensagem do comprador',
    salesInvoicePending: 'Fatura pendente',
    salesLabelPending: 'Etiqueta pendente',
    salesReadyToShip: 'Pronto para envio',
    riskHazards: 'Perigos',
    riskHazardType: 'Tipo\nPerigo',
    riskCurrentHRN: 'HRN\nAtual',
    riskTargetHRN: 'HRN\nMeta',
    riskHazardStatus: 'Status\nPerigo',
    riskMechanical: 'Mecânico',
    riskElectrical: 'Elétrico',
    riskThermal: 'Térmico',
    riskMachineHasHazards: 'Máquina 130AB possui 5 perigos',
    riskAddHazard: 'Adicionar perigo',
    prototypesDisclaimer: 'Os protótipos apresentados são simulações conceituais criadas para demonstração de processo.',
    salesFlexTime: 'Até 19h',
    footerCredit: 'Este site foi feito com pesquisas, Figma e Claude.',
    heroTitle: 'Experiências eficientes para pessoas e produtos',
    heroDescription: 'Com projetos no Mercado Livre e na Vale, transformo comportamento do usuário, contexto de negócio e decisões de produto em soluções mais claras, eficientes e sustentáveis. Sou Rodrigo, mas pode me chamar de Digo. 😉',
    tabProblem: 'Problema',
    tabProcess: 'Processo',
    tabChallenges: 'Desafios',
    tabResults: 'Resultados',
    handshakeContext: 'Muitos vendedores despacham pacotes através de coletas realizadas por motoristas parceiros. No momento da coleta, os dois lados precisam confirmar juntos o volume entregue, com clareza e rapidez.',
    handshakeProblem: 'Em coletas com alto volume de pacotes, vendedores e motoristas precisavam chegar a um entendimento comum sobre o que estava sendo entregue. Quando essa confirmação não era clara, o processo gerava dúvidas, retrabalho e perda de confiança entre as partes.\n\nO desafio era resolver essa confirmação em poucos segundos, em um contexto operacional real, com usuários sob pressão e pouca margem para ambiguidade.',
    handshakeProcessTab: 'Participei do projeto do discovery à implementação.\n\nNa fase inicial, trabalhei na criação do conceito, elaboração de diagramas e mapeamento de jornadas dos dois usuários envolvidos. A partir desses insumos, fui responsável pelo design do fluxo, wireframes e protótipo de alta fidelidade.\n\nApoiei os testes com vendedores e motoristas reais. Após a validação, acompanhei o handoff com a equipe de desenvolvimento e participei das iterações até a entrega final.',
    handshakeChallenges: 'O desafio central foi equilibrar três vetores ao mesmo tempo.\n\nO processo não podia ser lento, porque a operação não espera. Não podia ser ambíguo, porque dois usuários sob pressão precisam entender rapidamente o que está acontecendo. E não podia parecer confrontacional: qualquer diferença entre as partes precisava ser comunicada de forma clara, neutra e segura.\n\nCada tela e cada feedback precisava responder a esses três vetores juntos.',
    handshakeResults: 'A solução tornou a confirmação de coleta mais clara e documentada, reduzindo ambiguidades no momento da entrega e dando mais segurança para vendedores, motoristas e operação.\n\nA confiança no fluxo aumentou dos dois lados: vendedores passaram a ter mais clareza sobre o que foi coletado, e motoristas passaram a operar com um registro mais estruturado do processo. A documentação da coleta também ficou mais consistente e fácil de consultar.',
    salesContext: 'A seção de vendas centraliza a gestão de pedidos, despachos e prioridades de vendedores de todos os portes, do individual ao enterprise. É onde o vendedor vive dentro do sistema: da venda à entrega, incluindo também etapas como devoluções.',
    salesProblem: 'O vendedor chegava à plataforma sem saber ao certo o que precisava fazer primeiro. Com muitas coisas competindo por atenção ao mesmo tempo, tudo parecia urgente e nada se tornava prioridade de fato.\n\nA ausência de uma lógica de priorização clara tornava a gestão reativa: cada vendedor resolvia por conta própria, sem orientação suficiente do sistema.\n\nIsso afetava diretamente prazos de despacho, satisfação de compradores e a reputação do vendedor na plataforma.',
    salesProcessTab: 'Trabalhei na estruturação da experiência de gestão, definindo como informações, tarefas e alertas deveriam ser organizados para ajudar o vendedor a entender o que exigia atenção primeiro.\n\nIsso envolveu workshops e mesas de trabalho com múltiplos times, gestão de stakeholders com visões diferentes sobre prioridade e a criação de um modelo de organização da experiência que orientou o redesign de grande parte do fluxo.',
    salesChallenges: 'A mesma lógica precisava funcionar para um vendedor individual com poucos pedidos por dia e para uma operação enterprise com centenas de envios simultâneos. A interface precisava parecer simples, mas a estrutura por baixo precisava ser flexível o suficiente para os dois extremos.\n\nAo mesmo tempo, o sistema já estava em produção. Qualquer mudança precisava acontecer sem desorientar quem já usava a plataforma.',
    salesResults: 'A experiência passou a orientar melhor o vendedor sobre o que precisava de atenção, reduzindo a fricção na rotina de gestão e facilitando a tomada de decisão.\n\nTarefas importantes passaram a ficar mais visíveis no fluxo principal, diminuindo a necessidade de buscar orientação fora da interface.\n\nO trabalho também ajudou a tornar a experiência mais clara para times internos, com uma estrutura de priorização mais fácil de entender, documentar e evoluir.',
    widgetContext: 'O widget de gestão vive dentro da seção de vendas e acompanha o vendedor durante toda a sua operação logística, exibindo informações sobre coletas e envios em tempo real.',
    widgetProblem: 'O vendedor não tinha onde concentrar as informações sobre sua operação. O que estava disponível ficava disperso e sem hierarquia. Quando precisava de uma resposta, muitas vezes precisava sair do fluxo principal para procurar ajuda ou confirmação.\n\nIsso gerava incerteza, esforço adicional e uma sensação constante de falta de controle sobre a operação.',
    widgetProcessTab: 'Participei do projeto de ponta a ponta, do discovery à implementação.\n\nO trabalho envolveu análise de pesquisas realizadas por User Research para entender que tipo de informação o vendedor realmente precisava em cada momento. A partir disso, trabalhei na definição da hierarquia e do conteúdo de cada estado do widget, garantindo consistência com o fluxo de gestão já existente na seção de vendas.\n\nNa etapa final, cuidei da documentação do projeto, mapeando casos de uso, comportamentos e microinterações. Acompanhei a implementação junto ao time de desenvolvimento e participei das iterações pós-entrega.',
    widgetChallenges: 'O maior desafio foi comportamental. Não bastava exibir as informações corretas: era preciso fazer com que elas parecessem completas, confiáveis e acionáveis no momento certo.\n\nConfiança no dado e mudança de comportamento são metas mais difíceis de atingir do que projetar uma interface nova. A experiência precisava ser clara o suficiente para que o vendedor se sentisse seguro em agir com base nela.',
    widgetResults: 'Com informações mais visíveis e contextualizadas, o vendedor passou a ter mais autonomia para acompanhar sua operação sem sair do fluxo principal.\n\nA experiência reduziu incertezas, aumentou índices de satisfação, melhorou a sensação de controle e transformou o widget em um ponto de referência dentro da rotina do vendedor.',
    riskContext: 'Sistema de avaliação, gestão e controle de riscos operacionais em máquinas e equipamentos industriais, com múltiplos atores envolvidos no processo de apreciação e aprovação.',
    riskProblem: 'O processo de apreciação de risco era conduzido de formas diferentes por áreas diferentes: parte em planilhas, parte em papel, sem padronização nem rastreabilidade.\n\nOs registros existiam, mas não se conectavam. O que um usuário documentava nem sempre chegava de forma clara a quem precisava agir, e o ciclo de avaliação, correção e aprovação dependia de processos manuais e descentralizados.',
    riskProcessTab: 'Assumi um projeto que já estava em andamento, mas com muitas definições em aberto. Conduzi pesquisas e entrevistas com os diferentes atores do processo: quem avalia, quem corrige, quem gerencia e quem aprova.\n\nA partir desses insumos, refiz diversas estruturas do sistema para que refletissem como o trabalho realmente acontecia no campo e cobrissem casos de uso que ainda não estavam bem representados.\n\nDurante a construção do produto, também contribuí para a criação de um design system integrado a outros produtos internos, garantindo consistência visual e de interação além dos limites deste projeto.',
    riskChallenges: 'O projeto original estava focado em documentação: registrar o risco, não necessariamente apoiar a continuidade do processo. Identifiquei uma oportunidade de transformar o produto em uma experiência mais conectada entre avaliação, correção e aprovação.\n\nO desafio foi mostrar que o sistema poderia ir além do registro e ajudar diferentes perfis de usuários a acompanhar melhor cada etapa do fluxo.\n\nA solução também precisou considerar diferentes contextos operacionais e perfis de usuários, garantindo consistência sem ignorar particularidades locais.',
    riskResults: 'O principal ganho foi tornar o processo de avaliação mais estruturado, rastreável e conectado. As informações passaram a circular melhor entre quem avalia, corrige e aprova, apoiando decisões mais consistentes sobre riscos operacionais.\n\nO sistema passou de uma ferramenta centrada em registro para um fluxo operacional mais integrado. O resultado foi menos retrabalho, mais clareza entre etapas e uma experiência mais consistente para os diferentes usuários envolvidos, além de uma documentação sempre atualizada e de fácil acesso.',
    contactDescription: 'Se você chegou até aqui, provavelmente temos algo a conversar. Adoraria conhecer o seu produto e ver onde posso ajudar.',
    backToProjects: 'Voltar aos projetos',
    contextAndDiscovery: 'Contexto e descoberta',
    prototypeDescription: 'Experimente o protótipo interativo para ver como a solução funciona na prática.',
    discoveryWorkshop: 'Workshop de descoberta',
    userFlow: 'Fluxo do usuário',
    usabilityTest: 'Teste de usabilidade',
    iterationProcess: 'Processo de iteração',
    stakeholderMap: 'Mapa de stakeholders',
    viewCaseStudy: 'Ver case',
    handshakeTeaserDescription: 'Participei do design de uma solução que torna a confirmação de coleta mais clara, documentada e confiável para vendedores e motoristas.',
    oneBipTeaserDescription: 'Liderei o design de um web app multi-dispositivo que tornou grandes coletas mais rápidas, organizadas e rastreáveis.',
    salesTeaserDescription: 'Contribuí para o redesign da experiência de vendas, criando uma lógica de priorização que orienta ativamente o vendedor sobre o que fazer e quando.',
    widgetTeaserDescription: 'Desenvolvi em equipe um widget contextual que centraliza informações operacionais e aumenta a autonomia do vendedor no fluxo de gestão.',
    riskTeaserDescription: 'Contribuí para um sistema digital de apreciação de riscos industriais, transformando processos manuais e descentralizados em um fluxo conectado e rastreável.',
    oneBipDescription: 'Liderei o design de uma solução para transformar a forma como vendedores e suas equipes realizam grandes coletas. O One Bip é um web app multi-dispositivo que substitui a conferência manual de milhares de pacotes por um processo mais estruturado, rastreável e eficiente.',
    oneBipProcess: 'Liderei o projeto do discovery ao delivery. Começamos com uma análise exploratória junto ao produto, testes preliminares para validar valor e viabilidade, e benchmarks internos para calibrar a direção. Conduzi workshops, reuniões com outras equipes para aprender e definir comportamentos esperados, e fui responsável por mapear casos de uso e situações críticas.\n\nUm dos maiores desafios foi a adaptação a um Design System operacional diferente do que a equipe estava acostumada. Reuni com referentes e especialistas para absorver as diretrizes e aplicá-las com qualidade em tempo reduzido. A IA apoiou o processo, ajudando a organizar cenários e explorar edge cases complexos. Desenhei telas, documentei comportamentos, conduzi o handoff com desenvolvimento e acompanhei as iterações até a entrega final.',
    oneBipPrototypeNote: 'Experimente o protótipo interativo para entender o fluxo central do One Bip: criação de grupo, bipagem dos pacotes e geração da etiqueta final.',
    oneBipCollectionTime: 'Tempo de coleta',
    oneBipGrouping: 'Agrupamento de pacotes',
    oneBipDriverExperience: 'Eficiência na coleta',
    oneBipOperationalVisibility: 'Rastreabilidade',
    feasibilityAnalysis: 'Análise de viabilidade',
    useCaseMapping: 'Mapeamento de casos de uso',
    designSystemAdaptation: 'Adaptação ao Design System',
    handoffAndIterations: 'Handoff e iterações',
    oneBipContext: 'Grandes vendedores despacham milhares de pacotes por coleta. Antes do One Bip, cada visita do motorista exigia uma conferência manual: pacote por pacote, um a um.\n\nO One Bip mudou essa dinâmica ao permitir que vendedores agrupassem pacotes antes da coleta, criando volumes identificados, lacrados e mais fáceis de rastrear.',
    oneBipProblem: 'Com milhares de pacotes para bipar, grandes coletas podiam durar horas. O motorista bipava pacote por pacote enquanto a equipe do vendedor conferia junto, criando trabalho dobrado em um processo manual e repetitivo.\n\nEsse tempo parado não afetava só vendedor e motorista. Para a operação, criava um efeito em cadeia: coletas mais longas tornavam o dia menos previsível e aumentavam a dificuldade de manter o fluxo de pacotes em movimento.\n\nAlém do tempo, havia complexidade na operação. Em volumes tão altos, era difícil saber o que já tinha sido coletado e o que ainda faltava.',
    oneBipProcessTab: 'Atuei como referência de Design do discovery ao delivery, levando a iniciativa adiante junto ao time de Produto e Desenvolvimento.\n\nNa fase inicial, analisamos caminhos possíveis, testamos valor e viabilidade e buscamos referências internas para entender como a solução deveria funcionar na operação real. A partir disso, conduzi o mapeamento de casos de uso, comportamentos esperados e situações críticas.\n\nA IA também apoiou essa etapa, ajudando a organizar cenários complexos e explorar edge cases difíceis de cobrir manualmente.\n\nDepois, desenhei a experiência completa: fluxos, telas, estados, comportamentos e documentação para handoff. Acompanhei o desenvolvimento e as iterações até a entrega final.',
    oneBipChallenges: 'O projeto recebeu atenção de diferentes níveis da operação. Mudar o modelo de grandes coletas impactava uma cadeia inteira: menos tempo parado na coleta podia significar mais previsibilidade operacional e uma rotina mais fluida para todos os envolvidos.\n\nNo Design, o desafio era transformar essa complexidade em um fluxo simples o suficiente para funcionar em operação. A experiência precisava funcionar em diferentes dispositivos e cobrir momentos críticos do fluxo, da criação do grupo à conferência final, sem aumentar a carga cognitiva de quem estava operando.\n\nTambém havia a adaptação a um Design System operacional que o time ainda estava conhecendo. O tempo era curto, a exigência era alta e cada decisão precisava equilibrar velocidade, clareza e segurança operacional.',
    oneBipResults: 'Coletas que antes podiam levar horas passaram a ser concluídas em muito menos tempo. Motoristas deixaram de esperar por longas conferências, e equipes dos vendedores passaram a operar com mais eficiência.\n\nCom os pacotes agrupados em caixas, sacas ou pallets lacrados antes da coleta, o processo ficou mais rastreável e reduziu a chance de inconsistências durante a conferência.\n\nPara a operação, o impacto foi além da coleta. Processos mais rápidos aumentam a previsibilidade e contribuem para uma experiência mais fluida para vendedores, motoristas e compradores.',
  },

  en: {
    contact: 'Contact',
    chatOnLinkedIn: 'Chat on LinkedIn',
    heroTitle1: 'Efficient experiences',
    heroTitle2: 'for people and products',
    heroDescription1: 'With projects at Mercado Livre and Vale, I transform user behavior,',
    heroDescription2: 'business context, and product decisions into clearer, more efficient, and more sustainable solutions.',
    heroDescription3: "I'm Rodrigo, but you can call me Digo. ",
    myProjects: 'Show projects',
    projectsTitle: 'Projects',
    handshakeTitle: 'Handshake',
    handshakeDescription1: 'I contributed to designing an experience that made package pickup confirmation',
    handshakeDescription2: "clearer for high-volume package pickup operations. The goal was to reduce",
    handshakeDescription3: 'operational ambiguity and create a more consistent record between',
    handshakeDescription4: 'sellers and drivers during pickup.',
    handshakeProcess1: 'I applied user-centered methodology through collaborative',
    handshakeProcess2: 'workshops, qualitative interviews, and iterative usability testing.',
    handshakeProcess3: 'I contributed to creating scalable flows that deliver critical',
    handshakeProcess4: 'information clearly within dynamic operational contexts.',
    savedPerMonth: 'Collection time',
    contactRate: 'Shipment management',
    userTrustHandshake: 'User trust',
    operationCosts: 'Operational clarity',
    eventDocumentation: 'Event documentation',
    salesTitle: 'Sales section',
    salesDescription1: 'I contributed to redesigning the sales experience, creating a self-management',
    salesDescription2: 'system that optimizes productivity through intelligent task organization.',
    salesDescription3: 'The goal was to reduce operational friction and create adaptive',
    salesDescription4: 'adaptive flows for different profiles, from individual sellers to enterprise operations.',
    salesDescription5: 'We conducted workshops, work sessions with many other teams, managed stakeholders, and created a new logic model applied to the logistics management system.',
    dispatchRate: 'Dispatch rate on time',
    solvedProblems: 'Operational problems',
    userSatisfaction: 'User satisfaction',
    widgetTitle: 'Shipping widget',
    widgetDescription1: 'I collaborated in developing a contextual widget system that organizes operational',
    widgetDescription2: 'data into actionable information. The challenge was to give sellers',
    widgetDescription3: 'more autonomy through informational transparency, supporting decisions',
    widgetDescription4: 'with visibility into pickup status and operational performance.',
    internalManagement: 'Dispatch operation',
    packageDispatch: 'Shipments fulfilled',
    userTrust: 'User trust',
    reducedContacts: 'Autonomy',
    riskTitle: 'Risk Assessment',
    riskDescription1: 'I contributed to developing a digital system for evaluation and control',
    riskDescription2: 'of operational risks in machinery, replacing manual and decentralized',
    riskDescription3: 'processes. The goal was to bring more standardization,',
    riskDescription4: 'efficiency, and visibility to the risk assessment process.',
    documentStandardization: 'Document standardization',
    processAgility: 'Assessment process',
    toolUnification: 'Tool unification',
    accidentPotential: 'Traceability',
    aboutTitle: 'About me',
    aboutParagraph1: "I'm Rodrigo, I have 2 beautiful cats and I've been working in UX since early 2020, but I've had contact with interfaces since the 2000s, building blogs and websites for fun. I was forged in the internet boom. 😂",
    aboutParagraph2: "I'm passionate about this profession, about understanding and helping people. I like creating stories, feeling part of them so they can be incredible or simple, when they need to be. I was a lawyer before, and from there I brought this desire to take care of people.",
    aboutParagraph3: 'I really like learning, I am in constant contact with new technologies, including AI, where I increasingly seek to orient and improve myself. I remain always curious.',
    contactTitle: 'Contact me',
    contactDescription1: 'If my work resonated with you and you believe I can help improve your product or',
    contactDescription2: "your users' experience, I'd love to hear from you. Let's build something",
    contactDescription3: 'meaningful together.',
    footer: 'uxdigo',
    significantImprovement: 'Improvement',
    substantialImprovement: 'Optimization',
    notableImprovement: 'Integration',
    considerableImprovement: 'Increase',
    significantReduction: 'Reduction',
    significantIncrease: 'Strengthening',
    notableReduction: 'Decrease',
    consolidation: 'Consolidation',
    interactivePrototype: 'Interactive Prototype',
    demonstrativePrototype: 'Demonstrative Prototype',
    scheduledPickupText: 'The pickup is scheduled for the designated time slot. Please have your packages ready by the initial scheduled time.',
    pickupManagement: 'Shipment management',
    pending: 'Pending',
    finished: 'Finished',
    canceled: 'Canceled',
    onTheWay: 'ON THE WAY',
    scheduled: 'SCHEDULED',
    completed: 'COMPLETED',
    pickup: 'PICKUP',
    pickupOnTheWayText: 'The pickup is on its way. Have your packages ready and have your authorization code ready to confirm the process.',
    pickupCompletedText1: 'The pickup was successfully completed.',
    pickupCompletedText2: 'We collected 208 packages.',
    pickupCanceledLocationText: 'This pickup was canceled because the location was not open when we arrived.',
    pickupCanceledRouteText: 'This pickup was canceled due to an inconvenience on the route.',
    reputationAtRisk: 'Reputation at risk',
    noRiskToReputation: 'No risk to reputation',
    pickupReceipt: 'Pick up receipt',
    packages: 'packages',
    weCollected: 'We collected',
    canDownloadReceipt: 'You can download the pickup receipt to see more details.',
    morningPickupCompleted: 'Morning pickup successfully completed.',
    allItemsProcessed: 'All items were processed and are now in transit to their destinations.',
    pickupDetails: 'Pickup details',
    reviewAndConfirm: 'Review and confirm',
    packagesCount185: '185 packages',
    packagesPending7: '7 packages pending',
    packages7: '7 packages',
    confirm: 'Confirm',
    change: 'Change',
    shippedPackages: 'Shipped packages',
    pendingPackages: 'Pending packages',
    shipId: 'Ship ID',
    reason: 'Reason',
    notReady: 'Not ready',
    poorCondition: 'Poor condition',
    vehicleFull: 'Vehicle full',
    close: 'Close',
    packageSuccessfullyConfirmed: 'Pickup confirmed',
    packagesConfirmedDriverNotified: 'E-mail sent to the administrator',
    packagesConfirmationSuccessful: 'Pickup confirmed',
    authorizationCode: 'Authorization code',
    salesToday: 'Today',
    salesUpcoming: 'Upcoming',
    salesInTransit: 'In transit',
    salesCompleted: 'Completed',
    salesOnTheWay: 'ON THE WAY',
    salesPending: 'PENDING',
    salesUntil4PM: 'UNTIL 4 PM',
    salesBuyerMessage: 'Buyer message',
    salesInvoicePending: 'Invoice pending',
    salesLabelPending: 'Label pending',
    salesReadyToShip: 'Ready to ship',
    riskHazards: 'Hazards',
    riskHazardType: 'Hazard\nType',
    riskCurrentHRN: 'Current\nHRN',
    riskTargetHRN: 'Target\nHRN',
    riskHazardStatus: 'Hazard\nStatus',
    riskMechanical: 'Mechanic',
    riskElectrical: 'Electrical',
    riskThermal: 'Thermal',
    riskMachineHasHazards: 'Machine 130AB has 5 hazards',
    riskAddHazard: 'Add hazard',
    prototypesDisclaimer: 'The prototypes presented are conceptual simulations created for process demonstration purposes.',
    salesFlexTime: 'Until 7 PM',
    footerCredit: 'This site was made with research, Figma and Claude.',
    heroTitle: 'Efficient experiences for people and products',
    heroDescription: "With projects at Mercado Livre and Vale, I transform user behavior, business context, and product decisions into clearer, more efficient, and more sustainable solutions. I'm Rodrigo, but you can call me Digo. 😉",
    tabProblem: 'Problem',
    tabProcess: 'Process',
    tabChallenges: 'Challenges',
    tabResults: 'Results',
    handshakeContext: 'Many sellers ship packages through pickups carried out by partner drivers. At pickup time, both sides need to confirm the collected volume together, clearly and quickly.',
    handshakeProblem: "In high-volume pickups, sellers and drivers needed to reach a shared understanding of what was being handed over. When that confirmation was not clear, the process created doubts, rework, and loss of trust between both sides.\n\nThe challenge was to resolve that confirmation in a few seconds, in a real operational context, with users under pressure and little room for ambiguity.",
    handshakeProcessTab: "I was involved in the project from discovery to implementation.\n\nIn the initial phase, I worked on concept creation, diagram development, and journey mapping for both users involved. From these inputs, I was responsible for designing the flow, wireframes, and high-fidelity prototype.\n\nI supported tests with real sellers and drivers. After validation, I accompanied the handoff with the development team and participated in iterations until final delivery.",
    handshakeChallenges: "The central challenge was balancing three vectors simultaneously.\n\nThe process couldn't be slow, because operations don't wait. It couldn't be ambiguous, because two users under pressure need to understand quickly what is happening. And it couldn't feel confrontational: any difference between both sides had to be communicated clearly, neutrally, and safely.\n\nEvery screen and every piece of feedback had to address all three vectors at once.",
    handshakeResults: "The solution made pickup confirmation clearer and better documented, reducing ambiguity at handoff and giving sellers, drivers, and operations more confidence.\n\nTrust in the flow increased on both sides: sellers gained more clarity about what was collected, and drivers operated with a more structured record of the process. Pickup documentation also became more consistent and easier to consult.",
    salesContext: 'The sales section centralizes order management, dispatch, and priorities for sellers of all sizes, from individual to enterprise. It is where sellers live inside the system: from sale to delivery, including steps such as returns.',
    salesProblem: "Sellers arrived at the platform without knowing exactly what they needed to do first. With many things competing for attention at the same time, everything felt urgent and nothing became a real priority.\n\nThe absence of a clear prioritization logic made management reactive: each seller figured things out on their own, without enough guidance from the system.\n\nThis directly affected dispatch deadlines, buyer satisfaction, and the seller's reputation on the platform.",
    salesProcessTab: "I worked on structuring the management experience, defining how information, tasks, and alerts should be organized to help sellers understand what needed attention first.\n\nThis involved workshops and working sessions with multiple teams, stakeholder management with different views on priorities, and the creation of an experience organization model that guided the redesign of a large portion of the flow.",
    salesChallenges: "The same logic had to work for an individual seller with a few orders per day and for an enterprise operation with hundreds of simultaneous shipments. The interface had to feel simple, but the structure underneath had to be flexible enough for both extremes.\n\nAt the same time, the system was already in production. Any change had to happen without disorienting those who already used the platform.",
    salesResults: "The experience began guiding sellers more clearly about what needed attention, reducing friction in their management routine and making decision-making easier.\n\nImportant tasks became more visible in the main flow, reducing the need to look for guidance outside the interface.\n\nThe work also helped make the experience clearer for internal teams, with a prioritization structure that was easier to understand, document, and evolve.",
    widgetContext: 'The management widget lives inside the sales section and accompanies the seller throughout their logistics operation, displaying information about pickups and shipments in real time.',
    widgetProblem: "Sellers had no place to concentrate information about their operation. What was available was scattered and lacked hierarchy. When they needed an answer, they often had to leave the main flow to look for help or confirmation.\n\nThis created uncertainty, additional effort, and a constant feeling of lack of control over the operation.",
    widgetProcessTab: "I participated in the project end-to-end, from discovery to implementation.\n\nThe work involved analyzing research conducted by User Research to understand what information the seller really needed at each moment. From that, I worked on defining the hierarchy and content of each widget state, ensuring consistency with the existing management flow in the sales section.\n\nIn the final phase, I handled project documentation, mapping use cases, behaviors, and micro-interactions. I accompanied implementation alongside the development team and participated in post-delivery iterations.",
    widgetChallenges: "The biggest challenge was behavioral. Displaying the right information wasn't enough: it had to feel complete, trustworthy, and actionable at the right moment.\n\nTrust in data and behavioral change are harder goals to achieve than designing a new interface. The experience needed to be clear enough for sellers to feel confident acting based on it.",
    widgetResults: "With information that was more visible and contextualized, sellers gained more autonomy to follow their operation without leaving the main flow.\n\nThe experience reduced uncertainty, increased satisfaction indicators, improved the sense of control, and turned the widget into a reference point within the seller's routine.",
    riskContext: 'System for evaluating, managing, and controlling operational risks in industrial machinery and equipment, with multiple actors involved in the assessment and approval process.',
    riskProblem: "The risk assessment process was conducted differently by different areas: part in spreadsheets, part on paper, with no standardization or traceability.\n\nRecords existed, but didn't connect. What one user documented didn't always clearly reach those who needed to act, and the evaluation, correction, and approval cycle depended on manual and decentralized processes.",
    riskProcessTab: "I took over a project that was already underway but with many open definitions. I conducted research and interviews with the different actors in the process: those who assess, those who correct, those who manage, and those who approve.\n\nFrom these inputs, I restructured various parts of the system so they reflected how work actually happened in the field and covered use cases that were not yet well represented.\n\nDuring product construction, I also contributed to the creation of a design system integrated with other internal products, ensuring visual and interaction consistency beyond this project's scope.",
    riskChallenges: "The original project was focused on documentation: recording risk, not necessarily supporting process continuity. I identified an opportunity to turn the product into a more connected experience across assessment, correction, and approval.\n\nThe challenge was showing that the system could go beyond registration and help different user profiles better follow each step of the flow.\n\nThe solution also needed to consider different operational contexts and user profiles, ensuring consistency without ignoring local particularities.",
    riskResults: "The main gain was making the assessment process more structured, traceable, and connected. Information began flowing better between those who assess, correct, and approve, supporting more consistent decisions about operational risks.\n\nThe system evolved from a registration-centered tool into a more integrated operational flow. The result was less rework, more clarity between steps, and a more consistent experience for the different users involved, along with documentation that stayed up to date and easy to access.",
    contactDescription: "If you made it this far, we probably have something to talk about. I'd love to get to know your product and see where I can help.",
    backToProjects: 'Back to projects',
    contextAndDiscovery: 'Context and discovery',
    prototypeDescription: 'Try the interactive prototype to see how the solution works in practice.',
    discoveryWorkshop: 'Discovery workshop',
    userFlow: 'User flow',
    usabilityTest: 'Usability test',
    iterationProcess: 'Iteration process',
    stakeholderMap: 'Stakeholder map',
    viewCaseStudy: 'View case',
    handshakeTeaserDescription: 'I participated in the design of a solution that makes pickup confirmation clearer, better documented, and more reliable for sellers and drivers.',
    oneBipTeaserDescription: 'I led the design of a multi-device web app that made large pickups faster, more organized, and more traceable.',
    salesTeaserDescription: 'I contributed to redesigning the sales experience, creating a prioritization logic that actively guides sellers on what to do and when.',
    widgetTeaserDescription: 'I co-developed a contextual widget that centralizes operational information and increases seller autonomy within the management flow.',
    riskTeaserDescription: 'I contributed to a digital industrial risk assessment system, transforming manual and decentralized processes into a connected and traceable flow.',
    oneBipDescription: 'I led the design of a solution to transform how sellers and their teams handle large-scale pickups. One Bip is a multi-device web app that replaces the manual checking of thousands of packages with a more structured, traceable, and efficient process.',
    oneBipProcess: 'I led the project from discovery to delivery. We started with exploratory analysis alongside the product team, preliminary tests to validate value and feasibility, and internal benchmarks to calibrate direction. I ran workshops, met with other teams to learn and define expected behaviors, and was responsible for mapping use cases and critical situations.\n\nOne of the biggest challenges was adapting to an operational Design System different from what the team was used to. I met with specialists to absorb the guidelines and apply them with quality under time pressure. AI supported the process by helping organize scenarios and explore complex edge cases. I designed screens, documented behaviors, ran the handoff with development, and followed through on iterations until final delivery.',
    oneBipPrototypeNote: 'Try the interactive prototype to understand the core flow of One Bip: group creation, package scanning, and final label generation.',
    oneBipCollectionTime: 'Collection time',
    oneBipGrouping: 'Package grouping',
    oneBipDriverExperience: 'Collection efficiency',
    oneBipOperationalVisibility: 'Traceability',
    feasibilityAnalysis: 'Feasibility analysis',
    useCaseMapping: 'Use case mapping',
    designSystemAdaptation: 'Design System adaptation',
    handoffAndIterations: 'Handoff and iterations',
    oneBipContext: 'Large sellers dispatch thousands of packages per pickup. Before One Bip, each driver visit required a manual check: package by package, one by one.\n\nOne Bip changed that dynamic by allowing sellers to group packages before pickup, creating identified, sealed volumes that were easier to track.',
    oneBipProblem: 'With thousands of packages to scan, large pickups could take hours. The driver scanned package by package while the seller\'s team checked the count alongside them, creating duplicated work in a manual, repetitive process.\n\nThat idle time did not affect only the seller and the driver. For the operation, it created a chain effect: longer pickups made the day less predictable and increased the difficulty of keeping packages moving.\n\nBeyond time, the operation was complex. At such high volumes, it was difficult to know what had already been collected and what was still missing.',
    oneBipProcessTab: 'I acted as the Design reference from discovery to delivery, moving the initiative forward alongside Product and Development.\n\nIn the initial phase, we analyzed possible paths, tested value and feasibility, and looked for internal references to understand how the solution should work in the real operation. From there, I led the mapping of use cases, expected behaviors, and critical situations.\n\nAI also supported this stage, helping organize complex scenarios and explore edge cases that would be difficult to cover manually.\n\nAfter that, I designed the full experience: flows, screens, states, behaviors, and handoff documentation. I followed development and iterations through to final delivery.',
    oneBipChallenges: 'The project received attention from different levels of the operation. Changing the model for large pickups impacted an entire chain: less idle time during pickup could mean more operational predictability and a smoother routine for everyone involved.\n\nIn Design, the challenge was turning that complexity into a flow simple enough to work in operation. The experience needed to work across different devices and cover critical moments in the flow, from group creation to final checking, without increasing the cognitive load of the people operating it.\n\nThere was also the adaptation to an operational Design System that the team was still getting to know. Time was short, expectations were high, and every decision had to balance speed, clarity, and operational safety.',
    oneBipResults: 'Pickups that used to take hours could be completed in much less time. Drivers no longer had to wait through long checks, and sellers\' teams began operating more efficiently.\n\nWith packages grouped into sealed boxes, sacks, or pallets before pickup, the process became more traceable and reduced the chance of inconsistencies during checking.\n\nFor the operation, the impact went beyond pickup. Faster processes increase predictability and contribute to a smoother experience for sellers, drivers, and buyers.',
  },

  es: {
    contact: 'Contacto',
    chatOnLinkedIn: 'Conversar en LinkedIn',
    heroTitle1: 'Experiencias eficientes',
    heroTitle2: 'para personas y productos',
    heroDescription1: 'Con proyectos en Mercado Libre y Vale, transformo el comportamiento del usuario,',
    heroDescription2: 'el contexto de negocio y las decisiones de producto en soluciones más claras, eficientes y sostenibles.',
    heroDescription3: 'Soy Rodrigo, pero puedes llamarme Digo. ',
    myProjects: 'Mostrar proyectos',
    projectsTitle: 'Proyectos',
    handshakeTitle: 'Handshake',
    handshakeDescription1: 'Participé en el diseño de una experiencia para hacer más clara la confirmación',
    handshakeDescription2: 'de colecta de paquetes en operaciones de alto volumen. El objetivo era reducir',
    handshakeDescription3: 'ambigüedades operacionales y crear un registro más consistente entre',
    handshakeDescription4: 'vendedores y conductores durante la colecta.',
    handshakeProcess1: 'Apliqué metodología centrada en el usuario mediante talleres',
    handshakeProcess2: 'colaborativos, entrevistas cualitativas y pruebas de usabilidad',
    handshakeProcess3: 'iterativas. Contribuí a crear flujos escalables que entregan',
    handshakeProcess4: 'información crítica de forma clara en contextos operacionales dinámicos.',
    savedPerMonth: 'Tiempo de recolección',
    contactRate: 'Gestión de envíos',
    userTrustHandshake: 'Confianza del usuario',
    operationCosts: 'Claridad operacional',
    eventDocumentation: 'Documentación de eventos',
    salesTitle: 'Sección de ventas',
    salesDescription1: 'Contribuí al rediseño de la experiencia de ventas, creando un sistema de',
    salesDescription2: 'autogestión que optimiza productividad mediante organización',
    salesDescription3: 'inteligente de tareas. El objetivo era reducir fricción operacional y',
    salesDescription4: 'crear flujos adaptativos para diferentes perfiles de vendedores individuales hasta operaciones enterprise.',
    salesDescription5: 'Realizamos talleres y mesas de trabajo con muchos otros equipos, gestionamos una gran cantidad de stakeholders y creamos un nuevo modelo de lógica aplicado al sistema de gestión logística.',
    dispatchRate: 'Tasa de envío a tiempo',
    solvedProblems: 'Problemas operacionales',
    userSatisfaction: 'Satisfacción del usuario',
    widgetTitle: 'Widget de envíos',
    widgetDescription1: 'Colaboré en el desarrollo de un sistema de widgets contextuales que organiza datos',
    widgetDescription2: 'operacionales en información accionable. El desafío era dar más autonomía',
    widgetDescription3: 'a los vendedores mediante transparencia informacional, apoyando decisiones',
    widgetDescription4: 'con visibilidad sobre estado de colectas y rendimiento operacional.',
    internalManagement: 'Operación de despacho',
    packageDispatch: 'Envíos realizados',
    userTrust: 'Confianza del usuario',
    reducedContacts: 'Autonomía',
    riskTitle: 'Evaluación de Riesgos',
    riskDescription1: 'Contribuí al desarrollo de un sistema digital para evaluación y control',
    riskDescription2: 'de riesgos operacionales en maquinaria, reemplazando procesos manuales',
    riskDescription3: 'y descentralizados. El objetivo era aportar más estandarización,',
    riskDescription4: 'eficiencia y visibilidad al proceso de evaluación de riesgos.',
    documentStandardization: 'Estandarización de documentos',
    processAgility: 'Proceso de apreciación',
    toolUnification: 'Unificación de herramientas',
    accidentPotential: 'Trazabilidad',
    aboutTitle: 'Sobre mí',
    aboutParagraph1: 'Soy Rodrigo, tengo 2 gatos hermosos y trabajo en UX desde principios de 2020, pero he tenido contacto con interfaces desde los años 2000, construyendo blogs y sitios web por diversión. Fui forjado en el boom de internet. 😂',
    aboutParagraph2: 'Soy apasionado por esta profesión, por entender y ayudar a las personas. Me gusta crear historias, sentirme parte de ellas para que sean increíbles o simples, cuando necesiten serlo. Fui abogado antes, y de ahí traje este deseo de cuidar a las personas.',
    aboutParagraph3: 'Me gusta mucho aprender, estoy en constante contacto con nuevas tecnologías, incluyendo la IA, donde cada vez más busco orientarme y perfeccionarme. Sigo siempre curioso.',
    contactTitle: 'Contáctame',
    contactDescription1: 'Si mi trabajo te llamó la atención y crees que puedo ayudar a mejorar tu producto',
    contactDescription2: 'o la experiencia de tus usuarios, me encantaría saber de ti. Construyamos algo',
    contactDescription3: 'significativo juntos.',
    footer: 'uxdigo',
    significantImprovement: 'Mejora',
    substantialImprovement: 'Optimización',
    notableImprovement: 'Integración',
    considerableImprovement: 'Aumento',
    significantReduction: 'Reducción',
    significantIncrease: 'Fortalecimiento',
    notableReduction: 'Caída',
    consolidation: 'Consolidación',
    interactivePrototype: 'Prototipo Interactivo',
    demonstrativePrototype: 'Prototipo Demostrativo',
    scheduledPickupText: 'La colecta está programada para el horario designado. Por favor, tenga los paquetes listos hasta el horario inicial previsto.',
    pickupManagement: 'Gestión de envíos',
    pending: 'Pendientes',
    finished: 'Finalizadas',
    canceled: 'Canceladas',
    onTheWay: 'EN CAMINO',
    scheduled: 'PROGRAMADA',
    completed: 'COMPLETADA',
    pickup: 'COLECTA',
    pickupOnTheWayText: 'La colecta está en camino. Ten tus paquetes listos y tu código de autorización a mano para confirmar el proceso.',
    pickupCompletedText1: 'La colecta fue completada exitosamente.',
    pickupCompletedText2: 'Recolectamos 208 paquetes.',
    pickupCanceledLocationText: 'Esta colecta fue cancelada porque el lugar no estaba abierto cuando llegamos.',
    pickupCanceledRouteText: 'Esta colecta fue cancelada debido a un inconveniente en la ruta.',
    reputationAtRisk: 'Reputación en riesgo',
    noRiskToReputation: 'Reputación sin riesgo',
    pickupReceipt: 'Comprobante de colecta',
    packages: 'paquetes',
    weCollected: 'Recolectamos',
    canDownloadReceipt: 'Puedes descargar el comprobante de colecta para ver más detalles.',
    morningPickupCompleted: 'Colecta matutina completada exitosamente.',
    allItemsProcessed: 'Todos los artículos fueron procesados y están ahora en tránsito a sus destinos.',
    pickupDetails: 'Detalles de colecta',
    reviewAndConfirm: 'Revisar y confirmar',
    packagesCount185: '185 paquetes',
    packagesPending7: '7 paquetes pendientes',
    packages7: '7 paquetes',
    confirm: 'Confirmar',
    change: 'Cambiar',
    shippedPackages: 'Paquetes enviados',
    pendingPackages: 'Paquetes pendientes',
    shipId: 'ID de Envío',
    reason: 'Razón',
    notReady: 'No listo',
    poorCondition: 'Mala condición',
    vehicleFull: 'Vehículo lleno',
    close: 'Cerrar',
    packageSuccessfullyConfirmed: 'Colecta confirmada',
    packagesConfirmedDriverNotified: 'E-mail enviado al administrador',
    packagesConfirmationSuccessful: 'Colecta confirmada',
    authorizationCode: 'Código de autorización',
    salesToday: 'Hoy',
    salesUpcoming: 'Próximas',
    salesInTransit: 'En tránsito',
    salesCompleted: 'Completadas',
    salesOnTheWay: 'EN CAMINO',
    salesPending: 'PENDIENTE',
    salesUntil4PM: 'HASTA LAS 4 PM',
    salesBuyerMessage: 'Mensaje del comprador',
    salesInvoicePending: 'Factura pendiente',
    salesLabelPending: 'Etiqueta pendiente',
    salesReadyToShip: 'Listo para envío',
    riskHazards: 'Peligros',
    riskHazardType: 'Tipo\nPeligro',
    riskCurrentHRN: 'HRN\nActual',
    riskTargetHRN: 'HRN\nMeta',
    riskHazardStatus: 'Estado\nPeligro',
    riskMechanical: 'Mecánico',
    riskElectrical: 'Eléctrico',
    riskThermal: 'Térmico',
    riskMachineHasHazards: 'Máquina 130AB tiene 5 peligros',
    riskAddHazard: 'Agregar peligro',
    prototypesDisclaimer: 'Los prototipos presentados son simulaciones conceptuales creadas para fines de demostración de procesos.',
    salesFlexTime: 'Hasta las 19h',
    footerCredit: 'Este sitio fue hecho con investigación, Figma y Claude.',
    heroTitle: 'Experiencias eficientes para personas y productos',
    heroDescription: 'Con proyectos en Mercado Libre y Vale, transformo el comportamiento del usuario, el contexto de negocio y las decisiones de producto en soluciones más claras, eficientes y sostenibles. Soy Rodrigo, pero puedes llamarme Digo. 😉',
    tabProblem: 'Problema',
    tabProcess: 'Proceso',
    tabChallenges: 'Desafíos',
    tabResults: 'Resultados',
    handshakeContext: 'Muchos vendedores despachan paquetes a través de colectas realizadas por conductores asociados. En el momento de la colecta, ambas partes deben confirmar juntas el volumen entregado.',
    handshakeProblem: 'En colectas con alto volumen de paquetes, vendedores y conductores necesitaban llegar a un entendimiento común sobre lo que se estaba entregando. Cuando esa confirmación no era clara, el proceso generaba dudas, retrabajo y pérdida de confianza entre las partes.\n\nEl desafío era resolver esa confirmación en pocos segundos, en un contexto operacional real, con usuarios bajo presión y poco margen para la ambigüedad.',
    handshakeProcessTab: 'Participé en el proyecto desde el discovery hasta la implementación.\n\nEn la fase inicial, trabajé en la creación del concepto, elaboración de diagramas y mapeo de journeys de los dos usuarios involucrados. A partir de esos insumos, fui responsable del diseño del flujo, wireframes y prototipo de alta fidelidad.\n\nApoyé los tests con vendedores y conductores reales. Tras la validación, acompañé el handoff con el equipo de desarrollo y participé en las iteraciones hasta la entrega final.',
    handshakeChallenges: 'El desafío central fue equilibrar tres vectores al mismo tiempo.\n\nEl proceso no podía ser lento, porque la operación no espera. No podía ser ambiguo, porque dos usuarios bajo presión necesitan entender rápidamente qué está ocurriendo. Y no podía parecer confrontacional: cualquier diferencia entre las partes debía comunicarse de forma clara, neutral y segura.\n\nCada pantalla y cada feedback debía responder a esos tres vectores juntos.',
    handshakeResults: 'La solución hizo que la confirmación de colecta fuera más clara y mejor documentada, reduciendo ambigüedades en el momento de la entrega y dando más seguridad a vendedores, conductores y operación.\n\nLa confianza en el flujo aumentó en ambos lados: los vendedores pasaron a tener más claridad sobre lo recolectado, y los conductores operaron con un registro más estructurado del proceso. La documentación de la colecta también se volvió más consistente y fácil de consultar.',
    salesContext: 'La sección de ventas centraliza la gestión de pedidos, despachos y prioridades de vendedores de todos los tamaños, del individual al enterprise. Es donde el vendedor vive dentro del sistema: desde la venta hasta la entrega, incluyendo también etapas como devoluciones.',
    salesProblem: 'El vendedor llegaba a la plataforma sin saber exactamente qué necesitaba hacer primero. Con muchas cosas compitiendo por atención al mismo tiempo, todo parecía urgente y nada se convertía en una prioridad real.\n\nLa ausencia de una lógica de priorización clara hacía la gestión reactiva: cada vendedor resolvía por su cuenta, sin suficiente orientación del sistema.\n\nEsto afectaba directamente los plazos de despacho, la satisfacción de compradores y la reputación del vendedor en la plataforma.',
    salesProcessTab: 'Trabajé en la estructuración de la experiencia de gestión, definiendo cómo la información, las tareas y las alertas debían organizarse para ayudar al vendedor a entender qué requería atención primero.\n\nEsto involucró talleres y mesas de trabajo con múltiples equipos, gestión de stakeholders con visiones diferentes sobre prioridad y la creación de un modelo de organización de la experiencia que orientó el rediseño de gran parte del flujo.',
    salesChallenges: 'La misma lógica debía funcionar para un vendedor individual con pocos pedidos por día y para una operación enterprise con cientos de envíos simultáneos. La interfaz debía parecer simple, pero la estructura debajo debía ser flexible para ambos extremos.\n\nAl mismo tiempo, el sistema ya estaba en producción. Cualquier cambio debía ocurrir sin desorientar a quienes ya usaban la plataforma.',
    salesResults: 'La experiencia comenzó a orientar mejor al vendedor sobre qué necesitaba atención, reduciendo la fricción en la rutina de gestión y facilitando la toma de decisiones.\n\nLas tareas importantes pasaron a ser más visibles en el flujo principal, disminuyendo la necesidad de buscar orientación fuera de la interfaz.\n\nEl trabajo también ayudó a hacer la experiencia más clara para equipos internos, con una estructura de priorización más fácil de entender, documentar y evolucionar.',
    widgetContext: 'El widget de gestión vive dentro de la sección de ventas y acompaña al vendedor durante toda su operación logística, mostrando información sobre colectas y envíos en tiempo real.',
    widgetProblem: 'El vendedor no tenía dónde concentrar la información sobre su operación. Lo que estaba disponible quedaba disperso y sin jerarquía. Cuando necesitaba una respuesta, muchas veces debía salir del flujo principal para buscar ayuda o confirmación.\n\nEsto generaba incertidumbre, esfuerzo adicional y una sensación constante de falta de control sobre la operación.',
    widgetProcessTab: 'Participé en el proyecto de punta a punta, desde el discovery hasta la implementación.\n\nEl trabajo involucró análisis de investigaciones realizadas por User Research para entender qué información el vendedor realmente necesitaba en cada momento. A partir de eso, trabajé en la definición de la jerarquía y el contenido de cada estado del widget, garantizando consistencia con el flujo de gestión existente en la sección de ventas.\n\nEn la etapa final, me encargué de la documentación del proyecto, mapeando casos de uso, comportamientos y microinteracciones. Acompañé la implementación junto al equipo de desarrollo y participé en las iteraciones posteriores a la entrega.',
    widgetChallenges: 'El mayor desafío fue conductual. No bastaba mostrar la información correcta: era necesario hacer que pareciera completa, confiable y accionable en el momento adecuado.\n\nConfianza en el dato y cambio de comportamiento son metas más difíciles de alcanzar que diseñar una nueva interfaz. La experiencia debía ser lo suficientemente clara para que el vendedor se sintiera seguro al actuar con base en ella.',
    widgetResults: 'Con información más visible y contextualizada, los vendedores ganaron más autonomía para acompañar su operación sin salir del flujo principal.\n\nLa experiencia redujo incertidumbres, aumentó los índices de satisfacción, mejoró la sensación de control y convirtió al widget en un punto de referencia dentro de la rutina del vendedor.',
    riskContext: 'Sistema de evaluación, gestión y control de riesgos operacionales en maquinaria y equipos industriales, con múltiples actores involucrados en el proceso de apreciación y aprobación.',
    riskProblem: 'El proceso de apreciación de riesgos era conducido de formas diferentes por áreas diferentes: parte en planillas, parte en papel, sin estandarización ni trazabilidad.\n\nLos registros existían, pero no se conectaban. Lo que un usuario documentaba no siempre llegaba de forma clara a quien necesitaba actuar, y el ciclo de evaluación, corrección y aprobación dependía de procesos manuales y descentralizados.',
    riskProcessTab: 'Asumí un proyecto que ya estaba en marcha, pero con muchas definiciones abiertas. Conduje investigaciones y entrevistas con los diferentes actores del proceso: quienes evalúan, quienes corrigen, quienes gestionan y quienes aprueban.\n\nA partir de esos insumos, rehíce diversas estructuras del sistema para que reflejaran cómo el trabajo realmente ocurría en campo y cubrieran casos de uso que todavía no estaban bien representados.\n\nDurante la construcción del producto, también contribuí a la creación de un design system integrado a otros productos internos, garantizando consistencia visual y de interacción más allá de este proyecto.',
    riskChallenges: 'El proyecto original estaba enfocado en documentación: registrar el riesgo, no necesariamente apoyar la continuidad del proceso. Identifiqué una oportunidad de transformar el producto en una experiencia más conectada entre evaluación, corrección y aprobación.\n\nEl desafío fue mostrar que el sistema podía ir más allá del registro y ayudar a diferentes perfiles de usuarios a acompañar mejor cada etapa del flujo.\n\nLa solución también necesitó considerar diferentes contextos operacionales y perfiles de usuarios, garantizando consistencia sin ignorar particularidades locales.',
    riskResults: 'La principal ganancia fue hacer que el proceso de evaluación fuera más estructurado, trazable y conectado. La información comenzó a circular mejor entre quienes evalúan, corrigen y aprueban, apoyando decisiones más consistentes sobre riesgos operacionales.\n\nEl sistema pasó de ser una herramienta centrada en registro a un flujo operacional más integrado. El resultado fue menos retrabajo, más claridad entre etapas y una experiencia más consistente para los diferentes usuarios involucrados, además de una documentación siempre actualizada y de fácil acceso.',
    contactDescription: 'Si llegaste hasta aquí, probablemente tenemos algo que conversar. Me encantaría conocer tu producto y ver dónde puedo ayudar.',
    backToProjects: 'Volver a proyectos',
    contextAndDiscovery: 'Contexto y descubrimiento',
    prototypeDescription: 'Prueba el prototipo interactivo para ver cómo funciona la solución en la práctica.',
    discoveryWorkshop: 'Taller de descubrimiento',
    userFlow: 'Flujo del usuario',
    usabilityTest: 'Prueba de usabilidad',
    iterationProcess: 'Proceso de iteración',
    stakeholderMap: 'Mapa de stakeholders',
    viewCaseStudy: 'Ver caso',
    handshakeTeaserDescription: 'Participé en el diseño de una solución que hace la confirmación de colecta más clara, documentada y confiable para vendedores y conductores.',
    oneBipTeaserDescription: 'Lideré el diseño de una aplicación web multidispositivo que hizo las grandes colectas más rápidas, organizadas y trazables.',
    salesTeaserDescription: 'Contribuí al rediseño de la experiencia de ventas, creando una lógica de priorización que orienta activamente al vendedor sobre qué hacer y cuándo.',
    widgetTeaserDescription: 'Desarrollé en equipo un widget contextual que centraliza información operacional y aumenta la autonomía del vendedor en el flujo de gestión.',
    riskTeaserDescription: 'Contribuí a un sistema digital de apreciación de riesgos industriales, transformando procesos manuales y descentralizados en un flujo conectado y trazable.',
    oneBipDescription: 'Lideré el diseño de una solución para transformar la forma en que vendedores y sus equipos realizan grandes colectas. One Bip es una aplicación web multidispositivo que sustituye la verificación manual de miles de paquetes por un proceso más estructurado, trazable y eficiente.',
    oneBipProcess: 'Lideré el proyecto desde el discovery hasta el delivery. Comenzamos con un análisis exploratorio junto al equipo de producto, tests preliminares para validar el valor y la viabilidad, y benchmarks internos para calibrar la dirección. Conduje talleres, me reuní con otros equipos para aprender y con mi propio equipo para definir comportamientos esperados. Mapeé casos de uso, situaciones críticas y posibles soluciones.\n\nUno de los mayores desafíos fue la adaptación a un Design System operacional diferente al que el equipo estaba acostumbrado. Me reuní con referentes y especialistas para absorber las directrices y aplicarlas con calidad bajo presión de tiempo. La IA apoyó el proceso, ayudando a organizar escenarios y explorar edge cases complejos. Diseñé pantallas, documenté comportamientos, conduje el handoff con desarrollo y acompañé las iteraciones hasta la entrega final.',
    oneBipPrototypeNote: 'Prueba el prototipo interactivo para entender el flujo central del One Bip: creación de grupo, escaneo de paquetes y generación de la etiqueta final.',
    oneBipCollectionTime: 'Tiempo de colecta',
    oneBipGrouping: 'Agrupación de paquetes',
    oneBipDriverExperience: 'Eficiencia en la colecta',
    oneBipOperationalVisibility: 'Trazabilidad',
    feasibilityAnalysis: 'Análisis de viabilidad',
    useCaseMapping: 'Mapeo de casos de uso',
    designSystemAdaptation: 'Adaptación al Design System',
    handoffAndIterations: 'Handoff e iteraciones',
    oneBipContext: 'Los grandes vendedores despachan miles de paquetes por colecta. Antes de One Bip, cada visita del conductor exigía una verificación manual: paquete por paquete, uno a uno.\n\nOne Bip cambió esa dinámica al permitir que los vendedores agruparan paquetes antes de la colecta, creando volúmenes identificados, sellados y más fáciles de rastrear.',
    oneBipProblem: 'Con miles de paquetes para escanear, las grandes colectas podían durar horas. El conductor escaneaba paquete por paquete mientras el equipo del vendedor verificaba junto a él, creando trabajo duplicado en un proceso manual y repetitivo.\n\nEse tiempo detenido no afectaba solo al vendedor y al conductor. Para la operación, creaba un efecto en cadena: colectas más largas hacían el día menos previsible y aumentaban la dificultad de mantener los paquetes en movimiento.\n\nAdemás del tiempo, había complejidad en la operación. En volúmenes tan altos, era difícil saber qué ya había sido recolectado y qué seguía faltando.',
    oneBipProcessTab: 'Actué como referencia de Diseño desde el discovery hasta el delivery, llevando la iniciativa adelante junto al equipo de Producto y Desarrollo.\n\nEn la fase inicial, analizamos caminos posibles, probamos valor y viabilidad, y buscamos referencias internas para entender cómo debía funcionar la solución en la operación real. A partir de eso, conduje el mapeo de casos de uso, comportamientos esperados y situaciones críticas.\n\nLa IA también apoyó esta etapa, ayudando a organizar escenarios complejos y explorar edge cases difíciles de cubrir manualmente.\n\nDespués, diseñé la experiencia completa: flujos, pantallas, estados, comportamientos y documentación para handoff. Acompañé el desarrollo y las iteraciones hasta la entrega final.',
    oneBipChallenges: 'El proyecto recibió atención de diferentes niveles de la operación. Cambiar el modelo de grandes colectas impactaba una cadena completa: menos tiempo detenido en la colecta podía significar más previsibilidad operacional y una rutina más fluida para todos los involucrados.\n\nEn Diseño, el desafío era transformar esa complejidad en un flujo lo suficientemente simple para funcionar en operación. La experiencia necesitaba funcionar en diferentes dispositivos y cubrir momentos críticos del flujo, desde la creación del grupo hasta la verificación final, sin aumentar la carga cognitiva de las personas que la operaban.\n\nTambién estaba la adaptación a un Design System operacional que el equipo todavía estaba conociendo. El tiempo era corto, la exigencia era alta y cada decisión debía equilibrar velocidad, claridad y seguridad operacional.',
    oneBipResults: 'Colectas que antes podían llevar horas pasaron a completarse en mucho menos tiempo. Los conductores dejaron de esperar largas verificaciones, y los equipos de los vendedores pasaron a operar con más eficiencia.\n\nCon los paquetes agrupados en cajas, sacas o pallets sellados antes de la colecta, el proceso se volvió más trazable y redujo la posibilidad de inconsistencias durante la verificación.\n\nPara la operación, el impacto fue más allá de la colecta. Procesos más rápidos aumentan la previsibilidad y contribuyen a una experiencia más fluida para vendedores, conductores y compradores.',
  }
}

interface LanguageContextType {
  language: Language;
  changeLanguage: (newLanguage: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>('pt');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem('portfolio-language') as Language;
      if (savedLanguage && ['pt', 'en', 'es'].includes(savedLanguage)) {
        setLanguage(savedLanguage);
      }
    }
  }, []);

  const changeLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage);
    if (typeof window !== 'undefined') {
      localStorage.setItem('portfolio-language', newLanguage);
    }
  };

  const value = {
    language,
    changeLanguage,
    t: translations[language]
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
