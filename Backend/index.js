import connectToMongo from "./db.js";
import express, { json, urlencoded } from "express";
import cors from "cors";
import TestRoute from "./routes/testData.js";
connectToMongo();

const app = express();

const port = 5000;
app.use(cors());
app.use(json({ limit: "25mb" }));
app.use(urlencoded({ limit: "25mb" }));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

app.use("/api", TestRoute);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
