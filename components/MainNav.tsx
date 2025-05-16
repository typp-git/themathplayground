"use client";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { UserGroupIcon } from "@heroicons/react/20/solid";
import { FaUserPlus } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import FlagwayLogo from "./FlagwayLogo";
import clsx from "clsx";

// TAILWIND UI "SIMPLE" NAVBAR

export default function Navbar() {
  const pathname = usePathname();

  const getMobileClasses = (path: string) => {
    const activeClasses: Record<string, string> = {
      "/games":
        "block border-l-4 !border-yellow-800 bg-gray-300/10 py-2 pl-3 pr-4 text-base font-medium !text-yellow-600 rounded-tr-lg rounded-br-lg transition-all",
      "/tournaments":
        "block border-l-4 !border-red-800 bg-gray-300/10 py-2 pl-3 pr-4 text-base font-medium !text-red-700 rounded-tr-lg rounded-br-lg transition-all",
      "/training":
        "block border-l-4 !border-sky-800 bg-gray-300/10 py-2 pl-3 pr-4 text-base font-medium !text-sky-700 rounded-tr-lg rounded-br-lg transition-all",
      "/connect":
        "block border-l-4 !border-yellow-800 bg-gray-300/10 py-2 pl-3 pr-4 text-base font-medium !text-yellow-600 rounded-tr-lg rounded-br-lg transition-all",
    };

    const defaultClasses =
      "block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium rounded-tr-lg rounded-br-lg text-gray-500 hover:border-gray-300 hover:bg-gray-700/50 hover:text-gray-50 transition-all";

    if (pathname.startsWith(path)) {
      return activeClasses[path] ?? defaultClasses;
    }

    return defaultClasses;
  };

  return (
    <Disclosure
      as="nav"
      // style={{ backgroundImage: "url('structures.png')" }}
      className="shadow bg-blue-950 px-4 lg:px-10 text-white"
    >
      <div className="mx-auto relative w-full max-w-7xl justify-between sm:px-3 lg:px-8 z-0">
        {/* <Image className="absolute inset-0 w-full h-full object-cover select-none z-[-1] pointer-events-none brightness-150" alt="blurred flagway structures" priority src={Structures} /> */}
        <div className="flex z-10 h-20 justify-between">
          <div className="flex w-full gap-8 justify-between items-center">
            <FlagwayLogo />
            <div className="hidden sm:pl-12  sm:flex sm:space-x-3 sm:*:min-h-8 *:w-fit">
              <Link
                href="/games"
                className={clsx(
                  "nav-item relative hover:text-yellow-600" +
                    (pathname.startsWith("/games") ? " text-yellow-600" : ""),
                )}
              >
                <UserGroupIcon className="inline h-4 mr-2" /> Games
                {pathname.startsWith("/games") && (
                  <>
                    <motion.div
                      layoutId="underline"
                      className="bg-yellow-600 w-10/12 h-0.5 absolute -bottom-0.5 left-0 right-0 m-auto"
                    ></motion.div>
                    <span className="sr-only">(current)</span>
                  </>
                )}
              </Link>
              {/*
              <Link
                href="/posts"
                className={clsx(
                  "nav-item relative hover:text-red-700",
                  pathname.startsWith("/posts") ? " text-red-700" : "",
                )}
              >
                <TrophyIcon className="inline h-4 mr-2" /> Announcements
                {pathname.startsWith("/posts") && (
                  <>
                    <motion.div
                      layoutId="underline"
                      className="bg-red-700 w-10/12 h-0.5 absolute -bottom-0.5 left-0 right-0 m-auto"
                    ></motion.div>
                    <span className="sr-only">(current)</span>
                  </>
                )}
              </Link>
              <Link
                href="/tournaments"
                className={clsx(
                  "nav-item relative hover:text-sky-700" +
                    (pathname.startsWith("/tournaments") ? " text-sky-700" : ""),
                )}
              >
                <TrophyIcon className="inline h-4 mr-2" /> Tournaments
                {pathname.startsWith("/tournaments") && (
                  <>
                    <motion.div
                      layoutId="underline"
                      className="bg-sky-700 w-10/12 h-0.5 absolute -bottom-0.5 left-0 right-0 m-auto"
                    ></motion.div>
                    <span className="sr-only">(current)</span>
                  </>
                )}
              </Link>
              */}

              <Link
                href="/connect"
                className={clsx(
                  "nav-item relative hover:text-yellow-600" +
                    (pathname.startsWith("/connect") ? " text-yellow-600" : ""),
                )}
              >
                <FaUserPlus className="inline h-4 mr-2" />
                Connect
                {pathname.startsWith("/connect") && (
                  <>
                    <motion.div
                      layoutId="underline"
                      className="bg-yellow-600 w-10/12 h-0.5 absolute -bottom-0.5 left-0 right-0 m-auto"
                    ></motion.div>
                    <span className="sr-only">(current)</span>
                  </>
                )}
              </Link>
              {/* <a href="/near-me" className="nav-item">Flagway Near You</a> */}
              {/* <a href="/login" className="nav-item">Log In</a> */}
            </div>
          </div>
          
          <div className="-mr-2 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block h-6 w-6 group-data-[open]:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden h-6 w-6 group-data-[open]:block"
              />
            </DisclosureButton>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 pb-3 pt-2">
          <DisclosureButton
            as="a"
            href="/games"
            className={getMobileClasses("/games")}
          >
            <UserGroupIcon className="inline h-[1rem] mr-2" /> Games
          </DisclosureButton>
           {/* 
          <DisclosureButton
            as="a"
            href="/posts"
            className={getMobileClasses("/posts")}
          >
            
            <TrophyIcon className="inline h-[1rem] mr-2" /> Announcements
          </DisclosureButton>
          <DisclosureButton
            as="a"
            href="/tournaments"
            className={getMobileClasses("/tournaments")}
          >
            <TrophyIcon className="inline h-[1rem] mr-2" /> Tournaments
          </DisclosureButton>
          */}
          <DisclosureButton
            as="a"
            href="/connect"
            className={getMobileClasses("/connect")}
          >
            <FaUserPlus className="inline h-[1rem] mr-2" />
            Connect
          </DisclosureButton>
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
