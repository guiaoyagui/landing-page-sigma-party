import React, { createContext, useContext, useState } from "react";

type Language = "pt" | "en" | "es";

const translations = {
  pt: {
    contactBtn: "Contato",
    sponsoredBy: "Patrocínio:",
    poweredBy: "Powered by:", 
    subtitle: "Exclusive Networking Party sponsored by", 
    dateInfo: "6 DE ABRIL - 21hr - 2hr", // Atualizado para hr
    btnConfirm: "Confirmar Presença",
    expTitle1: "A ",
    expTitle2: "Experiência",
    openBarTitle: "Premium Open Bar",
    drink1: "Caipirinha",
    drink2: "Gin & Tônica",
    drink3: "Cerveja",
    drink4: "Refrigerante",
    foodMenuTitle: "Menu Gastronômico",
    entriesTitle: "Entradas",
    entry1: "Dadinhos de tapioca com geleia de pimenta (veg)",
    entry2: "Croquetes de presunto e costela",
    entry3: "Mini bruschetta com concassé de tomate, parmesão e manjericão (veg)",
    entry4: "Coxinha de frango",
    mainTitle: "Prato Principal",
    main1: "Nhoque de batata artesanal com fondue de parmesão e chips de jamón",
    main2: "Risoto de alho-poró com ragu de carne",
    dessertTitle: "Sobremesa",
    dessert1: "Brownie de castanha-do-pará com calda de avelã e sorvete de baunilha",
    footerRights: "© 2026 PRE BIS SIGMA PARTY. Todos os direitos reservados.",
    footerDesc: "Evento exclusivo para convidados selecionados.",
    developedBy: "Desenvolvido por"
  },
  en: {
    contactBtn: "Contact Us",
    sponsoredBy: "Sponsored by:",
    poweredBy: "Powered by:",
    subtitle: "Exclusive Networking Party sponsored by",
    dateInfo: "6 APRIL - 9PM TO 2AM", // Mantido em inglês
    btnConfirm: "Confirm Attendance",
    expTitle1: "The ",
    expTitle2: "Experience",
    openBarTitle: "Premium Open Bar",
    drink1: "Caipirinha",
    drink2: "Gin & Tonic",
    drink3: "Beer",
    drink4: "Soda",
    foodMenuTitle: "Food Menu",
    entriesTitle: "Entries",
    entry1: "Tapioca cubes with chili jam (veg)",
    entry2: "Ham and beef rib croquettes",
    entry3: "Mini bruschetta with tomato concassé, parmesan & basil (veg)",
    entry4: "Chicken coxinha",
    mainTitle: "Main Course",
    main1: "Handmade potato gnocchi with parmesan fondue & jamón chips",
    main2: "Leek risotto with beef ragù",
    dessertTitle: "Dessert",
    dessert1: "Brazil nut brownie with hazelnut sauce & vanilla ice cream",
    footerRights: "© 2026 PRE BIS SIGMA PARTY. All rights reserved.",
    footerDesc: "Exclusive event for selected guests.",
    developedBy: "Developed by"
  },
  es: {
    contactBtn: "Contacto",
    sponsoredBy: "Patrocinado por:",
    poweredBy: "Powered by:",
    subtitle: "Exclusive Networking Party sponsored by",
    dateInfo: "6 DE ABRIL - 21hr - 2hr", // Atualizado para hr
    btnConfirm: "Confirmar Asistencia",
    expTitle1: "La ",
    expTitle2: "Experiencia",
    openBarTitle: "Premium Open Bar",
    drink1: "Caipirinha",
    drink2: "Gin & Tonic",
    drink3: "Cerveza",
    drink4: "Refresco",
    foodMenuTitle: "Menú Gastronómico",
    entriesTitle: "Entradas",
    entry1: "Cubitos de tapioca con mermelada de chile (veg)",
    entry2: "Croquetas de jamón y costilla de res",
    entry3: "Mini bruschetta con concassé de tomate, parmesano y albahaca (veg)",
    entry4: "Coxinha de pollo",
    mainTitle: "Plato Principal",
    main1: "Ñoquis de patata artesanales con fondue de parmesano y chips de jamón",
    main2: "Risotto de puerro con ragú de carne",
    dessertTitle: "Postre",
    dessert1: "Brownie de nuez de Brasil con salsa de avellana y helado de vainilla",
    footerRights: "© 2026 PRE BIS SIGMA PARTY. Todos los derechos reservados.",
    footerDesc: "Evento exclusivo para invitados seleccionados.",
    developedBy: "Desarrollado por"
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.pt;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
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