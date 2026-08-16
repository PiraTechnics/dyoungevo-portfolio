import { ExternalWebsites } from "@/data";
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
              classes="fill-slate-300 opacity-100 transition ease-in-out duration-300 hover:scale-125"
            />
          </a>
        </div>
      ))}
    </div>
  );
};
