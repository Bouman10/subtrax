import { supabase } from "./supabase"

export async function getHabitsForUser(userId: string) {
  const { data } = await supabase
    .from("habits")
    .select(`
      id,
      title,
      pillars (
        id,
        name,
        order
      )
    `)
    .order("order", { foreignTable: "pillars", ascending: true })

  return data
}