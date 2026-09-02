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
      <h2 className=" font-semibold text-pretty tracking-tight text-white text-4xl lg:text-5xl">
        Home Studio
      </h2>
      <dl className="mt-10 space-y-8 text-lg lg:text-xl text-white p-6 border-2 rounded-2xl border-indigo-400">
        {studioItems.map((item) => (
          <div key={item.name} className="relative pl-10">
            <dt className="font-semibold text-white">
              <item.icon
                aria-hidden="true"
                className="absolute left-0 top-3 size-7 sm:size-8 text-indigo-400 text:xl lg:text-2xl"
              />
              {item.name}
              <hr className="border-indigo-300 " />
            </dt>{" "}
            <dd className="lg:text-lg italic">{item.details}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
