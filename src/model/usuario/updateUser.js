import express from "express";
import connectionDB from "../../config/connectionDB.js";

const router = express.Router();

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { nome } = req.body;

  if (!nome) {
    return res.status(400).json({ error: "O campo nome é obrigatório." });
  }

  const query =
    "UPDATE usuarios SET nome = ? WHERE id = ?";
  const values = [nome, id];

  connectionDB.query(query, values, (err, result) => {
    if (err) {
      console.error("Erro ao tentar atualizar o usuario:", err.message);
      return res
        .status(500)
        .json({
          error: "Erro ao tentar atualizar o usuario no banco de dados.",
        });
    }

    if (result.length === 0) {
      return res.status(404).json({ message: "Usuário não encontrado." });
    }

    res.status(200).json({ message: "Usuário atualizado com sucesso!" });
  });
});

export default router;
