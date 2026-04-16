import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const { email } = await request.json()

  if (!email) {
    return NextResponse.json({ error: 'Email is required' }, { status: 400 })
  }

  const response = await fetch(
    `https://api.kit.com/v4/forms/${process.env.KIT_FORM_ID}/subscribers`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Kit-Api-Key': process.env.KIT_API_KEY!,
      },
      body: JSON.stringify({ email_address: email }),
    }
  )

  if (!response.ok) {
    const errorBody = await response.json()
    console.error('Kit API error:', response.status, JSON.stringify(errorBody))
    return NextResponse.json({ error: 'Failed to subscribe', details: errorBody }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
