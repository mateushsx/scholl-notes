# SCHOOL NOTES API

Um API desenvolvida para gestão de notas escolares, onde os usuários poderão ter controle sobre as notas durante o período letivo.

## Endpoints

### User routes

**POST /user/signup**

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

---

**POST /user/signin**

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

### Matter routes

**POST /matter/register**

Rota utilizada para registrar uma nova matéria

**Parâmetros de corpo**

-   `user_id`: Identificador do usuário (obrigatório)
-   `first_bimester`: Nota do primeiro bimestre (obrigatório)
-   `second_bimester`: Nota do segundo bimestre (obrigatório)
-   `third_bimester`: Nota do terceiro bimestre (obrigatório)
-   `fourth_bimester`: Nota do quarto bimestre (obrigatório)

**Resposta de sucesso**

Retorna uma resposta JSON com os seguintes campos:

```json
{
    "matter_id": "exemple-matter-id" // Identificador da matéria
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

Se o usuário não for encontrado retorna uma resposta JSON com os seguintes campos:

```json
{
    "statusCode": 400, // Status da requisiçãp
    "error": "Bad Request", // O tipo do error
    "message": "This user was not found." // Messagem informando o paramêtro inválido
}
```
