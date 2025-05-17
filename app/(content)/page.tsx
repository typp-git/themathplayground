"use client";
import Container from "@/components/container";
import Hero from "@/components/Hero";
// import SideImage from "@/components/SideImage";
// import Breaker from "@/public/photos/breaker.jpg"
// import Loading from "./loading";
// import Structure from "@/public/single-struct.png"
import React from "react";
import "./home.css";
import "../graph.css";
import Image from "next/image";
import Link from "next/link";

const imgClasses = "rounded-lg shadow-xl";
const sectionClasses = `mb-12 md:mb-8 md:justify-between justify-center md:gap-24 gap-8 items-center flex flex-col md:flex-row w-full md:w-full  !transition !transition-500 rounded-xl  p-2`;

// export const metadata: Metadata = {
//   title: "Flagway League",
//   description:
//     "Flagway exists to create environments where students can practice and celebrate learning math.",
// };
//
export default function Home() {
  const timelineRef = React.useRef<HTMLDivElement>(null);
  return (
    <div className="bg-white">
      <main>
        <Hero timelineRef={timelineRef} />
        <div className="w-full h-full graph-paper-flat -mt-[130px]">
          <div className="w-full h-[150px] bg-gradient-to-b from-white to-transparent"></div>
          <Container id="timeline" className="">
            <h2 className="font-bold mx-auto text-center text-5xl mb-5">
              About The Math Playground
            </h2>
            <div
              ref={timelineRef}
              className="relative wrap overflow-hidden p-10 m-auto w-full max-w-xl md:max-w-5xl h-full"
            >
              <div className="hidden md:block absolute bg-blue-700/20 w-1 h-full left-0 right-0 mx-auto"></div>

              <div className={`${sectionClasses} mt-12`}>
                <div className="rounded-full hidden md:block w-5 h-5 bg-[#f6c42f] absolute left-0 right-0 m-auto"></div>
                <div className="order-1 px-1 py-4 text-left md:w-5/12">
                  <h2 className="font-bold text-2xl">Number Discovery Land</h2>

                  <p className="text-lg list-disc list-outside leading-snug text-gray-900 text-opacity-100">
                    Number Discovery Land helps 2nd - 6th graders develop skills
                    across the following strands: Operations and Algebraic
                    Thinking, Number and Operations in Base 10, and Geometry.
                    Concepts include fluency with addition, subtraction,
                    multiplication, and division; categorization and fluency
                    with odd/even, and prime/composite numbers; and analyzing
                    shapes.
                  </p>
                  <Link href="/games" passHref>
                    <div className="bg-yellow-600 hover:bg-yellow-700 mt-5 text-white p-2 rounded-xl font-display font-semibold mb-5 text-center cursor-pointer">
                      See More Games
                    </div>
                  </Link>
                </div>
                <div className="order-2 px-5 py-3 text-left md:w-5/12">
                  <Image
                    className={"rotate-3 " + imgClasses}
                    src="/photos/flagwaychute.jpg"
                    alt=""
                    width={1920}
                    height={1080}
                  />
                </div>
              </div>

              <div className={`${sectionClasses} `}>
                <div className="rounded-full hidden md:block w-5 h-5 bg-[#134ded] absolute left-0 right-0 m-auto"></div>
                <div className="order-2 md:order-1 px-3 py-3  md:w-5/12 text-left">
                  <Image
                    className={"-rotate-3 " + imgClasses}
                    src="/photos/flagwaytictactoe.jpg"
                    alt="people sitting at table with computer"
                    width={1920}
                    height={1080}
                  />
                </div>
                <div className="order-1 md:order-2 px-1 py-4 text-left md:w-5/12">
                  <h2 className="font-bold text-2xl">Flagway Land</h2>
                  <div className="text-lg italic mb-3"></div>
                  <ul className="text-lg list-disc list-outside  leading-snug text-gray-900 text-opacity-100">
                    Flagway Land helps 4th - 7th graders deepen and apply their
                    number sense to a study of the Mobius Function, which
                    categorizes the natural numbers into three mutually
                    exclusive groups according to the prime factorization of the
                    number. Students use algebraic representations of numbers to
                    support categorization and multiplicative fluency skills.
                    Flagway builds number sense and helps students apply
                    algebraic expressions to solve a math problem.
                  </ul>
                  <Link href="/games" passHref>
                    <div className="bg-sky-600 hover:bg-sky-800 mt-5 mt-5 text-white p-2 rounded-xl font-display font-semibold mb-5 text-center cursor-pointer">
                      Learn to Play
                    </div>
                  </Link>
                </div>
              </div>

              <div className={`${sectionClasses}`}>
                <div className="rounded-full hidden md:block w-5 h-5 bg-[#bd2929] absolute left-0 right-0 m-auto"></div>
                <div className="order-5 px-1 py-4 md:w-5/12">
                  <h2 className="font-bold text-2xl">Algebra Land</h2>
                  <div className="text-lg italic mb-3"></div>
                  <ul className="text-lg list-disc list-outside leading-snug text-gray-900 text-opacity-100">
                    Algebra Land helps 6th - 8th graders develop skills in the
                    following strands: Ratio and Proportional Relationships,
                    Expressions and Equations, and Statistics and Probability.
                    Concepts focus on representations of ratio relationships,
                    trip lines and the idea of a movement number, probability
                    and random walks on mathematical objects, and introduction
                    to functions.
                  </ul>
                  <Link href="/games" passHref>
                    <div className="bg-red-600 hover:bg-red-800 mt-5 mt-5 text-white p-2 rounded-xl font-display font-semibold mb-5 text-center cursor-pointer">
                      Tutorial Videos
                    </div>
                  </Link>
                </div>{" "}
                <div className="order-6 px-3 py-3 text-left md:w-5/12">
                  <Image
                    className={"rotate-3 " + imgClasses}
                    src="/photos/randomwalkpic.jpg"
                    alt=""
                    width={1920}
                    height={1080}
                  />
                </div>
              </div>

              <div className={`${sectionClasses}`}>
                <div className="rounded-full hidden md:block w-5 h-5 bg-[#147f0f] absolute left-0 right-0 m-auto"></div>
                <div className="order-2 md:order-1 px-3 py-3 text-left md:md:w-5/12">
                  <Image
                    className={"-rotate-3 " + imgClasses}
                    src="/photos/fractionpic.jpg"
                    alt="person writing fractions"
                    width={1920}
                    height={1080}
                  />
                </div>
                <div className="order-1 md:order-2 px-1 py-4 text-left md:w-5/12">
                  <h2 className="font-bold text-2xl">Fraction Land</h2>
                  <div className="text-lg italic mb-3"></div>
                  <ul className="text-lg list-disc list-outside leading-snug text-gray-900 text-opacity-100">
                    Fraction Land helps 3rd - 6th graders understand fractions.
                    Concepts include working with unit fractions with a
                    numerator of 1, adding and subtracting fractions, fraction
                    equivalence, and adding/subtracting and multiplying and
                    dividing fractions by whole numbers.
                  </ul>
                  <Link href="/connect" passHref>
                    <div className="bg-green-600 hover:bg-green-800 mt-5 text-white p-2 rounded-xl font-display font-semibold mb-5 text-center cursor-pointer">
                      Request The Playground
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </Container>
          <div className="w-full h-[150px] bg-gradient-to-t from-white to-transparent"></div>
        </div>
      </main>
    </div>
  );
}
