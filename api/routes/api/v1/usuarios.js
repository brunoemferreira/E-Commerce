const router = require("express").Router();
const auth = require("../../auth");
const UsuarioController = require("../../../controllers/UsuarioController");

const usuarioController = new UsuarioController();

router.post("/login", usuarioController.login); // Testada OK
router.post("/registrar", usuarioController.store); // Testada OK
router.put("/", auth.required, usuarioController.update); // Testada OK
router.delete("/", auth.required, usuarioController.remove); // Testada OK

router.get("/recuperar-senha", usuarioController.showRecovery);
router.post("/recuperar-senha", usuarioController.createRecovery);
router.get("/senha-recuperada", usuarioController.showCompleteRecovery);
router.post("/senha-recuperada", usuarioController.completeRecovery);

router.get("/", auth.required, usuarioController.index); // Testada OK aqui é a rota /usuarios
router.get("/:id", auth.required, usuarioController.show); // Testada OK 

module.exports = router;

