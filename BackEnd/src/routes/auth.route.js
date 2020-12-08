import Router from "express";
import {verifySignUp} from "../middlewares";
import * as authController from "../controllers/auth.controller"


const router = new Router();

router.post("/signup",
    authController.singUp
);

export default router;
