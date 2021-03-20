<div align="center">
   <img  src="./assets/banner.png" alt="Banner"/>
</div>

# E-Commerce
E-Commerce utilizando ReactJS, NodeJS e Mongo.

# 🚀 Sobre o Projeto 

Projeto de E-Commerce

> ## 🏭 Módulo Banco de Dados ( MongoDB )

> ## 🏭 Módulo BackEnd ( API )

### Sobre o Módulo - API 

Descrição sobre o que é e sobre o que faz e a importância do Módulo. 

### Tecnologias e Bibliotecas Utilizadas
* [NodeJs]()
  * [Express](https://www.npmjs.com/package/express)
  * [Express-jwt](https://www.npmjs.com/package/express-jwt)
  * [Body Parser](https://www.npmjs.com/package/body-parser)
  * [Compression](https://www.npmjs.com/package/compression)
  * [Cors](https://www.npmjs.com/package/cors)
  * [Crypto]()
  * [EJS](https://www.npmjs.com/package/ejs)
  * [Faker](https://www.npmjs.com/package/faker)
  * [JsonWebToken](https://www.npmjs.com/package/jsonwebtoken)
  * [Moment](https://www.npmjs.com/package/moment)
  * [Mongoose](https://www.npmjs.com/package/mongoose)
  * [Mongoose Paginate](https://www.npmjs.com/package/mongoose-paginate)
  * [Mongoose Unique Validator](https://www.npmjs.com/package/mongoose-unique-validator)
  * [Morgan](https://www.npmjs.com/package/morgan)
  * [Multer](https://www.npmjs.com/package/multer)
  * [Node PagSeguro](https://www.npmjs.com/package/node-pagseguro)
  * [NodeMailer](https://www.npmjs.com/package/nodemailer)
  * [Request]()
  * [XML2JS](https://www.npmjs.com/package/xml2js)
  * [Nodemon](https://nodemon.io/)

<h2 style="font-weight:bold"> 🔚 End Points da API</h2> 

> ### **API de Clientes**

| Route                                 | Response Format | Resource URL                                    | Parameters | Tested |
| ------------------------------------- | --------------- | ----------------------------------------------- | ---------- | ------ |
| **GET**    /usuarios/                 | JSON            | http://localhost:3000/v1/api/usuarios           | None       | **OK** |
| **GET**    /usuarios/:id              | JSON            | http://localhost:3000/v1/api/usuarios/:id       | :id        | **OK** |
| **POST**   /usuarios/login            | JSON            | http://localhost:3000/v1/api/usuarios/login     | None       | **OK** |
| **POST**   /usuarios/registrar        | JSON            | http://localhost:3000/v1/api/usuarios/registrar | None       | **OK** |
| **PUT**    /usuarios/                 | JSON            | http://localhost:3000/v1/api/usuarios           | None       | **OK** |
| **DELETE** /usuarios/                 | JSON            | http://localhost:3000/v1/api/usuarios           | None       | **OK** |
| **GET**    /usuarios/recuperar-senha  |                 | http://localhost:3000/usuarios/recuperar-senha  | None       |        |
| **POST**   /usuarios/recuperar-senha  |                 | http://localhost:3000/usuarios/recuperar-senha  | None       |        |
| **GET**    /usuarios/senha-recuperada |                 | http://localhost:3000/usuarios/senha-recuperada | None       |        |
| **POST**   /usuarios/senha-recuperada |                 | http://localhost:3000/usuarios/senha-recuperada | None       |        |

</br>

| Route                                  | Description                                                            |
| -------------------------------------- | ---------------------------------------------------------------------- |
| **GET**     /usuarios/                 | Rota que retorna o usuário quando passado o token do mesmo             |
| **GET**     /usuarios/:id              | Rota que retorna o usuário informado atraves de token e do id do mesmo |
| **POST**    /usuarios/login            | Efetua o login do usuário no E-commerce                                |
| **POST**    /usuarios/registrar        | Registra o usuário no sistema E-Commerce                               |
| **PUT**     /usuarios/                 | Rota que atualiza os dados do Usuário informado                        |
| **DELETE**  /usuarios/                 | Rota que efetua a Exclusão do Usuário informado                        |
| **GET**     /usuarios/recuperar-senha  |                                                                        |
| **POST**    /usuarios/recuperar-senha  |                                                                        |
| **GET**     /usuarios/senha-recuperada |                                                                        |
| **POST**    /usuarios/senha-recuperada |                                                                        |

</br>

> ### **API de Loja** 

| Verb | Route | Response Format | Resource URL | Parameters |
| ---- | ----- | --------------- | ------------ | ---------- |
|      |       |                 |              |            |

</br>

| Verb | Route | Description |
| ---- | ----- | ----------- |
|      |       |             |

> ### API de Clientes 

| Verb | Route | Response Format | Resource URL | Parameters |
| ---- | ----- | --------------- | ------------ | ---------- |
|      |       |                 |              |            |

</br>

| Verb | Route | Description |
| ---- | ----- | ----------- |
|      |       |             |

> ### API de Categorias 

| Verb | Route | Response Format | Resource URL | Parameters |
| ---- | ----- | --------------- | ------------ | ---------- |
|      |       |                 |              |            |

</br>

| Verb | Route | Description |
| ---- | ----- | ----------- |
|      |       |             |

> API de Produtos 

| Verb | Route | Response Format | Resource URL | Parameters |
| ---- | ----- | --------------- | ------------ | ---------- |
|      |       |                 |              |            |

</br>

| Verb | Route | Description |
| ---- | ----- | ----------- |
|      |       |             |

> API de Avaliações 

| Verb | Route | Response Format | Resource URL | Parameters |
| ---- | ----- | --------------- | ------------ | ---------- |
|      |       |                 |              |            |

</br>

| Verb | Route | Description |
| ---- | ----- | ----------- |
|      |       |             |

> API de Variações 

| Verb | Route | Response Format | Resource URL | Parameters |
| ---- | ----- | --------------- | ------------ | ---------- |
|      |       |                 |              |            |

</br>

| Verb | Route | Description |
| ---- | ----- | ----------- |
|      |       |             |

> API de Pedidos

| Verb | Route | Response Format | Resource URL | Parameters |
| ---- | ----- | --------------- | ------------ | ---------- |
|      |       |                 |              |            |

</br>

| Verb | Route | Description |
| ---- | ----- | ----------- |
|      |       |             |

> API de Entrega 

| Verb | Route | Response Format | Resource URL | Parameters |
| ---- | ----- | --------------- | ------------ | ---------- |
|      |       |                 |              |            |

</br>

| Verb | Route | Description |
| ---- | ----- | ----------- |
|      |       |             |

> API de Pagamentos 

| Verb | Route | Response Format | Resource URL | Parameters |
| ---- | ----- | --------------- | ------------ | ---------- |
|      |       |                 |              |            |

</br>

| Verb | Route | Description |
| ---- | ----- | ----------- |
|      |       |             |




### Rodando O Módulo
```bash
# Iniciando o Módulo em Modo Desenvolvimento
$ npm run dev
  ou 
$ yarn run dev
```

___

> ## 🌎 Módulo FrontEnd ( DashBoard )

### Sobre o Módulo - DashBoard 
Descrição sobre o que é e sobre o que faz e a importância do Módulo


### Tecnologias e Bibliotecas Utilizadas

* []()

### Rodando O Módulo
```bash
# Iniciando o Módulo em Modo Desenvolvimento
$ 
  ou 
$ 
```
___

> ## 🌎 Módulo FrontEnd ( Loja Virtual )

### Sobre o Módulo - Loja Virtual 
Descrição sobre o que é e sobre o que faz e a importância do Módulo

### Tecnologias e Bibliotecas Utilizadas

* []()

### Rodando O Módulo
```bash
# Iniciando o Módulo em Modo Desenvolvimento
$ 
  ou 
$ 
```

___






