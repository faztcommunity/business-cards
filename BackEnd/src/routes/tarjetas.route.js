import tarjetas from "../controllers/tarjetas.controller";
import express from "express";

const router = express.Router();

router.get("/", tarjetas.findAll);

router.get("/:id", tarjetas.findOne);

router.post("/", tarjetas.create);

router.put("/:id", tarjetas.update);

router.delete("/:id", tarjetas.delete);

module.exports = router;
