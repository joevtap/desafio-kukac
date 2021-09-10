import express from "express";
import cors from "cors";
import routes from "./routes";

const app = express();
const port = 3001;
const corsOptions = {
  origin: `http://localhost:3000`,
};

app.use(express.json());
app.use(cors(corsOptions));

app.use("/", routes);

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
