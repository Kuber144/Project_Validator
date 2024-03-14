import React from "react";
import InputField from "../../models/inputField";
export default function JsSection({ index, handleInputChange, test }) {
  return (
    <>
      <InputField
        id={`functionName${index}`}
        label="Function Name:"
        value={test.functionName}
        onChange={(e) =>
          handleInputChange(index, "functionName", e.target.value)
        }
      />
      <InputField
        id={`numArguments${index}`}
        label="Number of Arguments:"
        type="number"
        value={test.numArguments}
        onChange={(e) =>
          handleInputChange(
            index,
            "numArguments",
            e.target.value ? parseInt(e.target.value) : 0
          )
        }
      />
      {[...Array(parseInt(test.numArguments))].map((_, argIndex) => (
        <InputField
          key={argIndex}
          id={`argument${argIndex}`}
          label={`Argument ${argIndex + 1}:`}
          value={test.arguments[argIndex] || ""}
          onChange={(e) =>
            handleInputChange(index, "arguments", [
              ...test.arguments.slice(0, argIndex),
              e.target.value,
              ...test.arguments.slice(argIndex + 1),
            ])
          }
        />
      ))}
      <InputField
        id={`expectedOutput${index}`}
        label="Expected Output:"
        value={test.expectedOutput}
        onChange={(e) =>
          handleInputChange(index, "expectedOutput", e.target.value)
        }
      />
    </>
  );
}
