"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"

export default function TalkTheGulfLanding() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
    }
  }

  return (
    <main className="min-h-screen bg-background px-6 py-12 md:py-20">
      <div className="mx-auto max-w-4xl">
        {/* Logo */}
        <p className="mb-16 text-sm text-foreground">talkthegulf</p>

        {/* Main Content - Side by Side */}
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between md:gap-16">
          {/* Left: Copy */}
          <div className="max-w-md">
            <p className="text-sm leading-relaxed text-foreground">
              ahlan. you want to learn arabic. i feel you. fusha felt forced until i discovered the shortcut: dialect first, fun second. science backs it. whether its for your career, relocating east, or just a love for the language — stick around. im on the same journey. ill share tips, vocab, and honest updates. sorry if im inconsistent, still learning too.
            </p>
          </div>

          {/* Right: CTA */}
          <div className="w-full max-w-xs shrink-0">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                />
                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-2 rounded-md px-4 py-2 text-sm text-primary-foreground transition-all hover:opacity-90"
                  style={{
                    background: "linear-gradient(135deg, #00f7ff 0%, #1c8f65 100%)",
                  }}
                >
                  yalla, lets go
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </button>
              </form>
            ) : (
              <p className="text-sm text-foreground">
                مرحبا! youre in. check your inbox.
              </p>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
