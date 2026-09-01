import { MobileMenu } from "./MobileMenu";
import { NavLinks } from "./NavLinks";

export const Header = () => {
  return (
    <header className="sticky top-0 z-10 w-full max-w-screen-2xl lg:rounded-b-lg h-fit shadow-xl text-white bg-gray-600">
      <nav className="flex px-8 justify-end h-full mx-auto">
        <NavLinks />
        <MobileMenu />
      </nav>
    </header>
  );
};
