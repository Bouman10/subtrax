import Link from "next/link";

export default function CTA() {
    return (
        <section className="px-6 py-20 bg-black text-white text-center">
            <h2 className="text-3xl font-bold">
                Your life needs a system.
            </h2>

            <Link
              href="/signup"
              className="inline-block mt-8 bg-white text-black px-8 py-4 rounded-xl text-lg"
            >
              Get started
            </Link>
        </section>
    )
}