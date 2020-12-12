import estilos from "../controllers/estilos.controller";
import express from "express";

const router = express.Router();

router.get("/", estilos.findAll);

router.get("/:id", estilos.findOne);

router.post("/", estilos.create);

router.put("/:id", estilos.update);

router.delete("/:id", estilos.delete);

module.exports = router;
