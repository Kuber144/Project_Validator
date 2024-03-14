import mongoose, { Schema } from "mongoose";

const testSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  tests: [
    {
      description: {
        type: String,
        required: true,
      },
      test: {
        type: String,
        required: true,
      },
    },
  ],
});

const TestData = mongoose.model("TestData", testSchema);

export { TestData };
