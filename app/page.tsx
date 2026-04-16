"use client"

import { useState } from "react"
import { X, ArrowRight } from "lucide-react"

const guides = [
  {
    id: "saudi-greetings",
    title: "25 Saudi greetings",
    description: "Sound natural from day one.",
    action: "Get it free",
  },
  {
    id: "5-things",
    title: "5 things I wish I knew before starting",
    description: "Lessons from years of doing it the hard way.",
    action: "Read it",
  },
]

export default function TalkTheGulfLanding() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [selectedGuide, setSelectedGuide] = useState<typeof guides[0] | null>(null)
  const [guideEmail, setGuideEmail] = useState("")
  const [guideSubmitted, setGuideSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
    }
  }

  const handleGuideSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (guideEmail && selectedGuide) {
      setGuideSubmitted(true)
    }
  }

  const closeModal = () => {
    setSelectedGuide(null)
    setGuideEmail("")
    setGuideSubmitted(false)
  }

  return (
    <main className="flex min-h-screen flex-col bg-background">
      <div className="mx-auto w-full max-w-xl flex-1 px-6 py-12 md:px-12 md:py-20">
        {/* Header */}
        <nav className="mb-16 flex items-center justify-between">
          <p 
            className="text-xl font-bold"
            style={{
              background: "linear-gradient(90deg, #00f7ff 0%, #1c8f65 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            talkthegulf
          </p>
          <div className="text-xs text-muted-foreground">
            <a href="/journey" className="hover:text-foreground transition-colors">About Me</a>
          </div>
        </nav>

        {/* Hero Section */}
        <div>
          <h1 className="mb-3 text-2xl font-bold leading-tight text-foreground md:text-3xl">
            The Gulf Arabic resource I wished existed.{" "}
            <span style={{ backgroundColor: "#E9E3D7", padding: "0 4px" }}>Now it does.</span>
          </h1>
          <p className="mb-6 text-sm text-muted-foreground" dir="rtl">أهلاً <span dir="ltr">— Welcome.</span></p>
          <p className="text-sm leading-relaxed text-foreground">
            You want to learn Arabic in a way that feels natural, useful, and real. I get that. I sat through boring grammar lessons and methods that didn&apos;t stick - until I changed my approach. I&apos;ll be sharing weekly Gulf Arabic phrases, cultural context, and the Saudi dialect explained the way I wish someone had explained it to me - for learners, by a learner.
          </p>

          {/* CTA */}
          <div className="mt-8">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <p className="text-xs text-muted-foreground">Be one of the first to join — founding subscribers get early access to the Gulf Starter Pack when it drops.</p>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="w-full border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-[#2F7058]"
                />
                <button
                  type="submit"
                  className="w-full px-4 py-2.5 text-sm text-white transition-all hover:opacity-90"
                  style={{ backgroundColor: "#2F7058" }}
                >
                  Join the waitlist
                </button>
              </form>
            ) : (
              <p className="text-sm text-foreground">
                مرحبا! You&apos;re in. Check your inbox.
              </p>
            )}
          </div>
        </div>

        {/* Resources Section */}
        <div id="guides" className="mt-16">
          <p className="mb-4 text-sm font-bold text-muted-foreground" style={{ fontFamily: "'Hacen Tunisia', sans-serif" }}>Start here — all free</p>
          <div className="flex flex-col gap-3">
            {guides.map((guide) => (
              <button
                key={guide.id}
                onClick={() => setSelectedGuide(guide)}
                className="group flex w-full items-center justify-between border border-transparent px-4 py-4 text-left transition-all hover:border-border hover:shadow-sm"
                style={{ backgroundColor: "#F2EDE4" }}
              >
                <div className="flex-1">
                  <h3 
                    className="text-base font-medium text-foreground"
                    style={{ fontFamily: "'Shantell Sans', cursive" }}
                  >
                    {guide.title}
                  </h3>
                  <p className="mt-1 text-xs text-foreground/60">
                    {guide.description}
                  </p>
                  <p className="mt-2 text-xs font-medium" style={{ color: "#2F7058" }}>
                    {guide.action} →
                  </p>
                </div>
                <ArrowRight className="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1" style={{ color: "#2F7058" }} />
              </button>
            ))}
          </div>
        </div>

        {/* My Journey Preview */}
        <div id="story" className="mt-16">
          <p className="mb-4 text-sm font-bold text-muted-foreground" style={{ fontFamily: "'Hacen Tunisia', sans-serif" }}>My journey</p>
          
          <div className="space-y-4 text-sm leading-relaxed text-foreground/85">
            <p>
              I started learning Arabic at a young age with a Yemeni teacher. I was forced into Fusha — classical Arabic. Honestly, I barely retained a word. The repeated grammar lessons didn&apos;t help at all.
            </p>
            <p>
              I kept thinking: &quot;This is too hard. Why do I keep forgetting? This is impossible.&quot;
            </p>
            <p>
              So I stopped the moment I had an excuse - my GCSEs.
            </p>
            <a href="/journey" className="inline-block text-sm underline underline-offset-2 hover:text-[#2F7058]">
              Read the full story
            </a>
          </div>
        </div>

      </div>
      
      {/* Footer */}
      <footer className="px-6 py-8 md:px-12" style={{ backgroundColor: "#132225" }}>
        <div className="mx-auto max-w-xl">
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

      {/* Guide Modal */}
      {selectedGuide && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onClick={closeModal}>
          <div 
            className="relative w-full max-w-sm rounded-xl bg-background p-6 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute right-4 top-4 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="h-4 w-4" />
            </button>

            {!guideSubmitted ? (
              <>
                <h3 className="text-lg font-bold text-foreground pr-6">{selectedGuide.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{selectedGuide.description}</p>
                
                <form onSubmit={handleGuideSubmit} className="mt-6 flex flex-col gap-3">
                  <input
                    type="email"
                    value={guideEmail}
                    onChange={(e) => setGuideEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="w-full border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-[#2F7058]"
                  />
                  <button
                    type="submit"
                    className="w-full px-4 py-2.5 text-sm text-white transition-all hover:opacity-90"
                    style={{ backgroundColor: "#2F7058" }}
                  >
                    Send me the guide
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-4">
                <p className="text-lg font-bold text-foreground">يلا!</p>
                <p className="mt-2 text-sm text-muted-foreground">Check your inbox for the guide.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  )
}
