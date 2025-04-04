import express from 'express';
import connectionDB from '../config/connectionDB.js';

const router = express.Router();

router.use(express.json());

router.get('/', (req, res) => {

    const query = 'SELECT * FROM PRODUTOS';

    connectionDB.query(query, [], (err, result) => {
        if (err) {
            console.error('Erro ao tentar consultar os produtos:', err.message);
            return res.status(500).json({ error: 'Erro ao tentar consultar os produtos no banco de dados.' });
        }

        res.status(200).json(result);
    });

})

export default router;