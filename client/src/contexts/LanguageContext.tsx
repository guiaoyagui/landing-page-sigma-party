import React, { createContext, useContext, useState } from "react";

type Language = "pt" | "en" | "es";

// O nosso dicionário com todas as traduções
const translations = {
  pt: {
    heroSubtitle: "Evento exclusivo para convidados selecionados",
    heroDesc: "Networking, experiências premium e conexões de alto nível.",
    btnForm: "Preencher Formulário",
    aboutTitle1: "Sobre o ",
    aboutTitle2: "Evento",
    about1: "O PRE BIS SIGMA PARTY 2026 é um evento de networking exclusivo, cuidadosamente curado para os principais players que movimentam o mercado.",
    about2: "Um encontro dedicado a conectar operadores, grandes afiliados, plataformas e provedores de pagamento em um ambiente dinâmico e estratégico. Cada detalhe foi pensado para facilitar parcerias reais e proporcionar uma experiência memorável antes do evento principal.",
    about3: "Preencha o formulário abaixo para confirmar sua presença e receber mais informações sobre este evento exclusivo.",
    footerRights: "© 2026 PRE BIS SIGMA PARTY. Todos os direitos reservados.",
    footerDesc: "Evento exclusivo para convidados selecionados"
  },
  en: {
    heroSubtitle: "Exclusive event for selected guests",
    heroDesc: "Networking, premium experiences, and high-level connections.",
    btnForm: "Fill out the Form",
    aboutTitle1: "About the ",
    aboutTitle2: "Event",
    about1: "The PRE BIS SIGMA PARTY 2026 is an exclusive networking event, carefully curated for the key players who drive the market.",
    about2: "A gathering dedicated to connecting operators, top affiliates, platforms, and payment service providers in a dynamic and strategic environment. Every detail has been designed to facilitate real partnerships and provide a memorable experience ahead of the main event.",
    about3: "Fill out the form below to confirm your attendance and receive more information about this exclusive event.",
    footerRights: "© 2026 PRE BIS SIGMA PARTY. All rights reserved.",
    footerDesc: "Exclusive event for selected guests"
  },
  es: {
    heroSubtitle: "Evento exclusivo para invitados seleccionados",
    heroDesc: "Networking, experiencias premium y conexiones de alto nivel.",
    btnForm: "Completar Formulario",
    aboutTitle1: "Sobre el ",
    aboutTitle2: "Evento",
    about1: "El PRE BIS SIGMA PARTY 2026 es un evento de networking exclusivo, cuidadosamente curado para los principales actores que impulsan el mercado.",
    about2: "Un encuentro dedicado a conectar operadores, grandes afiliados, plataformas y proveedores de pago en un entorno dinámico y estratégico. Cada detalle ha sido diseñado para facilitar alianzas reales y brindar una experiencia memorable antes del evento principal.",
    about3: "Complete el formulario a continuación para confirmar su asistencia y recibir más información sobre este evento exclusivo.",
    footerRights: "© 2026 PRE BIS SIGMA PARTY. Todos los derechos reservados.",
    footerDesc: "Evento exclusivo para invitados seleccionados"
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.pt;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Define o Português como idioma padrão
  const [language, setLanguage] = useState<Language>("pt");

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};