<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

---

# YDUQS Portais Desafio Fullstack

Este projeto é um desafio fullstack utilizando Node.js, Prisma, Docker e outras tecnologias modernas.

## Pré-requisitos

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/)
- [Node.js](https://nodejs.org/) (versão recomendada: 18+)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- (Opcional) [Git](https://git-scm.com/)

## Passo a passo para rodar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/patricianogueira/yduqs-portais-desafio-fullstack.git
```

**Antes de executar os comandos abaixo, navegue até a pasta do projeto:**
```bash
cd cadastro-api
```

### 2. Instale as dependências do projeto

```bash
npm install
# ou
yarn install
```

### 3. Suba os containers com Docker Compose

```bash
docker compose up -d
```
Isso irá subir os serviços necessários, como banco de dados.

### 4. Gere os artefatos do Prisma

```bash
npx prisma generate
```

### 5. Rode as migrações do banco de dados

```bash
npx prisma migrate dev
```

### 6. Suba a aplicação

```bash
npm run start:dev
# ou
yarn dev
```
A aplicação estará disponível em `http://localhost:3000` (ou porta configurada).

### 7. Rode os testes unitários

Para rodar os testes unitários, navegue até a pasta `cadastro-api` e execute:

```bash
cd cadastro-api
npm run test
# ou
yarn test
```

### 8. Documentação Swagger

A API possui documentação gerada pelo Swagger. Após subir a aplicação, acesse:

```
http://localhost:3000/api/docs
```

para visualizar e testar os endpoints disponíveis.

## Estrutura do Projeto

- `/src`: Código fonte da aplicação
- `/prisma`: Esquema e migrações do banco de dados
- `docker-compose.yml`: Configuração dos serviços Docker
- `.env`: Variáveis de ambiente

## Observações

- Certifique-se de que as portas necessárias (ex: 5432 para PostgreSQL) estejam livres.
- Configure o arquivo `.env` conforme necessário antes de rodar a aplicação.

## 🛠️ Arquivo `.env` — Exemplo de Configuração

Crie um arquivo `.env` na raiz do projeto `cadastro-api` com as seguintes variáveis:

```env
# Porta da aplicação NestJS
PORT=3000

# Configuração do banco PostgreSQL
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=teste
DB_NAME=cadastro

# URL completa de conexão do Prisma
# Substitua:
#   <USER>       pelo usuário do banco
#   <PASSWORD>   pela senha
#   <HOST>       pelo host (ex: localhost)
#   <PORT>       pela porta (ex: 5432)
#   <DATABASE>   pelo nome do seu banco
DATABASE_URL="postgresql://<USER>:<PASSWORD>@<HOST>:<PORT>/<DATABASE>?schema=public"

# Ambiente
NODE_ENV=development

```


## Contato

Dúvidas ou sugestões? Entrar com contato com Patricia Nogueira, no email snogueira.patricia@gmail.com