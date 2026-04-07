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
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="flex min-h-screen flex-col items-center justify-center px-6 py-12">
        <div className="mx-auto w-full max-w-xl text-center">
          {/* Brand */}
          <p className="mb-8 text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground">
            TalkTheGulf
          </p>

          {/* Arabic Greeting */}
          <h1 className="mb-6 text-5xl font-bold tracking-tight text-foreground md:text-6xl">
            ahlan.
          </h1>

          {/* Tweet-sized copy (under 280 chars) */}
          <p className="mx-auto mb-10 max-w-md text-xl leading-relaxed text-foreground/90 text-balance">
            You want to learn Arabic. I feel you. Fusha felt forced until I 
            discovered: dialect first, brain structure later. Fun is the 
            science-backed shortcut.
          </p>

          {/* CTA Section */}
          {!submitted ? (
            <form onSubmit={handleSubmit} className="mx-auto max-w-sm">
              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="flex-1 rounded-lg border border-border bg-input px-4 py-3.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
                <button
                  type="submit"
                  className="group relative overflow-hidden rounded-lg px-6 py-3.5 font-medium text-primary-foreground transition-all hover:scale-[1.02] active:scale-[0.98]"
                  style={{
                    background: "linear-gradient(135deg, #00f7ff 0%, #1c8f65 100%)",
                  }}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Yalla, let&apos;s go
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </button>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                No spam. Just insights, tips & vocab. I&apos;m learning too.
              </p>
            </form>
          ) : (
            <div className="mx-auto max-w-sm rounded-lg border border-primary/20 bg-primary/5 p-6">
              <p className="text-lg text-foreground">
                مرحبا! You&apos;re in. Check your inbox soon.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Extended story section - scrollable */}
      <section className="border-t border-border bg-card px-6 py-16">
        <div className="mx-auto max-w-xl">
          <h2 className="mb-8 text-2xl font-bold text-card-foreground">
            The longer story...
          </h2>
          
          <div className="space-y-6 text-lg leading-relaxed text-card-foreground/85">
            <p>
              I started at a young age being forced to learn fusha. Then as I grew 
              older I became passionate for Arabic. Over time I realised that to 
              acquire the language you need to have fun with it (yes, science backs this).
            </p>
            
            <p>
              My why? I want to understand fusha so I can understand Islam better. 
              But I&apos;m going to reverse engineer it. Dialect first. Build the brain 
              structure to immerse in the language.
            </p>

            <p>
              I also just really like how Arabic shapes the brain and that can be 
              transferable across everything.{" "}
              <a 
                href="#" 
                className="underline decoration-primary/40 underline-offset-4 transition-colors hover:decoration-primary"
              >
                Check the study →
              </a>
            </p>

            <p>
              Whether it&apos;s for your career, relocating to the east, or simply a 
              love for the language — this might be a good place to follow because 
              I&apos;m on the same journey as you.
            </p>
          </div>

          {/* Tips */}
          <div className="mt-12 rounded-lg border border-border bg-background p-6">
            <h3 className="mb-4 text-xl font-bold text-foreground">
              Tips for you:
            </h3>
            <ul className="space-y-3 text-foreground/85">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                <span>Expose yourself to everything. Watch that show in Arabic. Watch that podcast. Find a friend.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                <span>Don&apos;t be afraid to make mistakes.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                <span>Know your why. Write it down. Hold yourself accountable.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                <span>It&apos;s not an easy journey (yet), so get ready to dive in and come out fluent on the other side.</span>
              </li>
            </ul>
          </div>

          {/* Closing */}
          <p className="mt-12 text-lg italic text-muted-foreground">
            Anyways, I&apos;ll be sharing insights, tips and vocab. Sorry if I&apos;m 
            inconsistent — I&apos;m still learning as well.
          </p>

          {/* Second CTA */}
          {!submitted && (
            <div className="mt-8">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="group relative overflow-hidden rounded-lg px-6 py-3.5 font-medium text-primary-foreground transition-all hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  background: "linear-gradient(135deg, #00f7ff 0%, #1c8f65 100%)",
                }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Subscribe & join the journey
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background px-6 py-8">
        <div className="mx-auto max-w-xl text-center">
          <p className="text-sm text-muted-foreground">
            TalkTheGulf — Learning Gulf Arabic, together.
          </p>
        </div>
      </footer>
    </main>
  )
}
