import Container from "@/components/container";
import React from "react";
import gameLands from "@/data/teams";
import Link from "next/link";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import LoadingHOC from "@/components/LoadingHOC";



const TeamsPage: React.FC = () => {
  return (
    <div
      className="h-full flex-1
        bg-[url('/structures.png')]
        bg-gray-950 bg-cover bg-center backdrop-grayscale"
    >
      <LoadingHOC>
        <Container className="text-white">
          <h1 className="text-3xl font-bold">Math Playground Games</h1>
          <hr className="h-px my-8 bg-gray-300 border-0 dark:bg-gray-400" />

          {/* relative grid min-h-screen grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4 bg-gray-50 px-8 py-6 sm:py-12 */}

          <div className="relative grid min-h-full grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-5">
            {gameLands.map(({ name, data }) => (
              <div key={name} className="flex flex-col">
                <h3 className="text-2xl font-bold">{name}</h3>
                <hr className="h-px my-2 bg-gray-300 border-0 dark:bg-gray-400" />

                <div className="flex flex-col text-gray-900 h-full">
                  {data.games.map((game) => (
                    <div
                      key={game.name}
                      className="group flex flex-row flex-wrap items-center my-1 mx-1 transition-all bg-gray-700/30 text-white group-hover:text-gray-400 hover:bg-gray-600/50 p-2 rounded-lg shadow-lg transition"
                    >
                      <Link href={`/games/${game.slug}`} className="w-full">
                        <div className="flex flex-row items-center justify-start">
                          <div className="h-[60px] overflow-hidden rounded-md">
                            <Image
                              src={game.image_url ?? "/game-images/default.png"}
                              alt={`${game.name} Logo`}
                              width={300}
                              height={300}
                              className="h-full w-auto object-cover"
                            />
                          </div>
                          <div className="ml-2 flex flex-col relative">
                            <h3 className="*:bg-clip-text bg-gradient-to-r transition-all">
                              {game.name}
                          
                            </h3>
                            <p className="text-xs text-gray-300">
                              {game.math_focus} • Grades:{" "}
                              {game.grade_levels.join(", ")}
                             
                            </p>
                            <p className="text-sm text-gray-200"></p>
                          </div>
                          <span className="mr-2 opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-2 pr-2 transition-all">
                            <IoIosArrowForward className="h-6 w-6" />
                          </span>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </LoadingHOC>
    </div>
  );
};

export default TeamsPage;
