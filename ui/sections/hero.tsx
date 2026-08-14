import Image from "next/image";
import profile from "@/public/profile.jpg";
import { LinkIcons } from "../components/LinkIcons";

export const Hero = () => {
  return (
    // <div className="bg-white px-6 py-24 sm:py-32 lg:px-8 dark:bg-gray-900">
    <div className="flex flex-col items-center justify-center gap-4 px-6 py-24 sm:py-32 lg:px-8 bg-linear-to-bl from-indigo-900 via-indigo-950 to-violet-900">
      <Image
        src={profile}
        alt="Headshot photo of Voice Actor Devin Younge"
        className="rounded-full sm:w-[225]"
        width={175}
        height={175}
        priority
      />
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-5xl font-semibold tracking-tight text-gray-900 sm:text-6xl dark:text-white">
          Devin Younge
        </h2>
        <p className="mt-4 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8 dark:text-gray-400">
          Voice Actor
        </p>
      </div>
      <LinkIcons />
    </div>
  );
};
