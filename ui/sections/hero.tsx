import Image from "next/image";
import profile from "@/public/side-profile-4.jpg";
import { WebLinks } from "@/ui/components/WebLinks";

export const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 px-6 pt-24 sm:pt-32 lg:px-8">
      <Image
        src={profile}
        alt="Headshot photo of Voice Actor Devin Younge"
        className="rounded-4xl sm:w-[225]"
        width={175}
        height={175}
        priority
      />
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-5xl font-semibold tracking-tight text-gray-900 sm:text-6xl dark:text-white">
          Devin Younge
        </h2>
        <p className="mt-4 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8 dark:text-gray-300">
          Voice Actor
        </p>
      </div>
      <div className="mt-12">
        <WebLinks />
      </div>
    </div>
  );
};
