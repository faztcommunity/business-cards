import {Router} from 'express'
import * as userController from "../controllers/usuario.controller";
import {authJwt} from "../middlewares"
const route = new Router();

route.get("/admin",[authJwt.verifyToken,authJwt.isAdmin ],userController.menuAdmin);
export default route;
