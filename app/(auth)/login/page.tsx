import LoginForm from "@/components/auth/LoginForm"
import Link from "next/link"

export default function Page() {
  return (
    <div className="space-y-4 text-center">
      <LoginForm />

      <p className="text-sm text-gray-500">
        New user?{" "}
        <Link href="/signup" className="underline">
          Sign up
        </Link>
      </p>
    </div>
  )
}