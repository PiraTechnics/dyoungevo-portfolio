import { AudioPlayer } from "../components/AudioPlayer";
import { AudioSamples } from "@/data";

export const Samples = () => {
  return (
    <div>
      {AudioSamples.map((entry, i) => (
        <div key={`sample-${i}`}>
          <AudioPlayer src={entry.src} title={entry.name} />
        </div>
      ))}
      {/* <AudioPlayer src="/assets/sample.mp3" title="Tae Kwon Donkey" /> */}
    </div>
  );
};
