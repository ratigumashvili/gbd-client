import React from "react";

function SearchIcon({width="17", height="17", classNames}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className={`lucide lucide-search ${classNames}`}
      viewBox="0 0 24 24"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="M21 21l-4.3-4.3"></path>
    </svg>
  );
}

export default SearchIcon;
