"use client"
import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"
import { getToday } from "@/lib/date"

export default function TodayView() {
  const [habits, setHabits] = useState<any[]>([])
  const [checked, setChecked] = useState<Record<string, boolean>>({})
  const [journal, setJournal] = useState("")
  const today = getToday()

  useEffect(() => {
    loadHabits()
  }, [])

  const loadHabits = async () => {
    const { data } = await supabase
      .from("habits")
      .select("id, title, pillars(name)")
    setHabits(data || [])
  }

  const toggleHabit = (id: string) => {
    setChecked(prev => ({ ...prev, [id]: !prev[id] }))
  }

  const completeDay = async () => {
    const { data: userData } = await supabase.auth.getUser()
    const user = userData.user
    if (!user) return

    // create checkin
    const { data: checkin } = await supabase
      .from("checkins")
      .insert({ user_id: user.id, date: today })
      .select()
      .single()

    // save completions
    const rows = Object.entries(checked).map(([habitId, done]) => ({
      checkin_id: checkin.id,
      habit_id: habitId,
      completed: done,
    }))

    if (rows.length) await supabase.from("habit_completions").insert(rows)

    // save journal
    if (journal.trim()) {
      await supabase.from("journal_entries").insert({
        user_id: user.id,
        date: today,
        content: journal,
      })
    }

    alert("Day completed 🎉")
  }

  return (
    <div className="space-y-6">
      <h1 className="text-xl font-bold">Today</h1>

      {habits.map((h) => (
        <label key={h.id} className="flex gap-2">
          <input
            type="checkbox"
            onChange={() => toggleHabit(h.id)}
          />
          {h.title}
        </label>
      ))}

      <textarea
        className="border w-full p-2"
        placeholder="Daily reflection..."
        value={journal}
        onChange={(e) => setJournal(e.target.value)}
      />

      <button
        onClick={completeDay}
        className="bg-black text-white p-3 w-full"
      >
        Complete Day
      </button>
    </div>
  )
}