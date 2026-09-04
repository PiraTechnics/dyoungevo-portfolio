import { AudioSamples } from "@/data";
import { AudioPlayer } from "@/ui/components/AudioPlayer";

const aboutParagraphs = [
  "Devin Younge (He/Him) is a professional Voice Actor known for his smooth baritone voice and confident, enthusiastic energy. He made his initial Voiceover debut as a Live Commentator for the League of Legends Championship Series in 2015. Under the moniker ‘PiraTechnics’, he would go on provide commentary for over forty live esports events and leagues over a decade, in addition to live interviews and promotional videos.",
  "He discovered a love of character acting through playing tabletop games like Dungeons & Dragons and Call of Cthulhu with his friends. In the years since, he has studied acting under such teachers as Steve Blum, Sara Cravens, and JD Kelly. He speaks conversational German, and has an ear for accents. Aside from voice acting, Devin also writes D&D adventure modules, short poems and prose fiction. He’s travelled extensively, but has since returned to his west coast roots. He lives in Los Angeles with his partner-in-crime Kristen, and their adorable goblin of a cat, Espresso.",
];

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h2 className="text-3xl font-semibold text-pretty tracking-tight text-white sm:text-4xl lg:text-5xl">
        About
      </h2>
      <div className="px-4 sm:max-w-5/6 md:max-w-3/4 xl:max-w-2/3 py-4 text-white text-left italic md:text-lg lg:text-xl flex flex-col gap-4 mb-8 border-2 rounded-2xl border-indigo-400">
        {aboutParagraphs.map((paragraph) => (
          <p key={aboutParagraphs.indexOf(paragraph)}>{paragraph}</p>
        ))}
      </div>
      {/* <h2 className="text-2xl font-semibold text-pretty tracking-tight text-gray-400 sm:text-3xl dark:text-gray-300">
        Audio Samples
      </h2>
      {AudioSamples.map((entry, i) => (
        <AudioPlayer key={`sample-${i}`} src={entry.src} title={entry.name} />
      ))} */}
    </div>
  );
}
