import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  const { firstName, lastName, email, website, message } = await request.json()

  if (!email || !message) {
    return NextResponse.json({ error: 'Email and message are required' }, { status: 400 })
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  const mailOptions = {
    from: `"Edutech Book a Call" <${process.env.SMTP_USER}>`,
    to: process.env.RECIPIENT_EMAIL,
    replyTo: email,
    subject: `New Book a Call from ${firstName || 'Someone'}`,
    html: `
      <h2>New Book a Call Submission</h2>
      <p><strong>Name:</strong> ${firstName || ''} ${lastName || ''}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Website:</strong> ${website || 'Not provided'}</p>
      <p><strong>Message:</strong><br/>${message}</p>
    `,
  }

  try {
    await transporter.sendMail(mailOptions)
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Email sending failed:', error)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}