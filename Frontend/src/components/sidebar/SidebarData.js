import React from "react";
import { CiPlay1 } from "react-icons/ci";

const SidebarData = [
  {
    title: "Run Tests",
    icon: <CiPlay1 />,
    cName: "nav-text",
  },
];

const TestData = [
  {
    title: "Welcome Section Test",
    tests: [
      {
        description:
          'Your portfolio should have a "Welcome" section with an id of welcome-section.',
        test: (srcDoc) => {
          const test = srcDoc.getElementById("welcome-section");
          if (test) return true;
          return false;
        },
      },
      {
        description:
          "Your #welcome-section element should contain an h1 element.",
        test: (srcDoc) => {
          const test = srcDoc.getElementById("hello");
          if (test) return true;
          return false;
        },
      },
      // Add more tests for the "Welcome Section" here
    ],
  },
  {
    title: "Projects Section Test",
    tests: [
      {
        description:
          'Your portfolio should have a "Projects" section with an id of projects.',
        test: (srcDoc) => {
          return !!srcDoc.match(/id="projects"/);
        },
      },
      {
        description:
          "Your portfolio should contain at least one element with a class of project-tile.",
        test: (srcDoc) => {
          return !!srcDoc.match(/class="project-tile"/);
        },
      },
      // Add more tests for the "Projects Section" here
    ],
  },
  // Add more sections and tests as needed
];
export { SidebarData, TestData };
