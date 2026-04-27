"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import OnboardingLayout from "@/components/onboarding/OnboardingLayout"

const options = [
  "Spiritual",
  "Mental",
  "Physical",
  "Work / Craft",
  "Relationships",
]

export default function Page() {
  const router = useRouter()
  const [selected, setSelected] = useState<string[]>([
    "Spiritual",
    "Mental",
    "Physical",
  ])

  function toggle(option: string) {
    if (selected.includes(option)) {
      setSelected(selected.filter(o => o !== option))
    } else {
      setSelected([...selected, option])
    }
  }

  function next() {
    localStorage.setItem("focusAreas", JSON.stringify(selected))
    router.push("/onboarding/step-2")
  }

  return (
    <OnboardingLayout step={1}>
      <div className="space-y-6">
        
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold">
            Let’s understand what matters to you
          </h1>
          <p className="text-muted text-sm">
            Which areas of life do you want more structure in?
          </p>
        </div>

        <div className="space-y-3">
          {options.map(option => (
            <button
              key={option}
              onClick={() => toggle(option)}
              className={`w-full border rounded-lg py-3 text-sm ${
                selected.includes(option)
                  ? "border-primary bg-soft"
                  : "border-border"
              }`}
            >
              {option}
            </button>
          ))}
        </div>

        <button
          onClick={next}
          className="w-full bg-primary text-white py-3 rounded-lg font-medium"
        >
          Continue
        </button>

      </div>
    </OnboardingLayout>
  )
}