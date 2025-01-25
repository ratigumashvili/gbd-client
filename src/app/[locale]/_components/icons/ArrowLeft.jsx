function ArrowLeft({width = "18", height = "18"}) {
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
        className="lucide lucide-arrow-left-from-line"
        viewBox="0 0 24 24"
      >
        <path d="M9 6l-6 6 6 6M3 12h14M21 19V5"></path>
      </svg>
    );
  }
  
  export default ArrowLeft;