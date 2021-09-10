import express from "express";
import { processData } from "./services/processData";

const routes = express.Router();

routes.post("/api", async (req, res) => {
  const { name, income, dependents, cep } = req.body;

  res.json(await processData({ name, income, dependents, cep }));
});

export default routes;
