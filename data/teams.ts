import { createClient } from '@/utils/supabase/client';

export type Game = {
  id: number;
  created_at: string;
  name: string;
  game_land: GameLandName;
  description: string;
  grade_levels: string[];
  math_focus: string;
  game_type: GameType;
  slug?: string;
};

export type GameLand = {
  name: string;
  data: {
    games: Game[];
  };
};

export type Region = {
  name: string;
  data: {
  };
};

const GAME_LANDS = [
  "Algebra Land",
  "Fraction Land",
  "Flagway Land",
  "Number Discovery",
  "Innovation Land",
] as const;

const GAME_TYPES = ["Open Floor", "Table Top"] as const;

type GameLandName = typeof GAME_LANDS[number];
type GameType = typeof GAME_TYPES[number];

const createMockGame = (
  name: string,
  gameLandIndex: number,
  description: string,
  grade_levels: string[],
  math_focus: string,
  gameTypeIndex: number
): Game => ({
  id: 0,
  created_at: new Date().toISOString(),
  name,
  game_land: GAME_LANDS[gameLandIndex],
  description,
  grade_levels,
  math_focus,
  game_type: GAME_TYPES[gameTypeIndex],
  slug: name.toLowerCase().replace(/ /g, "-"),
});





const gameLands: GameLand[] = [
  {
    name: "Algebra Land",
    data: {
      games: [
        createMockGame(
          "Equation Quest",
          1,
          "Solve for x through puzzles and challenges.",
          ["6th", "7th", "8th"],
          "Equations and Expressions",
          0
        ),
        createMockGame(
          "Variable Dash",
          1,
          "A fast-paced open floor game using variable cards.",
          ["4th", "5th"],
          "Intro to Variables",
          0
        ),
      ],
    },
  },
  {
    name: "Fraction Land",
    data: {
      games: [
        createMockGame(
          "Fraction Race",
          2,
          "Players compare and order fractions to win.",
          ["3rd", "4th"],
          "Comparing Fractions",
          0
        ),
        createMockGame(
          "Pizza Slices",
          2,
          "Assemble fractional pizzas in this tabletop challenge.",
          ["2nd", "3rd"],
          "Fraction Models",
          1
        ),
      ],
    },
  },
];


export async function updateGame(gameId: number, updatedData: Partial<Game>) {
  const supabase = createClient();
  
  const { data, error } = await supabase
    .from("games")
    .update(updatedData)
    .eq("id", gameId)
    .select()
    .single();

  if (error) {
    console.error("Error updating game:", error);
    return { error };
  }

  return { data };
}


export default gameLands;
