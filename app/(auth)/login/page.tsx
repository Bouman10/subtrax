import AuthLayout from "@/components/auth/AuthLayout"
import LoginForm from "@/components/auth/LoginForm"
import Link from "next/link"

export default function Page() {
  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Continue your daily system.."
      >
        <LoginForm />

        <p className="text-sm text-center text-muted">
            New user?{" "}
            <Link href="/signup" className="text-primary font-medium">
              Sign up
            </Link>
        </p>
      </AuthLayout>
  )
}