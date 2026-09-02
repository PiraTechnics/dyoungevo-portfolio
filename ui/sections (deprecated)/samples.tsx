import { AudioPlayer } from "../components/AudioPlayer";
import { AudioSamples } from "@/data";

export const Samples = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-3xl font-semibold text-pretty tracking-tight text-gray-400 sm:text-4xl dark:text-gray-300">
        Audio Samples
      </h2>
      {AudioSamples.map((entry, i) => (
        <AudioPlayer key={`sample-${i}`} src={entry.src} title={entry.name} />
      ))}
    </div>
  );
};
