import Link from "next/link";

export default function AuthLayout({
    title,
    subtitle,
    children,
}: {
    title: string
    subtitle: string
    children: React.ReactNode
}) {
    return (
        <div className="min-h-screen flex flex-col bg-soft">

            {/* top mini nav */}
            <header className="w-full max-w-md mx-auto px-6 pt-6">
                <Link href="/" className="font-semibold text-lg">
                  Subtrax
                </Link>
            </header>

            {/* centered card */}
            <main className="flex-1 flex items-center justify-center px-4">
                <div className="w-full max-w-md bg-white rounded-2xl shadow-sm border border-border p-8 space-y-6">

                    <div className="text-center space-y-2">
                        <h1 className="text-2xl font-semibold">{title}</h1>
                        <p className="text-muted text-sm">{subtitle}</p>
                    </div>

                    {children}
                    
                </div>
            </main>
        </div>
    )
}