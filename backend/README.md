# SCHOOL NOTES API

Um API desenvolvida para gestão de notas escolares, onde os usuários poderão ter controle sobre as notas durante o período letivo.

## Endpoints

**GET /user/signup**

Rota utilizada para cadastro de novos usuário no sistema

**Parâmetros de corpo**

-   `name`: Nome completo do usuário (obrigatório)
-   `email`: Email para o usuário efetuar login (obrigatório)
-   `password`: Senha de no minímo 8 digitos (obrigatório)

**Resposta de sucesso**

Retorna uma resposta JSON com os seguintes campos:

```json
{
    "id": "exemplo-id", // Indentificador único do usuário
    "token": "exemplo-token" // Token para authenticação do usuário
}
```

**Resposta de erro**

Código de status: 400 Bad request

Se o `nome` for inválido retorna uma resposta JSON com os seguintes campos:

```json
{
    "statusCode": 400,
    "error": "Bad Request",
    "message": "Missing or invalid name parameter."
}
```

Se o `email` for inválido retorna uma resposta JSON com os seguintes campos:

```json
{
    "statusCode": 400,
    "error": "Bad Request",
    "message": "Missing or invalid email parameter."
}
```

Se o `senha` for inválido retorna uma resposta JSON com os seguintes campos:

```json
{
    "statusCode": 400,
    "error": "Bad Request",
    "message": "Missing or invalid password parameter."
}
```
