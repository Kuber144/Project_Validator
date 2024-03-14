import express from "express";
const router = express.Router();
import { TestData } from "../models/TestData.js";

// Router to get the test data and save it into the database
router.post("/testData", async (req, res) => {
  try {
    const { title, tests } = req.body;
    const testData = new TestData({
      title,
      tests,
    });
    await testData.save();
    res.status(200).json({ message: "Data saved successfully" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "An error occured" });
  }
});

export default router;
