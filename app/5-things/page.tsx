import Link from "next/link"

const things = [
  {
    number: "01",
    title: "Start with dialect, not Fusha or MSA",
    body: "This is preference. But hear me out. Nobody communicates in Fusha or MSA day to day. Nobody. When I tried to learn it I had no motivation because I could not picture myself using it in a real conversation. It was boring. I retained nothing. Start with dialect. Build the brain structure of a native speaker first. Once you reach a decent level you can pick up MSA or Fusha on top of it. Or at the same time. But not before.",
  },
  {
    number: "02",
    title: "Find your why before anything else",
    body: "It sounds cliche but it is the only thing that will keep you going. I spent years trying to learn Arabic without a real reason. My parents forced me. When I got honest with myself about why I actually wanted to learn, things shifted. Islam. My friends. Wanting to belong in conversations. The motivation showed up when things got hard. Write yours down. Be specific. \"I want to learn Arabic\" is not a why. \"I want to understand what my grandfather says\" is.",
  },
  {
    number: "03",
    title: "Immerse yourself in the Arabic culture",
    body: "I used to think I needed to study first. Wrong. Watch the shows with subtitles. Scroll the Arabic reels. Listen to the music even when you do not understand a word. Your brain picks up rhythm, sounds and patterns whether you realise it or not. Studying becomes a way to attach meaning to things you have already heard. Not the other way around.",
  },
  {
    number: "04",
    title: "Drop the grammar tables",
    body: "Grammar tables killed my enthusiasm every single time. Grammar matters eventually. But leading with it is like teaching someone the rules of football before they have ever kicked a ball. Get the phrases in first. Get comfortable. The grammar reveals itself naturally once you are inside the language.",
  },
  {
    number: "05",
    title: "Have fun with it",
    body: "The biggest block was not ability. It was anxiety. Worrying about mistakes, saying something wrong, sounding stupid. Stephen Krashen calls it the affective filter. When you are stressed your brain closes off to new input. When you are relaxed it absorbs. Mistakes are the method. Make more of them.",
  },
]

export default function FiveThingsPage() {
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

        {/* Page Title */}
        <div className="mb-12">
          <h1 className="text-2xl font-bold leading-tight text-foreground md:text-3xl">
            5 things I wish I knew before starting
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Lessons from years of doing it the hard way.
          </p>
        </div>

        {/* Things */}
        <div className="flex flex-col gap-10">
          {things.map((thing) => (
            <div key={thing.number} className="flex gap-5">
              <div
                className="mt-0.5 text-xs font-bold shrink-0 w-6"
                style={{
                  background: "linear-gradient(90deg, #00f7ff 0%, #1c8f65 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                {thing.number}
              </div>
              <div>
                <h2 className="text-base font-semibold text-foreground mb-2">{thing.title}</h2>
                <p className="text-sm leading-relaxed text-foreground/80">{thing.body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Back link */}
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
