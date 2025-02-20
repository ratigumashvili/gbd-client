const UrlIcon = ({width="24", height="24", classNames}) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className={`lucide lucide-link-2 ${classNames}`}
      viewBox="0 0 24 24"
    >
      <path d="M9 17H7A5 5 0 0 1 7 7h2M15 7h2a5 5 0 1 1 0 10h-2M8 12h8"></path>
    </svg>
  );
  
  export default UrlIcon;