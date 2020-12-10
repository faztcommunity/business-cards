import redes from "../controllers/redes.controller";
import express from "express";

const router = express.Router();

router.get("/", redes.findAll);

router.get("/:id", redes.findOne);

router.post("/", redes.create);

router.put("/:id", redes.update);

router.delete("/:id", redes.delete);

module.exports = router;
