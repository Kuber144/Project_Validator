import express from "express";
const router = express.Router();
import { TestData } from "../models/TestData.js";

// Router to get the test data and save it into the database
router.post("/addtest", async (req, res) => {
  try {
    const { title, tests } = req.body;
    console.log(tests);
    const formattedTests = tests.map((test) => ({
      description: test.description,
      type: test.type,
      selector: test.selector,
      property: test.property,
      value: test.value,
      htmlOption: test.htmlOption,
      htmlValue: test.htmlValue,
      htmlCondition: test.htmlCondition,
      htmlValueToCompare: test.htmlValueToCompare,
      htmlComparisonType: test.htmlComparisonType,
      functionName: test.functionName,
      testType: test.testType,
      arguments: test.arguments,
      expectedOutput: test.expectedOutput,
      selectorType: test.selectorType,
      cssElement: test.cssElement,
      cssProperty: test.cssProperty,
      cssValue: test.cssValue,
    }));
    const testData = new TestData({
      title,
      tests: formattedTests,
    });
    console.log(testData.tests);
    await testData.save();
    res.status(200).json({ message: "Data saved successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "An error occured" });
  }
});

router.get("/fetchtest", async (req, res) => {
  try {
    const allTests = await TestData.find();
    res.status(200).json(allTests);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "An error occured while fetching the data" });
  }
});
export default router;
