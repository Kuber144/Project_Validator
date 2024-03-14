import React from "react";
import InputField from "../../models/inputField";
export default function CssSection({ index, handleInputChange, test }) {
  return (
    <>
      <label htmlFor={`selectorType${index}`}>Selector Type:</label>
      <select
        id={`selectorType${index}`}
        value={test.selectorType}
        onChange={(e) =>
          handleInputChange(index, "selectorType", e.target.value)
        }
        required
      >
        <option value="">Select Selector Type</option>
        <option value="id">ID</option>
        <option value="class">Class</option>
      </select>
      <InputField
        id={`cssElement${index}`}
        label="CSS Element:"
        value={test.cssElement}
        onChange={(e) => handleInputChange(index, "cssElement", e.target.value)}
      />
      <InputField
        id={`cssProperty${index}`}
        label="CSS Property:"
        value={test.cssProperty}
        onChange={(e) =>
          handleInputChange(index, "cssProperty", e.target.value)
        }
      />
      <InputField
        id={`cssValue${index}`}
        label="CSS Value:"
        value={test.cssValue}
        onChange={(e) => handleInputChange(index, "cssValue", e.target.value)}
      />
    </>
  );
}
