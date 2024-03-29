import React from "react";

export default function Headings({ headings, activeId }) {
  // console.log(activeId);
  return (
    <div className="toc">
      <nav>TableOfContents</nav>
      {headings.map((heading) => (
        <li
          style={{ backgroundImage: `url(https://imgur.com/fgF2jg1)` }}
          key={heading.id}
          className={heading.id === activeId ? "active" : ""}
        >
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
