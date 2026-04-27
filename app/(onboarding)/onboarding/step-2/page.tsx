"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import OnboardingLayout from "@/components/onboarding/OnboardingLayout"

export default function Page() {
    const router = useRouter()
    const [text, setText] = useState("")

    function next() {
        localStorage.setItem("subtractions", text)
        router.push("/onboarding/step-3")
    }

    return (
        <OnboardingLayout step={2}>
            <div className="space-y-6">

                <div className="space-y-2">
                    <h1 className="text-2xl font-semibold">
                        What do you want less of?
                    </h1>
                    <p className="text-muted text-sm">
                        What patterns or habits bring disorder to your days?
                    </p>
                </div>

                <textarea
                  placeholder="doom scrolling, sleeping late, reactive days..."
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  className="w-full border border-border rounded-lg p-4 text-sm h-32 focus:rinf-accent outline-none"
                />

                <button
                  onClick={next}
                  className="w-full bg-primary text-white py-3 rounded-lg"
                  >
                    Continue
                </button> 
                 
            </div>
        </OnboardingLayout>
    )
}