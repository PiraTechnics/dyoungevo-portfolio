"use client";

import { usePathname } from "next/navigation";
//import { pageLinks } from "@/app/data";
import clsx from "clsx";
import Link from "next/link";

export const NavLinks = () => {
  const pathname = usePathname();

  const pageLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Studio", href: "/studio" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    // <div className="flex gap-4 lg:gap-6 max-md:hidden">
    <div className="flex gap-4 lg:gap-6">
      {pageLinks.map((link) => {
        return (
          <Link
            key={"home-" + link.name}
            href={link.href}
            className={clsx(
              "text-lg lg:text-xl py-3 font-semibold italic hover:text-indigo-500",
              {
                "text-indigo-500 border-b-4 border-indigo-600":
                  pathname === link.href,
              },
            )}
          >
            {link.name}
          </Link>
        );
      })}
    </div>
  );
};
