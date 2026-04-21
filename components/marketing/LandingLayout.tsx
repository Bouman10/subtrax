import Link from "next/link";

export default function LandingLayout ({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="min-h-screen flex flex-col">

            {/* NAV */}
            <header className="flex items-center justify-between px-6 py-5 max-w-5xl mx-auto w-full">

                {/* Logo */}
                <div className="font-bold text-lg">
                    Subtrax
                </div>

                {/* Links */}
                <nav className="hidden md:flex gap-6 text-sm text-gray-600">
                    <Link href="#">How it works</Link>
                    <Link href="#">Pricing</Link>
                    <Link href="#">About</Link>
                </nav>

                {/* CTA */}
                <Link 
                  href="/signup"
                  className="bg-black text-white px-4 py-2 rounded-lg text-sm"
                >
                    Get started
                </Link>
            </header>

            {/* PAGE CONTENT */}
            <main className="flex-1">
                {children}
            </main>

            {/* FOOTER */}
            <footer className="text-center text-sm text-gray-400 py-6">
                © Subtrax 2026
            </footer>
        </div>
    )
}