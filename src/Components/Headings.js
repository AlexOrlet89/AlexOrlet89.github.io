import React from "react";

export default function Headings({ headings }) {
  console.log(headings);
  return (
    <div>
      {headings.map((heading) => (
        <p key={heading.title}>{heading.title}</p>
      ))}
    </div>
  );
}
