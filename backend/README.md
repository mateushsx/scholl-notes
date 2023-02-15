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

Se algum paramêtro for inválido retorna uma resposta JSON com os seguintes campos:

```json
{
    "statusCode": 400, // Status da requisiçãp
    "error": "Bad Request", // O tipo do error
    "message": "Missing or invalid 'param' parameter." // Messagem informando o paramêtro inválido
}
```

**GET /user/signin**

Rota utilizada para login de usuário no sistema

**Parâmetros de corpo**

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

Se algum paramêtro for inválido retorna uma resposta JSON com os seguintes campos:

```json
{
    "statusCode": 400, // Status da requisiçãp
    "error": "Bad Request", // O tipo do error
    "message": "Missing or invalid 'param' parameter." // Messagem informando o paramêtro inválido
}
```
