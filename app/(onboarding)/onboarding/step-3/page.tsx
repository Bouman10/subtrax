"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import OnboardingLayout from "@/components/onboarding/OnboardingLayout"
import { supabase } from "@/lib/supabase"
import { getUserId } from "@/lib/getUser"

export default function Page() {
    const router = useRouter()
    const [items, setItems] =useState(["", "", ""])

    function updateItem(i: number, value: string) {
        const copy = [...items]
        copy[i] = value
        setItems(copy)
    }

    async function finish() {
        const userId = await getUserId()

        const focusAreas = JSON.parse(localStorage.getItem("focusArea") || "[]")
        const subtractions = localStorage.getItem("subtractions")

        await supabase.from("profiles").upsert({
            id: userId,
            focus_areas: focusAreas,
            subtractions,
            non_negotiables: items,
            onboarding_complete: true,
        })

        router.push("/today")
    }

    return (
        <OnboardingLayout step={3}>
            <div className="space-y-6">

                <div className="space-y-2">
                    <h1 className="text-2xl font-semibold">
                        Your first daily non-negotiables
                    </h1>
                    <p className="text-muted text-sm">
                        Choose 3 small actions you want to show up for daily.
                    </p>
                </div>

                <div className="space-y-3">
                    {items.map((item, i) => (
                        <input
                          key={i}
                          placeholder={'Non-negotiable ${i + 1}'}
                          value={item}
                          onChange={(e) => updateItem(i, e.target.value)}
                          className="w-full border border-border rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-accent outline-none"
                        />  
                    ))}
                </div>

                <button
                  onClick={finish}
                  className="w-full bg-primary text-white py-3 rounded-lg"
                  >
                    Create my system
                  </button>
                  
            </div>
        </OnboardingLayout>
    )
}