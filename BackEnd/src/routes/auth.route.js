import Router from "express";
import { verifySignUp } from "../middlewares";
import * as authController from "../controllers/auth.controller";

const router = new Router();

router.post(
  "/signup",
  [verifySignUp.validarEmailExiste, verifySignUp.verificarRolExiste],
  authController.singUp
);

router.get("/signin", authController.signIn);

export default router;
