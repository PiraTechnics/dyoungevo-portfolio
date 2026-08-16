const Icon = ({ title = "", iconD = "", size = 24, classes = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 640 640"
    className={classes}
  >
    <title>{title.toLowerCase()}</title>
    <path d={iconD} />
  </svg>
);

export default Icon;
