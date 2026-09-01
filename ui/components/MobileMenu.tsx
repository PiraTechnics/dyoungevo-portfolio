"use client";

import { Fragment, useState } from "react";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { pageLinks } from "@/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex gap-4 md:hidden py-5">
      <button
        id="mobile-menu-button"
        aria-label="Mobile Menu Button"
        onClick={handleClick}
        className="flex flex-col justify-center items-center"
      >
        <span
          className={`bg-white block transition-all duration-300 ease-out 
								h-0.5 w-6 rounded-sm ${
                  isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
                }`}
        ></span>
        <span
          className={`bg-white block transition-all duration-300 ease-out 
								h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? "opacity-0" : "opacity-100"}`}
        ></span>
        <span
          className={`bg-white block transition-all duration-300 ease-out 
								h-0.5 w-6 rounded-sm ${
                  isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
                }`}
        ></span>
      </button>
      <Transition show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setIsOpen}>
          <TransitionChild
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0" />
          </TransitionChild>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed top-0 left-0 flex w-full h-full">
                <TransitionChild
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="-translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="-translate-x-full"
                >
                  <DialogPanel className="pointer-events-auto w-screen max-w-fit">
                    <div className="flex h-full flex-col overflow-y-hidden bg-cws-secondary border-indigo-400 bg-indigo-600 opacity-80 border-2 rounded-r-md py-6 px-12 shadow-xl">
                      <DialogTitle className="scale-125 mx-auto mb-4"></DialogTitle>
                      <ul className="relative flex flex-col text-center gap-8 mt-6 flex-1 px-4 sm:px-6">
                        {pageLinks.map((entry) => {
                          return (
                            <li
                              key={"mobile-" + entry.name}
                              className="text-white italic font-semibold"
                            >
                              <button onClick={handleClick}>
                                <Link
                                  className={clsx("text-4xl", {
                                    "text-white": pathname === entry.href,
                                  })}
                                  href={entry.href}
                                >
                                  {entry.name}
                                </Link>
                              </button>
                              <hr className="border-indigo-300 mx-auto my-2" />
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </DialogPanel>
                </TransitionChild>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};
