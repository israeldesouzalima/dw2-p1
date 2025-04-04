import express from "express";
import getProduto from "./model/produtos/getProduto.js";
import getProdutoById from "./model/produtos/getProdutoById.js";
import postProduto from "./model/produtos/postProduto.js";
import updateProduto from "./model/produtos/updateProduto.js";
import deleteProduto from "./model/produtos/deleteProduto.js";

const app = express();
app.use(express.json());

app.use("/produtos", getProdutoById);
app.use("/produtos", getProduto);
app.use("/produtos", postProduto);
app.use("/produtos", updateProduto);
app.use("/produtos", deleteProduto);

export default app;
