import { MobileMenu } from "./MobileMenu";
import { NavLinks } from "./NavLinks";

export const Header = () => {
  return (
    <header className="top-0 z-10 w-full max-w-screen-2xl h-fit text-white">
      <nav className="flex px-8 justify-end h-full mx-auto">
        <NavLinks />
        <MobileMenu />
      </nav>
    </header>
  );
};
