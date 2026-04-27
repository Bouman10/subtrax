import AppShell from "@/components/app/AppShell";
import TodayView from "@/components/today/TodayView";

export default function Page() {
  return (
    <AppShell>
      <div className="space-y-8">

        {/* greeting */}
        <div>
          <h1 className="text-2xl font-semibold">
            Today
          </h1>
          <p className="text-muted">
            Small daily wins create long-term order.
          </p>
        </div>

        {/* systems cards */}
        <div className="grid gap-6">

          {/* Spiritual */}
          <section className="bg-white p-6 rounded-2xl border border-border">
            <h2 className="font-medium mb-4">Spiritual</h2>
            <div className="space-y-3">
              <label className="flex items-center gap-3">
                <input type="checkbox" />
                <span>Prayer / reflection</span>
              </label>
              <label className="flex items-center gap-3">
                <input type="checkbox" />
                <span>Gratitude</span>
              </label>
            </div>
          </section>

          {/* Mental */}
          <section className="bg-white p-6 rounded-2xl border border-border">
            <h2 className="font-medium mb-4">Mental</h2>
            <div className="space-y-3">
              <label className="flex items-center gap-3">
                <input type="checkbox" />
                <span>Deep work</span>
              </label>
              <label className="flex items-center gap-3">
                <input type="checkbox" />
                <span>Reading</span>
              </label>
            </div>
          </section>

          {/* Physical */}
          <section className="bg-white p-6 rounded-2xl border border-border">
            <h2 className="font-medium mb-4">Physical</h2>
            <div className="space-y-3">
              <label className="flex items-center gap-3">
                <input type="checkbox" />
                <span>Exercise</span>
              </label>
              <label className="flex items-center gap-3">
                <span>Water intake</span>
              </label>
            </div>
          </section>

        </div>
      </div>
    </AppShell>
  )
}