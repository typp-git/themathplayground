
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
  landDescription: string;
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
    landDescription: "Algebra Land helps 6th - 8th graders develop skills in the following strands: Ratio and Proportional Relationships, Expressions and Equations, and Statistics and Probability. Concepts focus on representations of ratio relationships, trip lines and the idea of a movement number, probability and random walks on mathematical objects, and introduction to functions.",
    data: {
      games: [
        createMockGame(
          "Hula Hoop Race",
          0,
          "Team stands in a circle and hold hands. They place a hula hoop over two people's hands. How many people can go through the hoop in 10 seconds without anyone breaking hands? Continue this process but increase the time to 15 seconds, 20 seconds, and then 30 seconds. What is the ratio of the number of people through the hoop to the number of seconds for each round? Represent these ratios in a table and on a graph. Discuss the data: which round was the fastest? what would the table or graph look like if players played at a constant rate from round to round?",
          ["1st-8th"],
          "Multiplicative Reasoning",
          0,
          "/photos/hulahooprace.png"
        ),
        createMockGame(
          "Human Programming",
          0,
          "There will be a path set leading to an object. The player(s) must write a set of instructions (in 10 steps or less) to lead the computer(C/MLW) to the object. This activity can either be played with individuals or groups.",
          ["3rd-8th"],
          "Algorithmic Thinking",
          0,
          "/photos/humanprogramming.png"
        ),
        createMockGame(
          "Random Walks",
          0,
          "A “random walk” can be thought of as a trip that is controlled by a coin flip. Building on the Trip Line model, if someone starts on the Trip Line at the “benchmark” (the point labeled “0”) and then flips a coin and if “heads” you take one step to the right and “tails” you take one step to the left, the path you take is called a random walk. Random walks will provide students an early experience of probability. In addition, having the class produce many “sample paths” will generate data sets that will be the source of an introduction to statistics. Students can “bet” on what the most likely landing spot would be after some number of coin flips and how probable it would be for a person to end up at a place after a certain number of coin flips. YPP has created random walk activities that are played on different mathematical objects: tree diagrams, circles with a discrete number of points on them, trip lines, and directed graphs.",
          ["2nd-8th"],
          "Equations and Expressions",
          0,
          "/photos/randomwalks.png"
        ),
      ],
    },
  },
  // Fraction LAND IS 1 ------------------------------------------
  {
    name: "Fraction Land",
    landDescription: "Fraction Land helps 3rd - 6th graders understand fractions. Concepts include working with unit fractions with a numerator of 1, adding and subtracting fractions, fraction equivalence, and adding/subtracting and multiplying and dividing fractions by whole numbers.",
    data: {
      games: [
        
        createMockGame(
          "Fraction Finding",
          1,
          "Children will be able to identify fractions on a number line using two dice to create fractions. 1) Kids will be rolling two dice and creating fractions based on the numbers rolled on the dice. They will take that fraction and locate it on a number line where they will race to place a polyspot in the correct location.  2) This is at least a 2 player game. The kids will battle each other to see who can locate more fractions on a number line than the other.",
          ["3rd-7th"],
          "Fractions",
          0,
          "/photos/fractionfinding.png"
        ),
        createMockGame(
          "Making Jewelry",
          3,
          "With a given amount of beads, participants will create a bracelet using a pattern. For example: for every 2 green beads, 1 black bead, or for every 4 blue beads, follows 2 red beads. At the end of this activity, participants will get to learn about the ratio they used and go home with a bracelet. Younger students can represent the pattern by drawing a picture, older students can represent the pattern in a table and on a graph.",
          ["All"],
          "Ratio and proportions",
          1,
          "/photos/makingjewelry.png"
        ),
      ],
    },
  },

  // Flagway LAND IS 2 ------------------------------------------
  {
    name: "Flagway Land",
    landDescription: "Flagway Land helps 4th - 7th graders deepen and apply their number sense to a study of the Mobius Function, which categorizes the natural numbers into three mutually exclusive groups according to the prime factorization of the number. Students use algebraic representations of numbers to support categorization and multiplicative fluency skills. Flagway builds number sense and helps students apply algebraic expressions to solve a math problem.",
    data: {
      games: [
        createMockGame(
          "Algebra Form Layout",
          2,
          "Timed relay race where players race against the clock and other players place the correct prime factor card with its corresponding algebra form.",
          ["4th-8th"],
          "Algabraic Expressions",
          0,
          "/photos/algebraformlayout.png"
        ),
        createMockGame(
          "Factor Tree Race",
          2,
          "There will be two teams lined up at the table. The facilitator will give them a number and the first person to complete a factor tree correctly wins that round. A correct factor tree must include the prime factors listed from least to greatest, and all prime numbers on the factor tree must be circled.",
          ["5th-8th"],
          "Multiples and Factors",
          0,
          "/photos/factortreerace.png"
        ),
        createMockGame(
          "Flagway Chute",
          2,
          "Place three poly spots – one Red, one Yellow, one Blue at one end of the room.  Players line up in teams relay-race style at the other end of the table.  The first player goes to the judge’s table to grab a number card.  That team member must run to find the bucket (Red, Blue, or Yellow) that corresponds to the number on the card and place the number inside. First team with all of their numbers placed correctly wins.  Teams are required to have a baton, which they pass from one player to the next as each player completes his or her turn.",
          ["5th-8th"],
          "Number Sense",
          1,
          "/photos/flagwaychute.png"
        ),
        createMockGame(
          "Flagway Tic Tac Toe",
          2,
          "The objective is to get three Xs or Os in a row, diagonal, horizontal, or vertical. Players must solve a problem from the Flagway Game, in order to earn Xs and Os, and then place them on the Tic Tac Toe board.",
          ["5th-8th"],
          "Multiplication, Factorization",
          1,
          "/photos/flagwaytictactoe.png"
        ),
        createMockGame(
          "Math Escape Room",
          2,
          "layers solve a sequence of increasingly difficult problems based on the Flagway Game to make it through the Math Escape Room.",
          ["3rd-8th"],
          "Problem Solving, Number Theory",
          1,
          "/photos/mathescaperoom.png"
        ),
        createMockGame(
          "Walk The Structure",
          2,
          "With a participant standing at the start point of the Flagway structure, the facilitator will give the participants a color coded flag to walk the structure until they reach an endpoint. Using various orders of the three colors, this activity can be played at any pace.",
          ["3rd-8th"],
          "Pattern Recognition, Algorithmic Thinking",
          1,
          "/photos/walkthestructure.png"
        ),
      ],
    },
  },
  
  // Number Discovery LAND IS 3 ------------------------------------------
  {
    name: "Number Discovery Land",
    landDescription: "Number Discovery Land helps 2nd - 6th graders develop skills across the following strands: Operations and Algebraic Thinking, Number and Operations in Base 10, and Geometry. Concepts include fluency with addition, subtraction, multiplication, and division; categorization and fluency with odd/even, and prime/composite numbers; and analyzing shapes.",
    data: {
      games: [
        createMockGame(
          "4 Line Dots",
          3,
          "Players compare and order fractions to win.",
          ["3rd", "4th"],
          "Comparing Fractions",
          0,
          "/photos/4linedots.png"
        ),
        createMockGame(
          "Blazing Trails",
          3,
          "...",
          ["3rd-7th"],
          "Number Sense",
          1,
          "/photos/blazingtrails.png"
        ),
        createMockGame(
          "Factorization Puzzles",
          3,
          "Build a factor tree using prime and composite numbers that may or may not belong. Players place the largest number at the top and continue to break that number down leaving only prime numbers at the bottom, to complete a puzzle.",
          ["4th-8th"],
          "Factorization",
          1,
          "/photos/factorizationpuzzles.png"
        ),
        createMockGame(
          "Find The Path",
          3,
          "Students from grades 2-5, answer addition and subtraction with fraction questions while on a grid of 12-16 poly spots starting from one end and trying to end at the opposite side.",
          ["3rd-8th"],
          "Arithmetic",
          1,
          "/photos/findthepath.png"
        ),
        createMockGame(
          "Geometry Character Creation",
          3,
          "Use all of the pre-selected shapes to create a body, head, face, and hair. Once drawn in pencil kids are free to color in their character. This helps with understanding shapes/basic geometry.",
          ["3rd-7th"],
          "Geometry",
          1,
          "/photos/geometrycharactercreation.png"
        ),
        createMockGame(
          "Math Ladders",
          3,
          "Solve equation cards and place them along the ladder. Players see two displayed decks of equation cards to solve.",
          ["3rd-7th"],
          "Number Sense",
          1,
          "/photos/mathladders.png"
        ),
        createMockGame(
          "Math Race",
          3,
          "Use operations to solve equations to build fluency with math seen in the classroom to advance their understanding and accuracy of math problems while competing with other students.",
          ["3rd-7th"],
          "Variety of Topics",
          1,
          "/photos/mathrace.png"
        ),
        createMockGame(
          "Number Spot Duel",
          3,
          "Players will compete to place the correct number card on a blue poly spot (composite) and a red poly spot (prime). There will be an odd amount of poly spots to confirm there is a winner. It is key for players to understand that when only one number card is placed either on a red or blue polyspot, another number can not be placed on top. The players will continue placing number cards until all spots are filled. At this time, the facilitator will check the accuracy to give each team their points.",
          ["3rd-7th"],
          "Number Sense",
          1,
          "/photos/numberspotduel.png"
        ),
        createMockGame(
          "PFC Matchup",
          3,
          "Prime Factor Card (PFC) Match Up. Place number cards on the correct PFC. Players see a displayed deck of PFCs either in order from least to greatest or randomized. They use the prime factors to multiply together and place the number card they are holding on that same spot.",
          ["3rd-6th"],
          "Prime Numbers",
          1,
          "/photos/pfcmatchup.png"
        ),
        createMockGame(
          "Prime Hunt",
          3,
          "Sort a deck of number cards into two groups, one being prime, and the other composite. Players usually play multiple 30 second rounds against an opponent to work on speed and accuracy.",
          ["3rd-6th"],
          "Prime Numbers",
          1,
          "/photos/primehunt.png"
        ),
        createMockGame(
          "Rock Paper Scissors Multiply",
          3,
          "Competitive form of rock paper scissors using their fingers (2-5). When two students face off, if one player has 3 fingers up and the other 5, they will multiply the fingers to find the product.",
          ["3rd-7th"],
          "Multiplication",
          1,
          "/photos/rockpaperscissorsmultiply.png"
        ),
        createMockGame(
          "The Winding Game",
          3,
          "Set up similarly to a clock, participants will walk around the winding structure that is labeled with numbers. As players wind, they will place the number cards down onto the structure. After some time, players will notice certain numbers go to specific numbers and they will then begin to notice patterns. This is the point where they begin to talk about what they see, notice, and can possibly predict based on previous numbers placed.",
          ["2nd-7th"],
          "Multiples, Counting, Theory",
          1,
          "/photos/thewindinggame.png"
        ),
      ],
      
    },
  },
  // Innovation LAND IS 4 ------------------------------------------
  {
    name: "Innovation Land",
    landDescription: "Innovation Land is a featured space in the Math Playground where partners in the YPP Network showcase their unique math games and learning experiences. While many of these experiences conceptually align with one of the four original playground lands, you may occasionally find partners presenting their games within those other lands as well.",
    data: {
      games: [
        createMockGame(
          "Roll That Fraction",
          1,
          "Using a pair of dice, students will label one die the numerator and the other denominator. Playing against an opponent, whomever rolls the larger fraction gets to place their fraction on a number line. They continue for 5 rounds and the player with the biggest fractions wins. ----- Piece of Pi and Roll that Fraction are games developed by the YPP Math Playbook team in partnership with the Cambridge Design Lab.",
          ["3rd-8th"],
          "Fractions",
          1,
          "/photos/rollthatfraction.png"
        ),
        createMockGame(
          "Origins of Flagway",
          4,
          "Players compare and order fractions to win.",
          ["3rd", "4th"],
          "Comparing Fractions",
          0,
          "/photos/theoriginsofflagway.png"
        ),
        createMockGame(
          "Lets Take a Trip Card Game",
          4,
          "The Algebra Project's Lets Take a Trip Card Game instructs players take turns making books of three cards, such that each book represents a valid trip on a trip line. Each book of three cards must have two location cards, representing the start and finish of the trip, and a movement number card, representing the displacement comparing the finish to the start of the trip. Trips represent linear equations in one dimension.",
          ["3rd-10th"],
          "Functions",
          1,
          "/photos/tripcards.png"
        ),
      ],
    },
  },
];



export default gameLands;
