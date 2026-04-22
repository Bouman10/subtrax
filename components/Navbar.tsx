"use client"
import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar() {
    const [open, setOpen] = useState(false)

    return (
        <header className="w-full border-b border-white/10 backdrop-blur-sm sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">

                {/* Logo */}
                <Link href="/" className="text-xl font-semibold tracking-tight">
                    Subtrax
                </Link>

                {/* Desktop nav */}
                <nav className="hidden md:flex items-center gap-8 text-sm">
                    <Link href="#" className="opacity-70 hover:opacity-100 transition">Features</Link>
                    <Link href="#" className="opacity-70 hover:opacity-100 transition">Pricing</Link>
                    <Link href="/login" className="opacity-70 hover:opacity-100 transition">Login</Link>
                    <Link
                      href="/signup"
                      className="bg-black text-white px-4 py-2 rounded-lg font-medium hover:scale-105 transition"
                    >
                        Get started
                    </Link>
                </nav>

                {/* Mobile hamburger */}
                <button
                  className="md:hidden"
                  onClick={() => setOpen(!open)}
                  >
                    {open ? <X size={22}/> : <Menu size={22}/>}
                  </button>
            </div>

            {/* Mobile menu */}
            {open && (
                <div className="md:hidden border-t border-white/10 px-5 py-6 space-y-4 bg-primary text-white text-gray-500">
                    <Link href="#" className="block opacity-80">Features</Link>
                    <Link href="#" className="block opacity-80">Pricing</Link>
                    <Link href="/login" className="block opacity-80">Login</Link>
                    <Link
                      href="/signup"
                      className="block bg-white text-black text-center py-3 rounded-lg font-medium mt-4"
                      >
                        Get started
                      </Link>
                </div>
            )}
        </header>
    )
}