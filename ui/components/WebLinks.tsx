import { ExternalWebsites } from "@/data";
import { Email } from "@/data";
import Icon from "./Icon";

export const WebLinks = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 mx-2">
      {ExternalWebsites.map((entry, i) => (
        <div key={`external-${entry.name}`}>
          <a
            href={entry.href}
            aria-label={entry.name}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon
              title={entry.name}
              iconD={entry.iconD}
              size={35}
              classes="fill-white opacity-100 transition ease-in-out duration-300 hover:scale-125"
            />
          </a>
        </div>
      ))}
      <EmailIcon
        size={35}
        classes="stroke-white opacity-100 transition ease-in-out duration-300 hover:scale-125"
      />
    </div>
  );
};

const EmailIcon = ({ size = 24, classes = "" }) => {
  return (
    <div key={Email.name}>
      <a
        href={Email.href}
        aria-label={Email.name}
        target="_blank"
        rel="noopener norerferrer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          className={classes}
        >
          <title>email</title>
          <g
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.2"
          >
            <path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <path d="m3 7l9 6l9-6" />
          </g>
        </svg>
      </a>
    </div>
  );
};
