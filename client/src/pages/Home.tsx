import { ArrowRight, MapPin, Mail, GlassWater, Utensils } from "lucide-react";
import { useEffect, useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";

// Importação dos Assets
import invitationArt from "../assets/arte convite.png";
import betwinnerLogo from "../assets/betwinner_gold.png";
import igamexpertLogo from "../assets/igamexpert_gold.png";
import vibe1 from "../assets/fundo 1.png";
import vibe2 from "../assets/fundo 2.png";
import vibe3 from "../assets/fundo 3.png";
import vibe4 from "../assets/fundo 4.png";

// Links
const formLink = "https://docs.google.com/forms/d/e/1FAIpQLSfzHRNVECqejcAB4CxK8ibSn8gQAppaR8PIoIstcdKvpAZpzw/viewform";
const contactFormLink = "#"; 
const googleMapsLink = "https://maps.app.goo.gl/9uHeLR2qv866XRJB8"; 

const minimalVibeImages = [vibe1, vibe2, vibe3, vibe4];

export default function Home() {
  const [animateIn, setAnimateIn] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const timer = setTimeout(() => setAnimateIn(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative font-sans">
      
      {/* HEADER */}
      <header className="absolute top-0 w-full z-50 flex justify-end items-center p-6 md:px-12 md:py-8 bg-gradient-to-b from-black/80 to-transparent">
        <div className="flex gap-4 items-center bg-black/40 p-2 rounded-full border border-zinc-800 backdrop-blur-sm">
          {[
            { code: "pt", flag: "br" },
            { code: "en", flag: "gb" },
            { code: "es", flag: "es" }
          ].map((lang) => (
            <button key={lang.code} onClick={() => setLanguage(lang.code as any)} title={lang.code.toUpperCase()} className={`transition-all duration-300 ${language === lang.code ? "opacity-100 scale-110" : "opacity-40 hover:opacity-100"}`}>
              <span className={`fi fi-${lang.flag} w-6 h-4 block rounded-sm shadow-md`}></span>
            </button>
          ))}
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 pb-16">
        
        {/* BACKGROUND VÍDEO ATMOSFÉRICO */}
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-black">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="absolute inset-0 w-full h-full object-cover opacity-60 filter grayscale sepia-[20%]"
          >
            <source src="/fundo.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-yellow-700/10 rounded-full blur-[120px] pointer-events-none" />
        </div>

        {/* CONTEÚDO CENTRAL */}
        <div className="relative z-10 container max-w-4xl mx-auto px-4 md:px-8 text-center flex flex-col items-center justify-center min-h-[85vh]">
          
          <div className={`transform transition-all duration-1000 delay-200 ${animateIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"} flex flex-col items-center w-full`}>
            
            {/* 1. Título Principal */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1] font-serif bg-gradient-to-br from-yellow-200 via-yellow-500 to-yellow-700 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(212,175,55,0.25)]">
              PRE BIS <br /> SIGMA PARTY
            </h1>

            {/* 2. Subtítulo TRADUZIDO + Logo Betwinner Integrada no texto */}
            <div className="mb-10 px-2 w-full max-w-3xl mx-auto">
               <p className="text-sm md:text-base lg:text-lg text-gray-300 font-sans tracking-[0.15em] md:tracking-[0.25em] uppercase text-center leading-[2] m-0">
                 {t.subtitle}
                 <img src={betwinnerLogo} alt="Betwinner Affiliates" className="inline-block h-5 md:h-7 ml-3 md:ml-4 align-middle -mt-1 md:-mt-1.5" />
               </p>
            </div>

            {/* 3. Data e Hora TRADUZIDA */}
            <div className="text-xl md:text-2xl text-white font-serif mb-6 font-bold uppercase tracking-wider">
              {t.dateInfo}
            </div>

            {/* 4. Endereço */}
            <a href={googleMapsLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-6 py-3 border border-yellow-700/40 rounded-full bg-black/40 hover:bg-yellow-900/30 transition-all text-yellow-500 text-xs md:text-sm tracking-widest uppercase mb-12 md:mb-16 backdrop-blur-sm cursor-pointer group">
                <MapPin className="w-4 h-4 text-yellow-600 group-hover:scale-110 transition-transform" />
                <span>Av. Brig. Faria Lima, 4509 – Itaim Bibi</span>
            </a>

            {/* 5. Powered By iGamexpert */}
            <div className="flex flex-col items-center mb-16">
               <p className="text-xs md:text-sm font-sans tracking-[0.2em] text-gray-400 mb-4 uppercase font-light">
                 {t.poweredBy}
               </p>
               <img src={igamexpertLogo} alt="iGamexpert Event" className="h-6 md:h-8 object-contain" />
            </div>

            {/* 6. BOTÃO PRINCIPAL (Restaurado para o design preto com brilho sutil) */}
            <a href={formLink} target="_blank" rel="noopener noreferrer" className="relative inline-block group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-500 via-yellow-300 to-yellow-600 rounded-sm blur-md opacity-30 animate-pulse group-hover:opacity-60 transition duration-500"></div>
              <button className="relative border border-yellow-500/50 bg-black/80 backdrop-blur-md px-12 py-5 md:px-16 md:py-6 text-sm md:text-base tracking-[0.2em] text-white uppercase font-serif hover:bg-yellow-900/40 transition-colors">
                {t.btnConfirm}
              </button>
            </a>

          </div>
        </div>
        
        {/* Seta para scroll */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-30 animate-pulse z-10 hidden md:block">
            <div className="w-0.5 h-12 bg-gradient-to-b from-yellow-500 to-transparent"></div>
        </div>
      </section>

      {/* THE EXPERIENCE (OPEN BAR & MENU) */}
      <section className="relative py-28 bg-black overflow-hidden border-t border-zinc-900">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03] pointer-events-none">
            <img src={invitationArt} alt="Decorative" className="w-full h-full object-cover" />
        </div>

        <div className="container max-w-6xl mx-auto px-4 relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-20 font-serif tracking-tight">
            <span className="text-white">{t.expTitle1}</span>
            <span className="text-yellow-500">{t.expTitle2}</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16">
            
            {/* Secção Open Bar */}
            <div className="bg-zinc-950 p-10 border border-zinc-900 rounded-2xl relative overflow-hidden group hover:border-yellow-900/50 transition-all duration-500 shadow-2xl shadow-black/50">
              <GlassWater className="absolute -right-12 -top-12 w-60 h-60 text-zinc-900 opacity-30 group-hover:text-yellow-950/20 transition-colors duration-500" />
              
              <div className="relative z-10">
                  <h3 className="text-3xl font-serif text-yellow-500 mb-10 border-b border-zinc-800 pb-6 font-semibold flex items-center gap-3">
                    <span className="w-8 h-px bg-yellow-600"></span>
                    {t.openBarTitle}
                  </h3>
                  
                  <ul className="space-y-5 text-xl text-gray-200 font-light tracking-wide">
                    {[t.drink1, t.drink2, t.drink3, t.drink4].map(item => (
                        <li key={item} className="flex items-center gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-yellow-700"></span>
                            {item}
                        </li>
                    ))}
                  </ul>
              </div>
            </div>

            {/* Secção Food Menu */}
            <div className="bg-zinc-950 p-10 border border-zinc-900 rounded-2xl relative overflow-hidden group hover:border-yellow-900/50 transition-all duration-500 shadow-2xl shadow-black/50">
              <Utensils className="absolute -right-12 -top-12 w-60 h-60 text-zinc-900 opacity-30 group-hover:text-yellow-950/20 transition-colors duration-500" />
              
              <div className="relative z-10">
                  <h3 className="text-3xl font-serif text-yellow-500 mb-10 border-b border-zinc-800 pb-6 font-semibold flex items-center gap-3">
                    <span className="w-8 h-px bg-yellow-600"></span>
                    {t.foodMenuTitle}
                  </h3>
                  
                  <div className="space-y-10">
                    <div>
                      <h4 className="text-sm uppercase tracking-[0.2em] text-yellow-600/90 mb-4 font-semibold">{t.entriesTitle}</h4>
                      <ul className="space-y-2.5 text-gray-200 font-light text-base leading-relaxed">
                        <li>{t.entry1}</li>
                        <li>{t.entry2}</li>
                        <li>{t.entry3}</li>
                        <li>{t.entry4}</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm uppercase tracking-[0.2em] text-yellow-600/90 mb-4 font-semibold">{t.mainTitle}</h4>
                      <ul className="space-y-2.5 text-gray-200 font-light text-base leading-relaxed">
                        <li>{t.main1}</li>
                        <li>{t.main2}</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm uppercase tracking-[0.2em] text-yellow-600/90 mb-4 font-semibold">{t.dessertTitle}</h4>
                      <ul className="space-y-2.5 text-gray-200 font-light text-base leading-relaxed">
                        <li>{t.dessert1}</li>
                      </ul>
                    </div>
                  </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* VIBE / GALLERY SECTION MINIMALISTA */}
      <section className="relative py-28 bg-zinc-950 border-t border-zinc-900">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto">
            {minimalVibeImages.map((src, index) => (
                <div 
                    key={index} 
                    className="relative aspect-square overflow-hidden rounded-xl border border-zinc-800 shadow-xl group hover:border-yellow-900/50 transition-all duration-500 hover:-translate-y-2"
                >
                    <img 
                        src={src} 
                        alt={`Atmosfera Minimalista ${index + 1}`} 
                        className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                        loading="lazy"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent group-hover:via-black/30 transition-colors" />
                    <div className="absolute inset-0 bg-yellow-950/10 mix-blend-color opacity-80" />
                    <div className="absolute inset-3 border border-yellow-600/10 rounded-lg pointer-events-none group-hover:border-yellow-600/30 transition-colors duration-700" />
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative bg-black border-t border-zinc-900 py-16 md:py-20">
        <div className="container max-w-6xl mx-auto px-4 md:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-12 pb-12 border-b border-zinc-900">
             <h2 className="text-3xl font-serif uppercase tracking-[0.15em] font-bold">
                <span className="text-white">PRE BIS</span> <span className="text-yellow-500">SIGMA</span>
             </h2>
             <a href={formLink} target="_blank" rel="noopener noreferrer" className="relative inline-block group">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 via-yellow-300 to-yellow-600 rounded-sm blur-sm opacity-30 animate-pulse group-hover:opacity-70 transition duration-500"></div>
              <button className="relative border border-yellow-500/50 bg-black px-7 py-3 text-xs tracking-[0.2em] leading-none uppercase font-serif hover:bg-yellow-900/40 transition-colors">
                <span className="relative z-10">{t.btnConfirm}</span>
              </button>
            </a>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
              <div className="space-y-1.5">
                <p className="text-gray-500 text-sm tracking-wide">{t.footerRights}</p>
                <p className="text-zinc-700 text-xs uppercase tracking-widest">{t.footerDesc}</p>
              </div>
              
              <div className="hidden md:block h-10 w-px bg-zinc-800"></div>
              
              <div className="flex items-center gap-3">
                <span className="text-[10px] text-zinc-600 uppercase tracking-[0.2em]">{t.developedBy}</span>
                <a href="https://igamexpert.com/" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity duration-300">
                  <img src={igamexpertLogo} alt="iGamexpert Logo" className="h-6 md:h-8 w-auto object-contain" />
                </a>
              </div>
            </div>

            <a href={contactFormLink} target="_blank" rel="noopener noreferrer" className="text-yellow-600 text-sm font-medium hover:text-yellow-400 transition-colors flex items-center gap-2 group border border-zinc-800 px-5 py-2.5 rounded-full hover:border-yellow-900 mt-4 md:mt-0">
              <Mail className="w-4 h-4" />
              {t.contactBtn}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}