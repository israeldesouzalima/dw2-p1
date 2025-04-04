import express from 'express';
import connectionDB from '../../config/connectionDB.js';

const router = express.Router();

router.use(express.json());

router.post('/', (req, res) => {
    const { nome, preco, descricao, estoque} = req.body;

    if (!nome || !preco || !descricao) {
        return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
    }

    const query = 'INSERT INTO produtos (nome, preco, descricao, estoque) VALUES (?, ?, ?, ?)';
    const values = [nome, preco, descricao, estoque];

    connectionDB.query(query, values, (err, result) => {
        if (err) {
            console.error('Erro ao inserir produto:', err.message);
            return res.status(500).json({ error: 'Erro ao inserir produto no banco de dados.' });
        }

        res.status(201).json({ message: 'Produto adicionado com sucesso!', produtoId: result.insertId });
    });

})

export default router;