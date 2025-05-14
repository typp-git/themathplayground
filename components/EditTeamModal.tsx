'use client'

import { useState, useEffect, FormEvent } from 'react';
import { Button } from '@headlessui/react';
import { Game, updateGame } from '@/data/teams';
import { EditField } from './EditField';

// These are the editable string fields in the Game type
const STRING_FIELDS = [
  'name',
  'description',
  'math_focus',
  'slug',
  'game_land',
  'game_type'
] as const;

type GameStringFields = typeof STRING_FIELDS[number];

export function EditGameModal({ gameData, onClose }: { gameData: Game; onClose: () => void }) {
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

  async function submitData(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const updatedGame: Partial<Game> = {};

    formData.forEach((value, key) => {
      const stringValue = value.toString();
    
      if (key === "grade_levels") {
        updatedGame.grade_levels = stringValue.split(",").map((g) => g.trim());
      } else if ((STRING_FIELDS as readonly string[]).includes(key)) {
        (updatedGame as any)[key] = stringValue;
      }
    });

    console.log("Final game object to update:", updatedGame);

    const result = await updateGame(gameData.id, updatedGame);

    if (result && result.error) {
      console.error("Error while submitting data", result.error);
      return;
    }

    setHasUnsavedChanges(false);
    onClose(); // Only close on success
  }

  useEffect(() => {}, [gameData]);

  return (
    <div className="fixed inset-0 flex flex-col justify-center items-center bg-gray-800/50 z-50">
      <div className="bg-white rounded-lg py-4 px-6 max-w-3xl w-full mx-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-display font-bold">Edit Game</h3>
          {hasUnsavedChanges && (
            <span className="text-sm text-yellow-600">Unsaved changes</span>
          )}
        </div>
        <form onSubmit={submitData} id="game-form">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <EditField
              label="Game Name"
              name="name"
              defaultValue={gameData.name ?? ""}
              type="text"
              form_id="game-form"
              onChange={() => setHasUnsavedChanges(true)}
            />
            <EditField
              label="Game Land"
              name="game_land"
              defaultValue={gameData.game_land ?? ""}
              type="text"
              form_id="game-form"
              onChange={() => setHasUnsavedChanges(true)}
            />
            <EditField
              label="Game Type (Open Floor or Table Top)"
              name="game_type"
              defaultValue={gameData.game_type ?? ""}
              type="text"
              form_id="game-form"
              onChange={() => setHasUnsavedChanges(true)}
            />
            <EditField
              label="Grade Levels (comma-separated)"
              name="grade_levels"
              defaultValue={gameData.grade_levels?.join(", ") ?? ""}
              type="text"
              form_id="game-form"
              onChange={() => setHasUnsavedChanges(true)}
            />
            <EditField
              label="Math Focus"
              name="math_focus"
              defaultValue={gameData.math_focus ?? ""}
              type="text"
              form_id="game-form"
              onChange={() => setHasUnsavedChanges(true)}
            />
            <EditField
              label="Description"
              name="description"
              defaultValue={gameData.description ?? ""}
              type="text"
              form_id="game-form"
              onChange={() => setHasUnsavedChanges(true)}
            />
          </div>

          <div className="mt-6 flex justify-end">
            <Button
              type="submit"
              form="game-form"
              className={`rounded-xl text-white font-bold mr-4 py-2 px-4 ${
                hasUnsavedChanges
                  ? 'bg-[#427c41] hover:bg-[#59a957]'
                  : 'bg-gray-400 cursor-not-allowed'
              }`}
              disabled={!hasUnsavedChanges}
            >
              Save
            </Button>
            <Button
              onClick={onClose}
              className="bg-gray-500 hover:bg-gray-400 rounded-xl text-white font-bold py-2 px-4"
            >
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
