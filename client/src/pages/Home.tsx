import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
// 1. Importar o contexto de idioma que acabámos de criar
import { useLanguage } from "../contexts/LanguageContext";

const formLink = "https://forms.gle/Ftaun2GuEzbGiGbG9";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);
  
  // 2. Trazer as funções de idioma para dentro do componente
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    setAnimateIn(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      
{/* MENU DE IDIOMAS FLUTUANTE COM BANDEIRAS */}
      <div className="absolute top-6 right-6 md:top-8 md:right-12 z-50 flex gap-5 items-center">
        {/* Português (Bandeira do Brasil) */}
        <button 
          onClick={() => setLanguage("pt")}
          title="Português"
          className={`group transition-all duration-300 p-0.5 rounded-sm border-2 ${
            language === "pt" ? "border-yellow-500 opacity-100 scale-110" : "border-transparent opacity-60 hover:opacity-100 hover:scale-105"
          }`}
        >
          {/* A classe 'fi fi-br' desenha a bandeira do Brasil */}
          <span className="fi fi-br w-7 h-5 block rounded-sm shadow-md"></span>
        </button>

        {/* Inglês (Bandeira do Reino Unido) */}
        <button 
          onClick={() => setLanguage("en")}
          title="English"
          className={`group transition-all duration-300 p-0.5 rounded-sm border-2 ${
            language === "en" ? "border-yellow-500 opacity-100 scale-110" : "border-transparent opacity-60 hover:opacity-100 hover:scale-105"
          }`}
        >
          {/* A classe 'fi fi-gb' desenha a bandeira do Reino Unido */}
          <span className="fi fi-gb w-7 h-5 block rounded-sm shadow-md"></span>
        </button>

        {/* Espanhol (Bandeira da Espanha) */}
        <button 
          onClick={() => setLanguage("es")}
          title="Español"
          className={`group transition-all duration-300 p-0.5 rounded-sm border-2 ${
            language === "es" ? "border-yellow-500 opacity-100 scale-110" : "border-transparent opacity-60 hover:opacity-100 hover:scale-105"
          }`}
        >
          {/* A classe 'fi fi-es' desenha a bandeira da Espanha */}
          <span className="fi fi-es w-7 h-5 block rounded-sm shadow-md"></span>
        </button>
      </div>

      {/* HERO SECTION - Principal */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663226491742/kF2wzXBQyzPUVzu8cwjw42/hero-background-oAdM7HxvudEvbvhNUzo8Tp.webp"
            alt="Art Deco Pattern"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80" />
        </div>

        <div className="absolute top-0 left-0 w-32 md:w-48 lg:w-64 h-32 md:h-48 lg:h-64 opacity-40">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663226491742/kF2wzXBQyzPUVzu8cwjw42/corner-pattern-top-left-3euECFyb7Yshppt42GpaVL.webp"
            alt="Corner Pattern"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute bottom-0 right-0 w-32 md:w-48 lg:w-64 h-32 md:h-48 lg:h-64 opacity-40">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663226491742/kF2wzXBQyzPUVzu8cwjw42/corner-pattern-bottom-right-WpGTVWykhJXZHHU6CMVryn.webp"
            alt="Corner Pattern"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 container max-w-4xl mx-auto px-4 md:px-8 text-center">
          <div
            className={`transform transition-all duration-1000 ${
              animateIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 leading-tight" style={{fontFamily: "'Playfair Display', serif"}}>
              <span className="text-white">PRE BIS</span>
              <br />
              <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                SIGMA PARTY
              </span>
              <br />
              <span className="text-white">2026</span>
            </h1>

            {/* 3. Textos traduzidos a partir daqui */}
            <p className="text-xl md:text-2xl text-yellow-100 mb-4 font-light tracking-wide">
              {t.heroSubtitle}
            </p>

            <p className="text-base md:text-lg text-gray-300 mb-12 md:mb-16 max-w-2xl mx-auto leading-relaxed">
              {t.heroDesc}
            </p>

            <div className="h-0.5 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mb-12 md:mb-16" />

            <a
              href={formLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <button className="btn-premium group">
                <span className="flex items-center justify-center gap-3">
                  {t.btnForm}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </a>
          </div>
        </div>

        <div
          className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-opacity duration-500 ${
            isScrolled ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-gray-400 uppercase tracking-widest">Scroll</span>
            <div className="w-0.5 h-8 bg-gradient-to-b from-yellow-500 to-transparent animate-pulse" />
          </div>
        </div>
      </section>

      {/* SEÇÃO SOBRE */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-black to-gray-950 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500 rounded-full filter blur-3xl" />
        </div>

        <div className="relative z-10 container max-w-3xl mx-auto px-4 md:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16" style={{fontFamily: "'Playfair Display', serif"}}>
            <span className="text-white">{t.aboutTitle1}</span>
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              {t.aboutTitle2}
            </span>
          </h2>

          <div className="text-center space-y-6 md:space-y-8">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              {t.about1}
            </p>

            <div className="h-0.5 bg-gradient-to-r from-transparent via-yellow-500 to-transparent my-8" />

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              {t.about2}
            </p>

            <div className="h-0.5 bg-gradient-to-r from-transparent via-yellow-500 to-transparent my-8" />

            <p className="text-base md:text-lg text-gray-400 italic">
              {t.about3}
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative bg-black border-t border-gray-800 py-8 md:py-12">
        <div className="container max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center">
            <p className="text-gray-500 text-sm md:text-base">
              {t.footerRights}
            </p>
            <p className="text-gray-600 text-xs mt-2">
              {t.footerDesc}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}