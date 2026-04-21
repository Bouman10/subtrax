export default function Steps() {
    const steps = [
        {
            title: "Build your system",
            text: "Define daily wins for your soul, mind and body.",
        },
        {
            title: "Chect in daily",
            text: "Track your alignment in under 60 seconds.",
        },
        {
            title: "Reflect and grow",
            text: "Daily journaling closes the feedback loop.",
        },
    ]

    return (
        <section className="px-6 py-16 max-w-xl mx-auto space-y-10">
            {steps.map((step, i) => (
                <div key={i}>
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                    <p className="text-gray-600 mt-2">{step.text}</p>
                </div>
            ))}
        </section>
    )
}