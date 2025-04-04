import express from "express";
import connectionDB from "../config/connectionDB.js";

const router = express.Router();

router.delete("/:id", (req, res) => {

   const { id } = req.params;

   const query = "DELETE FROM produtos WHERE id = ?";
   const values = [id];

  connectionDB.query(query, values, (err, result) => {
    if (err) {
        console.error("Erro ao tentar deletar o produto:", err.message);
        return res.status(500).json({ error: "Erro ao tentar deletar o produto no banco de dados." });
      }
  
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: "Produto não encontrado." });
      }

    res.status(200).json({ message: "Produto deletado com sucesso!" });
  });
});

export default router;
