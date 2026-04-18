"use client"

import { useState } from "react"
import Link from "next/link"

export default function TwentyFiveGreetingsPage() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      setSubmitted(true)
    }
  }

  return (
    <main className="flex min-h-screen flex-col bg-background">
      <div className="mx-auto w-full max-w-xl flex-1 px-6 py-12 md:px-12 md:py-20">

        {/* Header */}
        <nav className="mb-16 flex items-center justify-between">
          <Link
            href="/"
            className="text-xl font-bold"
            style={{
              background: "linear-gradient(90deg, #00f7ff 0%, #1c8f65 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            talkthegulf
          </Link>
          <div className="text-xs text-muted-foreground">
            <Link href="/journey" className="hover:text-[#132225] transition-colors">About Me</Link>
          </div>
        </nav>

        {/* Guide Preview + Form */}
        <div className="flex flex-col gap-8">

          {/* Cover Image */}
          <div className="mx-auto w-48 rounded-xl overflow-hidden shadow-lg">
            <img
              src="/guide-cover.jpg"
              alt="25 Saudi Greetings Guide"
              className="w-full object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <h1 className="text-2xl font-bold leading-tight text-foreground md:text-3xl">
              25 Saudi Greetings
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-foreground/80">
              Both sides of every greeting. What to say, and what comes back. So you are never caught off guard when someone responds.
            </p>

            {/* Form */}
            <div className="mt-8">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="flex w-full flex-col gap-3">
                  <p className="text-xs text-muted-foreground">Drop your email and I&apos;ll send it over now.</p>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-[#132225]"
                  />
                  <div className="relative w-full rounded-md p-[2px] animate-wave" style={{
                    background: "linear-gradient(90deg, #00f7ff 0%, #1c8f65 25%, #00f7ff 50%, #1c8f65 75%, #00f7ff 100%)",
                    backgroundSize: "200% 100%",
                  }}>
                    <button
                      type="submit"
                      className="w-full rounded-[4px] bg-white px-4 py-2.5 text-sm text-foreground transition-all hover:bg-gray-50"
                    >
                      Send me the guide
                    </button>
                  </div>
                  <style jsx>{`
                    @keyframes wave {
                      0% { background-position: 0% 50%; }
                      50% { background-position: 100% 50%; }
                      100% { background-position: 0% 50%; }
                    }
                    .animate-wave {
                      animation: wave 12s ease-in-out infinite;
                    }
                  `}</style>
                  <p className="text-xs text-muted-foreground">Free for now, but not forever.</p>
                </form>
              ) : (
                <div>
                  <p className="text-sm text-foreground">يلا! Check your inbox.</p>
                  <p className="mt-2 text-xs text-muted-foreground">Can&apos;t find it? Check spam and move it to your inbox.</p>
                </div>
              )}
            </div>
          </div>
        </div>

        <Link
          href="/"
          className="mt-16 inline-block text-sm underline underline-offset-2 hover:text-[#132225] transition-colors"
        >
          Back to home
        </Link>

      </div>

      {/* Footer */}
      <footer className="py-8" style={{ backgroundColor: "#132225" }}>
        <div className="mx-auto w-full max-w-xl px-6 md:px-12">
          <p className="text-sm text-white">Find and follow me here</p>
          <div className="mt-3 flex items-center gap-2 text-white">
            <a href="https://instagram.com/talkthegulf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-base hover:opacity-80 transition-opacity">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              @talkthegulf
            </a>
          </div>
          <p className="mt-6 text-xs text-white">©talkthegulf 2026</p>
        </div>
      </footer>
    </main>
  )
}
