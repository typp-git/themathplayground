import React from "react";
import Image from "next/image";
import TextCarousel from "@/components/TextCarousel";
import Link from "next/link";

interface HeroProps {
  timelineRef: React.RefObject<HTMLDivElement>;
}

const Hero: React.FC<HeroProps> = ({  }: HeroProps) => {
  return (
    <div className="overflow-hidden">
      <div className="relative isolate">
        <div className="absolute overflow-hidden ">
          <Image
            className="h-screen object-cover mx-auto"
            alt=""
            priority
            src="/photos/playgroundimage.jpg"
            width={1920}
            height={1080}
          />
          {/* green Overlay */}
          <div
            className="
                        absolute inset-0 
                        bg-gradient-to-t from-black/70 to-transparent 
                        sm:bg-gradient-to-r sm:from-green-yellow/70 sm:to-transparent
                      "
          />
        </div>
      </div>
      <div className="py-20 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pb-20 sm:pt-32 md:pt-15 lg:px-8 ">
          <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
            <div className="relative w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Where students
                <TextCarousel />
              </h1>
              <p className="mt-6 text-lg leading-8 text-white sm:max-w-md lg:max-w-[40rem]">
                The Math Playground is organized into four distinct math lands,
                each reflecting YPP&apos;s pedagogical approach of using games,
                hands-on activities, and multiple representations to build both
                conceptual understanding and procedural fluency in mathematics.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <Link
                  href="/games"
                  className="rounded-md bg-green-700 px-3.5 py-2.5 font-semibold text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 font-display text-base focus-visible:outline-green-600"
                >
                  Math Playground Games
                </Link>
                <Link
                  href="/connect"
                  className="rounded-md bg-red-700 px-3.5 py-2.5 font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 font-display text-base focus-visible:outline-green-600"
                >
                  Enter Raffle
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default Hero;
