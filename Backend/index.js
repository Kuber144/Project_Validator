import connectToMongo from "./db.js";
import express, { json } from "express";
import cors from "cors";
import TestRoute from "./routes/testData.js";
import TestCode from "./routes/testCode.js"; //import api's
connectToMongo();

const app = express();

const port = process.env.PORT || 8000; //running on port 8000
app.use(cors()); //Apply cors
app.use(json({ limit: "25mb" })); //limit json to 25mb
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

app.use("/api", TestRoute); // Adding and Fetching the test
app.use("/test", TestCode); //For testing the code

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
