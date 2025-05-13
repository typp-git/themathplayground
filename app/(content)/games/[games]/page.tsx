import gameLands, { Game } from "@/data/teams"; // renamed from teams.ts
import Container from "@/components/container";
import Link from "next/link";
import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import React from "react";
import Image from "next/image";
import LoadingHOC from "@/components/LoadingHOC";

export async function generateStaticParams() {
  return gameLands.flatMap((land) =>
    land.data.games.map((game) => ({ slug: game.slug })),
  );
}

export default async function Page({ params }: { params: { slug: string } }) {
  const game = gameLands
    .flatMap((land) => land.data.games)
    .find((game) => game.slug === params.slug);

  if (!game) {
    return <div>Game not found</div>;
  }

  const { name, game_land, description, grade_levels, math_focus, game_type } = game;

  return (
    <div
      className="min-h-screen flex-grow
        bg-[url('/structures.png')]
        bg-gray-950 bg-cover bg-center backdrop-grayscale"
    >
      <LoadingHOC>
        <Container className="text-white">
          <Link
            href="/games"
            className="inline-flex justify-center items-center text-lg mb-3"
          >
            <ChevronLeftIcon className="h-5 inline" />
            Back to All Games
          </Link>

          <div className="h-30 mb-6 w-full flex flex-row items-center">
            <div className="h-full justify-center shrink-0 aspect-square overflow-hidden [clip-path:polygon(100%_0,100%_50%,100%_100%,0_100%,0%_50%,0_0)]">
              <Image
                src="/team-logos/dog-deep.png"
                alt="Game Logo"
                width={200}
                height={200}
                className="rounded-full"
              />
            </div>

            <div
              className="ml-4 pl-12 pr-20 h-full flex-grow min-w-80
            flex flex-col items-start justify-center 
            bg-gray-700/30 
            [clip-path:polygon(0_0,95%_0%,100%_50%,95%_100%,0_100%)]"
            >
              <h1 className="bg-gradient-to-r from-white to-blue-200 text-transparent bg-clip-text">
                {name}
              </h1>
              <div>
                <span className="text-blue-300">Land:</span> {game_land}
              </div>
    
              <div>
                <span className="text-blue-300">Game Type:</span> {game_type}
              </div>
              <div>
                <span className="text-blue-300">Math Focus:</span> {math_focus}
              </div>
              <div>
                <span className="text-blue-300">Grades:</span> {grade_levels.join(", ")}
              </div>
            </div>
          </div>

          <h2 className="italic mb-3">DESCRIPTION</h2>
          <div className="bg-gray-700/30 text-white p-4 rounded-lg max-w-xl">
            {description}
          </div>
        </Container>
      </LoadingHOC>
    </div>
  );
}
