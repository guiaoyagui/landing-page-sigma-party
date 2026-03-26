import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

/**
 * PRE BIS SIGMA PARTY 2026 - Landing Page
 * 
 * Design: Art Deco Contemporâneo
 * - Tema escuro premium (preto #000000)
 * - Dourado como acento principal (#D4AF37)
 * - Branco marfim para tipografia (#F5F5F0)
 * - Padrões geométricos Art Deco nos cantos
 * - Espaçamento generoso (whitespace como luxo)
 * - Tipografia: Playfair Display (títulos) + Lato (corpo)
 * - Animações suaves e elegantes
 * - Responsivo mobile-first
 */

// Constante do formulário Google Forms
const formLink = "https://forms.gle/Ftaun2GuEzbGiGbG9";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    // Trigger animations on mount
    setAnimateIn(true);

    // Handle scroll for subtle effects
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* HERO SECTION - Principal */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background com padrão Art Deco */}
        <div className="absolute inset-0">
          {/* Hero Background Image */}
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663226491742/kF2wzXBQyzPUVzu8cwjw42/hero-background-oAdM7HxvudEvbvhNUzo8Tp.webp"
            alt="Art Deco Pattern"
            className="w-full h-full object-cover opacity-30"
          />
          {/* Overlay escuro para melhor legibilidade */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80" />
        </div>

        {/* Padrão geométrico no canto superior esquerdo */}
        <div className="absolute top-0 left-0 w-32 md:w-48 lg:w-64 h-32 md:h-48 lg:h-64 opacity-40">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663226491742/kF2wzXBQyzPUVzu8cwjw42/corner-pattern-top-left-3euECFyb7Yshppt42GpaVL.webp"
            alt="Corner Pattern"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Padrão geométrico no canto inferior direito */}
        <div className="absolute bottom-0 right-0 w-32 md:w-48 lg:w-64 h-32 md:h-48 lg:h-64 opacity-40">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663226491742/kF2wzXBQyzPUVzu8cwjw42/corner-pattern-bottom-right-WpGTVWykhJXZHHU6CMVryn.webp"
            alt="Corner Pattern"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Conteúdo Principal */}
        <div className="relative z-10 container max-w-4xl mx-auto px-4 md:px-8 text-center">
          {/* Animação de entrada */}
          <div
            className={`transform transition-all duration-1000 ${
              animateIn
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            {/* Título Principal */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 leading-tight" style={{fontFamily: "'Playfair Display', serif"}}>
              <span className="text-white">PRE BIS</span>
              <br />
              <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                SIGMA PARTY
              </span>
              <br />
              <span className="text-white">2026</span>
            </h1>

            {/* Subtítulo */}
            <p className="text-xl md:text-2xl text-yellow-100 mb-4 font-light tracking-wide">
              Evento exclusivo para convidados selecionados
            </p>

            {/* Descrição */}
            <p className="text-base md:text-lg text-gray-300 mb-12 md:mb-16 max-w-2xl mx-auto leading-relaxed">
              Networking, experiências premium e conexões de alto nível. Uma noite de sofisticação, elegância e oportunidades exclusivas.
            </p>

            {/* Divider Premium */}
            <div className="h-0.5 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mb-12 md:mb-16" />

            {/* Botão Principal - CTA Único */}
            <a
              href={formLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <button className="btn-premium group">
                <span className="flex items-center justify-center gap-3">
                  Preencher Formulário
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
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

      {/* SEÇÃO SOBRE - Informações do Evento */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-black to-gray-950 overflow-hidden">
        {/* Padrão de fundo sutil */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500 rounded-full filter blur-3xl" />
        </div>

        <div className="relative z-10 container max-w-3xl mx-auto px-4 md:px-8">
          {/* Título da Seção */}
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16" style={{fontFamily: "'Playfair Display', serif"}}>
            <span className="text-white">Sobre o </span>
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Evento
            </span>
          </h2>

          {/* Conteúdo - Layout Centralizado */}
          <div className="text-center space-y-6 md:space-y-8">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              O <span className="text-yellow-400 font-semibold">PRE BIS SIGMA PARTY 2026</span> é um evento de networking exclusivo, cuidadosamente curado para convidados selecionados que buscam conexões de alto nível e experiências premium.
            </p>

            <div className="h-0.5 bg-gradient-to-r from-transparent via-yellow-500 to-transparent my-8" />

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Prepare-se para uma noite de sofisticação, elegância e oportunidades exclusivas. Cada detalhe foi pensado para proporcionar uma experiência memorável e significativa.
            </p>

            <div className="h-0.5 bg-gradient-to-r from-transparent via-yellow-500 to-transparent my-8" />

            <p className="text-base md:text-lg text-gray-400 italic">
              Preencha o formulário abaixo para confirmar sua presença e receber mais informações sobre este evento exclusivo.
            </p>
          </div>

          {/* Botão Secundário */}
          <div className="mt-16 md:mt-20 text-center">
            <a
              href={formLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative bg-black border-t border-gray-800 py-8 md:py-12">
        <div className="container max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center">
            <p className="text-gray-500 text-sm md:text-base">
              © 2026 PRE BIS SIGMA PARTY. Todos os direitos reservados.
            </p>
            <p className="text-gray-600 text-xs mt-2">
              Evento exclusivo para convidados selecionados
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
