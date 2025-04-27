'use client'
import About from "@/components/About"
import Articles from "@/components/Articles"
import BadgesAndCerts from "@/components/BadgesAndCerts"
import Dashboard from "@/components/Dashboard"
import Works from "@/components/Works"
import { useState } from "react"
import { useSelector } from "react-redux"

export default function LandingPage() {
  return (
    <main className="flex flex-col laptop:flex-row w-screen laptopL:px-50 laptop:px-30">
      <Dashboard />
      <About />
      <Articles />
      <BadgesAndCerts />
      <Works />
    </main>
  )
}