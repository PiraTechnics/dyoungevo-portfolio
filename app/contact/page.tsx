import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { EnvelopeIcon } from "@heroicons/react/16/solid";

const iconClasses =
  "absolute left-0 top-3 size-7 sm:size-8 text-indigo-400 text:xl lg:text-2xl";

const contactInfo = [
  {
    name: "Email",
    details: "dyoungevo@gmail.com",
    icon: <EnvelopeIcon className={iconClasses} />,
  },
  {
    name: "Discord",
    details: "PiraTechnics",
    icon: <FontAwesomeIcon icon={faDiscord} className={iconClasses} />,
  },
];

export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <h2 className=" font-semibold text-pretty tracking-tight text-white text-4xl lg:text-5xl">
        Contact
      </h2>
      <dl className="mt-10 space-y-8 text-lg lg:text-xl text-white p-6 border-2 rounded-2xl border-indigo-400">
        {contactInfo.map((contact) => (
          <div key={contact.name} className="relative pl-10">
            <dt className="font-semibold text-white">
              {contact.icon}
              {contact.name}
              <hr className="border-indigo-300 " />
            </dt>{" "}
            <dd className="lg:text-lg italic">{contact.details}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
