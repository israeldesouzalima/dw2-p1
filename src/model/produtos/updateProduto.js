import express from "express";
import connectionDB from "../../config/connectionDB.js";

const router = express.Router();

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { nome, preco, descricao, estoque } = req.body;

  if (!nome || !preco || !descricao || !estoque) {
    return res.status(400).json({ error: "Todos os campos são obrigatórios." });
  }

  const query =
    "UPDATE produtos SET nome = ?, preco = ?, descricao = ?, estoque = ? WHERE id = ?";
  const values = [nome, preco, descricao, estoque, id];

  connectionDB.query(query, values, (err, result) => {
    if (err) {
      console.error("Erro ao tentar atualizar o produto:", err.message);
      return res
        .status(500)
        .json({
          error: "Erro ao tentar atualizar o produto no banco de dados.",
        });
    }

    if (result.length === 0) {
      return res.status(404).json({ message: "Produto não encontrado." });
    }

    res.status(200).json({ message: "Produto atualizado com sucesso!" });
  });
});

export default router;
