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

---

**POST /matter/register**

Rota utilizada para registrar uma nova matéria

**Parâmetros de cabeçalho**

-   `authorization`: Token gerado após cadastro ou login do usuário

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

---

**POST /matter/list**

Rota utilizada para listar todas matérias de um usuário

**Parâmetros de cabeçalho**

-   `authorization`: Token gerado após cadastro ou login do usuário

**Parâmetros de corpo**

-   `user_id`: Identificador do usuário (obrigatório)

**Resposta de sucesso**

Retorna uma resposta JSON com os seguintes campos:

```json
[
    {
        "id": "exemple-matter-id", // Identificador da matéria
        "user_id": "exemple-user-id", // Identificador do usuário
        "first_bimester": 0, //Nota do primeiro bimestre
        "second_bimester": 0, //Nota do segundo bimestre
        "third_bimester": 0, //Nota do terceiro bimestre
        "fourth_bimester": 0 //Nota do quarto bimestre
    }
]
```

**Resposta de erro**

Código de status: 400 Bad request

Se o usuário não for encontrado retorna uma resposta JSON com os seguintes campos:

```json
{
    "statusCode": 400, // Status da requisiçãp
    "error": "Bad Request", // O tipo do error
    "message": "This user was not found." // Messagem informando o paramêtro inválido
}
```

---

**POST /matter/update/:id**

Rota utilizada para listar todas matérias de um usuário

**Parâmetros de cabeçalho**

-   `authorization`: Token gerado após cadastro ou login do usuário

**Parâmetros da requisição**

-   `id`: Identificador da matéria que vai ser atualizada (obrigatório)

**Parâmetros de corpo**

-   `first_bimester`: Nota do primeiro bimestre (opcional)
-   `second_bimester`: Nota do segundo bimestre (opcional)
-   `third_bimester`: Nota do terceiro bimestre (opcional)
-   `fourth_bimester`: Nota do quarto bimestre (opcional)

**Resposta de sucesso**

Retorna uma resposta JSON com os seguintes campos:

```json
{
    "id": "exemplo-id" // Indentificador da matéria atualizada
}
```

**Resposta de erro**

Código de status: 400 Bad request

Se a matéria não for encontrado retorna uma resposta JSON com os seguintes campos:

```json
{
    "statusCode": 400, // Status da requisiçãp
    "error": "Bad Request", // O tipo do error
    "message": "This matter was not found." // Messagem informando o paramêtro inválido
}
```
