"use client";

import { usePathname } from "next/navigation";
import { pageLinks } from "@/data";
import clsx from "clsx";
import Link from "next/link";

export const NavLinks = () => {
  const pathname = usePathname();

  return (
    <div className="flex gap-4 lg:gap-6 max-md:hidden">
      {pageLinks.map((link) => {
        return (
          <Link
            key={"home-" + link.name}
            href={link.href}
            className={clsx("text-xl py-2 italic hover:text-indigo-400", {
              "text-indigo-400 border-b-4 rounded-sm border-indigo-400":
                pathname === link.href,
            })}
          >
            {link.name}
          </Link>
        );
      })}
    </div>
  );
};
