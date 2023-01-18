import React from "react";
import useHeadingsData from "../../hooks/useHeadingsData";
import Headings from "../Headings";
import "./TableOfContents.css";

export default function TableOfContents() {
  const { headings } = useHeadingsData();
  console.log(headings);
  return (
    <div className="TableOfContents share">
      <Headings headings={headings} />
    </div>
  );
}
