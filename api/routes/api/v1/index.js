// Aqui é onde ficam as rotas de todos os modelos do servidor
const router = require("express").Router();

router.use("/usuarios", require("./usuarios"));

module.exports = router;