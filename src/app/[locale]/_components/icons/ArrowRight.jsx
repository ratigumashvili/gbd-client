function ArrowRight({width = "18", height = "18"}) {
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
        className="lucide lucide-arrow-right-from-line"
        viewBox="0 0 24 24"
      >
        <path d="M3 5v14M21 12H7M15 18l6-6-6-6"></path>
      </svg>
    );
  }
  
  export default ArrowRight;