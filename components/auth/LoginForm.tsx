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
            <button onClick={login} className="bg-black text-white p-2 wifull">
                Login
            </button>
        </div>
    )
}