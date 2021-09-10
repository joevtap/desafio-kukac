import express from "express";
import cors from "cors";
import routes from "./routes";
import dotenv from "dotenv";

dotenv.config({ path: "../../.env" });

const app = express();
const port = process.env.SERVER_PORT;
const corsOptions = {
  origin: `"http://localhost:${process.env.CLIENT_PORT}"`,
};

app.use(express.json());
app.use(cors(corsOptions));

app.use("/", routes);

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
