import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("✅ Ruta de test funcionando");
});

export default router;
