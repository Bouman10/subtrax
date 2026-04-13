"use client"
import { supabase } from "@/lib/supabase"
import { useRouter } from "next/navigation"

export default function Page() {
    const router = useRouter()

    const logout = async () => {
        await supabase.auth.signOut()
        router.push("/login")
    }

    return (
        <button
          onClick={logout}
          className="bg-black text-white p-3"
        >
            Logout
        </button>
    )
}