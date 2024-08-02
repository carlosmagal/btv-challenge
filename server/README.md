# Desafio técnico bem-te-vi seguros - API

Este projeto é uma API construída usando as ferramentas [Hono](https://hono.dev/), [Prisma](https://www.prisma.io/), e [PostgreSQL](https://www.postgresql.org/).

## Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [PostgreSQL](https://www.postgresql.org/) (versão 12 ou superior)
- [Git](https://git-scm.com/)

## Execução da API

Para instalar as dependências execute:

```
npm install
```

Crie um arquivo .env na raiz do projeto e adicione as variáveis de ambiente necessárias:

```
DATABASE_URL="postgresql://usuario:senha@localhost:5432/seu_banco_de_dados"
SECRET_KEY="sua_chave_secreta_para_jwt"
```

Execute os comandos do Prisma para configurar o banco de dados e gerar o cliente Prisma:

```
npx prisma migrate dev --name init
npx prisma generate
```

Finalmente, execute o servidor de desenvolvimento:

```
npm run dev
```
