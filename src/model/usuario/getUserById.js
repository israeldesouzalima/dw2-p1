import express from "express";
import connectionDB from "../../config/connectionDB.js";

const router = express.Router();

router.get("/:id", (req, res) => {

   const { id } = req.params;

  const query = "SELECT * FROM USUARIOS WHERE id = ?";
  const values = [id];

  connectionDB.query(query, values, (err, result) => {
    if (err) {
      console.error("Erro ao tentar consultar o usuario pelo id:", err.message);
      return res.status(500).json({
          error: "Erro ao tentar consultar o usuario pelo id no banco de dados.",
        });
    }

    if (result.length === 0) {
      return res.status(404).json({ message: "Usuario não encontrado." });
    }

    res.status(200).json(result[0]);
  });
});

export default router;
