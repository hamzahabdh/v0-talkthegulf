import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '5 Things I Wish I Knew Before Learning Arabic | talkthegulf',
  description: 'Lessons from years of doing it the hard way. Why dialect beats Fusha, why your "why" matters, and how to actually make Arabic stick.',
  openGraph: {
    title: '5 Things I Wish I Knew Before Learning Arabic | talkthegulf',
    description: 'Lessons from years of doing it the hard way. Why dialect beats Fusha, why your "why" matters, and how to actually make Arabic stick.',
    url: 'https://talkthegulf.com/5-things',
  },
}

export default function FiveThingsLayout({ children }: { children: React.ReactNode }) {
  return children
}
