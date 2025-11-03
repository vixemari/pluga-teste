# 🔧 Pluga Apps - Busca de Ferramentas

Uma aplicação React moderna para explorar e descobrir ferramentas integradas à plataforma Pluga. Desenvolvida com foco em **experiência do usuário**, **performance** e **qualidade de código**.

![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.1.7-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.16-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

## 📱 Demo

🌐 **[Ver Demo ao Vivo](https://pluga-teste.vercel.app/)**

## 📸 Interface da Aplicação

### 🖥️ **Tela Principal**

<img width="1419" height="925" alt="image" src="https://github.com/user-attachments/assets/82e324c4-3bac-4399-8d1f-022566adaa82" />
*Vista geral da aplicação com grid de apps, busca e paginação*

### 📱 **Responsividade Mobile**

<img width="383" height="825" alt="image" src="https://github.com/user-attachments/assets/7c5db243-a11a-4f80-9578-78448b10f123" /><br/>
_Layout adaptado para dispositivos móveis_

### ⏳ **Loading States**

<img width="1426" height="927" alt="image" src="https://github.com/user-attachments/assets/2b647d1f-4abe-4fa7-b5bf-a42c611fe030" />
*Skeleton components durante carregamento para melhor UX*

### 🪟 **Modal de Detalhes**

<img width="1426" height="927" alt="image" src="https://github.com/user-attachments/assets/5d826457-b882-48e1-bcf9-d50c13ea7046" />
*Modal exibindo informações detalhadas e histórico de visualizações*

### 🎯 Funcionalidades Principais

- **🔍 Busca Inteligente**: Search com debounce para otimização de performance
- **📄 Paginação**: Navegação fluida com 12 apps por página
- **🔗 URL Persistente**: Busca e página mantidas em query params (compartilháveis!)
- **⏳ Loading States**: Skeleton components durante carregamento
- **📱 Design Responsivo**: Layout otimizado para mobile, tablet e desktop
- **🎨 Temas Dinâmicos**: Cores de fundo baseadas na identidade visual de cada app
- **💾 Histórico Local**: Apps recentemente visualizados salvos no LocalStorage
- **♿ Acessibilidade**: Componentes seguem padrões ARIA

## ✨ Destaque: Persistência de Estado na URL

### 🔗 Query Parameters para Melhor UX

A aplicação implementa **persistência de estado na URL** usando query parameters, oferecendo uma experiência profissional e compartilhável:

```bash
# Exemplos de URLs
https://pluga-teste.vercel.app/?search=slack        # Busca por "Slack"
https://pluga-teste.vercel.app/?page=2              # Página 2
https://pluga-teste.vercel.app/?search=trello&page=3 # Busca "Trello" na página 3
```

#### 🎯 **Benefícios**

| Funcionalidade                | Descrição                                        |
| ----------------------------- | ------------------------------------------------ |
| 🔄 **State Persistente**      | Recarregar a página mantém busca e paginação     |
| 🔗 **URLs Compartilháveis**   | Envie links com buscas específicas para colegas  |
| 🔙 **Navegação do Browser**   | Botões voltar/avançar funcionam perfeitamente    |
| ⭐ **Favoritos Inteligentes** | Salve buscas frequentes nos favoritos            |
| 📱 **Deep Linking**           | Acesso direto a estados específicos da aplicação |

#### 💡 **Implementação Técnica**

#### 📖 **Comportamentos Inteligentes**

- ✅ **Busca vazia**: Remove `?search=` da URL automaticamente
- ✅ **Página 1**: Remove `?page=1` (é o padrão)
- ✅ **Nova busca**: Reseta para página 1 automaticamente
- ✅ **URL limpa**: Volta ao estado inicial quando sem filtros

> 📚 **[Documentação completa sobre Query Params](./QUERY_PARAMS.md)**

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
│   └── AppContext.tsx   # Estado global com URL sync
├── api/
│   └── appService.ts    # Serviços HTTP e integração API
├── types/
│   └── app.ts          # Interfaces TypeScript
├── Pages/
│   └── Home.tsx        # Página principal
├── test/               # Suíte de testes (9 testes)
│   ├── AppCard.test.tsx
│   ├── Search.test.tsx
│   ├── appService.test.ts
│   ├── urlParams.test.ts  # 🆕 Testes de Query Params
│   └── setup.ts
└── docs/               # Documentação adicional
    ├── QUERY_PARAMS.md    # 🆕 Doc de URL persistence
    └── images/            # Screenshots da interface
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

## 🧪 Testes

O projeto inclui **9 testes** para demonstrar conhecimento em testing:

- ✅ **AppCard**: Renderização e interações do usuário
- ✅ **Search**: Input funcionando corretamente
- ✅ **API**: Integração básica com serviços externos
- ✅ **URL Params**: Persistência de estado na URL

```bash
# Executar testes
npm test

# Ver resultado dos testes
npm run test:run
```

**Resultados**:

```
✓ src/test/urlParams.test.ts (3 tests)    # 🆕 Query Params
✓ src/test/appService.test.ts (1 test)    # API Service
✓ src/test/Search.test.tsx (3 tests)       # Search Component
✓ src/test/AppCard.test.tsx (2 tests)      # Card Component

Test Files  4 passed (4)
Tests       9 passed (9)
```

> **Nota**: Testes foram mantidos simples e focados no essencial para demonstrar capacidade de aprendizado em testing, sem complexidade desnecessária.

## 🎨 Features de UX## 🔧 Configuração de Desenvolvimento

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

## 🚦 Status do Projeto

- ✅ **Funcionalidades Core**: Busca, paginação, modal
- ✅ **Query Params**: Persistência de estado na URL (compartilhável!)
- ✅ **Responsividade**: Mobile, tablet, desktop
- ✅ **Testes**: 9 testes incluindo URL params
- ✅ **Qualidade**: 0 erros ESLint, TypeScript rigoroso
- ✅ **Performance**: Loading states, debounce, otimizações
- ✅ **Deploy**: Vercel com CI/CD automático

## 👨‍💻 Desenvolvedor

Desenvolvido com ❤️ para demonstrar competências em:

- React moderno com hooks e Context API
- TypeScript para type safety
- Persistência de estado com Query Parameters
- Testes automatizados com React Testing Library
- Design responsivo com Tailwind CSS
- Performance e otimização de UX
- Deploy automatizado na Vercel

## 📄 Licença

Este projeto foi criado para fins educacionais e demonstração de habilidades técnicas.

---

⭐ **Gostou do projeto?** Sinta-se à vontade para explorar o código e sugerir melhorias!
