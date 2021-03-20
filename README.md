<div align="center">
   <img  src="./assets/banner.png" alt="Banner"/>
   <h1>E-Commerce</h1>
   <h2>🚧  Em construção  🚧</h2>
   </br>
</div>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/brunoemferreira/E-Commerce?color=%2304D361?style=flat-square">
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/brunoemferreira/E-Commerce?style=flat-square">
  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/brunoemferreira/E-Commerce?style=flat-square">
</p>

## ⚓ Conteúdo 

* [Back-End](#backend)
  * [Sobre](#sobre-backend)
  * [Tecnologias e Bibliotecas](#tec-bibli-backend)
  * [End Points](#endpoint-backend)
    * [API de Usuário](#api-usuario)
    * [API de Loja](#api-)
    * [API de Validações](#api-)
    * [API de Clientes](#api-)
    * [API de Categorias](#api-)
    * [API de Produtos](#api-)
    * [API de Avaliações](#api-)
    * [API de Varições](#api-)
    * [API de Pedidos](#api-)
    * [API de Integração: Entrega Correios](#api-)
    * [API de Entrega](#api-)
    * [API de Integração: PagSeguro](#api-)
    * [API de Pagamentos](#api-)
    * [API de ](#api-)
* [Front-End ( Dashboard )](#instalacao)
  * [Sobre](#sobre-backend)
  * [Tecnologias e Bibliotecas](#tec-bibli-backend)
* [Front-End ( Loja Virtual )](#como-usar)
  * [Sobre](#sobre-backend)
  * [Tecnologias e Bibliotecas](#tec-bibli-backend)

</br>

# 🚀 Sobre o Projeto 

Projeto de E-Commerce

> ## 🏭 Módulo Banco de Dados ( MongoDB )

> ## 🏭 Módulo BackEnd ( API )

### Sobre o Módulo - API 

Descrição sobre o que é e sobre o que faz e a importância do Módulo. 

### 🧰 Tecnologias e Bibliotecas Utilizadas
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

> ### **API de Usuários**

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


### ⚙️ Rodando O Módulo
```bash
# Clone este repositório para a pasta anterior
$ git clone https://github.com/brunoemferreira/E-Commerce.git
# ou use a opção de download.

# Acesse a pasta api
$ cd api

# Instale as dependências do projeto
$ yarn install
ou
$ npm install

# Executando o Projeto
$ yarn dev 
ou
$ npm dev

# No seu console irá aparecer a seguinte mensagem
$ Rodando na //localhost:3000 
```
```json
// O projeto irá rodar em http://localhost:3000/
// Caso tenha o plugin para o chrome ( JSON Viewer ) você deverá ver a seguinte estrutura no browser

// 20210319223049
// http://localhost:3000/

{
  "ok": true
}
```
___

> ## 📊 Módulo FrontEnd ( DashBoard )

### Sobre o Módulo - DashBoard 
Descrição sobre o que é e sobre o que faz e a importância do Módulo


### 🧰 Tecnologias e Bibliotecas Utilizadas

* []()

### ⚙️ Rodando O Módulo
```bash
# Iniciando o Módulo em Modo Desenvolvimento
$ 
  ou 
$ 
```
___

> ## 💵 Módulo FrontEnd ( Loja Virtual )

### Sobre o Módulo - Loja Virtual 
Descrição sobre o que é e sobre o que faz e a importância do Módulo

### 🧰 Tecnologias e Bibliotecas Utilizadas

* []()

### ⚙️ Rodando O Módulo
```bash
# Iniciando o Módulo em Modo Desenvolvimento
$ 
  ou 
$ 
```

___






