'use client'
import About from "@/components/About"
import Dashboard from "@/components/Dashboard"
import { useState } from "react"

export default function LandingPage() {
  const [text, setText] = useState("Masukkan teks pada kotak input di bawah ini")
  const [height, setHeight] = useState(10)

  return (
    <main className="flex h-screen w-screen px-50 relative">
      <Dashboard />
      <About />
    </main>
  )
}