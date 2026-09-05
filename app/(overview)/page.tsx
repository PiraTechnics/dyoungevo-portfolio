import Image from "next/image";
import profile from "@/public/side-profile-4.jpg";
import { WebLinks } from "@/ui/components/WebLinks";
import { AudioPlayer } from "@/ui/components/AudioPlayer";

export default function Home() {
  return (
    <div className="flex flex-col gap-15">
      <Image
        src={profile}
        alt="Headshot photo of Voice Actor Devin Younge"
        className="rounded-4xl self-center"
        width={250}
        height={250}
        priority
      />
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-5xl font-semibold tracking-tight text-gray-900 sm:text-6xl dark:text-white">
          Devin Younge
        </h2>
        <p className="mt-4 text-lg font-medium sm:text-xl text-white">
          Los Angeles-based Voice Actor
        </p>
      </div>
      <WebLinks />
      <AudioPlayer src="/assets/sample.mp3" title="Character Sample" />
    </div>
  );
}
