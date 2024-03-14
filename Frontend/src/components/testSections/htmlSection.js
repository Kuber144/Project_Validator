import React from "react";
import InputField from "../../models/inputField";
export default function HtmlSection({ index, handleInputChange, test }) {
  return (
    <>
      <label htmlFor={`htmlOption${index}`}>HTML Option:</label>
      <select
        id={`htmlOption${index}`}
        value={test.htmlOption}
        onChange={(e) => handleInputChange(index, "htmlOption", e.target.value)}
        required
      >
        <option value="">Select Comparison Type</option>
        <option value="id">ID</option>
        <option value="class">Class</option>
        {/* Add more options as needed */}
      </select>
      <InputField
        id={`htmlValue${index}`}
        label="HTML Value:"
        value={test.htmlValue}
        onChange={(e) => handleInputChange(index, "htmlValue", e.target.value)}
      />
      <select
        id={`htmlCondition${index}`}
        value={test.htmlCondition}
        onChange={(e) =>
          handleInputChange(index, "htmlCondition", e.target.value)
        }
        required
      >
        <option value="">Select HTML Condition</option>
        <option value="exists">Exists</option>
        <option value="equals">Equals</option>
        <option value="contains">Contains</option>
        {/* Add more conditions as needed */}
      </select>
      {test.htmlOption !== "exists" && (
        <>
          {test.htmlCondition !== "exists" && (
            <>
              <select
                id={`htmlComparisonType${index}`}
                value={test.htmlComparisonType}
                onChange={(e) =>
                  handleInputChange(index, "htmlComparisonType", e.target.value)
                }
                required
              >
                <option value="">Select Comparison Type</option>
                <option value="id">ID</option>
                <option value="class">Class</option>
                {/* Add more options as needed */}
              </select>
              <InputField
                id={`htmlValueToCompare${index}`}
                label="Value to Compare:"
                value={test.htmlValueToCompare}
                onChange={(e) =>
                  handleInputChange(index, "htmlValueToCompare", e.target.value)
                }
              />
            </>
          )}
        </>
      )}
    </>
  );
}
