# DNC Arq React App

Aplicação front-end em React (Vite) que apresenta um site institucional com páginas de **Home**, **Sobre**, **Projetos** e **Contato**. O conteúdo textual e os projetos são carregados via API externa, com suporte a **PT-BR** e **EN**.

## ✨ Funcionalidades

- **Rotas com React Router** para Home, Sobre, Projetos e Contato.
- **Conteúdo multilíngue** (PT-BR/EN) persistido no `localStorage`.
- **Listagem de projetos** consumida via API pública.
- **Favoritos de projetos** persistidos no `sessionStorage`.
- **Formulário de contato** integrado ao Web3Forms.
- **Layout responsivo** com menu móvel.

## 🧱 Tecnologias

- [React 19](https://react.dev/)
- [Vite 7](https://vite.dev/)
- [React Router 7](https://reactrouter.com/)
- ESLint

## 🚀 Como executar

### Pré-requisitos

- Node.js 18+ (recomendado)
- npm

### Instalação

```bash
npm install
```

### Ambiente de desenvolvimento

```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`.

### Build de produção

```bash
npm run build
```

### Preview do build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## 🔌 Integrações externas

- **API de conteúdo**: `https://dnc-react-api.vercel.app/files/`
  - Endpoints usados: `webtext` (textos) e `projects` (lista de projetos).
- **Web3Forms**: envio do formulário em `src/components/ContactForm/ContactForm.jsx`.

> ⚠️ Observação: o *access key* do Web3Forms está atualmente embutido no código.

## 🗂️ Estrutura de pastas (principais)

```
src/
  components/     # Componentes de UI reutilizáveis
  contexts/       # Contextos (AppContext)
  pages/          # Páginas de rota
  services/       # Integrações com APIs
  assets/         # Imagens e ícones
```

## 📄 Licença

Este projeto é apenas para fins educacionais/demonstração.
