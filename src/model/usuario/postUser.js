import express from 'express';
import connectionDB from '../../config/connectionDB.js';

const router = express.Router();

router.use(express.json());

router.post('/', (req, res) => {
    const { nome } = req.body;

    if (!nome) {
        return res.status(400).json({ error: 'O campo de nome é obrigatório.' });
    }

    const query = 'INSERT INTO usuarios (nome) VALUES (?)';
    const values = [nome];

    connectionDB.query(query, values, (err, result) => {
        if (err) {
            console.error('Erro ao inserir o usuario:', err.message);
            return res.status(500).json({ error: 'Erro ao inserir o usuario no banco de dados.' });
        }

        res.status(201).json({ message: 'Usuario cadastrado com sucesso!', produtoId: result.insertId });
    });

})

export default router;