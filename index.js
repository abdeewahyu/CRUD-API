import express from "express";
import dotenv from "dotenv";
import { connection } from "./databases/db.js";
import router from "./routes/route.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(router);

app.get("/", (req, res) => {
  return res.json("server side is working");
});

app.listen(process.env.PORT, async () => {
  await connection();
  console.log(`http://localhost:${process.env.PORT}`);
});
