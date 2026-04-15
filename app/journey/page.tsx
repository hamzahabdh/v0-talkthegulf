import Link from "next/link"

export default function JourneyPage() {
  return (
    <main className="min-h-screen bg-background px-6 py-12 md:px-12 md:py-20">
      <div className="mx-auto max-w-xl">
        {/* Header */}
        <nav className="mb-16 flex items-center gap-6">
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
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <Link href="/#story" className="hover:text-foreground transition-colors">story</Link>
            <Link href="/#guides" className="hover:text-foreground transition-colors">guides</Link>
            <Link href="/#tips" className="hover:text-foreground transition-colors">tips</Link>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">twitter</a>
          </div>
        </nav>

        {/* Journey Content */}
        <div className="max-w-lg">
          <h1 className="mb-2 text-2xl font-bold text-foreground">My journey</h1>
          <p className="mb-8 text-xs text-muted-foreground">The full story of how I fell in love with Arabic</p>
          
          <div className="space-y-6 text-sm leading-relaxed text-foreground/85">
            <p>
              I started learning Arabic at a young age with a Yemeni teacher. Well, I was forced to learn Fusha (the classical Arabic). Honestly I barely remembered what I learnt. The repeated grammar lessons didn&apos;t help at all.
            </p>
            
            <p>
              And for me, I couldn&apos;t grasp it at all. I kept thinking to myself:
            </p>
            
            <p className="italic text-muted-foreground">
              &quot;This is too hard&quot;, &quot;Why do I keep forgetting&quot;, &quot;Impossible&quot;
            </p>
            
            <p>
              So I stopped as soon as I had an excuse to not do the lessons (my GCSEs).
            </p>
            
            <p>
              Then Covid. I had time. So I booked a Royal Jordanian to Jordan that Summer. Alone.
            </p>
            
            <p>
              I arrived there with enthusiasm. But once again. Grammar lessons. And it was making me sleepy (literally I&apos;d nap on my breaks during teaching).
            </p>
            
            <p>
              I left Jordan after a month - with probably a few words.
            </p>
            
            <p>
              But, when I came back I realised something which changed it all for me. I found my reasons why. I&apos;ll briefly mention them now.
            </p>
            
            <p>
              <strong>Islam.</strong> Everything was revealed in Arabic. Not ever understanding it would be a failure for me. A chance to have a deeper connection to God.
            </p>
            
            <p>
              <strong>Most of my friends are Arabs.</strong> When they would speak in Arabic, I&apos;d be on the sidelines trying to encode what&apos;s going on. I always like a challenge - so this was a motivating factor for me so one day I could fully comprehend what&apos;s being said.
            </p>
            
            <p>
              So I set a long life goal of trying to absorb as much Arabic as possible. Wherever I am. Whether it would be watching Arabic series, scrolling on social media or speaking with my friends - I&apos;m actively trying to understand. And I still do those things to this day.
            </p>
            
            <p>
              Right now I&apos;m at a good level (still work to do) because of a few things I did in my approach to learning Arabic. I dropped the Fusha and I started engaging with dialects. I thought to myself - let me build the brain structure first of a native who speaks Arabic. Then doing Fusha later or even during will make more sense. That&apos;s the beauty of our brains. That dropped the anxiety filter in my head, and I started having fun with it. The science backs this method of language acquisition too.{" "}
              <a href="#" className="underline underline-offset-2 hover:text-primary">Check the study here.</a>
            </p>
            
            <p>
              I would say I comfortably understand a lot of a conversation (depends on type of situation too) and when I&apos;m in the Middle East hearing and speaking Arabic is no longer a tingle in my ear. It makes sense.
            </p>
            
            <p>
              The lego blocks are in place. Now I&apos;m building on them in public - so you can too.
            </p>
            
            <p>
              So stick around on this journey. I&apos;ve got a lot of things I want to share. Including resources and advice from my expert friends who are professors and teach Arabic to non-native speakers.
            </p>
            
            <p className="text-base font-medium text-foreground">
              أشوفكم مرة جاي - Ashufkum marra jaay
            </p>
          </div>

          <Link 
            href="/" 
            className="mt-12 inline-block text-sm underline underline-offset-2 hover:text-primary"
          >
            Back to home
          </Link>
        </div>
      </div>
    </main>
  )
}
