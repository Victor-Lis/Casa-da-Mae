Aqui está o README reformulado com maior espaçamento entre as seções e corrigida a estrutura de diretórios:

# Casa da Mãe

## 💡 Sobre o Projeto

Casa da Mãe é um projeto social que visa ajudar famílias carentes através de acolhimento alimentar e educacional. O portal disponibiliza cursos gratuitos e gerencia doações para auxiliar famílias necessitadas.

<br>

## 🎨 Layout

O projeto possui um design responsivo com tema personalizado usando:

- Cores principais definidas em variáveis CSS
- Fontes do Google (Inter, Pacifico, Ubuntu, Crimson Text)
- Componentes reutilizáveis
- Layout adaptativo para mobile

<br>

## 🚀 Tecnologias

Este projeto foi desenvolvido com as seguintes tecnologias:

- [Next.js 14](https://nextjs.org/)
- [React](https://reactjs.org)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [NextAuth.js](https://next-auth.js.org/)
- [Supabase](https://supabase.com/)
- [React Hook Form](https://react-hook-form.com/)
- [Zod](https://zod.dev/)
- [Swiper](https://swiperjs.com/)

<br>

## 🗂️ Estrutura de diretórios

```
src/
├── app/                    # Rotas e páginas
├── components/             # Componentes React reutilizáveis
├── hooks/                  # Custom hooks
├── lib/                    # Configurações e utilitários
├── services/               # Serviços e APIs
└── styles/                 # Arquivos de estilo
```

<br>

## 🔧 Configuração do Ambiente

- Pré-requisitos
  - Node.js 18.x ou superior
  - NPM 8.x ou superior
  - Conta no Supabase
  - Projeto configurado no Google Cloud para autenticação

<br>

## 💻 Funcionalidades

- Autenticação com Google
- Área administrativa para gerenciar inscrições
- Upload e gerenciamento de conteúdo dos cursos
- Galeria de fotos das contribuições
- Sistema de inscrição em cursos
- Área restrita para alunos acessarem conteúdo

<br>

## 🌐 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev         # Inicia servidor de desenvolvimento

# Produção
npm run build       # Cria build otimizada
npm run start       # Inicia servidor de produção
```

<br>

## 🚀 Como executar?

1. Clone o repositório
   ```bash
   git clone https://github.com/Victor-Lis/Casa-da-Mae/
   ```

2. Acesse a pasta do projeto
   ```bash
   cd casa-da-mae
   ```

3. Instale as dependências
   ```bash
   npm install
   # ou
   yarn install
   ```

4. Configure as variáveis ambiente
   ```bash
   casa-da-mae/.env
   ```
   ```bash
   # NextAuth
   SECRET=
   NEXTAUTH_SECRET=
   NEXT_AUTH_URL=
   HOST_URL=
   NEXT_AUTH_SECRET=

   # Supabase
   NEXT_PUBLIC_SUPABASE_URL=
   NEXT_PUBLIC_SUPABASE_ANON_KEY=

   # Google
   GOOGLE_CLIENT_ID=
   GOOGLE_CLIENT_SECRET=
   ```

<br>

## 👀 Veja você mesmo!

[🌐 Deploy ao vivo](https://casa-da-mae.vercel.app/)

<br>

## 👥 Autores

- [@Victor-Lis](https://www.linkedin.com/in/victor-lis-bronzo)
