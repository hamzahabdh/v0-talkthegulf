"use client"

import { useState } from "react"

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
        {/* Header */}
        <nav className="mb-16 flex items-center gap-6">
          <p 
            className="text-xl font-medium"
            style={{
              background: "linear-gradient(90deg, #00f7ff 0%, #1c8f65 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            talkthegulf
          </p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <a href="#story" className="hover:text-foreground transition-colors">story</a>
            <a href="#tips" className="hover:text-foreground transition-colors">tips</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">twitter</a>
          </div>
        </nav>

        {/* Main Content - Side by Side */}
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between md:gap-16">
          {/* Left: Copy */}
          <div className="max-w-md">
            <h1 className="mb-4 text-2xl font-bold text-foreground">أهلاً.</h1>
            <p className="text-sm leading-relaxed text-foreground">
              you want to learn arabic. i feel you. fusha felt forced until i discovered the shortcut: dialect first, fun second. science backs it. whether its for your career, relocating east, or just a love for the language — stick around. im on the same journey.
            </p>
          </div>

          {/* Right: CTA */}
          <div className="w-full max-w-xs shrink-0">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <p className="text-xs text-muted-foreground">ill share tips, vocab, and honest updates. sorry if im inconsistent, still learning too.</p>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                />
                <div className="relative rounded-md p-[2px] animate-wave" style={{
                    background: "linear-gradient(90deg, #00f7ff 0%, #1c8f65 25%, #00f7ff 50%, #1c8f65 75%, #00f7ff 100%)",
                    backgroundSize: "200% 100%",
                  }}>
                    <button
                      type="submit"
                      className="w-full rounded-[4px] bg-white px-4 py-2 text-sm text-foreground transition-all hover:bg-gray-50"
                    >
                      subscribe
                    </button>
                  </div>
                  <style jsx>{`
                    @keyframes wave {
                      0% { background-position: 0% 50%; }
                      50% { background-position: 100% 50%; }
                      100% { background-position: 0% 50%; }
                    }
                    .animate-wave {
                      animation: wave 6s ease-in-out infinite;
                    }
                  `}</style>
              </form>
            ) : (
              <p className="text-sm text-foreground">
                مرحبا! youre in. check your inbox.
              </p>
            )}
          </div>
        </div>
        {/* The Longer Story */}
        <div id="story" className="mt-24 max-w-lg">
          <p className="mb-6 text-xs uppercase tracking-wide text-muted-foreground">the longer story</p>
          
          <div className="space-y-4 text-sm leading-relaxed text-foreground/85">
            <p>
              i started at a young age being forced to learn fusha. then as i grew older i became passionate for arabic. over time i realised that to acquire the language you need to have fun with it (yes science backs this).
            </p>
            <p>
              my why? i want to understand fusha so i can understand islam better. but im going to reverse engineer it. dialect first. build the brain structure to immerse in the language.
            </p>
            <p>
              i also just really like how arabic shapes the brain and that can be transferable across everything.{" "}
              <a href="#" className="underline underline-offset-2 hover:text-primary">check the study</a>
            </p>
          </div>
        </div>

        {/* Tips */}
        <div id="tips" className="mt-16 max-w-lg">
          <p className="mb-4 text-xs uppercase tracking-wide text-muted-foreground">tips for you</p>
          <ul className="space-y-2 text-sm leading-relaxed text-foreground/85">
            <li>expose yourself to everything. watch that show in arabic. watch that podcast. find a friend.</li>
            <li>{"don't be afraid to make mistakes."}</li>
            <li>know your why. write it down. hold yourself accountable.</li>
            <li>{"it's not an easy journey (yet), so get ready to dive in and come out the other side fluent."}</li>
          </ul>
        </div>

        {/* Footer */}
        <footer className="mt-24 border-t border-border pt-8">
          <p className="text-xs text-muted-foreground">find and follow me here</p>
          <div className="mt-3 flex items-center gap-4 text-xs text-foreground">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">twitter</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">instagram</a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">youtube</a>
          </div>
        </footer>
      </div>
    </main>
  )
}
