import { useEffect } from "react";
import { Button } from "@headlessui/react";
import { FormEvent } from 'react'
import { updateGame, Game } from "@/data/teams";
import { EditField } from "./EditField";

const blankGame: Omit<Game, "id" | "created_at" | "slug"> = {
  name: "",
  game_land: "Algebra Land", // default
  description: "",
  grade_levels: [],
  math_focus: "",
  game_type: "Open Floor",
};

export function AddGameModal({ gameData = blankGame, onClose }: { gameData?: Partial<Game>, onClose: () => void }) {
  async function submitData(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const updatedGame = { ...blankGame };

    formData.forEach((value, key) => {
      if (key === "grade_levels") {
        updatedGame.grade_levels = (value as string).split(",").map(s => s.trim());
      } else if (key === "name" || key === "description" || key === "math_focus") {
        updatedGame[key] = value as string;
      } else if (key === "game_land") {
        updatedGame.game_land = value as Game["game_land"];
      } else if (key === "game_type") {
        updatedGame.game_type = value as Game["game_type"];
      }
    });

    console.log("Updated Game Object:", updatedGame);

    if (!gameData.id) {
      console.error("Cannot update game: No ID provided");
      return;
    }

    const result = await updateGame(gameData.id, updatedGame);

    if (result?.error) {
      console.error("Error while submitting game data", result.error);
      return;
    }

    onClose(); // close only on success
  }

  useEffect(() => {}, [gameData]);

  
  return (
    <div className="fixed inset-0 flex flex-col justify-center items-center bg-gray-900/50 z-50">
      <div className="bg-white py-4 px-6">
        <form onSubmit={submitData} id="game-form">
          <EditField
            label="Game Name"
            name="name"
            required={true}
            defaultValue={gameData.name ?? ""}
            type="text"
            form_id="game-form"
            onChange={(val) => console.log(val)}
          />
          <EditField
            label="Game Land"
            name="game_land"
            defaultValue={gameData.game_land ?? ""}
            type="text"
            form_id="game-form"
            onChange={(val) => console.log(val)}
          />
          <EditField
            label="Game Type (Open Floor or Table Top)"
            name="game_type"
            defaultValue={gameData.game_type ?? ""}
            type="text"
            form_id="game-form"
            onChange={(val) => console.log(val)}
          />
          <EditField
            label="Grade Levels (comma separated)"
            name="grade_levels"
            defaultValue={gameData.grade_levels?.join(", ") ?? ""}
            type="text"
            form_id="game-form"
            onChange={(val) => console.log(val)}
          />
          <EditField
            label="Math Focus"
            name="math_focus"
            defaultValue={gameData.math_focus ?? ""}
            type="text"
            form_id="game-form"
            onChange={(val) => console.log(val)}
          />
          <EditField
            label="Description"
            name="description"
            defaultValue={gameData.description ?? ""}
            type="text"
            form_id="game-form"
            onChange={(val) => console.log(val)}
          />

          <Button type="submit" form="game-form" className="bg-[#427c41] hover:bg-[#59a957] rounded-xl text-white font-bold mr-4 mt-4 py-2 px-4">
            Save
          </Button>
          <Button onClick={onClose} className="bg-gray-500 hover:bg-gray-400 rounded-xl text-white font-bold py-2 px-4">
            Cancel
          </Button>
        </form>
      </div>
    </div>
  );
}

