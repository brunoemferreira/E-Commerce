<div align="center">
   <img  src="./assets/banner.png" alt="Banner"/>
</div>

# E-Commerce
E-Commerce utilizando ReactJS, NodeJS e Mongo.

# 🚀 Sobre o Projeto 

Projeto de E-Commerce

> ## 🏭 Módulo BackEnd ( API )

### Sobre o Módulo - API 

Descrição sobre o que é e sobre o que faz e a importância do Módulo. 

### Tecnologias e Bibliotecas Utilizadas
* [NodeJs]()
  * [Express]()
  * [Express-jwt]()
  * [Body Parser]()
  * [Compression]()
  * [Cors]()
  * [Crypto]()
  * [EJS]()
  * [Faker]()
  * [JsonWebToken]()
  * [Moment]()
  * [Mongoose]()
  * [Mongoose Paginate]()
  * [Mongoose Unique Validator]()
  * [Morgan]()
  * [Multer]()
  * [Node PagSeguro]()
  * [NodeMailer]()
  * [Request]()
  * [XML2JS]()
  * [Nodemon]()

### Endpoints da API

<h4 style="font-weight:bold"> 🔚 End Points da API</h4> 

> API de Clientes 

| Verb   | Route                      | Response Format | Resource URL                                    | Parameters |
| ------ | -------------------------- | --------------- | ----------------------------------------------- | ---------- |
| GET    | /usuarios/                 |                 | http://localhost:3000/usuarios/                 | None       |
| GET    | /usuarios/:id              |                 | http://localhost:3000/usuarios/:id              | :id        |
| POST   | /usuarios/login            |                 | http://localhost:3000/usuarios/login            | None       |
| POST   | /usuarios/registrar        |                 | http://localhost:3000/usuarios/registrar        | None       |
| PUT    | /usuarios/                 |                 | http://localhost:3000/usuarios/                 | None       |
| DELETE | /usuarios/                 |                 | http://localhost:3000/usuarios/                 | None       |
| GET    | /usuarios/recuperar-senha  |                 | http://localhost:3000/usuarios/recuperar-senha  | None       |
| POST   | /usuarios/recuperar-senha  |                 | http://localhost:3000/usuarios/recuperar-senha  | None       |
| GET    | /usuarios/senha-recuperada |                 | http://localhost:3000/usuarios/senha-recuperada | None       |
| POST   | /usuarios/senha-recuperada |                 | http://localhost:3000/usuarios/senha-recuperada | None       |

> API de  







router.post("/login", usuarioController.login);
router.post("/registrar", usuarioController.store);
router.put("/", auth.required, usuarioController.update);
router.delete("/", auth.required, usuarioController.delete);

router.get("/recuperar-senha", usuarioController.showRecovery);
router.post("/recuperar-senha", usuarioController.createRecovery);
router.get("/senha-recuperada", usuarioController.showCompleteRecovery);
router.post("/senha-recuperada", usuarioController.completeRecovery);



| Route          | Response Formats | Resource URL                   | Parameters |
| -------------- | ---------------- | ------------------------------ | ---------- |
| GET  /clientes | JSON             | http://localhost:8080/clientes | None       |

</br>

| Route          | Description                            |
| -------------- | -------------------------------------- |
| GET  /clientes | Retorna uma lista de todos os Clientes |

</br>
<h3 style="font-weight:bold">Ordens de Serviço</h3>

| Route        | Response Formats | Resource URL                                | Parameters |
| ------------ | ---------------- | ------------------------------------------- | ---------- |
| GET  /orders | JSON             | http://localhost:8080/orders                | None       |
| POST /orders | JSON             | http://localhost:8080/orders                | JSON Body  |
| PUT  /orders | JSON             | http://localhost:8080/orders/{id}/delivered | Id Order   |

</br>

| Route        | Description                                                                                 |
| ------------ | ------------------------------------------------------------------------------------------- |
| GET  /orders | Retorna todos os Pedidos de status 'PENDING' juntamente com os produtos em ordem Ascendente |
| POST /orders | Efetua a gravação do Pedido no Banco de Dados juntamente com os Produtos selecionados       |
| PUT  /orders | Atualiza o status do Pedido para 'DELIVERED'                                                |

</br>




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






