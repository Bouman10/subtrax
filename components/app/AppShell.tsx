"use client"

import Link from "next/link"
import { useState } from "react"
import { supabase } from "@/lib/supabase"

export default function AppShell({ children }: { children: React.ReactNode }) {
    const [open, setOpen] = useState(false)

    async function logout() {
        await supabase.auth.signOut()
        window.location.href = "/"
    }

    return (
        <div className="min-h-screen bg-soft">

            {/* TOP BAR */}
            <header className="bg-white border-b borfer-border">
                <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">

                    <Link href="/today" className="font-semibold">
                      Subtrax
                    </Link>

                    {/* user menu */}
                    <div className="relative">
                        <button
                          onClick={() => setOpen(!open)}
                          className="text-sm border border-border px-3 py-1.5 rounded-lg"
                          >
                            Account
                          </button>

                          {open && (
                            <div className="absolute right-0 mt-2 w-40 bg-white border border-border rounded-lg shadow-sm">
                                <button
                                  onClick={logout}
                                  className="w-full lext-left px-4 py-2 text-sm hover:bg-gray-50"
                                  >
                                    Logout
                                  </button>
                            </div>      
                          )}
                    </div>

                </div>
            </header>

            {/* PAGE CONTENT */}
            <main className="max-w-4xl mx-auto px-6 py-8">
                {children}
            </main>
        </div>
    )
}