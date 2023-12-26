# Desatio backend 

Teste para vaga backend na empresa Innovation

# Rodando localmente

## Clone o projeto

```bash
  git clone git@github.com:Ronalt4cs/desafio-innovation.git
```

Entre no diretório do projeto

```bash
  cd my-project
```

## Instale as dependências

```bash
  npm install
```


## Rode a imagem do docker

```bash
  docker-compose up -d
```

## Instale as migration do prisma

```bash
  npx prisma migrate dev
```

## Inicie o servidor

```bash
  npm run dev
```
## Rodando os testes unitário

Testes e2e serão adicionados em breve

```bash
  npm run test:watch
```

## Stack utilizada

Node, Fastify, Prisma, Vistest
