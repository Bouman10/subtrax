"use client"

import Link from "next/link"

export default function OnboardingLayout({
    children,
    step,
}: {
    children: React.ReactNode
    step: number
}) {
    const progress = (step / 3) * 100

    return (
        <div className="min-h-screen bg-soft flex flex-col">

            {/* top brand */}
            <header className="max-w-md mx-auto w-full px-6 pt-6">
                <Link href="/" className="font-semibold text-lg"
                >
                    Subtrax
                </Link>
            </header>

            {/* progress bar */}
            <div className="max-w-md mx-auto w-full px-6 mt-6">
                <div className="h-2 bg-border rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary transition-all"
                      style={{ width: '${progess}%' }}
                    />
                </div>
            </div>

            {/* centered content */}
            <main className="flex-1 flex items-center justify-center px-4">
                <div className="w-full max-w-md bg-white border border-border rounded-2xl p-8 space-y-6">
                    {children}
                </div>
            </main>
        </div>
    )
}