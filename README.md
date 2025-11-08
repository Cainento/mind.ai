# mind.ia — Website

Website oficial da **mind.ia**, uma agência brasileira de IA focada em automação, business intelligence e inovação local.

## 🚀 Tecnologias

- **Next.js 14** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização utilitária
- **Framer Motion** - Animações fluidas
- **Lucide React** - Ícones modernos

## 📋 Pré-requisitos

- Node.js 18+ 
- npm ou yarn

## 🛠️ Instalação

1. Clone o repositório:
```bash
git clone <repository-url>
cd mindAi
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

3. Execute o servidor de desenvolvimento:
```bash
npm run dev
# ou
yarn dev
```

4. Abra [http://localhost:3000](http://localhost:3000) no navegador.

## 📁 Estrutura do Projeto

```
mindAi/
├── app/                    # App Router do Next.js
│   ├── about/             # Página Sobre
│   ├── services/          # Página Serviços
│   ├── portfolio/         # Página Portfólio
│   ├── blog/              # Página Blog
│   ├── contact/           # Página Contato
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página inicial
│   └── globals.css        # Estilos globais
├── components/            # Componentes React
│   ├── sections/          # Seções das páginas
│   ├── Header.tsx         # Cabeçalho
│   ├── Footer.tsx         # Rodapé
│   └── WhatsAppButton.tsx # Botão WhatsApp
└── public/                # Arquivos estáticos
```

## 🎨 Características

- ✅ Design responsivo (mobile-first)
- ✅ Modo claro/escuro
- ✅ Animações suaves com Framer Motion
- ✅ SEO otimizado com meta tags
- ✅ Schema markup para organização
- ✅ Integração com WhatsApp
- ✅ Formulários funcionais
- ✅ Performance otimizada

## 📱 Páginas

### Home
- Hero section com animações
- Estatísticas da empresa
- Preview sobre nós
- Showcase de serviços
- Depoimentos
- Newsletter

### Sobre
- História da empresa
- Missão, visão e valores
- Apresentação da equipe

### Serviços
- Lista detalhada de serviços
- Seção de preços
- Call-to-action

### Portfólio
- Grid interativo de projetos
- Modais com detalhes dos cases
- Métricas de resultados

### Blog
- Grid de artigos
- Sidebar com categorias
- Newsletter integrada

### Contato
- Formulário de contato
- Informações de contato
- Mapa do Google Maps
- Botão WhatsApp flutuante

## 🎯 Personalização

### Cores
Edite `tailwind.config.ts` para personalizar a paleta de cores.

### Conteúdo
Todo o conteúdo está nos componentes em `components/sections/`.

### WhatsApp
Atualize o número no arquivo `components/WhatsAppButton.tsx`:
```typescript
const phoneNumber = '5562999999999' // Seu número aqui
```

### Mapa
Atualize o embed do Google Maps em `components/sections/contact/Map.tsx` com as coordenadas corretas de Goianésia, GO.

## 🚀 Deploy

### Vercel (Recomendado)
1. Conecte seu repositório ao Vercel
2. Configure as variáveis de ambiente se necessário
3. Deploy automático a cada push

### Outras plataformas
```bash
npm run build
npm start
```

## 📝 Licença

Este projeto é propriedade da mind.ia.

## 🤝 Contato

- **Website:** [mind.ia](https://mind.ia)
- **Email:** contato@mind.ia
- **Localização:** Goianésia, GO - Brasil

---

© mind.ia — Inteligência que impulsiona o futuro.
