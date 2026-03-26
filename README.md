# PRE BIS SIGMA PARTY 2026

Landing page premium e elegante para o evento PRE BIS SIGMA PARTY 2026.

## 🎨 Design

- **Tema:** Art Deco Contemporâneo
- **Cores:** Preto (#000000), Dourado (#D4AF37), Branco Marfim (#F5F5F0)
- **Tipografia:** Playfair Display (títulos) + Lato (corpo)
- **Responsividade:** Mobile-first, totalmente adaptado para desktop

## 🚀 Como Rodar Localmente

### Pré-requisitos

- Node.js 18+ instalado
- npm ou pnpm

### Instalação

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev
```

O servidor estará disponível em `http://localhost:3000`

### Build para Produção

```bash
npm run build
```

Os arquivos compilados estarão em `dist/`

## 📁 Estrutura do Projeto

```
client/
├── public/           # Arquivos estáticos (favicon, etc)
├── src/
│   ├── components/   # Componentes reutilizáveis
│   ├── contexts/     # React contexts
│   ├── pages/        # Páginas da aplicação
│   ├── App.tsx       # Componente raiz
│   ├── main.tsx      # Ponto de entrada
│   └── index.css     # Estilos globais
├── index.html        # HTML principal
vite.config.ts        # Configuração do Vite
package.json          # Dependências e scripts
```

## 🔧 Configuração

### Adicionar Link do Formulário

Abra `client/src/pages/Home.tsx` e substitua:

```typescript
const formLink = "https://docs.google.com/forms/d/e/1FAIpQLSd_YOUR_FORM_ID_HERE/viewform";
```

Pelo seu link do Google Forms.

## 📦 Dependências

- **React 19** - Framework UI
- **TypeScript** - Tipagem estática
- **Tailwind CSS 4** - Utilitários CSS
- **Vite** - Build tool
- **Wouter** - Roteamento leve
- **Lucide React** - Ícones

## 📝 Licença

MIT

## 🎯 Notas

- O projeto é totalmente independente e não possui dependências de plataformas externas
- Todas as imagens são servidas via CDN (URLs externas)
- O código está pronto para produção e pode ser deployado em qualquer servidor estático
