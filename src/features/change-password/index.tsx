import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { Eye, EyeOff, Lock } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Bounce, ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useCreateNewPasswordMutation } from '@/store/slices/loginAPI'
import { changePasswordSchema } from '@/libs/schema/changePasswordSchema'
import { Form } from '@/components/atoms/Form'
import { FormLabelInput } from '@/components/molecules/input'
import Cookies from 'js-cookie'

export default function ChangePasswordForm() {
  const navigate = useNavigate()
  const [isShow, setIsShow] = useState<boolean>(false)
  const [createNewPassword, { isSuccess, isError, error, isLoading }] =
    useCreateNewPasswordMutation()
  const disabled = isLoading

  const form = useForm<zod.infer<typeof changePasswordSchema>>({
    resolver: zodResolver(changePasswordSchema),
    defaultValues: {},
  })

  async function handleFormLogin(values) {
    try {
      await createNewPassword({ data: values })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (isSuccess) {
      toast.success(`Password berhasil diganti!`, {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        transition: Bounce,
      })
      setTimeout(() => {
        Cookies.remove('token')
        navigate('/login')
      }, 3000)
    }
  }, [isSuccess])

  useEffect(() => {
    if (isError) {
      const errorMsg = error as {
        data?: {
          message?: string
        }
      }

      toast.error(`${errorMsg?.data?.message ?? 'Terjadi Kesalahan'}`, {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        transition: Bounce,
      })
    }
  }, [isError, error])

  return (
    <Form {...form}>
      <form className="w-full" onSubmit={form.handleSubmit(handleFormLogin)}>
        <div className="flex w-6/12 flex-col gap-32 rounded-2xl bg-white p-32 text-black shadow hover:shadow-md phones:w-full">
          <FormLabelInput
            form={form}
            label="Old Password"
            placeholder="Write your old password"
            name="old_password"
            prefix={<Lock size={16} />}
            suffix={isShow ? <Eye size={16} /> : <EyeOff size={16} />}
            handlerClick={() => setIsShow(!isShow)}
            type={!isShow ? 'password' : 'text'}
            className="col-span-6 phones:col-span-12"
            isDisabled={disabled}
          />

          <FormLabelInput
            form={form}
            label="New Password"
            placeholder="Write your new password"
            name="new_password"
            prefix={<Lock size={16} />}
            suffix={isShow ? <Eye size={16} /> : <EyeOff size={16} />}
            handlerClick={() => setIsShow(!isShow)}
            type={!isShow ? 'password' : 'text'}
            className="col-span-6 phones:col-span-12"
            isDisabled={disabled}
          />

          <div className="flex items-center justify-end">
            <button
              type="submit"
              className="w-full rounded-2xl bg-primary px-24 py-12 text-[2rem] text-white phones:w-full"
            >
              Ganti Password
            </button>
          </div>

          {/* <Button
              variant="solid"
              bgColor="bg-primary"
              textColor="text-white"
              rounded="rounded-xl"
              type="submit"
              child={
                <div className="flex items-center justify-center gap-x-8 text-[2rem]">
                  Change
                </div>
              }
            /> */}
        </div>
      </form>
      <ToastContainer />
    </Form>
  )
}
