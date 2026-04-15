"use client"

import { useState } from "react"
import { X } from "lucide-react"

const guides = [
  {
    id: "saudi-greetings",
    title: "25 Saudi greetings (free)",
    description: "Essential greetings to sound natural from day one.",
  },
  {
    id: "gulf-slang",
    title: "Gulf slang cheat sheet",
    description: "The words you won't find in textbooks but hear everywhere.",
  },
  {
    id: "arabic-brain",
    title: "How Arabic shapes your brain",
    description: "The science behind why learning Arabic makes you sharper.",
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
      // Here you would integrate with Kit API
      // POST to /api/subscribe with email and guide tag
      setGuideSubmitted(true)
    }
  }

  const closeModal = () => {
    setSelectedGuide(null)
    setGuideEmail("")
    setGuideSubmitted(false)
  }

  return (
    <main className="min-h-screen bg-background px-6 py-12 md:px-12 md:py-20">
      <div className="mx-auto max-w-xl">
        {/* Header */}
        <nav className="mb-16 flex items-center gap-6">
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
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <a href="#story" className="hover:text-foreground transition-colors">story</a>
            <a href="#guides" className="hover:text-foreground transition-colors">guides</a>
            <a href="#tips" className="hover:text-foreground transition-colors">tips</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">twitter</a>
          </div>
        </nav>

        {/* Main Content */}
        <div className="max-w-sm">
          <h1 className="mb-2 text-2xl font-bold text-foreground">
            Gulf Arabic frameworks and resources{" "}
            <span style={{ backgroundColor: "#E9E3D7", padding: "0 4px" }}>to help you actually speak it.</span>
          </h1>
          <p className="mb-4 text-xs text-muted-foreground">Ahlan / أهلاً (means welcome)</p>
          <p className="text-sm leading-relaxed text-foreground">
            You want to learn Arabic. I feel you. Fusha felt forced until I rethought things — have fun with it. Science backs it. Whatever reason you have for learning Arabic (all are valid) - stick around. I&apos;m on the same journey, just a bit further down the line.
          </p>

          {/* CTA */}
          <div className="mt-8 max-w-[280px]">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <p className="text-xs text-muted-foreground">Join other learners on the same journey. You probably belong here.</p>
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
                مرحبا! You&apos;re in. Check your inbox.
              </p>
            )}
          </div>
        </div>

        {/* Resources for you */}
        <div id="guides" className="mt-16">
          <p className="mb-3 text-sm font-bold text-muted-foreground" style={{ fontFamily: "'Hacen Tunisia', sans-serif" }}>Resources for you</p>
          <div className="flex flex-col gap-3">
            {guides.map((guide) => (
              <button
                key={guide.id}
                onClick={() => setSelectedGuide(guide)}
                className="group max-w-xs px-3 py-2.5 text-left transition-all hover:opacity-80 shadow-md"
                style={{ backgroundColor: "#F2EDE4" }}
              >
                <h3 
                  className="text-base text-foreground transition-colors"
                  style={{ fontFamily: "'Shantell Sans', cursive" }}
                >
                  {guide.title}
                </h3>
                <p className="mt-0.5 text-xs text-foreground/60">
                  {guide.description}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* A Bit About My Journey */}
        <div id="story" className="mt-16 max-w-lg">
          <p className="mb-6 text-base text-muted-foreground" style={{ fontFamily: "'Shantell Sans', cursive" }}>a bit about my journey</p>
          
          <div className="space-y-4 text-sm leading-relaxed text-foreground/85">
            <p>
              I started at a young age being forced to learn Fusha. Then as I grew older I became passionate for Arabic. Over time I realised that to acquire the language you need to have fun with it (yes science backs this).
            </p>
            <p>
              My why? I want to understand Fusha so I can understand Islam better. But I&apos;m going to reverse engineer it. Dialect first. Build the brain structure to immerse in the language.
            </p>
            <p>
              I also just really like how Arabic shapes the brain and that can be transferable across everything.{" "}
              <a href="#" className="underline underline-offset-2 hover:text-primary">Check the study</a>
            </p>
          </div>
        </div>

        {/* My Genuine Advice */}
        <div id="tips" className="mt-12 max-w-lg">
          <p className="mb-4 text-base text-muted-foreground" style={{ fontFamily: "'Shantell Sans', cursive" }}>my genuine advice for you</p>
          <ul className="space-y-3 text-sm leading-relaxed text-foreground/85">
            <li className="flex items-start gap-2">
              <svg className="mt-0.5 h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="url(#starGradient1)"/>
                <defs><linearGradient id="starGradient1" x1="2" y1="12" x2="22" y2="12"><stop stopColor="#00f7ff"/><stop offset="1" stopColor="#1c8f65"/></linearGradient></defs>
              </svg>
              <span>Expose yourself to everything. Watch that show in Arabic. Watch that podcast. Find a friend.</span>
            </li>
            <li className="flex items-start gap-2">
              <svg className="mt-0.5 h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="url(#starGradient2)"/>
                <defs><linearGradient id="starGradient2" x1="2" y1="12" x2="22" y2="12"><stop stopColor="#00f7ff"/><stop offset="1" stopColor="#1c8f65"/></linearGradient></defs>
              </svg>
              <span>{"Don't be afraid to make mistakes."}</span>
            </li>
            <li className="flex items-start gap-2">
              <svg className="mt-0.5 h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="url(#starGradient3)"/>
                <defs><linearGradient id="starGradient3" x1="2" y1="12" x2="22" y2="12"><stop stopColor="#00f7ff"/><stop offset="1" stopColor="#1c8f65"/></linearGradient></defs>
              </svg>
              <span>Know your why. Write it down. Hold yourself accountable.</span>
            </li>
            <li className="flex items-start gap-2">
              <svg className="mt-0.5 h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="url(#starGradient4)"/>
                <defs><linearGradient id="starGradient4" x1="2" y1="12" x2="22" y2="12"><stop stopColor="#00f7ff"/><stop offset="1" stopColor="#1c8f65"/></linearGradient></defs>
              </svg>
              <span>{"It's not an easy journey (yet), so get ready to dive in and come out the other side fluent."}</span>
            </li>
          </ul>
        </div>

        {/* Footer */}
        <footer className="mt-16 border-t border-border pt-8">
          <p className="text-xs text-muted-foreground">find and follow me here</p>
          <div className="mt-3 flex items-center gap-4 text-xs text-foreground">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">twitter</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">instagram</a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">youtube</a>
          </div>
        </footer>
      </div>

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
                    className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                  <button
                    type="submit"
                    className="w-full rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground transition-all hover:opacity-90"
                  >
                    send me the guide
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
