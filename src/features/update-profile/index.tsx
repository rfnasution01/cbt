import { Form } from '@/components/atoms/Form'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { UserCircle } from 'lucide-react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Bounce, ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useCreateBiodataMutation } from '@/store/slices/biodataAPI'
import { biodataSchema } from '@/libs/schema/biodataSchema'
import { FormLabelInput } from '@/components/molecules/input'
import { FormListJenisKelamin } from '@/components/molecules/form/formListJenisKelamin'
import { FormListAgama } from '@/components/molecules/form/formListAgama'
import { BiodataType } from '@/libs/types/biodata-type'

export default function UpdateProfile({
  nama,
  nisn,
  dataBiodata,
}: {
  nama: string
  nisn: string
  dataBiodata?: BiodataType
}) {
  const navigate = useNavigate()
  const [
    createBiodata,
    {
      isSuccess: biodataIsSuccess,
      isError: biodataIsError,
      error: biodataError,
      isLoading: biodataIsLoading,
    },
  ] = useCreateBiodataMutation()

  const disabled = biodataIsLoading

  const form = useForm<zod.infer<typeof biodataSchema>>({
    resolver: zodResolver(biodataSchema),
    defaultValues: {},
  })

  async function handleFormSignup(values) {
    try {
      const res = await createBiodata({ data: values })
      if ('data' in res) {
        const updateProfile = res?.data?.data?.update_profil
        localStorage.setItem('isUpdate', updateProfile ? 'yes' : 'no')
      } else {
        console.error('Error occurred:', res.error)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (biodataIsSuccess) {
      toast.success(`Edit profile berhasil!`, {
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
        navigate('/')
      }, 3000)
    }
  }, [biodataIsSuccess])

  useEffect(() => {
    if (biodataIsError) {
      const errorMsg = biodataError as {
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
  }, [biodataIsError, biodataError])

  useEffect(() => {
    if (nama && nisn) {
      form.setValue('nisn', nisn)
      form.setValue('nama', nama)
      if (dataBiodata) {
        form.setValue('email', dataBiodata?.pribadi?.email)
        form.setValue('tanggal_lahir', dataBiodata?.pribadi?.tanggal_lahir)
        form.setValue('jk', dataBiodata?.pribadi?.jk)
        form.setValue('agama', dataBiodata?.pribadi?.agama)
        form.setValue('wa', dataBiodata?.pribadi?.wa)
      }
    }
  }, [nama, nisn])

  return (
    <Form {...form}>
      <form className="w-full" onSubmit={form.handleSubmit(handleFormSignup)}>
        <div className="flex flex-col gap-y-32 text-black">
          {/* Row 1 */}
          <div className="grid grid-cols-12 gap-32">
            <FormLabelInput
              form={form}
              label="NISN"
              placeholder="Write your nisn"
              name="nisn"
              prefix={<UserCircle size={16} />}
              type="text"
              className="col-span-6 phones:col-span-12"
              isDisabled={true}
            />

            <FormLabelInput
              form={form}
              label="Nama"
              placeholder="Write your name"
              name="nama"
              type="text"
              className="col-span-6 phones:col-span-12"
              isDisabled={true}
            />
          </div>
          {/* Row 2 */}
          <div className="grid grid-cols-12 gap-32">
            <FormLabelInput
              form={form}
              label="Email"
              placeholder="Write your email"
              name="email"
              prefix={<span>@</span>}
              className="col-span-6 phones:col-span-12"
              isDisabled={disabled}
            />
            <FormLabelInput
              form={form}
              label="Tanggal Lahir"
              placeholder="DD-MM-YYYY"
              name="tanggal_lahir"
              type="date"
              className="col-span-6 phones:col-span-12"
              isDisabled={disabled}
            />
          </div>
          {/* Row 3 */}
          <div className="grid grid-cols-12 gap-32">
            <FormListJenisKelamin
              name="jk"
              placeholder="Choose your gender"
              headerLabel="Jenis Kelamin"
              form={form}
              className="col-span-6 phones:col-span-12"
              isDisabled={disabled}
            />

            <FormListAgama
              name="agama"
              placeholder="Choose your religion"
              headerLabel="Agama"
              form={form}
              className="col-span-6 phones:col-span-12"
              isDisabled={disabled}
            />
          </div>
          {/* Row 4 */}
          <div className="grid grid-cols-12 gap-32">
            <FormLabelInput
              form={form}
              label="WA"
              placeholder="Write your wa number"
              name="wa"
              type="text"
              className="col-span-6 phones:col-span-12"
              isDisabled={disabled}
            />
          </div>

          <div className="flex items-center justify-end gap-32">
            <button
              type="submit"
              className="w-3/12  rounded-2xl border border-transparent bg-primary py-12 text-white hover:bg-primary-shade-700 disabled:cursor-not-allowed"
            >
              Update
            </button>
          </div>
        </div>
      </form>
      <ToastContainer />
    </Form>
  )
}
