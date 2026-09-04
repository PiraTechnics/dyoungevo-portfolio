import { Email, brandedWebsites } from "@/data";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const WebLinks = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 mx-2">
      {brandedWebsites.map((entry, i) => (
        <div key={`external-${entry.name}`}>
          <a
            href={entry.href}
            aria-label={entry.name}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={entry.icon}
              width={32}
              height={30}
              color="white"
              className="opacity-100 transition ease-in-out duration-300 hover:scale-125"
            />
          </a>
        </div>
      ))}
      <div key="external-email">
        <a
          href={Email.href}
          aria-label={Email.name}
          target="_blank"
          rel="noopener noreferrer"
        >
          <EnvelopeIcon
            width={32}
            height={32}
            className="fill-none stroke-white opacity-100 transition ease-in-out duration-300 hover:scale-125 stroke-[1.2]"
          />
        </a>
      </div>
    </div>
  );
};
