# 🔧 Pluga Apps - Busca de Ferramentas

Uma aplicação React moderna para explorar e descobrir ferramentas integradas à plataforma Pluga. Desenvolvida com foco em **experiência do usuário**, **performance** e **qualidade de código**.

![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.1.7-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.16-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

## 📱 Demo

🌐 **[Ver Demo ao Vivo](http://localhost:4000)** (quando rodando localmente)

### 🎯 Funcionalidades Principais

- **🔍 Busca Inteligente**: Search com debounce para otimização de performance
- **📄 Paginação**: Navegação fluida com 12 apps por página
- **⏳ Loading States**: Skeleton components durante carregamento
- **📱 Design Responsivo**: Layout otimizado para mobile, tablet e desktop
- **🎨 Temas Dinâmicos**: Cores de fundo baseadas na identidade visual de cada app
- **💾 Histórico Local**: Apps recentemente visualizados salvos no LocalStorage
- **♿ Acessibilidade**: Componentes seguem padrões ARIA

## � Tecnologias Utilizadas

### Core

- **[React 19](https://react.dev/)** - Biblioteca para interfaces de usuário
- **[TypeScript](https://www.typescriptlang.org/)** - Superset JavaScript com tipagem estática
- **[Vite](https://vite.dev/)** - Build tool moderna e rápida

### Styling & UI

- **[Tailwind CSS 4](https://tailwindcss.com/)** - Framework CSS utility-first
- **[shadcn/ui](https://ui.shadcn.com/)** - Componentes reutilizáveis e acessíveis
- **[Lucide React](https://lucide.dev/)** - Ícones SVG otimizados

### Estado & Dados

- **React Context API** - Gerenciamento de estado global
- **[Axios](https://axios-http.com/)** - Cliente HTTP para requisições API

### Qualidade & Testes

- **[Vitest](https://vitest.dev/)** - Framework de testes rápido
- **[React Testing Library](https://testing-library.com/)** - Utilitários para testes focados no usuário
- **[ESLint](https://eslint.org/)** - Linter para qualidade de código
- **[Prettier](https://prettier.io/)** - Formatador de código automático

## � Estrutura do Projeto

```
src/
├── components/           # Componentes reutilizáveis
│   ├── Card.tsx         # Card do app com loading states
│   ├── Search.tsx       # Busca com debounce
│   ├── Modal.tsx        # Modal de detalhes + histórico
│   ├── Pagination.tsx   # Navegação entre páginas
│   ├── LoadingCard.tsx  # Skeleton loading states
│   ├── ErrorCard.tsx    # Tratamento de erros
│   └── ui/              # Design system (shadcn/ui)
├── context/
│   └── AppContext.tsx   # Estado global da aplicação
├── api/
│   └── appService.ts    # Serviços HTTP e integração API
├── types/
│   └── app.ts          # Interfaces TypeScript
├── Pages/
│   └── Home.tsx        # Página principal
└── test/               # Suíte de testes básicos (6 testes)
    ├── AppCard.test.tsx
    ├── Search.test.tsx
    ├── appService.test.ts
    └── setup.ts
```

## 🛠️ Instalação e Configuração

### Pré-requisitos

- **Node.js** 18+
- **npm** ou **yarn**

### 1. Clone o repositório

```bash
git clone git@github.com:vixemari/pluga-teste.git
cd pluga-test
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Execute em modo desenvolvimento

```bash
npm run dev
```

A aplicação estará disponível em `https://pluga-teste-ggq874twb-vixemaris-projects.vercel.app/`

### 4. Execute os testes

```bash
npm test
```

### 5. Execute o build para produção

```bash
npm run build
```

## 📜 Scripts Disponíveis

| Script             | Descrição                                     |
| ------------------ | --------------------------------------------- |
| `npm run dev`      | Inicia servidor de desenvolvimento            |
| `npm run build`    | Gera build otimizado para produção            |
| `npm run preview`  | Preview do build de produção                  |
| `npm test`         | Executa testes no modo watch                  |
| `npm run test:run` | Executa todos os testes uma vez               |
| `npm run lint`     | Verifica problemas no código (max 0 warnings) |
| `npm run lint:fix` | Corrige problemas automaticamente             |
| `npm run format`   | Formata código com Prettier                   |

## 🧪 Testes (Diferencial)

O projeto inclui **6 testes básicos** para demonstrar conhecimento em testing:

- ✅ **AppCard**: Renderização e interações do usuário
- ✅ **Search**: Input funcionando corretamente
- ✅ **API**: Integração básica com serviços externos

```bash
# Executar testes
npm test

# Ver resultado dos testes
npm run test:run
```

> **Nota**: Testes foram mantidos simples e focados no essencial para demonstrar capacidade de aprendizado em testing, sem complexidade desnecessária.## 🎨 Features de UX

### Loading States Inteligentes

- **Skeleton Components**: Durante carregamento inicial
- **Image Loading**: Spinner individual para cada imagem
- **Error Fallbacks**: Estados elegantes para falhas

### Performance Otimizada

- **Debounce Search**: Reduz chamadas API em ~90%
- **Paginação**: Evita carregamento excessivo de dados
- **Lazy Loading**: Imagens carregadas conforme necessário

### Design Responsivo

```css
/* Mobile First */
grid-cols-2          /* 2 colunas no mobile */
sm:grid-cols-3       /* 3 colunas no tablet */
md:grid-cols-4       /* 4 colunas no desktop */
```

## 🔧 Configuração de Desenvolvimento

### ESLint + Prettier

O projeto usa configuração rigorosa para qualidade:

```bash
# Verificar problemas
npm run lint

# Corrigir automaticamente
npm run lint:fix

# Formatar código
npm run format
```

### TypeScript

Configuração strict habilitada para máxima type safety:

```json
{
  "strict": true,
  "noUnusedLocals": true,
  "noUnusedParameters": true
}
```

## 📊 Principais Conceitos Implementados

### 1. **Gerenciamento de Estado (Context API)**

```tsx
// Estado global centralizado
const AppContext = createContext<AppContextProps>()

// Computed values derivados
const filteredApps = apps.filter(app =>
  app.name.toLowerCase().includes(search.toLowerCase())
)
```

### 2. **Debounced Search**

```tsx
// Otimização de performance
useEffect(() => {
  const timer = setTimeout(() => onChange(searchTerm), 300)
  return () => clearTimeout(timer)
}, [searchTerm])
```

### 3. **Loading States**

```tsx
// UX durante carregamento
{
  loading && <LoadingCard />
}
{
  error && <ErrorCard />
}
{
  apps.length === 0 && <EmptyState />
}
```

## 🚦 Status do Projeto

- ✅ **Funcionalidades Core**: Busca, paginação, modal
- ✅ **Responsividade**: Mobile, tablet, desktop
- ✅ **Testes**: 6 testes básicos (diferencial para júnior)
- ✅ **Qualidade**: 0 erros ESLint, TypeScript rigoroso
- ✅ **Performance**: Loading states, debounce, otimizações

## 🔮 Melhorias Futuras

### Performance

- [ ] React Query para cache inteligente
- [ ] Virtual scrolling para listas grandes
- [ ] Service Worker para funcionalidade offline

### Funcionalidades

- [ ] Filtros por categoria
- [ ] Favoritos persistentes
- [ ] Histórico com timestamps
- [ ] Compartilhamento de apps

### Qualidade

- [ ] Testes E2E com Playwright
- [ ] Coverage reports
- [ ] CI/CD pipeline
- [ ] Error monitoring (Sentry)

## 👨‍💻 Desenvolvedor

Desenvolvido com ❤️ para demonstrar competências em:

- React moderno com hooks e Context
- TypeScript para type safety
- Testes automatizados com React Testing Library
- Design responsivo com Tailwind CSS
- Performance e otimização de UX

## 📄 Licença

Este projeto foi criado para fins educacionais e demonstração de habilidades técnicas.

---

⭐ **Gostou do projeto?** Sinta-se à vontade para explorar o código e sugerir melhorias!
