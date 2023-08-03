# Código fonte do nutri ambiental

## Depenendencias
- [pnpm](https://pnpm.io/pt/installation) versão 8.6.2
- [node](https://nodejs.org/pt-br) versão 18

## Antes de trabalhar

- selecione o codigo_fonte(`cd codigo_fonte`), instale o `pnpm` e rode o comando `pnpm install` para instalar todas as dependencias do projeto.
- duplique o arquivo `.env.example` e modifique o nome do arquivo duplicado para `.env`.

## Na hora de trabalhar
- use o comando `pnpm prisma generate` para evitar erros ao usar o próximo comando.
- use o comando `pnpm dev` para poder ligar o servidor de desenvolvimento, normalmente a página vai estar em http://localhost:3000
- existe o comando `pnpm prisma studio` para poder ver o banco como se fosse o pgAdmin
  - se fizer alguma alteração no schema do prisma, rode o comando `pnpm prisma generate`
  - para fazer com que essa alteração seja feita no banco é necessario rodar `pnpm prisma db push`, lembrando que essa alteração **VAI ALTERAR O BANCO**, então tome cuidado `:)`

## Antes de fazer um pull request (PR)

- Conserte todos os erros :D, para controlar tente rodar `pnpm run build`

## Notas

coloquei notas no projeto, pesquise por `NOTE: (CDG)` para encontra-las


## Alguns links

- [Documento de padronização do projeto](<./../Documentação/Documento de padronizacao.md>)
- [Documentação T3 Stack](https://create.t3.gg/)

- [Next.js](https://nextjs.org)
- [NextAuth.js](https://next-auth.js.org)
- [Prisma](https://prisma.io)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)

- Como fazer deploy na [Vercel](https://create.t3.gg/en/deployment/vercel), [Netlify](https://create.t3.gg/en/deployment/netlify) e [Docker](https://create.t3.gg/en/deployment/docker).
