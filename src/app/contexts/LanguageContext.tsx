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
    salesTitle: 'Seção de vendas',
    salesDescription1: 'Contribuí para o redesign da experiência de vendas, criando um sistema de',
    salesDescription2: 'autogerenciamento que otimiza a produtividade por meio de organização',
    salesDescription3: 'inteligente de tarefas. O objetivo era reduzir a fricção operacional e',
    salesDescription4: 'criar fluxos adaptativos para diferentes perfis, de vendedores individuais a operações enterprise.',
    salesDescription5: 'Realizamos workshops, mesas de trabalho com muitos outros times, gerenciamos uma grande quantidade de stakeholders e criamos um novo modelo de lógica aplicado ao sistema de gerenciamento logístico.',
    dispatchRate: 'Taxa de despacho no prazo',
    solvedProblems: 'Problemas operacionais',
    userSatisfaction: 'Satisfação do usuário',
    widgetTitle: 'Widget de gestão',
    widgetDescription1: 'Desenvolvi em equipe um sistema de widgets contextuais que transforma dados',
    widgetDescription2: 'operacionais em insights acionáveis. O desafio era reduzir sobrecarga',
    widgetDescription3: 'de suporte através de transparência informacional, capacitando vendedores',
    widgetDescription4: 'com visibilidade em tempo real sobre status de coletas e performance operacional.',
    internalManagement: 'Operação de despacho',
    packageDispatch: 'Envios realizados',
    userTrust: 'Confiança do usuário',
    reducedContacts: 'Contatos reduzidos',
    riskTitle: 'Apreciação de Risco',
    riskDescription1: 'Contribuí para o desenvolvimento de um sistema digital para avaliação e controle',
    riskDescription2: 'de riscos patrimoniais (com foco em máquinas), substituindo processos manuais',
    riskDescription3: 'e descentralizados. O objetivo era garantir redução de acidentes, padronização,',
    riskDescription4: 'eficiência e visibilidade no processo de apreciação de riscos em um ambiente corporativo crítico.',
    documentStandardization: 'Padronização dos documentos',
    processAgility: 'Processo de apreciação',
    toolUnification: 'Unificação de ferramentas',
    accidentPotential: 'Potencial de acidentes',
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
    handshakeContext: 'Muitos vendedores despacham pacotes através de coletas realizadas por motoristas parceiros. No momento da coleta, os dois lados precisam confirmar juntos o volume entregue.',
    handshakeProblem: 'Na coleta de pacotes, vendedores e motoristas chegavam ao mesmo processo com versões diferentes. Sem registro confiável, qualquer discrepância virava disputa e custo.\n\nO complicador: o processo precisava se resolver em segundos, com dois usuários ansiosos em contextos operacionais reais e, em algumas regiões, em ambientes onde a carga podia ser monitorada por terceiros.',
    handshakeProcessTab: 'Participei do projeto do discovery à implementação.\n\nNa fase inicial, trabalhei na criação do conceito, elaboração de diagramas e mapeamento de jornadas dos dois usuários envolvidos. A partir desses insumos, fui responsável pelo design do fluxo, wireframes e protótipo de alta fidelidade.\n\nApoiei os testes com vendedores e motoristas reais. Após a validação, acompanhei o handoff com a equipe de desenvolvimento e participei das iterações até a entrega final.',
    handshakeChallenges: 'O desafio central foi equilibrar três vetores ao mesmo tempo.\n\nO processo não podia ser lento, porque a operação não espera. Não podia ser ambíguo, porque dois usuários ansiosos não têm margem pra confusão. E não podia parecer confrontacional: mostrar discrepâncias num ambiente de risco sem criar tensão entre as partes era parte do problema.\n\nCada tela e cada feedback precisava responder a esses três vetores juntos.',
    handshakeResults: 'A solução reduziu perdas durante a coleta ao eliminar a ambiguidade entre o que foi entregue e o que foi registrado. Com evidência digital gerada em tempo real, contestações caíram e o custo operacional por ocorrência diminuiu.\n\nA confiança no sistema aumentou dos dois lados: vendedores passaram a ter comprovação do que foi coletado, e motoristas passaram a operar com respaldo documentado. A qualidade da documentação de eventos melhorou, tornando cada coleta rastreável e auditável.',
    salesContext: 'A seção de vendas do Mercado Livre centraliza a gestão de pedidos, despachos e prioridades de vendedores de todos os portes, do individual ao enterprise.',
    salesProblem: 'O vendedor chegava à plataforma sem saber o que precisava fazer nem por onde começar. A ausência de uma lógica de priorização clara tornava a gestão reativa: cada um resolvia por conta própria, sem orientação do sistema.\n\nIsso afetava diretamente prazos de despacho, satisfação de compradores e a reputação do vendedor na plataforma.',
    salesProcessTab: 'Fui responsável pela construção da lógica que estruturou a experiência de gestão: hierarquia de prioridades, critérios de ordenação e regras que determinavam o que aparecia primeiro e por quê.\n\nIsso envolveu workshops e mesas de trabalho com múltiplos times, gestão de stakeholders com visões diferentes sobre o que devia ser prioridade e a criação de um novo modelo lógico aplicado ao sistema de gerenciamento logístico, que resultou no redesign de grande parte da experiência.',
    salesChallenges: 'A mesma lógica precisava funcionar para um vendedor individual com poucos pedidos por dia e para uma operação enterprise com centenas de envios simultâneos. A interface precisava parecer simples, mas a estrutura por baixo precisava ser flexível o suficiente para os dois extremos.\n\nAo mesmo tempo, o sistema já estava em produção. Qualquer mudança precisava acontecer sem desorientar quem já usava a plataforma.',
    salesResults: 'A experiência passou a orientar ativamente o vendedor sobre o que precisava de atenção, reduzindo a fricção operacional e aumentando a taxa de despacho no prazo.\n\nProblemas que antes exigiam intervenção manual passaram a ser antecipados pela própria interface. A satisfação dos vendedores com a experiência de gestão melhorou de forma mensurável.\n\nA nova lógica também trouxe um ganho na documentação do sistema: com a hierarquia de prioridades explícita e estruturada, ficou mais claro para times internos como o produto funciona e por quê cada decisão existe.',
    widgetContext: 'O widget de gestão vive dentro da seção de vendas e acompanha o vendedor durante toda a sua operação logística, exibindo informações sobre coletas e envios em tempo real.',
    widgetProblem: 'O vendedor não tinha onde concentrar as informações sobre sua operação. O que estava disponível ficava disperso e sem hierarquia. Quando precisava de uma resposta, a saída mais comum era entrar em contato com o suporte, mesmo quando a informação poderia estar ao alcance.\n\nIsso gerava volume evitável de contatos, sobrecarga para o suporte e uma sensação constante de falta de controle para o vendedor, além de desconfiança no sistema.',
    widgetProcessTab: 'Participei do projeto de ponta a ponta, do discovery à implementação.\n\nO trabalho envolveu análise profunda de pesquisas realizadas por User Research para entendermos que tipo de informação o vendedor realmente precisava em cada momento. A partir disso, trabalhei na definição da hierarquia e do conteúdo de cada estado do widget, garantindo consistência com o fluxo de gestão já existente na seção de vendas.\n\nNa etapa final, cuidei da documentação do projeto como um todo, mapeando os casos de uso, regras, comportamentos e micro interações. Acompanhei a implementação junto ao time de desenvolvimento e participei das iterações pós entrega.',
    widgetChallenges: 'O maior desafio foi comportamental. Não bastava exibir as informações corretas: era preciso convencer o vendedor de que aquele canal tinha tudo que ele precisava e que não era necessário buscar em outro lugar ou entrar em contato com o suporte.\n\nConfiança no dado e mudança de comportamento são metas mais difíceis de atingir do que projetar uma interface nova. A experiência precisava ser clara e confiável o suficiente para que o vendedor agisse com base nela.',
    widgetResults: 'Com visibilidade centralizada sobre o status das coletas e a performance operacional, os vendedores passaram a agir com mais autonomia.\n\nOs contatos evitáveis com o suporte reduziram, a confiança no sistema aumentou e a operação de despacho ganhou mais eficiência. O widget passou a funcionar como um ponto de referência real dentro da operação do vendedor.',
    riskContext: 'Sistema de avaliação, gestão e controle de riscos operacionais em máquinas e equipamentos industriais, com múltiplos atores envolvidos no processo de apreciação e aprovação.',
    riskProblem: 'O processo de apreciação de risco era conduzido de formas diferentes por áreas diferentes: parte em planilhas, parte em papel, sem padronização nem rastreabilidade.\n\nOs registros existiam, mas não se conectavam. O que um usuário documentava não chegava de forma eficiente a quem precisava agir, e o ciclo de avaliação, correção e aprovação dependia de processos manuais e descentralizados.',
    riskProcessTab: 'Assumi um projeto que já estava em andamento mas com muitas definições em aberto. Conduzi pesquisas e entrevistas com os diferentes atores do processo: quem avalia, quem corrige, quem gestiona e quem aprova.\n\nA partir desses insumos, refiz diversas estruturas do sistema para que refletissem como o trabalho realmente acontecia no campo e cobrissem os casos de uso que não tinham sido mapeados.\n\nDurante a construção do produto, participei e contribuí ativamente para a criação de um design system que conectava outros produtos da Vale, garantindo consistência visual e de interação além dos limites deste projeto.',
    riskChallenges: 'O projeto original estava focado em documentação: registrar o risco, não resolver. Enxerguei uma oportunidade além do que o produto pedia.\n\nO desafio foi transformar o sistema em algo conectado, onde o resultado de cada etapa alimentasse a próxima automaticamente, e convencer o time de que o escopo podia e devia ser maior.\n\nO projeto também envolveu o treinamento de técnicos em diversas regiões do Brasil, Canadá e Ásia, garantindo adoção consistente do novo processo em contextos culturais e operacionais muito diferentes.',
    riskResults: 'O resultado mais significativo foi a redução do potencial de acidentes. Com o índice de perigo controlado e atualizado em tempo real, o risco à vida dos trabalhadores diminuiu de forma concreta e mensurável.\n\nO sistema passou de uma ferramenta de documentação para um fluxo operacional conectado. O avaliador registra o risco, o responsável pela correção atua, o gestor aprova e o índice é atualizado automaticamente.\n\nA ponte entre as etapas se tornou muito mais sólida, eliminando retrabalho e acelerando o processo de apreciação. O resultado foi reconhecido pelo time da Vale como um avanço além do esperado.',
    contactDescription: 'Se você chegou até aqui, provavelmente temos algo a conversar. Adoraria conhecer o seu produto e ver onde posso ajudar.',
    backToProjects: 'Voltar aos projetos',
    contextAndDiscovery: 'Contexto e descoberta',
    prototypeDescription: 'Experimente o protótipo interativo para ver como a solução funciona na prática.',
    discoveryWorkshop: 'Workshop de descoberta',
    userFlow: 'Fluxo do usuário',
    usabilityTest: 'Teste de usabilidade',
    iterationProcess: 'Processo de iteração',
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
    salesTitle: 'Sales section',
    salesDescription1: 'I contributed to redesigning the sales experience, creating a self-management',
    salesDescription2: 'system that optimizes productivity through intelligent task organization.',
    salesDescription3: 'The goal was to reduce operational friction and create adaptive',
    salesDescription4: 'adaptive flows for different profiles, from individual sellers to enterprise operations.',
    salesDescription5: 'We conducted workshops, work sessions with many other teams, managed stakeholders, and created a new logic model applied to the logistics management system.',
    dispatchRate: 'Dispatch rate on time',
    solvedProblems: 'Operational problems',
    userSatisfaction: 'User satisfaction',
    widgetTitle: 'Management widget',
    widgetDescription1: 'I collaborated in developing a contextual widget system that transforms operational',
    widgetDescription2: 'data into actionable insights. The challenge was to reduce support',
    widgetDescription3: 'overhead through informational transparency, empowering sellers',
    widgetDescription4: 'with real-time visibility on pickup status and operational performance.',
    internalManagement: 'Dispatch operation',
    packageDispatch: 'Shipments fulfilled',
    userTrust: 'User trust',
    reducedContacts: 'Reduced contacts',
    riskTitle: 'Risk Assessment',
    riskDescription1: 'I contributed to developing a digital system for evaluation and control',
    riskDescription2: 'of asset risks (focused on machinery), replacing manual and decentralized',
    riskDescription3: 'processes. The goal was to ensure accident reduction, standardization,',
    riskDescription4: 'efficiency, and visibility in the risk assessment process within a critical corporate environment.',
    documentStandardization: 'Document standardization',
    processAgility: 'Assessment process',
    toolUnification: 'Tool unification',
    accidentPotential: 'Accident potential',
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
    handshakeContext: 'Many sellers ship packages through pickups carried out by partner drivers. At pickup time, both sides need to confirm the collected volume together.',
    handshakeProblem: "At package pickup, sellers and drivers arrived at the same process with different versions of it. Without a reliable record, any discrepancy turned into a dispute and cost.\n\nThe complicating factor: the process had to be resolved in seconds, with two anxious users in real operational contexts and, in some regions, in environments where cargo could be monitored by third parties.",
    handshakeProcessTab: "I was involved in the project from discovery to implementation.\n\nIn the initial phase, I worked on concept creation, diagram development, and journey mapping for both users involved. From these inputs, I was responsible for designing the flow, wireframes, and high-fidelity prototype.\n\nI supported tests with real sellers and drivers. After validation, I accompanied the handoff with the development team and participated in iterations until final delivery.",
    handshakeChallenges: "The central challenge was balancing three vectors simultaneously.\n\nThe process couldn't be slow, because operations don't wait. It couldn't be ambiguous, because two anxious users have no room for confusion. And it couldn't seem confrontational: showing discrepancies in a risk environment without creating tension between the parties was part of the problem.\n\nEvery screen and every piece of feedback had to address all three vectors at once.",
    handshakeResults: "The solution reduced losses during pickup by eliminating ambiguity between what was delivered and what was recorded. With digital evidence generated in real time, disputes dropped and operational costs per incident decreased.\n\nTrust in the system increased on both sides: sellers gained proof of what was collected, and drivers operated with documented backing. The quality of event documentation improved, making every pickup traceable and auditable.",
    salesContext: 'The Mercado Livre sales section centralizes order management, dispatch, and priorities for sellers of all sizes, from individual to enterprise.',
    salesProblem: "Sellers arrived at the platform without knowing what they needed to do or where to start. The absence of a clear prioritization logic made management reactive: each one figured it out on their own, without guidance from the system.\n\nThis directly affected dispatch deadlines, buyer satisfaction, and the seller's reputation on the platform.",
    salesProcessTab: "I was responsible for building the logic that structured the management experience: priority hierarchy, sorting criteria, and rules that determined what appeared first and why.\n\nThis involved workshops and working sessions with multiple teams, stakeholder management with different views on what should be prioritized, and the creation of a new logic model applied to the logistics management system that resulted in the redesign of a large portion of the experience.",
    salesChallenges: "The same logic had to work for an individual seller with a few orders per day and for an enterprise operation with hundreds of simultaneous shipments. The interface had to feel simple, but the structure underneath had to be flexible enough for both extremes.\n\nAt the same time, the system was already in production. Any change had to happen without disorienting those who already used the platform.",
    salesResults: "The experience began actively guiding sellers about what needed attention, reducing operational friction and increasing the on-time dispatch rate.\n\nProblems that previously required manual intervention were now anticipated by the interface itself. Seller satisfaction with the management experience improved measurably.\n\nThe new logic also brought a gain in system documentation: with the priority hierarchy explicit and structured, it became clearer to internal teams how the product works and why each decision exists.",
    widgetContext: 'The management widget lives inside the sales section and accompanies the seller throughout their logistics operation, displaying information about pickups and shipments in real time.',
    widgetProblem: "Sellers had no place to concentrate information about their operation. What was available was scattered and without hierarchy. When they needed an answer, the most common response was to contact support, even when the information could have been within reach.\n\nThis generated avoidable contact volume, support overload, and a constant feeling of lack of control for the seller, along with distrust in the system.",
    widgetProcessTab: "I participated in the project end-to-end, from discovery to implementation.\n\nThe work involved in-depth analysis of research conducted by User Research to understand what information the seller really needed at each moment. From that, I worked on defining the hierarchy and content of each widget state, ensuring consistency with the existing management flow in the sales section.\n\nIn the final phase, I handled the full project documentation, mapping use cases, rules, behaviors, and micro-interactions. I accompanied implementation alongside the development team and participated in post-delivery iterations.",
    widgetChallenges: "The biggest challenge was behavioral. Displaying the right information wasn't enough: it was necessary to convince the seller that this channel had everything they needed and that it wasn't necessary to look elsewhere or contact support.\n\nTrust in the data and behavioral change are harder goals to achieve than designing a new interface. The experience needed to be clear and reliable enough for sellers to act based on it.",
    widgetResults: "With centralized visibility over pickup status and operational performance, sellers began acting with greater autonomy.\n\nAvoidable support contacts decreased, trust in the system increased, and the dispatch operation gained efficiency. The widget became a genuine reference point within the seller's operation.",
    riskContext: 'System for evaluating, managing, and controlling operational risks in industrial machinery and equipment, with multiple actors involved in the assessment and approval process.',
    riskProblem: "The risk assessment process was conducted differently by different areas: part in spreadsheets, part on paper, with no standardization or traceability.\n\nRecords existed, but didn't connect. What one user documented didn't efficiently reach those who needed to act, and the evaluation, correction, and approval cycle depended on manual and decentralized processes.",
    riskProcessTab: "I took over a project that was already underway but with many open definitions. I conducted research and interviews with the different actors in the process: those who assess, those who correct, those who manage, and those who approve.\n\nFrom these inputs, I restructured various parts of the system so they reflected how work actually happened in the field and covered the use cases that hadn't been mapped.\n\nDuring product construction, I actively participated and contributed to the creation of a design system that connected other Vale products, ensuring visual and interaction consistency beyond this project's scope.",
    riskChallenges: "The original project was focused on documentation: recording the risk, not resolving it. I identified an opportunity beyond what the product asked for.\n\nThe challenge was transforming the system into something connected, where the result of each step automatically fed the next, and convincing the team that the scope could and should be larger.\n\nThe project also involved training technicians across multiple regions in Brazil, Canada, and Asia, ensuring consistent adoption of the new process across very different cultural and operational contexts.",
    riskResults: "The most significant result was the reduction in accident potential. With the hazard index controlled and updated in real time, the risk to workers' lives decreased in a concrete and measurable way.\n\nThe system went from a documentation tool to a connected operational flow. The assessor records the risk, the person responsible for correction acts, the manager approves, and the index is automatically updated.\n\nThe bridge between steps became much more solid, eliminating rework and accelerating the assessment process. The result was recognized by the Vale team as an advance beyond expectations.",
    contactDescription: "If you made it this far, we probably have something to talk about. I'd love to get to know your product and see where I can help.",
    backToProjects: 'Back to projects',
    contextAndDiscovery: 'Context and discovery',
    prototypeDescription: 'Try the interactive prototype to see how the solution works in practice.',
    discoveryWorkshop: 'Discovery workshop',
    userFlow: 'User flow',
    usabilityTest: 'Usability test',
    iterationProcess: 'Iteration process',
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
    salesTitle: 'Sección de ventas',
    salesDescription1: 'Contribuí al rediseño de la experiencia de ventas, creando un sistema de',
    salesDescription2: 'autogestión que optimiza productividad mediante organización',
    salesDescription3: 'inteligente de tareas. El objetivo era reducir fricción operacional y',
    salesDescription4: 'crear flujos adaptativos para diferentes perfiles de vendedores individuales hasta operaciones enterprise.',
    salesDescription5: 'Realizamos talleres y mesas de trabajo con muchos otros equipos, gestionamos una gran cantidad de stakeholders y creamos un nuevo modelo de lógica aplicado al sistema de gestión logística.',
    dispatchRate: 'Tasa de envío a tiempo',
    solvedProblems: 'Problemas operacionales',
    userSatisfaction: 'Satisfacción del usuario',
    widgetTitle: 'Widget de gestión',
    widgetDescription1: 'Colaboré en el desarrollo de un sistema de widgets contextuales que transforma datos',
    widgetDescription2: 'operacionales en insights accionables. El desafío era reducir sobrecarga',
    widgetDescription3: 'de soporte mediante transparencia informacional, capacitando vendedores',
    widgetDescription4: 'con visibilidad en tiempo real sobre estado de colectas y rendimiento operacional.',
    internalManagement: 'Operación de despacho',
    packageDispatch: 'Envíos realizados',
    userTrust: 'Confianza del usuario',
    reducedContacts: 'Contactos reducidos',
    riskTitle: 'Evaluación de Riesgos',
    riskDescription1: 'Contribuí al desarrollo de un sistema digital para evaluación y control',
    riskDescription2: 'de riesgos patrimoniales (enfocado en maquinaria), reemplazando procesos manuales',
    riskDescription3: 'y descentralizados. El objetivo era garantizar reducción de accidentes, estandarización,',
    riskDescription4: 'eficiencia, y visibilidad en el proceso de evaluación de riesgos en un ambiente corporativo crítico.',
    documentStandardization: 'Estandarización de documentos',
    processAgility: 'Proceso de apreciación',
    toolUnification: 'Unificación de herramientas',
    accidentPotential: 'Potencial de accidentes',
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
    handshakeProblem: 'En la colecta de paquetes, vendedores y conductores llegaban al mismo proceso con versiones diferentes. Sin registro confiable, cualquier discrepancia se convertía en disputa y costo.\n\nEl complicador: el proceso debía resolverse en segundos, con dos usuarios ansiosos en contextos operacionales reales y, en algunas regiones, en ambientes donde la carga podía ser monitorada por terceros.',
    handshakeProcessTab: 'Participé en el proyecto desde el discovery hasta la implementación.\n\nEn la fase inicial, trabajé en la creación del concepto, elaboración de diagramas y mapeo de journeys de los dos usuarios involucrados. A partir de esos insumos, fui responsable del diseño del flujo, wireframes y prototipo de alta fidelidad.\n\nApoyé los tests con vendedores y conductores reales. Tras la validación, acompañé el handoff con el equipo de desarrollo y participé en las iteraciones hasta la entrega final.',
    handshakeChallenges: 'El desafío central fue equilibrar tres vectores al mismo tiempo.\n\nEl proceso no podía ser lento, porque la operación no espera. No podía ser ambiguo, porque dos usuarios ansiosos no tienen margen para confusiones. Y no podía parecer confrontacional: mostrar discrepancias en un ambiente de riesgo sin generar tensión entre las partes era parte del problema.\n\nCada pantalla y cada feedback debía responder a esos tres vectores juntos.',
    handshakeResults: 'La solución redujo las pérdidas durante la colecta al eliminar la ambigüedad entre lo que fue entregado y lo que fue registrado. Con evidencia digital generada en tiempo real, las disputas cayeron y el costo operacional por ocurrencia disminuyó.\n\nLa confianza en el sistema aumentó en ambos lados: los vendedores pasaron a tener comprobación de lo que fue recolectado, y los conductores operaron con respaldo documentado. La calidad de la documentación de eventos mejoró, haciendo cada colecta trazable y auditable.',
    salesContext: 'La sección de ventas de Mercado Libre centraliza la gestión de pedidos, despachos y prioridades de vendedores de todos los tamaños, del individual al enterprise.',
    salesProblem: 'El vendedor llegaba a la plataforma sin saber qué necesitaba hacer ni por dónde empezar. La ausencia de una lógica de priorización clara hacía la gestión reactiva: cada uno resolvía por su cuenta, sin orientación del sistema.\n\nEsto afectaba directamente los plazos de despacho, la satisfacción de compradores y la reputación del vendedor en la plataforma.',
    salesProcessTab: 'Fui responsable de construir la lógica que estructuró la experiencia de gestión: jerarquía de prioridades, criterios de ordenamiento y reglas que determinaban qué aparecía primero y por qué.\n\nEsto involucró talleres y mesas de trabajo con múltiples equipos, gestión de stakeholders con visiones diferentes sobre qué debía ser prioridad, y la creación de un nuevo modelo lógico aplicado al sistema de gestión logística que resultó en el rediseño de gran parte de la experiencia.',
    salesChallenges: 'La misma lógica debía funcionar para un vendedor individual con pocos pedidos por día y para una operación enterprise con cientos de envíos simultáneos. La interfaz debía parecer simple, pero la estructura debajo debía ser flexible para ambos extremos.\n\nAl mismo tiempo, el sistema ya estaba en producción. Cualquier cambio debía ocurrir sin desorientar a quienes ya usaban la plataforma.',
    salesResults: 'La experiencia comenzó a orientar activamente al vendedor sobre qué necesitaba atención, reduciendo la fricción operacional y aumentando la tasa de despacho a tiempo.\n\nProblemas que antes requerían intervención manual pasaron a ser anticipados por la propia interfaz. La satisfacción de los vendedores con la experiencia de gestión mejoró de forma mensurable.\n\nLa nueva lógica también trajo una ganancia en la documentación del sistema: con la jerarquía de prioridades explícita y estructurada, quedó más claro para equipos internos cómo funciona el producto y por qué existe cada decisión.',
    widgetContext: 'El widget de gestión vive dentro de la sección de ventas y acompaña al vendedor durante toda su operación logística, mostrando información sobre colectas y envíos en tiempo real.',
    widgetProblem: 'El vendedor no tenía dónde concentrar la información sobre su operación. Lo que estaba disponible quedaba disperso y sin jerarquía. Cuando necesitaba una respuesta, la salida más común era contactar al soporte, aunque la información pudiera estar al alcance.\n\nEsto generaba volumen evitable de contactos, sobrecarga para el soporte y una sensación constante de falta de control para el vendedor, además de desconfianza en el sistema.',
    widgetProcessTab: 'Participé en el proyecto de punta a punta, desde el discovery hasta la implementación.\n\nEl trabajo involucró análisis profundo de investigaciones realizadas por User Research para entender qué información el vendedor realmente necesitaba en cada momento. A partir de eso, trabajé en la definición de la jerarquía y el contenido de cada estado del widget, garantizando consistencia con el flujo de gestión existente en la sección de ventas.\n\nEn la etapa final, me encargué de la documentación completa del proyecto, mapeando casos de uso, reglas, comportamientos y microinteracciones. Acompañé la implementación junto al equipo de desarrollo y participé en las iteraciones posteriores a la entrega.',
    widgetChallenges: 'El mayor desafío fue conductual. No bastaba mostrar la información correcta: era necesario convencer al vendedor de que ese canal tenía todo lo que necesitaba y que no era necesario buscar en otro lugar ni contactar al soporte.\n\nConfianza en el dato y cambio de comportamiento son metas más difíciles de alcanzar que diseñar una nueva interfaz. La experiencia debía ser lo suficientemente clara y confiable para que el vendedor actuara con base en ella.',
    widgetResults: 'Con visibilidad centralizada sobre el estado de las colectas y el rendimiento operacional, los vendedores comenzaron a actuar con mayor autonomía.\n\nLos contactos evitables con el soporte disminuyeron, la confianza en el sistema aumentó y la operación de despacho ganó eficiencia. El widget pasó a funcionar como un punto de referencia real dentro de la operación del vendedor.',
    riskContext: 'Sistema de evaluación, gestión y control de riesgos operacionales en maquinaria y equipos industriales, con múltiples actores involucrados en el proceso de apreciación y aprobación.',
    riskProblem: 'El proceso de apreciación de riesgos era conducido de formas diferentes por áreas diferentes: parte en planillas, parte en papel, sin estandarización ni trazabilidad.\n\nLos registros existían, pero no se conectaban. Lo que un usuario documentaba no llegaba de forma eficiente a quien necesitaba actuar, y el ciclo de evaluación, corrección y aprobación dependía de procesos manuales y descentralizados.',
    riskProcessTab: 'Asumí un proyecto que ya estaba en marcha pero con muchas definiciones abiertas. Conduje investigaciones y entrevistas con los diferentes actores del proceso: quienes evalúan, quienes corrigen, quienes gestionan y quienes aprueban.\n\nA partir de esos insumos, rehíce diversas estructuras del sistema para que reflejaran cómo el trabajo realmente ocurría en campo y cubrieran los casos de uso que no habían sido mapeados.\n\nDurante la construcción del producto, participé y contribuí activamente a la creación de un design system que conectaba otros productos de Vale, garantizando consistencia visual y de interacción más allá de este proyecto.',
    riskChallenges: 'El proyecto original estaba enfocado en documentación: registrar el riesgo, no resolverlo. Identifiqué una oportunidad más allá de lo que el producto pedía.\n\nEl desafío fue transformar el sistema en algo conectado, donde el resultado de cada etapa alimentara la siguiente automáticamente, y convencer al equipo de que el alcance podía y debía ser mayor.\n\nEl proyecto también involucró el entrenamiento de técnicos en diversas regiones de Brasil, Canadá y Asia, garantizando una adopción consistente del nuevo proceso en contextos culturales y operacionales muy diferentes.',
    riskResults: 'El resultado más significativo fue la reducción del potencial de accidentes. Con el índice de peligro controlado y actualizado en tiempo real, el riesgo para la vida de los trabajadores disminuyó de forma concreta y mensurable.\n\nEl sistema pasó de ser una herramienta de documentación a un flujo operacional conectado. El evaluador registra el riesgo, el responsable de la corrección actúa, el gestor aprueba y el índice se actualiza automáticamente.\n\nEl puente entre las etapas se volvió mucho más sólido, eliminando retrabajo y acelerando el proceso de apreciación. El resultado fue reconocido por el equipo de Vale como un avance más allá de lo esperado.',
    contactDescription: 'Si llegaste hasta aquí, probablemente tenemos algo que conversar. Me encantaría conocer tu producto y ver dónde puedo ayudar.',
    backToProjects: 'Volver a proyectos',
    contextAndDiscovery: 'Contexto y descubrimiento',
    prototypeDescription: 'Prueba el prototipo interactivo para ver cómo funciona la solución en la práctica.',
    discoveryWorkshop: 'Taller de descubrimiento',
    userFlow: 'Flujo del usuario',
    usabilityTest: 'Prueba de usabilidad',
    iterationProcess: 'Proceso de iteración',
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
