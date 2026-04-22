import AuthLayout from "@/components/auth/AuthLayout"
import SignupForm from "@/components/auth/SignupForm"
import Link from "next/link"

export default function Page() {
  return (
    <AuthLayout 
      title="Create your account"
      subtitle="Start subtracting disorders from your days.."
      >
        <SignupForm />

         <p className="text-sm text-center text-muted">
            Already a user?{" "}
           <Link href="/login" className="text-primary font-medium">
             Login
            </Link>
         </p>
    </AuthLayout>
  )
}