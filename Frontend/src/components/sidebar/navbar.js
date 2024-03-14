import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import "./navbar.css";
import { SidebarData } from "./SidebarData";

function Navbar({ srcDOC, html, css, js }) {
  const [sidebar, setSidebar] = useState(false);
  const [selectedTest, setSelectedTest] = useState(null);
  const [TestData, setTestData] = useState([]);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  const handleTestSelection = (e) => {
    if (e.target.selectedIndex <= 0) {
      setSelectedTest(null);
      return;
    }
    setSelectedTest(e.target.selectedIndex - 1);
  };
  const handleRunTest = async (selectedTest) => {
    if (selectedTest === null) return; // Return if no test is selected
    try {
      const title = TestData[selectedTest].title;
      const response = await fetch("http://localhost:5000/test/testcode", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          srcDOC,
          html,
          css,
          js,
        }),
      });
      if (!response.ok) {
        throw new Error("Failed to run test on backend");
      }
      console.log(await response.json());
      console.log("Test run successfully on backend!");
    } catch (error) {
      console.error("Error running test on backend:", error);
    }
  };
  useEffect(() => {
    const fetchTestData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/fetchtest");
        if (!response.ok) {
          throw new Error("Failed to fetch test data");
        }
        const data = await response.json();
        console.log(data);
        setTestData(data);
      } catch (error) {
        console.error("Error fetching test data:", error);
      }
    };

    fetchTestData();
  }, []);

  return (
    <>
      <div className="navbar">
        <Link to="#" className="menu-bars">
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>
        <Link to="/create">
          <button className="create-button">Create Tests</button>
        </Link>
      </div>
      <nav className={sidebar ? "nav-menu open" : "nav-menu"}>
        <ul className="nav-menu-items">
          <li className="navbar-toggle" onClick={showSidebar}>
            <Link to="#" className="menu-bars">
              <AiIcons.AiOutlineClose />
            </Link>
          </li>
          {/* Render "Run Tests" button */}
          {SidebarData.map((item, index) => (
            <li key={index} className={item.cName}>
              <button onClick={() => handleRunTest(selectedTest)}>
                {item.icon}
                <span>{item.title}</span>
              </button>
            </li>
          ))}
          {/* Render dropdown for selecting tests */}
          <li className="nav-text">
            <select onChange={handleTestSelection}>
              <option value="">Select Test</option>
              {TestData.map((item, index) => (
                <option key={index} value={item.title}>
                  {item.title}
                </option>
              ))}
            </select>
          </li>
          {/* Display selected test */}
          {selectedTest !== null && (
            <li className="nav-text">
              <div>
                <h3>Selected Test: {TestData[selectedTest].title}</h3>
                {/* Render tests along with descriptions */}
                <ul>
                  {TestData[selectedTest].tests.map((test, index) => (
                    <li className={`nav-desc ${test.result}`} key={index}>
                      {test.description}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          )}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
