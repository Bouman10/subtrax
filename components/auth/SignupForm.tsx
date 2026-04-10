"use client"
import { useState } from "react"
import { supabase } from "@/lib/supabase"
import { useRouter } from "next/navigation"

export default function SignupForm() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const router = useRouter()

    const signUp = async () => {
        const { error } = await supabase.auth.signUp({
            email,
            password,
        })

        if (!error) router.push("/onboarding")
            else alert(error.message)
    }

    return (
        <div className="space-y-3 w-72">
            <input
              className="border p-2 w-full"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="border p-2 w-full"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={signUp} className="bg-black text-whitenp-2 w-full">
                Sign up
            </button>
        </div>
    )
}

