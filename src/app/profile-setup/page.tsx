"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { supabase } from "@/utils/supabaseClient"

export default function ProfileSetupPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    age: "",
    location: "",
    hobbies: "",
    personality: "",
    gender: "",
    preferred_language: "",
    comfort_level: 5,
    goal: "",
    avatar_url: ""
  })
  const [error, setError] = useState("")

  // handle input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  // submit handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    const {
      first_name,
      last_name,
      age,
      location,
      hobbies,
      personality,
      gender,
      preferred_language,
      comfort_level,
      goal,
      avatar_url
    } = formData

    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
      setError("No user logged in")
      return
    }

    const { error } = await supabase
      .from("profiles")
      .upsert({
        user_id: user.id,
        first_name,
        last_name,
        age: age ? parseInt(age) : null,
        location,
        hobbies: hobbies ? hobbies.split(",").map(h => h.trim()) : null,
        personality: personality ? personality.split(",").map(p => p.trim()) : null,
        gender,
        preferred_language,
        comfort_level: comfort_level ? parseInt(String(comfort_level)) : null,
        goal,
        avatar_url
      })

    if (error) {
      setError(error.message)
    } else {
      router.push("/dashboard") // go to dashboard after saving
    }
  }

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 border rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Complete Your Profile</h1>
      {error && <p className="text-red-500 mb-3">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          type="text"
          name="first_name"
          placeholder="First Name"
          value={formData.first_name}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />

        <input
          type="text"
          name="last_name"
          placeholder="Last Name"
          value={formData.last_name}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <input
          type="text"
          name="hobbies"
          placeholder="Hobbies (comma separated)"
          value={formData.hobbies}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <input
          type="text"
          name="personality"
          placeholder="Personality traits (comma separated)"
          value={formData.personality}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        <input
          type="text"
          name="preferred_language"
          placeholder="Preferred Language"
          value={formData.preferred_language}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <label className="block">
          Comfort Level: {formData.comfort_level}
        </label>
        <input
          type="range"
          name="comfort_level"
          min="1"
          max="10"
          value={formData.comfort_level}
          onChange={handleChange}
          className="w-full"
        />

        <textarea
          name="goal"
          placeholder="Your goal"
          value={formData.goal}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <input
          type="text"
          name="avatar_url"
          placeholder="Avatar URL"
          value={formData.avatar_url}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Save Profile
        </button>
      </form>
    </div>
  )
}
