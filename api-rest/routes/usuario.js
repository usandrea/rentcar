var express = require ("express");
var UserController = require("../controllers/usuario");

var router = express.Router();

router.get("/probando", UserController.probando);
router.post("/testeando", UserController.testeando);

router.post("/guardarUsuario",UserController.save);
router.post("/login",UserController.login);
router.put("/actualizar/:id",UserController.update);
router.delete("/eliminar/:id",UserController.eliminar);
router.get("/usuarios",UserController.listarUsuarios);
router.get("/usuario/:id",UserController.mostrarUsuario);


module.exports = router;