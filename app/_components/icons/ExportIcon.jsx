import React from "react";

function ExportIcon({width = '24', height = 24}) {
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
      className="lucide lucide-file-json-2"
      viewBox="0 0 24 24"
    >
      <path d="M4 22h14a2 2 0 002-2V7l-5-5H6a2 2 0 00-2 2v4"></path>
      <path d="M14 2v4a2 2 0 002 2h4M4 12a1 1 0 00-1 1v1a1 1 0 01-1 1 1 1 0 011 1v1a1 1 0 001 1M8 18a1 1 0 001-1v-1a1 1 0 011-1 1 1 0 01-1-1v-1a1 1 0 00-1-1"></path>
    </svg>
  );
}

export default ExportIcon;