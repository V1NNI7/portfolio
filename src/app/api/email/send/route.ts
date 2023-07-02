import nodemailer from 'nodemailer'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { name, email, subject, message } = await req.json()

  try {
    await sendEmail({ name, email, subject, message })

    return NextResponse.json({
      sent: true,
      message: 'Email enviado com sucesso',
    })
  } catch (error) {
    return NextResponse.json({
      sent: false,
      message: 'Houve um erro ao enviar o email',
    })
  }
}

interface SendEmailParams {
  name: string
  email: string
  subject: string
  message: string
}

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.AUTH_USER,
    pass: process.env.AUTH_PASS,
  },
})

async function sendEmail({ name, email, subject, message }: SendEmailParams) {
  const body = `
      <div>
        <b>Nome:</b> ${name}
      </div>
      <div>
        <b>Email:</b> ${email}
      </div>
      <div>
        <b>Assunto:</b> ${subject}
      </div>
      <div>
        <b>Mensagem:</b> ${message}
      </div>
  
  `

  const info = await transporter.sendMail({
    from: email,
    to: 'vinicius.scezar7@gmail.com',
    subject,
    html: body,
  })

  console.log('Message sent: %s', info.messageId)
}
