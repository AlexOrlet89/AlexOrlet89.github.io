import React, { useState } from "react";
import useHeadingsData from "../../hooks/useHeadingsData";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import Headings from "../Headings";
import "./TableOfContents.css";

export default function TableOfContents() {
  const [activeId, setActiveId] = useState();
  const { headings } = useHeadingsData();
  useIntersectionObserver(setActiveId);
  console.log(headings, activeId);
  return (
    <div className="TableOfContents share">
      <Headings headings={headings} activeId={activeId} />
    </div>
  );
}
