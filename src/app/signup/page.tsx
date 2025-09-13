"use client"

import { useState } from "react"
import { supabase } from "@/lib/supabaseClient"
import { useRouter } from "next/navigation"

export default function SignupPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    const { data, error } = await supabase.auth.signUp({
  email,
  password,
})

if (error) {
  setError(error.message)
} else {
  alert("Signup successful! Check your email to confirm.")
  router.push("/profile-setup") // 👈 redirect to profile setup, not dashboard
}
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <form onSubmit={handleSignup} className="p-6 bg-white rounded-2xl shadow-md w-80 space-y-4">
        <h2 className="text-xl font-bold">Create account</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
          Sign Up
        </button>
        {error && <p className="text-red-500">{error}</p>}
      </form>
    </div>
  )
}
