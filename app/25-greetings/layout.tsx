import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '25 Saudi Arabic Greetings (with replies) | talkthegulf',
  description: 'The greetings Saudi natives actually use — not textbook Arabic. Every greeting includes the reply. Free guide.',
  openGraph: {
    title: '25 Saudi Arabic Greetings (with replies) | talkthegulf',
    description: 'The greetings Saudi natives actually use — not textbook Arabic. Every greeting includes the reply. Free guide.',
    url: 'https://talkthegulf.com/25-greetings',
  },
}

export default function GreetingsLayout({ children }: { children: React.ReactNode }) {
  return children
}
