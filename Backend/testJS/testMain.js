export function testJS(js, test) {
  try {
    console.log("Test:", test);
    const functionName = test.functionName;
    const expectedOutput = test.expectedOutput;
    const args = test.arguments;
    const checkType = test.checkType;

    const functionRegex = new RegExp(`function\\s+${functionName}\\s*\\(`);
    const match = js.match(functionRegex);

    if (!match) {
      return {
        status: "Fail",
        reason: `Function '${functionName}' not found`,
      };
    }

    console.log(`Function '${functionName}' found`);
    if (checkType === "exists") {
      return {
        status: "Pass",
        reason: `Function '${functionName}' exists`,
      };
    }
    if (checkType === "output") {
      const functionIndex = match.index;
      const endIndex = js.indexOf("(", functionIndex);
      const functionName = js.slice(functionIndex + 9, endIndex);
      const signatureEndIndex = js.indexOf(")", functionIndex);
      const signature = js.slice(endIndex + 1, signatureEndIndex);
      const argsPassed = signature.split(",").map((arg) => arg.trim());

      if (argsPassed.length !== args.length) {
        return {
          status: "Fail",
          reason: "Arguments Mismatch",
        };
      }

      console.log("Function Name:", functionName);
      console.log("Function Arguments:", argsPassed);

      const startIndex = js.indexOf("{", functionIndex);
      const endingIndex = js.indexOf("}", startIndex);
      const functionBody = js.slice(startIndex + 1, endingIndex);

      const testFunction = new Function(...argsPassed, functionBody);
      const output = testFunction(...args);
      console.log("Output:", output);

      const isPass = output == expectedOutput;

      return {
        status: isPass ? "Pass" : "Fail",
        reason: isPass
          ? "All cases passed"
          : `Expected '${expectedOutput}' but got '${output}'`,
      };
    }
    return {
      status: "Fail",
      reason: "Invalid check type. Please inform the instructor",
    };
  } catch (error) {
    return {
      status: "Error",
      reason: `An error occurred: ${error.message}`,
    };
  }
}
