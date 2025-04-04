import express from 'express'
import getProduto from './model/getProduto.js'
import getProdutoById from './model/getProdutoById.js'
import postProduto from './model/postProduto.js'
import updateProduto from './model/updateProduto.js'

const app = express();
app.use(express.json())

app.use('/produtos', getProdutoById)
app.use('/produtos', getProduto)
app.use('/produtos', postProduto)
app.use('/produtos', updateProduto)


export default app;