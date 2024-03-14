import cheerio from "cheerio";

export function testHTML($, test) {
  const {
    description,
    htmlOption,
    htmlValue,
    htmlCondition,
    htmlValueToCompare,
    htmlComparisonType,
  } = test;
  console.log(htmlOption);
  let elements;
  switch (htmlOption) {
    case "id":
      elements = $(`#welcome-section`);
      break;
    case "class":
      elements = $(`#welcome-section`);
      break;
    // Add more options as needed
    default:
      elements = $();
  }
  console.log(elements);
  // Check condition for each element
  const results = elements
    .map((index, element) => {
      const value =
        htmlComparisonType === "text"
          ? $(element).text()
          : $(element).attr(htmlComparisonType);
      let pass = false;
      let reason = "";
      switch (htmlCondition) {
        case "equals":
          pass = value === htmlValueToCompare;
          break;
        case "contains":
          pass = value.includes(htmlValueToCompare);
          break;
        // Add more conditions as needed
        default:
          pass = false;
          reason = `Invalid condition: ${htmlCondition}`;
      }

      // Generate reason if not passed
      if (!pass) {
        reason = `Expected '${htmlValueToCompare}' ${
          htmlCondition === "equals" ? "but found" : "not found in"
        } '${value}'`;
      }

      // Return pass/fail and reason
      return { pass, reason };
    })
    .get();

  // Return the results
  return { description, results };
}
