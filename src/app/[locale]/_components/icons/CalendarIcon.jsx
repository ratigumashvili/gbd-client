const CalendarIcon = ({width = "24", height = "24"}) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className="lucide lucide-calendar-1"
      viewBox="0 0 24 24"
    >
      <path d="M11 14h1v4M16 2v4M3 10h18M8 2v4"></path>
      <rect width="18" height="18" x="3" y="4" rx="2"></rect>
    </svg>
  );
  
  export default CalendarIcon;