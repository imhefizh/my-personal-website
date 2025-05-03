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
    <div className="w-screen justify-center flex">
      <div className="flex flex-col tablet:flex-row px-7 tablet:px-0 w-screen max-w-screen-xl gap-10">
        <Dashboard />
        <About />
        <BadgesAndCerts />
        <Works />
        <Articles />
      </div>
    </div>
  )
}