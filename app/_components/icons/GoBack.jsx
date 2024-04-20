import React from "react";

function GoBack({width, height}) {
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
      className="lucide lucide-undo-2"
      viewBox="0 0 24 24"
    >
      <path d="M9 14L4 9l5-5"></path>
      <path d="M4 9h10.5a5.5 5.5 0 015.5 5.5v0a5.5 5.5 0 01-5.5 5.5H11"></path>
    </svg>
  );
}

export default GoBack;