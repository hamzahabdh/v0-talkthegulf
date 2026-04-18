"use client"

import { useState } from "react"
import Link from "next/link"

export default function JourneyPage() {
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

        {/* Journey Content */}
        <div>
          <h1 className="mb-8 text-2xl font-bold text-foreground">My journey</h1>
          
          <div className="space-y-6 text-sm leading-relaxed text-foreground/85">
            <p>
              I started learning Arabic young. A Yemeni teacher, Fusha lessons, grammar tables. I retained almost nothing. The lessons were boring and I had no real reason to keep going.
            </p>

            <p>
              So I stopped the moment I had an excuse. My GCSEs.
            </p>

            <p>
              Then Covid hit. I had time. I booked a Royal Jordanian to Jordan that summer. Alone. Thought a month of classes would fix everything.
            </p>

            <p>
              Same story. Grammar lessons. I was literally napping on my breaks. I left Jordan after a month with a few words and not much else.
            </p>

            <p>
              But something shifted when I got back. I stopped trying to learn Arabic and started asking why I actually wanted to.
            </p>

            <p>
              <strong>Islam.</strong>{" "}Everything was revealed in Arabic. Leaving that on the table felt like leaving a deeper connection to God on the table too.
            </p>

            <p>
              <strong>My friends.</strong>{" "}Most of them are Arab. When they spoke in Arabic I was on the sidelines. I wanted in.
            </p>

            <p>
              Around that time I had a cafe. Most of my regulars were Khaleeji. One of my staff only spoke the Kuwaiti dialect. I had no choice but to pick things up. That forced, situational learning taught me more than any classroom ever did.
            </p>

            <p>
              The real turning point was dropping Fusha altogether and going straight into dialect. I wanted to build the brain structure of a native speaker first. That dropped the anxiety. I started enjoying it. The science backs this up.{" "}
              <a href="https://sdkrashen.com/content/articles/krashen_sla.pdf" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-[#132225]">Read Krashen.</a>
            </p>

            <p>
              Today I understand most conversations comfortably. Arabic in the Middle East no longer sounds like noise. It makes sense.
            </p>

            <p>
              I want to share what I have learnt along the way. Including insights from Dr Saddam Alhamoud, an Arabic language specialist who taught at the King Abdul Aziz Institute in Saudi Arabia, who I worked with to build the Arabic language programme at the Quilliam Institute for Arabic Studies in Liverpool.
            </p>

            <p>
              That is what talkthegulf is. Sharing the insights and resources I wish I had.
            </p>

            <div className="mt-8">
              <p className="text-lg font-medium text-foreground" dir="rtl">
                في أمان الله
              </p>
              <p className="mt-1 text-sm text-foreground">Fi aman Allah &nbsp;&mdash;&nbsp; <em>In God&apos;s Protection</em></p>
              <p className="mt-1 text-xs text-muted-foreground">The warmest way to say goodbye in Saudi Arabic.</p>
            </div>

            <p className="mt-4 text-sm font-medium text-foreground">
              Hamzah
            </p>
          </div>

          {/* Subscribe Section */}
          <div className="mt-12">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex w-full flex-col gap-3">
                <p className="text-xs text-muted-foreground">Join other learners on the same journey.</p>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-[#132225]"
                />
                <div className="relative rounded-md p-[2px] animate-wave" style={{
                    background: "linear-gradient(90deg, #00f7ff 0%, #1c8f65 25%, #00f7ff 50%, #1c8f65 75%, #00f7ff 100%)",
                    backgroundSize: "200% 100%",
                  }}>
                    <button
                      type="submit"
                      className="w-full rounded-[4px] bg-white px-4 py-2.5 text-sm text-foreground transition-all hover:bg-gray-50"
                    >
                      Subscribe
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
              </form>
            ) : (
              <p className="text-sm text-foreground">
                مرحبا! You&apos;re in. Check your inbox.
              </p>
            )}
          </div>

          <Link 
            href="/" 
            className="mt-12 inline-block text-sm underline underline-offset-2 hover:text-[#132225]"
          >
            Back to home
          </Link>
        </div>
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
