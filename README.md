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

# Rotas

  - POST /products

    Objetivo: Realizar a criação de um produto.

    Request:

    ```json
    {
      "name": "camisa",
      "quantity": 1,
      "category": "roupas",
      "status": "active",
    }
    ```

    Response:

    ```json
    {
      "id": "4ca336a9-b8a5-4cc6-8ef8-a0a3b5b45ed7",
      "name": "camisa",
      "quantity": 1,
      "category": "roupas",
      "status": "active",
      "created_at": "2022-08-01T14:30:41.203653",
      "updated_at": "2022-08-01T14:30:41.203653",
      "deleted_at": "2022-08-01T14:30:41.203653"
    }
    ```

  - GET /products?page=1?itemsPerPage=2

    Objetivo: Realizar listagem de todos os produtos.

    Response:

    ```json
    [
      {
        "id": "4ca336a9-b8a5-4cc6-8ef8-a0a3b5b45ed7",
        "name": "camisa",
        "quantity": 1,
        "category": "roupas",
        "status": "active",
        "created_at": "2022-08-01T14:30:41.203653",
        "updated_at": "2022-08-01T14:30:41.203653",
        "deleted_at": "2022-08-01T14:30:41.203653"
      },
      {
        "id": "4ca336a9-b8a5-4cc6-8ef8-a0a3b5b45ed7",
        "name": "camisa",
        "quantity": 1,
        "category": "roupas",
        "status": "active",
        "created_at": "2022-08-01T14:30:41.203653",
        "updated_at": "2022-08-01T14:30:41.203653",
        "deleted_at": "2022-08-01T14:30:41.203653"
      },
    ]
    ```

  - PATCH /products/:id

    Objetivo: Atualizar um produto.

    Request:

    ```json
    {
      "quantity": 2,
      "status": "inactive",
    }
    ```

    Response:

    ```json
    {
      "id": "4ca336a9-b8a5-4cc6-8ef8-a0a3b5b45ed7",
      "name": "camisa",
      "quantity": 2,
      "category": "roupas",
      "status": "inactive",
      "created_at": "2022-08-01T14:30:41.203653",
      "updated_at": "2022-08-01T14:30:41.203653",
      "deleted_at": "2022-08-01T14:30:41.203653"
    }
    ```


  - DELETE /products/:id

    Objetivo: Deletar um produto.

    Response:

    ```json
    No Content
    { }
    ```

  - POST /counties

    Objetivo: Registrar um município do Rio de Janeiro.

    Request:

    ```json
    {
      "name": "Angra dos Reis",
    }
    ```

    Response:

    ```json
    {
      "id": 3300100,
      "name": "Angra dos Reis",
    }
    ```
## Stack utilizada

Node, Fastify, Prisma, Vitest
