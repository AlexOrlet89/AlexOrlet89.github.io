import React from "react";

export default function Headings({ headings }) {
  console.log(headings);
  return (
    <div>
      {headings.map((heading) => (
        <li key={heading.id}>
          <a
            href={`#${heading.id}`}
            onClick={(e) => {
              e.preventDefault();
              document.querySelector(`#${heading.id}`).scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            {heading.title}
          </a>
        </li>
      ))}
    </div>
  );
}
