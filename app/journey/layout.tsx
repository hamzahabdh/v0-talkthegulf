import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'My Journey Learning Gulf Arabic | talkthegulf',
  description: 'From boring grammar lessons to understanding real conversations. How I actually learned Gulf Arabic — and what changed everything.',
  openGraph: {
    title: 'My Journey Learning Gulf Arabic | talkthegulf',
    description: 'From boring grammar lessons to understanding real conversations. How I actually learned Gulf Arabic — and what changed everything.',
    url: 'https://talkthegulf.com/journey',
  },
}

export default function JourneyLayout({ children }: { children: React.ReactNode }) {
  return children
}
