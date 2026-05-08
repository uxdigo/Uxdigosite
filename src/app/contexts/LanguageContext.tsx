import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'pt' | 'en' | 'es';

export interface Translations {
  // Header
  contact: string;
  chatOnLinkedIn: string;
  
  // Hero Section
  heroTitle1: string;
  heroTitle2: string;
  heroDescription1: string;
  heroDescription2: string;
  heroDescription3: string;
  myProjects: string;
  
  // Projects Section
  projectsTitle: string;
  
  // Handshake Project
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
  
  // Sales Section
  salesTitle: string;
  salesDescription1: string;
  salesDescription2: string;
  salesDescription3: string;
  salesDescription4: string;
  salesDescription5: string;
  dispatchRate: string;
  solvedProblems: string;
  userSatisfaction: string;
  
  // Widget Section
  widgetTitle: string;
  widgetDescription1: string;
  widgetDescription2: string;
  widgetDescription3: string;
  widgetDescription4: string;
  internalManagement: string;
  packageDispatch: string;
  userTrust: string;
  reducedContacts: string;
  
  // Risk Assessment Section
  riskTitle: string;
  riskDescription1: string;
  riskDescription2: string;
  riskDescription3: string;
  riskDescription4: string;
  documentStandardization: string;
  processAgility: string;
  toolUnification: string;
  accidentPotential: string;
  
  // About Section
  aboutTitle: string;
  aboutParagraph1: string;
  aboutParagraph2: string;
  aboutParagraph3: string;
  
  // Contact Section
  contactTitle: string;
  contactDescription1: string;
  contactDescription2: string;
  contactDescription3: string;
  
  // Footer
  footer: string;
  
  // Qualitative improvements
  significantImprovement: string;
  substantialImprovement: string;
  notableImprovement: string;
  considerableImprovement: string;
  significantReduction: string;
  significantIncrease: string;
  notableReduction: string;
  consolidation: string;
  
  // Prototype badge
  interactivePrototype: string;
  demonstrativePrototype: string;
  
  // Widget texts
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
  contact: string;
  packages: string;
  weCollected: string;
  canDownloadReceipt: string;
  morningPickupCompleted: string;
  allItemsProcessed: string;
  
  // Handshake prototype texts
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
  
  // Sales prototype texts
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
  
  // Risk prototype texts
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
  
  // Disclaimer
  prototypesDisclaimer: string;
}

