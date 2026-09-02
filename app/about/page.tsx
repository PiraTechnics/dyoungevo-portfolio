import { AudioSamples } from "@/data";
import { AudioPlayer } from "@/ui/components/AudioPlayer";

const aboutParagraphs = [
  "Devin Younge (He/Him) is a professional Voice Actor known for his smooth baritone voice and confident, enthusiastic and friendly energy. Although a naturally animated performer, he originally studied engineering, earning a degree in Computer Science from the University of Colorado at Boulder in 2012.",
  "Devin made his voiceover debut in 2015, as a Live Commentator (aka ‘Shoutcaster’) for the League of Legends Championship Series, produced by Riot Games. He would go on to build a decade-long career in esports, lending his voice to over forty live esports events across eight game titles, in addition to conducting live and written interviews, and appearing in promotional videos.",
  "Whilst pursuing that career, he discovered a love of character acting through playing Dungeons & Dragons with his friends. In the years since, he has studied acting under such teachers as Steve Blum, Sara Cravens, and Jamie Sarah Lewis. He has also studied Improv with Monika Smith (Upright Citizens Brigade) and Brian Palermo (Groundlings). As of 2026, he is a working Voice Actor in Animation and Video Games.",
  "He speaks conversational German, and has a good ear for accents. In addition to voice acting, Devin also occasionally writes D&D adventure modules, as well as poems and prose fiction. Although he’s travelled around the world (19 countries, 13 US states and counting), Devin has since returned to his California roots. He lives in Los Angeles with his partner-in-crime Kristen, and their adorable goblin of a cat, Espresso.",
];

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <h2 className="text-3xl font-semibold text-pretty tracking-tight text-white sm:text-4xl lg:text-5xl">
        About
      </h2>
      <div className="px-4 sm:max-w-5/6 md:max-w-3/4 xl:max-w-2/3 py-4 text-white text-left italic md:text-xl lg:text-2xl flex flex-col gap-4 mb-8">
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
