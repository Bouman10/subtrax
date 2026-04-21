import Link from "next/link";

export default function Hero() {
    return (
        <section className="px-6 pt-20 pb-16 max-w-xl mx-auto">
            <h1 className="text-4xl font-bold leading-tight tracking-tight">
                Stop living randomly.
                <br />
                Start living intentionally..
            </h1>

            <p className="mt-5 text-lg text-[var(--color-muted)]">
                Subtrax is a simple life operating system that helps you
                bring structure, clarity and daily alignment.
            </p>

            <Link 
              href="/signup"
              className="block mt-8 bg-[var(--color-primary)] text-white text-center py-4 rounded-xl text-lg"
            >
              Start building your system
            </Link>
        </section>
    )
}