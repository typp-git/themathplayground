import { createClient } from "@/utils/supabase/client";

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
  image_url?: string;
};

export type GameLand = {
  name: string;
  data: {
    games: Game[];
  };
};

export type Region = {
  name: string;
  data: {};
};

const GAME_LANDS = [
  "Algebra Land",
  "Fraction Land",
  "Flagway Land",
  "Number Discovery",
  "Innovation Land",
] as const;

const GAME_TYPES = ["Open Floor", "Table Top"] as const;

type GameLandName = (typeof GAME_LANDS)[number];
type GameType = (typeof GAME_TYPES)[number];

const createMockGame = (
  name: string,
  gameLandIndex: number,
  description: string,
  grade_levels: string[],
  math_focus: string,
  gameTypeIndex: number,
  image_url: string
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
  image_url,
});

// ALGEBRA LAND IS 0 ------------------------------------------
const gameLands: GameLand[] = [
  {
    name: "Algebra Land",
    data: {
      games: [
        createMockGame(
          "Hula Hoop Race",
          0,
          "...",
          ["1st-8th"],
          "Multiplicative Reasoning",
          0,
          "/team-logos/hulahooprace.png"
        ),
        createMockGame(
          "Human Programming",
          0,
          "There will be a path set leading to an object. The player(s) must write a set of instructions (in 10 steps or less) to lead the computer(C/MLW) to the object. This activity can either be played with individuals or groups.",
          ["3rd-8th"],
          "Algorithmic Thinking",
          0,
          "/team-logos/humanprogramming.png"
        ),
        createMockGame(
          "Random Walks",
          0,
          "Participants will roll a multicolored block/dice to determine the path on the displayed structure. Based on the color they land on, they will either go left or right aligned with the color. One of the objectives is to guess the probability of ending on a certain color after a certain number of attempts.",
          ["6th", "7th", "8th"],
          "Equations and Expressions",
          0,
          "/team-logos/randomwalks.png"
        ),
      ],
    },
  },
  // Fraction LAND IS 1 ------------------------------------------
  {
    name: "Fraction Land",
    data: {
      games: [
        createMockGame(
          "Roll That Fraction",
          1,
          "...",
          ["3rd-8th"],
          "Comparing Fractions",
          1,
          "/team-logos/rollthatfraction.png"
        ),
        createMockGame(
          "Fraction Finding",
          1,
          "Children will be able to identify fractions on a number line using two dice to create fractions. 1) Kids will be rolling two dice and creating fractions based on the numbers rolled on the dice. They will take that fraction and locate it on a number line where they will race to place a polyspot in the correct location.  2) This is at least a 2 player game. The kids will battle each other to see who can locate more fractions on a number line than the other.",
          ["2nd", "3rd"],
          "Fractions",
          0,
          "/team-logos/fractionfinding.png"
        ),
      ],
    },
  },

  // Flagway LAND IS 2 ------------------------------------------
  {
    name: "Flagway Land",
    data: {
      games: [
        createMockGame(
          "Algebra Form Layout",
          2,
          "Timed relay race where players race against the clock and other players place the correct prime factor card with its corresponding algebra form.",
          ["4th-8th"],
          "Algabraic Expressions",
          0,
          "/team-logos/algebraformlayout.png"
        ),
        createMockGame(
          "Factor Tree Race",
          2,
          "There will be two teams lined up at the table. The facilitator will give them a number and the first person to complete a factor tree correctly wins that round. A correct factor tree must include the prime factors listed from least to greatest, and all prime numbers on the factor tree must be circled.",
          ["5th-8th"],
          "Multiples and Factors",
          0,
          "/team-logos/factortreerace.png"
        ),
        createMockGame(
          "Flagway Chute",
          2,
          "...",
          ["5th-8th"],
          "Number Sense",
          1,
          "/team-logos/flagwaychute.png"
        ),
        createMockGame(
          "Flagway Tic Tac Toe",
          2,
          "The objective is to get three Xs or Os in a row, diagonal, horizontal, or vertical. Players must solve a problem from the Flagway Game, in order to earn Xs and Os, and then place them on the Tic Tac Toe board.",
          ["5th-8th"],
          "Multiplication, Factorization",
          1,
          "/team-logos/flagwaytictactoe.png"
        ),
        createMockGame(
          "Math Escape Room",
          2,
          "layers solve a sequence of increasingly difficult problems based on the Flagway Game to make it through the Math Escape Room.",
          ["3rd-8th"],
          "Problem Solving, Number Theory",
          1,
          "/team-logos/mathescaperoom.png"
        ),
      ],
    },
  },
  // Innovation LAND IS 4 ------------------------------------------
  {
    name: "Innovatation Land",
    data: {
      games: [
        createMockGame(
          "Origins of Flagway",
          4,
          "Players compare and order fractions to win.",
          ["3rd", "4th"],
          "Comparing Fractions",
          0,
          "/team-logos/theoriginsofflagway.png"
        ),
        createMockGame(
          "Lets Take a Trip Card Game",
          4,
          "Assemble fractional pizzas in this tabletop challenge.",
          ["2nd", "3rd"],
          "Fraction Models",
          1,
          "/team-logos/tripcards.png"
        ),
      ],
    },
  },
  // Number Discovery LAND IS 3 ------------------------------------------
  {
    name: "Number Discovery Land",
    data: {
      games: [
        createMockGame(
          "4 Line Dots",
          3,
          "Players compare and order fractions to win.",
          ["3rd", "4th"],
          "Comparing Fractions",
          0,
          "/team-logos/4linedots.png"
        ),
        createMockGame(
          "Blazing Trails",
          3,
          "Assemble fractional pizzas in this tabletop challenge.",
          ["2nd", "3rd"],
          "Fraction Models",
          1,
          "/team-logos/blazingtrails.png"
        ),
        createMockGame(
          "Factorization Puzzles",
          3,
          "Assemble fractional pizzas in this tabletop challenge.",
          ["2nd", "3rd"],
          "Fraction Models",
          1,
          "/team-logos/factorizationpuzzles.png"
        ),
        createMockGame(
          "Find The Path",
          3,
          "Assemble fractional pizzas in this tabletop challenge.",
          ["2nd", "3rd"],
          "Fraction Models",
          1,
          "/team-logos/findthepath.png"
        ),
        createMockGame(
          "Geometry Character Creation",
          3,
          "Assemble fractional pizzas in this tabletop challenge.",
          ["2nd", "3rd"],
          "Fraction Models",
          1,
          "/team-logos/geometrycharactercreation.png"
        ),
        createMockGame(
          "Making Jewelry",
          3,
          "Assemble fractional pizzas in this tabletop challenge.",
          ["2nd", "3rd"],
          "Fraction Models",
          1,
          "/team-logos/makingjewelry.png"
        ),
        createMockGame(
          "Blazing Trails",
          3,
          "Assemble fractional pizzas in this tabletop challenge.",
          ["2nd", "3rd"],
          "Fraction Models",
          1,
          "/team-logos/blazingtrails.png"
        ),
        createMockGame(
          "Math Ladder",
          3,
          "Assemble fractional pizzas in this tabletop challenge.",
          ["2nd", "3rd"],
          "Fraction Models",
          1,
          "/team-logos/mathladder.png"
        ),
        createMockGame(
          "Math Race",
          3,
          "Assemble fractional pizzas in this tabletop challenge.",
          ["2nd", "3rd"],
          "Fraction Models",
          1,
          "/team-logos/mathrace.png"
        ),
        createMockGame(
          "Number Spot Duel",
          3,
          "Assemble fractional pizzas in this tabletop challenge.",
          ["2nd", "3rd"],
          "Fraction Models",
          1,
          "/team-logos/numberspotduel.png"
        ),
        createMockGame(
          "PFC Matchup",
          3,
          "Assemble fractional pizzas in this tabletop challenge.",
          ["2nd", "3rd"],
          "Fraction Models",
          1,
          "/team-logos/pfcmatchup.png"
        ),
        createMockGame(
          "Prime Hunt",
          3,
          "Assemble fractional pizzas in this tabletop challenge.",
          ["2nd", "3rd"],
          "Fraction Models",
          1,
          "/team-logos/primehunt.png"
        ),
        createMockGame(
          "Rock Paper Scissors Multiply",
          3,
          "Assemble fractional pizzas in this tabletop challenge.",
          ["2nd", "3rd"],
          "Fraction Models",
          1,
          "/team-logos/rockpaperscissorsmultiple.png"
        ),
        createMockGame(
          "The Winding Game",
          3,
          "Assemble fractional pizzas in this tabletop challenge.",
          ["2nd", "3rd"],
          "Fraction Models",
          1,
          "/team-logos/thewindinggame.png"
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
