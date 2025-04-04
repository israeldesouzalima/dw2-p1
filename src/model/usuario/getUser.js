import express from 'express';
import connectionDB from '../../config/connectionDB.js';

const router = express.Router();

router.use(express.json());

router.get('/', (req, res) => {

    const query = 'SELECT * FROM USUARIOS';

    connectionDB.query(query, [], (err, result) => {
        if (err) {
            console.error('Erro ao tentar consultar os usuarios:', err.message);
            return res.status(500).json({ error: 'Erro ao tentar consultar os usuarios no banco de dados.' });
        }

        res.status(200).json(result);
    });

})

export default router;