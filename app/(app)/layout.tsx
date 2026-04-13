"use client"
import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter
  const [Loading, setLoading] = useState(true)

  useEffect(() => {
    const checkUser = async () => {
      const { data } = await supabase.auth.getUser()

      if(!data.user) {
        router.push("/login")
      } else {
        setLoading(false)
      }
    }

    checkUser()
  }, [router])

if (Loading) return <div className="p-4">Loading...</div>

  return (
    <div className="min-h-screen pb-16">
      <main className="p-4">{children}</main>

      {/* Mobile Bottom Nav */}
      <nav className="fixed bottom-0 left-0 right-0 border-t bg-white p-3 flex justify-around">
        <Link href="/today">Today</Link>
        <Link href="/stats">Stats</Link>
        <Link href="/settings">Settings</Link>
      </nav>
    </div>
  )
}