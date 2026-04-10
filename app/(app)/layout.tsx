import Link from "next/link"

export default function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen pb-16">
      <main className="p-4">{children}</main>

      {/* Mobile Bottom Nav */}
      <nav className="fixed bottom-0 left-0 right-0 border-t bg-white p-3 flex justify-around">
        <Link href="/today">Today</Link>
        <Link href="/stats">Stats</Link>
        <Link href="/settings">Settings</Link>
      </nav>
    </div>
  )
}