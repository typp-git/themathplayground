import { Game } from "@/data/teams"
import { createClient } from "@/utils/supabase/client";

export async function addGame(newGameData: Omit<Game, "id" | "created_at">) {
  const supabase = createClient();

  console.log("Attempting to add new game");

  const dataToInsert: Omit<Game, "id" | "created_at"> = {
    name: newGameData.name,
    game_land: newGameData.game_land,
    description: newGameData.description,
    grade_levels: newGameData.grade_levels,
    math_focus: newGameData.math_focus,
    game_type: newGameData.game_type,
    slug: newGameData.slug ?? newGameData.name.toLowerCase().replace(/ /g, "-"),
  };

  console.log("Formatted Game for Insert:", dataToInsert);

  const { error } = await supabase.from("games").insert(dataToInsert);

  if (error) {
    return { error };
  }

  console.log("Successfully added game");
  return { success: true };
}

