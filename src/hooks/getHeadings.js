import React from "react";

export default function getHeadings(headingElements) {
  const headings = [];

  headingElements.forEach((heading, index) => {
    const { innerText: title, id } = heading;

    if (heading.nodeName === "H2") {
      headings.push({ id, title });
    }
  });
  return headings;
}
