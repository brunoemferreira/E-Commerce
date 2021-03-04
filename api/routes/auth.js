const jwt = require("express-jwt");
const secret = require("../config").secret;

/* 
 * Express-jwt ele analisa o token com o segredo verifica se ele é valido no servidor, se for válido  
 * pega o usuário passa para frente senão deleta o usuário
 */


// Essa funçao serve para pegar o token porem quando o token é enviado do client ele vem com uma palavra chave ( Ecommerce )
// que é o primeiro parametro então a função abaixo remove esse parametro e envia somente o token para validação
function getTokenFromHeader(req) {
  if (!req.headers.authorization) return null;
  const token = req.headers.authorization.split("");
  if (token[0] !== "Ecommerce") return null;
  return token[1];
}

const auth = {
  required: jwt({
    secret,
    userProperty: 'payload',
    getToken: getTokenFromHeader
  }),
  optional: jwt({
    secret,
    userProperty: 'payload',
    credentialsRequired: false,
    getToken: getTokenFromHeader
  })
}