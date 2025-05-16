import Container from "@/components/container";
import React from "react";
import gameLands from "@/data/teams";
import Link from "next/link";
import Image from "next/image";
import LoadingHOC from "@/components/LoadingHOC";



const TeamsPage: React.FC = () => {
  return (
    <div
      className="h-full flex-1
        bg-[url('/structures.png')]
        bg-slate-900 bg-cover bg-center backdrop-grayscale"
    >
      <LoadingHOC>
      <Container className="text-white pb-30">
  <h1 className="pt-10 text-3xl font-bold">Math Playground Games</h1>
  <hr className="h-px my-8 bg-gray-300 border-0 dark:bg-gray-400" />

  {/* Game Lands listed vertically */}
  <div className="flex flex-col gap-10">
    {gameLands.map(({ name, landDescription, data }) => (
      <div key={name} className="flex flex-col">
        <h3 className="text-2xl font-bold">{name}</h3>
        {landDescription && ( 
        <p className="text-gray-300 italic mb-2">{landDescription}</p>
    )}
        <hr className="h-px my-2 bg-gray-300 border-0 dark:bg-gray-400" />

        {/* Horizontally scrollable games in this land */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-2 px-1">
          {data.games.map((game) => (
            <div
              key={game.name}
              className="shrink-0 w-[380px] group flex flex-col transition-all bg-gray-700/30 text-white hover:text-gray-400 hover:bg-gray-600/50 p-2 rounded-lg shadow-lg"
            >
              <Link href={`/games/${game.slug}`} className="w-full">
                <div className="flex flex-row items-start">
                  <div className="h-[60px] overflow-hidden rounded-md">
                    <Image
                      src={game.image_url ?? "/game-images/default.png"}
                      alt={`${game.name} Logo`}
                      width={300}
                      height={300}
                      className="h-full w-auto object-cover"
                    />
                  </div>
                  <div className="ml-2 flex flex-col">
                    <h3 className="*:bg-clip-text bg-gradient-to-r transition-all">
                      {game.name}
                    </h3>
                    <p className="text-xs text-gray-300">
                      {game.math_focus} • Grades: {game.grade_levels.join(", ")}
                    </p>
                  </div>
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