const translations: Record<Language, Translations> = {
  pt: {
    // Header
    contact: 'Contato',
    chatOnLinkedIn: 'Conversar no LinkedIn',
    
    // Hero Section
    heroTitle1: 'Bem-vindo ao meu',
    heroTitle2: 'Espaço UX',
    heroDescription1: 'Um espaço onde combino design centrado no humano com dados,',
    heroDescription2: 'objetivos de negócio e IA para criar experiências mais inteligentes.',
    heroDescription3: 'Por falar nisso, sou Rodrigo, mas pode me chamar de Digo. ',
    myProjects: 'Meus projetos',
    
    // Projects Section
    projectsTitle: 'Projetos',
    
    // Handshake Project
    handshakeTitle: 'Handshake',
    handshakeDescription1: 'Participei ativamente do design de uma solução anti-fraude para otimizar o processo',
    handshakeDescription2: 'de coleta de pacotes do Mercado Livre. O objetivo era eliminar',
    handshakeDescription3: 'discrepâncias operacionais e garantir integridade dos dados entre',
    handshakeDescription4: 'vendedores e motoristas através de verificação digital em tempo real.',
    handshakeProcess1: 'Apliquei metodologia centrada no usuário através de workshops',
    handshakeProcess2: 'colaborativos, entrevistas qualitativas e testes de usabilidade',
    handshakeProcess3: 'iterativos. Contribuí para a criação de fluxos escaláveis que',
    handshakeProcess4: 'entregam informações críticas de forma clara em contextos operacionais dinâmicos.',
    savedPerMonth: 'Tempo de coleta',
    contactRate: 'Gestão de envios',
    userTrustHandshake: 'Confiança do usuário',
    operationCosts: 'Custos de operação',
    eventDocumentation: 'Documentação de eventos',

    // Sales Section
    salesTitle: 'Seção de vendas',
    salesDescription1: 'Contribuí para o redesign da experiência de vendas, criando um sistema de',
    salesDescription2: 'autogerenciamento que otimiza produtividade através de organização',
    salesDescription3: 'inteligente de tarefas. O objetivo era reduzir fricção operacional e',
    salesDescription4: 'criar fluxos adaptativos para diferentes perfis — de vendedores individuais a operações enterprise.',
    salesDescription5: 'Realizamos workshops, mesas de trabalho com muitos outros times, gestionamos grande quantidade de stakeholders e criamos um novo modelo de lógica aplicada ao sistema de gerenciamento de logística, que envolveu refazer grande parte da experiência.',
    dispatchRate: 'Taxa de despacho no prazo',
    solvedProblems: 'Problemas operacionais',
    userSatisfaction: 'Satisfação do usuário',

    // Widget Section
    widgetTitle: 'Widget de gestão',
    widgetDescription1: 'Desenvolvi em equipe um sistema de widgets contextuais que transforma dados',
    widgetDescription2: 'operacionais em insights acionáveis. O desafio era reduzir sobrecarga',
    widgetDescription3: 'de suporte através de transparência informacional, capacitando vendedores',
    widgetDescription4: 'com visibilidade em tempo real sobre status de coletas e performance operacional.',
    internalManagement: 'Operação de despacho',
    packageDispatch: 'Envios realizados',
    userTrust: 'Confiança do usuário',
    reducedContacts: 'Contatos reduzidos',

    // Risk Assessment Section
    riskTitle: 'Apreciação de Risco',
    riskDescription1: 'Contribuí para o desenvolvimento de um sistema digital para avaliação e controle',
    riskDescription2: 'de riscos patrimoniais (com foco em máquinas), substituindo processos manuais',
    riskDescription3: 'e descentralizados. O objetivo era garantir redução de acidentes, padronização,',
    riskDescription4: 'eficiência, e visibilidade no processo de apreciação de riscos em um ambiente corporativo crítico.',
    documentStandardization: 'Padronização dos documentos',
    processAgility: 'Processo de apreciação',
    toolUnification: 'Unificação de ferramentas',
    accidentPotential: 'Potencial de acidentes',
    
    // About Section
    aboutTitle: 'Sobre mim',
    aboutParagraph1: 'Sou Rodrigo, tenho 2 gatos lindos e trabalho em UX desde o início de 2020, mas já tive contato com interfaces desde os anos 2000, construindo blogs e sites por diversão. Fui forjado no boom da internet. 😂',
    aboutParagraph2: 'Sou apaixonado por essa profissão, por entender e ajudar pessoas. Gosto de criar histórias, de me sentir parte delas para que sejam incríveis ou simples, quando precisarem ser. Fui advogado antes, e de lá trouxe essa vontade de cuidar das pessoas.',
    aboutParagraph3: 'Gosto muito de aprender, estou em constante contato com novas tecnologias, inclusive a IA, onde cada vez mais busco me orientar e aperfeiçoar. Sigo sempre curioso.',
    
    // Contact Section
    contactTitle: 'Entre em contato',
    contactDescription1: 'Se meu trabalho despertou seu interesse e você acredita que posso ajudar a',
    contactDescription2: 'melhorar seu produto ou a experiência dos seus usuários, adoraria conversar',
    contactDescription3: 'com você. Vamos construir algo significativo juntos.',
    
    // Footer
    footer: 'uxdigo',
    
    // Qualitative improvements
    significantImprovement: 'Melhoria',
    substantialImprovement: 'Otimização',
    notableImprovement: 'Integração',
    considerableImprovement: 'Aumento',
    significantReduction: 'Redução',
    significantIncrease: 'Fortalecimento',
    notableReduction: 'Queda',
    consolidation: 'Consolidação',

    // Prototype badge
    interactivePrototype: 'Protótipo Interativo',
    demonstrativePrototype: 'Protótipo Demonstrativo',
    
    // Widget texts
    scheduledPickupText: 'A coleta está programada para o horário designado. Por favor, tenha os pacotes prontos até o horário inicial previsto.',
    pickupManagement: 'Gestão de coletas',
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
    
    // Handshake prototype texts
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
    
    // Sales prototype texts
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
    
    // Risk prototype texts
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
    
    // Disclaimer
    prototypesDisclaimer: 'Os protótipos apresentados são simulações conceituais criadas para demonstração de processo.'
  },
  
  en: {
    // Header
    contact: 'Contact',
    chatOnLinkedIn: 'Chat on LinkedIn',
    
    // Hero Section
    heroTitle1: 'Welcome to my UX',
    heroTitle2: 'Space',
    heroDescription1: 'A space where I blend human-centered design with data,',
    heroDescription2: 'business goals and AI to create smarter experiences. By the',
    heroDescription3: "way, I'm Rodrigo, but you can call me Digo. ",
    myProjects: 'My projects',
    
    // Projects Section
    projectsTitle: 'Projects',
    
    // Handshake Project
    handshakeTitle: 'Handshake',
    handshakeDescription1: 'I actively contributed to the design of an anti-fraud solution to optimize Mercado',
    handshakeDescription2: "Livre's package pickup operations. The goal was to eliminate",
    handshakeDescription3: 'operational discrepancies and ensure data integrity between',
    handshakeDescription4: 'sellers and drivers through real-time digital verification.',
    handshakeProcess1: 'I applied user-centered methodology through collaborative',
    handshakeProcess2: 'workshops, qualitative interviews, and iterative usability testing.',
    handshakeProcess3: 'I contributed to creating scalable flows that deliver critical',
    handshakeProcess4: 'information clearly within dynamic operational contexts.',
    savedPerMonth: 'Collection time',
    contactRate: 'Shipment management',
    userTrustHandshake: 'User trust',
    operationCosts: 'Operation costs',
    eventDocumentation: 'Event documentation',

    // Sales Section
    salesTitle: 'Sales section',
    salesDescription1: 'I contributed to redesigning the sales experience, creating a self-management',
    salesDescription2: 'system that optimizes productivity through intelligent task organization.',
    salesDescription3: 'The goal was to reduce operational friction and create adaptive',
    salesDescription4: 'flows for different profiles — from individual sellers to enterprise operations.',
    salesDescription5: 'We conducted workshops, work sessions with many other teams, managed a large number of stakeholders, and created a new logic model applied to the logistics management system, which involved redesigning a significant portion of the experience.',
    dispatchRate: 'Dispatch rate on time',
    solvedProblems: 'Operational problems',
    userSatisfaction: 'User satisfaction',

    // Widget Section
    widgetTitle: 'Management widget',
    widgetDescription1: 'I collaborated in developing a contextual widget system that transforms operational',
    widgetDescription2: 'data into actionable insights. The challenge was to reduce support',
    widgetDescription3: 'overhead through informational transparency, empowering sellers',
    widgetDescription4: 'with real-time visibility on pickup status and operational performance.',
    internalManagement: 'Dispatch operation',
    packageDispatch: 'Shipments fulfilled',
    userTrust: 'User trust',
    reducedContacts: 'Reduced contacts',

    // Risk Assessment Section
    riskTitle: 'Risk Assessment',
    riskDescription1: 'I contributed to developing a digital system for evaluation and control',
    riskDescription2: 'of asset risks (focused on machinery), replacing manual and decentralized',
    riskDescription3: 'processes. The goal was to ensure accident reduction, standardization,',
    riskDescription4: 'efficiency, and visibility in the risk assessment process within a critical corporate environment.',
    documentStandardization: 'Document standardization',
    processAgility: 'Assessment process',
    toolUnification: 'Tool unification',
    accidentPotential: 'Accident potential',
    
    // About Section
    aboutTitle: 'About me',
    aboutParagraph1: "I'm Rodrigo, I have 2 beautiful cats and I've been working in UX since early 2020, but I've had contact with interfaces since the 2000s, building blogs and websites for fun. I was forged in the internet boom. 😂",
    aboutParagraph2: "I'm passionate about this profession, about understanding and helping people. I like creating stories, feeling part of them so they can be incredible or simple, when they need to be. I was a lawyer before, and from there I brought this desire to take care of people.",
    aboutParagraph3: 'I really like learning, I am in constant contact with new technologies, including AI, where I increasingly seek to orient and improve myself. I remain always curious.',
    
    // Contact Section
    contactTitle: 'Contact me',
    contactDescription1: 'If my work resonated with you and you believe I can help improve your product or',
    contactDescription2: "your users' experience, I'd love to hear from you. Let's build something",
    contactDescription3: 'meaningful together.',
    
    // Footer
    footer: 'uxdigo',
    
    // Qualitative improvements
    significantImprovement: 'Improvement',
    substantialImprovement: 'Optimization',
    notableImprovement: 'Integration',
    considerableImprovement: 'Increase',
    significantReduction: 'Reduction',
    significantIncrease: 'Strengthening',
    notableReduction: 'Decrease',
    consolidation: 'Consolidation',

    // Prototype badge
    interactivePrototype: 'Interactive Prototype',
    demonstrativePrototype: 'Demonstrative Prototype',
    
    // Widget texts
    scheduledPickupText: 'The pickup is scheduled for the designated time slot. Please have your packages ready by the initial scheduled time.',
    pickupManagement: 'Pickup management',
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
    
    // Handshake prototype texts
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
    
    // Sales prototype texts
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
    
    // Risk prototype texts
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
    
    // Disclaimer
    prototypesDisclaimer: 'The prototypes presented are conceptual simulations created for process demonstration purposes.'
  },
  
  es: {
    // Header
    contact: 'Contacto',
    chatOnLinkedIn: 'Conversar en LinkedIn',
    
    // Hero Section
    heroTitle1: 'Bienvenido a mi',
    heroTitle2: 'Espacio UX',
    heroDescription1: 'Un espacio donde combino diseño centrado en el humano con datos,',
    heroDescription2: 'objetivos de negocio e IA para crear experiencias más inteligentes.',
    heroDescription3: 'Por cierto, soy Rodrigo, pero puedes llamarme Digo. ',
    myProjects: 'Mis proyectos',
    
    // Projects Section
    projectsTitle: 'Proyectos',
    
    // Handshake Project
    handshakeTitle: 'Handshake',
    handshakeDescription1: 'Participé activamente en el diseño de una solución anti-fraude para optimizar el',
    handshakeDescription2: 'proceso de colecta de paquetes de Mercado Libre. El objetivo era',
    handshakeDescription3: 'eliminar discrepancias operacionales y garantizar integridad de datos',
    handshakeDescription4: 'entre vendedores y conductores mediante verificación digital en tiempo real.',
    handshakeProcess1: 'Apliqué metodología centrada en el usuario mediante talleres',
    handshakeProcess2: 'colaborativos, entrevistas cualitativas y pruebas de usabilidad',
    handshakeProcess3: 'iterativas. Contribuí a crear flujos escalables que entregan',
    handshakeProcess4: 'información crítica de forma clara en contextos operacionales dinámicos.',
    savedPerMonth: 'Tiempo de recolección',
    contactRate: 'Gestión de envíos',
    userTrustHandshake: 'Confianza del usuario',
    operationCosts: 'Costos de operación',
    eventDocumentation: 'Documentación de eventos',

    // Sales Section
    salesTitle: 'Sección de ventas',
    salesDescription1: 'Contribuí al rediseño de la experiencia de ventas, creando un sistema de',
    salesDescription2: 'autogestión que optimiza productividad mediante organización',
    salesDescription3: 'inteligente de tareas. El objetivo era reducir fricción operacional y',
    salesDescription4: 'crear flujos adaptativos para diferentes perfiles — desde vendedores individuales hasta operaciones enterprise.',
    salesDescription5: 'Realizamos talleres, mesas de trabajo con muchos otros equipos, gestionamos una gran cantidad de stakeholders y creamos un nuevo modelo de lógica aplicada al sistema de gestión logística, que involucró rediseñar gran parte de la experiencia.',
    dispatchRate: 'Tasa de envío a tiempo',
    solvedProblems: 'Problemas operacionales',
    userSatisfaction: 'Satisfacción del usuario',

    // Widget Section
    widgetTitle: 'Widget de gestión',
    widgetDescription1: 'Colaboré en el desarrollo de un sistema de widgets contextuales que transforma datos',
    widgetDescription2: 'operacionales en insights accionables. El desafío era reducir sobrecarga',
    widgetDescription3: 'de soporte mediante transparencia informacional, capacitando vendedores',
    widgetDescription4: 'con visibilidad en tiempo real sobre estado de colectas y rendimiento operacional.',
    internalManagement: 'Operación de despacho',
    packageDispatch: 'Envíos realizados',
    userTrust: 'Confianza del usuario',
    reducedContacts: 'Contactos reducidos',

    // Risk Assessment Section
    riskTitle: 'Evaluación de Riesgos',
    riskDescription1: 'Contribuí al desarrollo de un sistema digital para evaluación y control',
    riskDescription2: 'de riesgos patrimoniales (enfocado en maquinaria), reemplazando procesos manuales',
    riskDescription3: 'y descentralizados. El objetivo era garantizar reducción de accidentes, estandarización,',
    riskDescription4: 'eficiencia, y visibilidad en el proceso de evaluación de riesgos en un ambiente corporativo crítico.',
    documentStandardization: 'Estandarización de documentos',
    processAgility: 'Proceso de apreciación',
    toolUnification: 'Unificación de herramientas',
    accidentPotential: 'Potencial de accidentes',
    
    // About Section
    aboutTitle: 'Sobre mí',
    aboutParagraph1: 'Soy Rodrigo, tengo 2 gatos hermosos y trabajo en UX desde principios de 2020, pero he tenido contacto con interfaces desde los años 2000, construyendo blogs y sitios web por diversión. Fui forjado en el boom de internet. 😂',
    aboutParagraph2: 'Soy apasionado por esta profesión, por entender y ayudar a las personas. Me gusta crear historias, sentirme parte de ellas para que sean increíbles o simples, cuando necesiten serlo. Fui abogado antes, y de ahí traje este deseo de cuidar a las personas.',
    aboutParagraph3: 'Me gusta mucho aprender, estoy en constante contacto con nuevas tecnologías, incluyendo la IA, donde cada vez más busco orientarme y perfeccionarme. Sigo siempre curioso.',
    
    // Contact Section
    contactTitle: 'Contáctame',
    contactDescription1: 'Si mi trabajo te llamó la atención y crees que puedo ayudar a mejorar tu producto',
    contactDescription2: 'o la experiencia de tus usuarios, me encantaría saber de ti. Construyamos algo',
    contactDescription3: 'significativo juntos.',
    
    // Footer
    footer: 'uxdigo',
    
    // Qualitative improvements
    significantImprovement: 'Mejora',
    substantialImprovement: 'Optimización',
    notableImprovement: 'Integración',
    considerableImprovement: 'Aumento',
    significantReduction: 'Reducción',
    significantIncrease: 'Fortalecimiento',
    notableReduction: 'Caída',
    consolidation: 'Consolidación',

    // Prototype badge
    interactivePrototype: 'Prototipo Interactivo',
    demonstrativePrototype: 'Prototipo Demostrativo',
    
    // Widget texts
    scheduledPickupText: 'La colecta está programada para el horario designado. Por favor, tenga los paquetes listos hasta el horario inicial previsto.',
    pickupManagement: 'Gestión de colectas',
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
    
    // Handshake prototype texts
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
    
    // Sales prototype texts
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
    
    // Risk prototype texts
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
    
    // Disclaimer
    prototypesDisclaimer: 'Los prototipos presentados son simulaciones conceptuales creadas para fines de demostración de procesos.'
  }
};

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

  // Initialize language from localStorage on client side
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