import { useState, useEffect } from 'react';

export type Language = 'pt' | 'en' | 'es';

export interface Translations {
  // Header
  contact: string;
  
  // Hero Section
  heroTitle1: string;
  heroTitle2: string;
  heroDescription1: string;
  heroDescription2: string;
  heroDescription3: string;
  myProjects: string;
  
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
  
  // Sales Section
  salesTitle: string;
  salesDescription1: string;
  salesDescription2: string;
  salesDescription3: string;
  salesDescription4: string;
  dispatchRate: string;
  solvedProblems: string;
  userSatisfaction: string;
  
  // Contact Section
  contactTitle: string;
  contactDescription1: string;
  contactDescription2: string;
  contactDescription3: string;
  
  // Footer
  footer: string;
}

const translations: Record<Language, Translations> = {
  pt: {
    // Header
    contact: 'Contato',
    
    // Hero Section
    heroTitle1: 'Bem-vindo ao meu',
    heroTitle2: 'Espaço UX',
    heroDescription1: 'Um espaço onde combino design centrado no humano com dados,',
    heroDescription2: 'objetivos de negócio e IA para criar experiências mais inteligentes.',
    heroDescription3: 'Por falar nisso, sou Rodrigo, mas pode me chamar de Digo. ',
    myProjects: 'Meus projetos',
    
    // Handshake Project
    handshakeTitle: 'Handshake',
    handshakeDescription1: 'Produto projetado para reduzir ou eliminar fraudes no',
    handshakeDescription2: 'processo de coleta de pacotes do Mercado Livre. Permite um fluxo',
    handshakeDescription3: 'de verificação de dados entre vendedor e motorista, garantindo',
    handshakeDescription4: 'integridade dos dados, satisfação do usuário e segurança para todos.',
    handshakeProcess1: 'Durante o processo de design, conduzimos diversos',
    handshakeProcess2: 'workshops, entrevistas e testes de usabilidade. A solução foi',
    handshakeProcess3: 'criada com muito cuidado e atenção aos detalhes para entregar',
    handshakeProcess4: 'informações precisas dentro de um contexto extremamente dinâmico.',
    savedPerMonth: 'Poupados por mês',
    contactRate: 'Taxa de contato',
    
    // Sales Section
    salesTitle: 'Seção de vendas',
    salesDescription1: 'Trabalhei na melhoria da seção de vendas do vendedor, reestruturando-a',
    salesDescription2: 'em um sistema de autogerenciamento com organização e priorização de',
    salesDescription3: 'tarefas mais claras. Meu foco foi projetar lógica e fluxos escaláveis que',
    salesDescription4: 'se adaptam a um ambiente acelerado — seja vendedor solo ou operação de alto volume.',
    dispatchRate: 'Taxa de despacho no prazo',
    solvedProblems: 'Problemas resolvidos',
    userSatisfaction: 'Satisfação do usuário',
    
    // Contact Section
    contactTitle: 'Entre em contato',
    contactDescription1: 'Se meu trabalho despertou seu interesse e você acredita que posso ajudar a',
    contactDescription2: 'melhorar seu produto ou a experiência dos seus usuários, adoraria conversar',
    contactDescription3: 'com você. Vamos construir algo significativo juntos.',
    
    // Footer
    footer: 'uxdigo'
  },
  
  en: {
    // Header
    contact: 'Contact',
    
    // Hero Section
    heroTitle1: 'Welcome to my UX',
    heroTitle2: 'Space',
    heroDescription1: 'A space where I blend human-centered design with data,',
    heroDescription2: 'business goals and AI to create smarter experiences. By the',
    heroDescription3: "way, I'm Rodrigo, but you can call me Digo. ",
    myProjects: 'My projects',
    
    // Handshake Project
    handshakeTitle: 'Handshake',
    handshakeDescription1: 'Product designed to reduce or eliminate fraud in Mercado',
    handshakeDescription2: "Livre's package pickup process. It enables a data verification",
    handshakeDescription3: 'flow between the seller and the driver, ensuring data integrity,',
    handshakeDescription4: 'user satisfaction, and safety for everyone involved.',
    handshakeProcess1: 'Throughout the design process, we conducted several',
    handshakeProcess2: 'workshops, interviews, and usability tests. The solution was',
    handshakeProcess3: 'crafted with great care and attention to detail to deliver accurate',
    handshakeProcess4: 'information within an extremely dynamic context.',
    savedPerMonth: 'Saved per month',
    contactRate: 'Contact rate',
    
    // Sales Section
    salesTitle: 'Sales section',
    salesDescription1: "I worked on improving the seller's sales section by restructuring it into a self-",
    salesDescription2: 'management system with clearer task organization and prioritization.',
    salesDescription3: 'My focus was on designing scalable logic and flows that adapt to a fast-paced',
    salesDescription4: "environment — whether it's a solo seller or a high-volume operation.",
    dispatchRate: 'Dispatch rate on time',
    solvedProblems: 'Solved problems',
    userSatisfaction: 'User satisfaction',
    
    // Contact Section
    contactTitle: 'Contact me',
    contactDescription1: 'If my work resonated with you and you believe I can help improve your product or',
    contactDescription2: "your users' experience, I'd love to hear from you. Let's build something",
    contactDescription3: 'meaningful together.',
    
    // Footer
    footer: 'uxdigo'
  },
  
  es: {
    // Header
    contact: 'Contacto',
    
    // Hero Section
    heroTitle1: 'Bienvenido a mi',
    heroTitle2: 'Espacio UX',
    heroDescription1: 'Un espacio donde combino diseño centrado en el humano con datos,',
    heroDescription2: 'objetivos de negocio e IA para crear experiencias más inteligentes.',
    heroDescription3: 'Por cierto, soy Rodrigo, pero puedes llamarme Digo. ',
    myProjects: 'Mis proyectos',
    
    // Handshake Project
    handshakeTitle: 'Handshake',
    handshakeDescription1: 'Producto diseñado para reducir o eliminar el fraude en el',
    handshakeDescription2: 'proceso de recogida de paquetes de Mercado Libre. Permite un',
    handshakeDescription3: 'flujo de verificación de datos entre vendedor y conductor,',
    handshakeDescription4: 'garantizando integridad de datos, satisfacción del usuario y seguridad para todos.',
    handshakeProcess1: 'Durante el proceso de diseño, realizamos varios',
    handshakeProcess2: 'talleres, entrevistas y pruebas de usabilidad. La solución fue',
    handshakeProcess3: 'creada con gran cuidado y atención al detalle para entregar',
    handshakeProcess4: 'información precisa dentro de un contexto extremadamente dinámico.',
    savedPerMonth: 'Ahorrados por mes',
    contactRate: 'Tasa de contacto',
    
    // Sales Section
    salesTitle: 'Sección de ventas',
    salesDescription1: 'Trabajé en mejorar la sección de ventas del vendedor, reestructurándola',
    salesDescription2: 'en un sistema de autogestión con organización y priorización de tareas',
    salesDescription3: 'más claras. Mi enfoque fue diseñar lógica y flujos escalables que se',
    salesDescription4: 'adaptan a un entorno acelerado — ya sea vendedor individual u operación de alto volumen.',
    dispatchRate: 'Tasa de envío a tiempo',
    solvedProblems: 'Problemas resueltos',
    userSatisfaction: 'Satisfacción del usuario',
    
    // Contact Section
    contactTitle: 'Contáctame',
    contactDescription1: 'Si mi trabajo te llamó la atención y crees que puedo ayudar a mejorar tu producto',
    contactDescription2: 'o la experiencia de tus usuarios, me encantaría saber de ti. Construyamos algo',
    contactDescription3: 'significativo juntos.',
    
    // Footer
    footer: 'uxdigo'
  }
};

export function useLanguage() {
  const [language, setLanguage] = useState<Language>('pt');
  const [isInitialized, setIsInitialized] = useState(false);

  // Initialize language from localStorage on client side
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem('portfolio-language') as Language;
      if (savedLanguage && ['pt', 'en', 'es'].includes(savedLanguage)) {
        setLanguage(savedLanguage);
      }
    }
    setIsInitialized(true);
  }, []);

  const changeLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage);
    if (typeof window !== 'undefined') {
      localStorage.setItem('portfolio-language', newLanguage);
    }
  };

  return {
    language,
    changeLanguage,
    t: translations[language],
    isInitialized
  };
}