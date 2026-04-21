import SignupForm from "@/components/auth/SignupForm"
import Link from "next/link"

export default function Page() {
  return (
    <div className="space-y-4 text-center">
      <SignupForm />

      <p className="text-sm text-gray-500">
        Already a user?{" "}
        <Link href="/login" className="underline">
          Login
        </Link>
      </p>
    </div>
  )
}