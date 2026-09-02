import {
  AdjustmentsVerticalIcon,
  MicrophoneIcon,
  MusicalNoteIcon,
  SpeakerWaveIcon,
} from "@heroicons/react/20/solid";

const studioItems = [
  {
    name: "Microphone",
    details: "Blue Ember Condenser XLR",
    icon: MicrophoneIcon,
  },
  {
    name: "Interface",
    details: "Scarlett 2i2 (3rd Generation)",
    icon: AdjustmentsVerticalIcon,
  },
  {
    name: "DAW",
    details: "Logic Pro",
    icon: MusicalNoteIcon,
  },
  {
    name: "Headphones",
    details: "Sony MDR-7506",
    icon: SpeakerWaveIcon,
  },
];

export default function Studio() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-3xl font-semibold text-pretty tracking-tight text-gray-400 sm:text-4xl lg:text-5xl dark:text-gray-300">
        Home Studio
      </h2>
      <dl className="mt-10 space-y-8 sm:text-lg lg:text-xl text-gray-600 dark:text-gray-400">
        {studioItems.map((item) => (
          <div key={item.name} className="relative pl-9">
            <dt className="inline font-semibold text-gray-900 dark:text-white">
              <item.icon
                aria-hidden="true"
                className="absolute top-1 left-1 size-5 text-indigo-600 dark:text-indigo-400"
              />
              {item.name}
            </dt>{" "}
            <dd className="">{item.details}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
