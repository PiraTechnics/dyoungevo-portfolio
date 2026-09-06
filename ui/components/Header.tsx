import { MobileMenu } from "./MobileMenu";
import { NavLinks } from "./NavLinks";
import Image from "next/image";
import Signature from "@/public/signature1.png";

export const Header = () => {
  return (
    <header className="top-0 z-10 w-full h-fit py-1 text-white bg-slate-900/70">
      <nav className="flex px-8 justify-between h-full mx-auto">
        <Image
          src={Signature}
          alt={"Devin Younge"}
          height={50}
          priority
          className="mt-2 invert-90"
        />
        <NavLinks />
        <MobileMenu />
      </nav>
    </header>
  );
};
