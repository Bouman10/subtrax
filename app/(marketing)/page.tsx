import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Link from "next/link"

export default function LandingPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <Navbar />

      {/* subtle background grid */}
      <div className="absolute inset-0 -z-10 opacity-[0.04] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-5 pt-24 pb-10 text-center">
        
        <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight leading-tight max-w-4xl mx-auto">
          Stop guessing where your money goes.
        </h1>

        <p className="mt-6 text-lg sm:text-xl opacity-70 max-w-2xl mx-auto">
          Subtrax helps you track subscriptions, cut waste, and regain control.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/signup"
            className="bg-white text-black px-6 py-4 rounded-xl font-medium hover:scale-105 transition"
          >
            Start free
          </Link>

          <Link
            href="/login"
            className="border border-white/20 px-6 py-4 rounded-xl hover:bg-white/10 transition"
          >
            I already have an account
          </Link>
        </div>
      </section>

      {/* Feature strip */}
      <section className="max-w-5xl mx-auto px-5 mt-24 grid sm:grid-cols-3 gap-8 text-center">
        <Feature title="Track everything" desc="All subscriptions in one place." />
        <Feature title="Know your burn" desc="See monthly cost instantly." />
        <Feature title="Cancel smarter" desc="Stop paying for forgotten apps." />
      </section>

      <Footer />
    </main>
  )
}

function Feature({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="p-6 border border-white/10 rounded-2xl backdrop-blur-sm">
      <h3 className="font-medium text-lg">{title}</h3>
      <p className="opacity-60 mt-2 text-sm">{desc}</p>
    </div>
  )
}