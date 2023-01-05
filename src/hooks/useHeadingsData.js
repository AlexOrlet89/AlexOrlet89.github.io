import React, { useEffect, useState } from "react";
import getHeadings from "./getHeadings";

export default function useHeadingsData() {
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    const headingElements = Array.from(document.querySelectorAll("h2"));

    const newHeadings = getHeadings(headingElements);
    setHeadings(newHeadings);
  }, []);
  return { headings };
}
