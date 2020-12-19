import {Router} from 'express'
import * as userController from "../controllers/usuario.controller";
import {authJwt} from "../middlewares"
const route = new Router();

route.get("/admin",[authJwt.verifyToken,authJwt.isAdmin ],userController.menuAdmin);
route.delete("/:id",[authJwt.verifyToken,authJwt.isAdmin ],userController.eliminarUsuario);
route.get("/:id",[authJwt.verifyToken,authJwt.isAdmin],userController.obtenerUsuarioById);
route.put("/actualizarClave/:id",userController.actualizarClave);
export default route;
