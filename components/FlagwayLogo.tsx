"use client";
import Link from "next/link";
import Image from "next/image";
// import { usePathname } from "next/navigation";
// import { motion } from "framer-motion";

export default function FlagwayLogo() {
  // const pathname = usePathname();
  return (
    <div className="relative w-fit h-fit">
      {/* <motion.div */}
      {/*   layoutId="underline" */}
      {/*   className="absolute inset-0 custom-border rounded-lg" */}
      {/* /> */}

      <Link
        href="/"
        className="flex items-center justify-start gap-4 relative hover:cursor-pointer h-[3.7rem] w-fit px-3 min-w-[8rem]"
      >
        <Image
          priority
          src="/mathplaygroundlogo_logo2.png"
          alt="Logo of the Young People's Project"
          width={1500}
          height={1500}
          className="w-[150px] w-[90px] sm:w-[150px] md:w-[200px] h-auto"
        />
{/* /> 
        <h3 className="!text-2xl *:font-bold leading-none font-display w-fit">
          <span className="">FLAGWAY</span>
          <br />
          <span className="">LEAGUE</span>
        </h3>
 */}
      </Link>
    </div>
  );
}
