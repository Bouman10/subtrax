"use client"
import { useState } from "react"
import { supabase } from "@/lib/supabase"
import { useRouter } from "next/navigation"

export default function LoginForm() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const router = useRouter()

    const login = async () => {
        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        })

        if (!error) router.push("/today")
            else alert(error.message)
    }

    return (
        <div className="space-y-4">
            <input
              className="w-full border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="w-full border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={login} className="w-full bg-primary text-white py-3 rounded-lg font-medium hover:opacity-90 transition">
                Login
            </button>
        </div>
    )
}