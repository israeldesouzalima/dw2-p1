import express from "express";
import getProduto from "./model/produtos/getProduto.js";
import getProdutoById from "./model/produtos/getProdutoById.js";
import postProduto from "./model/produtos/postProduto.js";
import updateProduto from "./model/produtos/updateProduto.js";
import deleteProduto from "./model/produtos/deleteProduto.js";

import postUser from './model/usuario/postUser.js'
import getUser from './model/usuario/getUser.js'
import getUserById from './model/usuario/getUserById.js'

const app = express();
app.use(express.json());

app.use("/produtos", getProdutoById);
app.use("/produtos", getProduto);
app.use("/produtos", postProduto);
app.use("/produtos", updateProduto);
app.use("/produtos", deleteProduto);

app.use('/usuario', postUser)
app.use('/usuario', getUser)
app.use('/usuario', getUserById)

export default app;
