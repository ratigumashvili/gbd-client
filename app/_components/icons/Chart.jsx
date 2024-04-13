function Chart(width='24', height='24') {
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
        className="lucide lucide-bar-chart"
        viewBox="0 0 24 24"
      >
        <path d="M12 20L12 10"></path>
        <path d="M18 20L18 4"></path>
        <path d="M6 20L6 16"></path>
      </svg>
    );
  }
  
  export default Chart;