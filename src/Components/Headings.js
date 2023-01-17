import React from "react";

export default function Headings({ headings }) {
  console.log(headings);
  return (
    <div>
      {headings.map((heading) => (
        <li key={heading.id}>
          <a href={`#${heading.id}`}>{heading.title}</a>
        </li>
      ))}
    </div>
  );
}
