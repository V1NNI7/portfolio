'use client'

import axios from 'axios'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IoCheckmarkCircleOutline, IoCloseCircleOutline } from 'react-icons/io5'
import { Oval } from 'react-loader-spinner'

interface FieldValues {
  name: string
  email: string
  subject: string
  message: string
}

interface EmailSent {
  sent: boolean
  message: string
}

export default function Contact() {
  const [emailStatus, setEmailStatus] = useState<EmailSent | null>(null)
  const { handleSubmit, register, formState, reset } = useForm<FieldValues>()
  const { isSubmitting } = formState

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const response = await axios.post('/api/email/send', data)

      setEmailStatus(response.data)
    } catch (error) {
      console.error(error)
    } finally {
      reset()
    }
  }

  return (
    <section className="relative flex h-screen w-full animate-fade-in-down flex-col items-center justify-center gap-4 bg-transparent bg-gradient-radial-violet">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 max-lg:grid-cols-1 max-lg:gap-10 max-sm:grid-cols-1 max-sm:gap-10">
          <div className="flex items-center justify-center">
            <h1 className="text-6xl font-bold text-neutral-50 max-sm:text-center max-sm:text-4xl">
              Entre em contato!
            </h1>
          </div>
          <div className="flex items-center justify-center">
            <div className="w-2/4 rounded-lg bg-neutral-700 p-4 max-sm:mx-4 max-sm:w-full">
              {emailStatus ? (
                <div className="flex flex-col items-center justify-center gap-2">
                  {emailStatus.sent ? (
                    <IoCheckmarkCircleOutline className="text-8xl text-green-400" />
                  ) : (
                    <IoCloseCircleOutline className="text-8xl text-red-400" />
                  )}
                  <h2
                    className={`text-center text-2xl ${
                      emailStatus.sent ? 'text-green-400' : 'text-red-400'
                    }`}
                  >
                    {emailStatus.message}
                  </h2>
                  <button
                    onClick={() => setEmailStatus(null)}
                    className="h-12 w-32 rounded-lg bg-indigo-500 font-semibold text-neutral-50 transition-colors hover:bg-indigo-600/80 active:bg-indigo-700"
                  >
                    Ok
                  </button>
                </div>
              ) : (
                <>
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex w-full flex-col gap-4 "
                  >
                    <input
                      type="text"
                      placeholder="Nome"
                      {...register('name')}
                      className="h-12 w-full rounded-lg border-2 border-neutral-600 bg-transparent p-2 text-xl font-semibold text-neutral-400 outline-none transition-colors placeholder:text-neutral-500 focus:border-indigo-400/80"
                    />
                    <input
                      type="text"
                      placeholder="E-mail"
                      {...register('email')}
                      className="h-12 w-full rounded-lg border-2 border-neutral-600 bg-transparent p-2 text-xl font-semibold text-neutral-400 outline-none transition-colors placeholder:text-neutral-500 focus:border-indigo-400/80"
                    />
                    <input
                      type="text"
                      placeholder="Assunto"
                      {...register('subject')}
                      className="h-12 w-full rounded-lg border-2 border-neutral-600 bg-transparent p-2 text-xl font-semibold text-neutral-400 outline-none transition-colors placeholder:text-neutral-500 focus:border-indigo-400/80"
                    />
                    <textarea
                      placeholder="Mensagem"
                      {...register('message')}
                      className="h-48 w-full resize-none rounded-lg border-2 border-neutral-600 bg-transparent p-2 text-xl font-semibold text-neutral-400 outline-none transition-colors placeholder:text-neutral-500 focus:border-indigo-400/80"
                    />
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex h-12 w-full resize-none items-center justify-center rounded-lg bg-indigo-600 p-2 text-xl font-semibold text-neutral-50 outline-none transition-colors hover:bg-indigo-600/80 disabled:bg-indigo-400"
                    >
                      {isSubmitting ? (
                        <Oval
                          width={35}
                          height={35}
                          color="#ffffff"
                          secondaryColor="#ffffff"
                        />
                      ) : (
                        'Enviar'
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
