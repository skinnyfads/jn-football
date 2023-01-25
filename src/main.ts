import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import "dotenv/config";
import routes from "./routes/index.js";

const app = express();
const env = process.env;
const port = env.PORT || 8080;
const uri = env.MDB_URI;

if (!uri) {
  throw Error("Please provide MDB_URI");
}
app.use(cors());
app.use(express.json());
app.use(routes);

mongoose.connect(uri, () => {
  console.log("MDB Connected Successfully");

  app.listen(port, () => {
    console.log(`App listening on ${port}`);
  });
});
