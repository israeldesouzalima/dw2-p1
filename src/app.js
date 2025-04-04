import express from 'express'
import getProduto from './model/getProduto.js'
import getProdutoById from './model/getProdutoById.js'
import postProduto from './model/postProduto.js'

const app = express();

app.use('/produtos', getProdutoById)
app.use('/produtos', getProduto)
app.use('/produtos', postProduto)


export default app;