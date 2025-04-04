import express from "express";
import connectionDB from "../../config/connectionDB.js";

const router = express.Router();

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  const query = "DELETE FROM usuarios WHERE id = ?";
  const values = [id];

  connectionDB.query(query, values, (err, result) => {
    if (err) {
      console.error("Erro ao tentar deletar o usuario:", err.message);
      return res
        .status(500)
        .json({ error: "Erro ao tentar deletar o usuario no banco de dados." });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Usuario não encontrado." });
    }

    res.status(200).json({ message: "Usuario deletado com sucesso!" });
  });
});

export default router;
