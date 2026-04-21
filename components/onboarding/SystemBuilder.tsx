"use client"
import { useState } from "react"
import { supabase } from "@/lib/supabase"
import { useRouter } from "next/navigation"

export default function SystemBuilder() {
  const router = useRouter()

  const [spiritual, setSpiritual] = useState<string[]>([""])
  const [mental, setMental] = useState<string[]>([""])
  const [physical, setPhysical] = useState<string[]>([""])

  const addHabit = (setter: any, state: string[]) =>
    setter([...state, ""])

  const updateHabit = (setter: any, state: string[], i: number, val: string) => {
    const copy = [...state]
    copy[i] = val
    setter(copy)
  }

  const createSystem = async () => {
    const { data: userData } = await supabase.auth.getUser()
    const user = userData.user
    if (!user) return

    // create system
    const { data: system } = await supabase
      .from("systems")
      .insert({ user_id: user.id })
      .select()
      .single()

    const createPillarWithHabits = async (name: string, habits: string[], order: number) => {
      const { data: pillar } = await supabase
        .from("pillars")
        .insert({ system_id: system.id, name, order })
        .select()
        .single()

      const habitRows = habits
        .filter(h => h.trim() !== "")
        .map(title => ({ pillar_id: pillar.id, title }))

      if (habitRows.length)
        await supabase.from("habits").insert(habitRows)
    }

    await createPillarWithHabits("Spiritual", spiritual, 1)
    await createPillarWithHabits("Mental", mental, 2)
    await createPillarWithHabits("Physical", physical, 3)

    router.push("/today")
  }

  const Pillar = ({ title, state, setter }: any) => (
    <div className="space-y-2">
      <h2 className="font-bold">{title}</h2>
      {state.map((h: string, i: number) => (
        <input
          key={i}
          className="border p-2 w-full"
          placeholder="Habit"
          value={h}
          onChange={(e) => updateHabit(setter, state, i, e.target.value)}
        />
      ))}
      <button onClick={() => addHabit(setter, state)}>+ Add habit</button>
    </div>
  )

  return (
    <div className="space-y-6">
      <Pillar title="Spiritual" state={spiritual} setter={setSpiritual} />
      <Pillar title="Mental" state={mental} setter={setMental} />
      <Pillar title="Physical" state={physical} setter={setPhysical} />

      <button onClick={createSystem} className="bg-black text-white p-3 w-full">
        Finish
      </button>
    </div>
  )
}