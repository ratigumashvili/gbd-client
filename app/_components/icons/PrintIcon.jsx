import React from "react";

function PrintIcon({width = '24', height = '24'}) {
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
      className="lucide lucide-printer"
      viewBox="0 0 24 24"
    >
      <path d="M6 9L6 2 18 2 18 9"></path>
      <path d="M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2"></path>
      <path d="M6 14H18V22H6z"></path>
    </svg>
  );
}

export default PrintIcon;