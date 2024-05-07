/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form } from '@/components/atoms/Form'
import { FormLabelInput } from '@/components/molecules/input'
import { tokenSchema } from '@/libs/schema/token-schema'
import { UjianType } from '@/libs/types/cbt-type'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowRightFromLine, CircleAlert, CircleCheck } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import * as zod from 'zod'

export function ModalInputToken({
  token,
  ujianNow,
  isPercobaan,
}: {
  token: string
  ujianNow: UjianType
  isPercobaan?: boolean
}) {
  const navigate = useNavigate()
  const [loginIsError, setLoginIsError] = useState<boolean>(false)
  const [loginIsSuccess, setLoginIsSuccess] = useState<boolean>(false)
  const [msg, setMsg] = useState<string>('')

  const form = useForm<zod.infer<typeof tokenSchema>>({
    resolver: zodResolver(tokenSchema),
    defaultValues: {},
  })

  async function handleFormLogin(values) {
    if (values?.token === token) {
      setLoginIsSuccess(true)
      setMsg('Token benar!')
      setTimeout(() => {
        setLoginIsSuccess(false)
        handleStartExam(ujianNow)
      }, 1000)
    } else {
      setLoginIsError(true)
      setMsg('Token salah!')
      setTimeout(() => {
        setLoginIsError(false)
      }, 1000)
    }
  }

  const handleStartExam = (item) => {
    // Cek apakah mulaiUjian sudah ada di local storage
    const existingData = localStorage.getItem('mulaiujian')
    let startTime = null

    // Jika sudah ada data, gunakan startTime dari data yang sudah ada
    if (existingData) {
      const existingStartTime = JSON.parse(existingData).startTime
      if (existingStartTime) {
        startTime = existingStartTime
      }
    } else {
      // Jika belum ada data, buat startTime baru
      startTime = new Date().toISOString()
      const duration = item?.waktu_ujian

      const dataToSave = {
        startTime,
        duration,
      }

      localStorage.setItem('mulaiujian', JSON.stringify(dataToSave))
    }
    navigate(
      isPercobaan
        ? `/percobaan?idUjian=${item?.id_ujian}`
        : `/cbt?idUjian=${item?.id_ujian}`,
    )
  }

  return (
    <div className="mb-32 flex flex-col gap-y-32 text-black">
      {loginIsError && (
        <div className="flex items-center gap-x-12  border-l-8 border-red-500 bg-red-100 px-16 py-8 text-[2rem]">
          <span>
            <CircleAlert />
          </span>
          {msg}
        </div>
      )}
      {loginIsSuccess && (
        <div className="flex items-center gap-x-12  border-l-8 border-emerald-500 bg-emerald-100 px-16 py-8 text-[2rem]">
          <span>
            <CircleCheck />
          </span>
          {msg}
        </div>
      )}
      <Form {...form}>
        <form
          className="flex w-full flex-col gap-y-32"
          onSubmit={form.handleSubmit(handleFormLogin)}
        >
          {/* --- Username --- */}
          <FormLabelInput
            form={form}
            label={
              <span className="text-[2rem] phones:text-[3rem]">Token</span>
            }
            placeholder="Masukkan token"
            name="token"
            type="text"
            className="col-span-6 phones:col-span-12"
          />
          <div className="flex">
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-x-8 rounded-2xl bg-primary py-12 text-white hover:bg-primary-shade-700 disabled:cursor-not-allowed disabled:hover:bg-primary-shade-500"
            >
              <p>Mulai</p>
              <span>
                <ArrowRightFromLine size={20} />
              </span>
            </button>
          </div>
        </form>
      </Form>
    </div>
  )
}
