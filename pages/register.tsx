import { Field, Form, Formik } from 'formik'
import Head from 'next/head'
import Router from 'next/router'
import React from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Footer from '../shared/components/footer'
import { getEvent, register } from '../utils/api'
import { registerFormData, registerValidationSchema } from '../utils/schema'
type EventProps = {
  title: string
  description: string
  slug: string
  _id: string
  startDate: Date
  icons: string[]
  eventCover: string
  isCompleted: boolean
  err?: string
}

const Register = ({ title, description, eventCover, slug }: EventProps) => {
  const FieldClass =
    'border-b-2 border-l-2 md:border-l-0 md:border-r-2 border-white bg-transparent placeholder-gray-500 text-right font-normal focus:outline-none xl:w-72 p-3'

  const [loading, setLoading] = React.useState<boolean>(false)
  const initialValues: registerFormData = {
    name: '',
    registrationNumber: '',
    email: '',
    phoneNumber: '',
  }
  const banner = eventCover ? eventCover : '/public/images/banner.png'
  const handleSubmit = async (values: registerFormData) => {
    try {
      setLoading(true)
      const postData = {
        user: {
          name: values.name,
          email: values.email,
          phoneNumber: values.phoneNumber && parseInt(values.phoneNumber),
          regNumber: values.registrationNumber,
        },
        eventSlug: slug,
      }
      const registerUser = await register(postData)
      if (registerUser.status == 201) {
        setLoading(false)
        toast.success('Registered successfully !')
        setTimeout(() => {
          Router.push('/')
        }, 1000)
      } else {
        toast.warn('Oops ! Something went wrong !')
        setLoading(false)
      }
    } catch (error) {
      toast.warn('Oops ! Something went wrong !')
      setLoading(false)
    }
  }
  return (
    <div className="bg-black overflow-hidden">
      <Head>
        <title>{title} Registration</title>
      </Head>
      <ToastContainer />
      <div className="relative h-screen max-h-screen text-white">
        <img
          src={banner}
          alt="event banner"
          className="absolute object-cover object-center top-1/2 md:top-0 opacity-50"
          style={{ filter: 'blur(8px)' }}
        />

        <div className="z-20 h-full absolute inset-0 flex flex-col md:flex-row items-center justify-center gap-24 p-4 md:p-8 max-w-7xl mx-auto pt-10">
          <div className="">
            <h1 className="text-white  w-full text-center text-4xl  font-bold py-2 mb-6 lg:text-5xl ">
              {title}
            </h1>

            <h4 className="w-full  text-white text-lg font-thin text-center lg:text-base  sm:font-light">
              {description}
            </h4>
          </div>

          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={registerValidationSchema}
            enableReinitialize
          >
            {({ errors, touched }) => (
              <Form className="flex flex-col gap-y-4 mr-auto md:mr-0 w-full md:w-auto ">
                <Field
                  className={FieldClass}
                  placeholder="Full Name"
                  name="name"
                  type="text"
                />
                {touched.name && errors.name && (
                  <div className="text-red-500 text-sm">{errors.name}</div>
                )}
                <Field
                  className={FieldClass}
                  placeholder="Email"
                  name="email"
                  type="email"
                />
                {touched.email && errors.email && (
                  <div className="text-red-500 text-sm">{errors.email}</div>
                )}
                <Field
                  className={FieldClass}
                  placeholder="Registration Number"
                  name="registrationNumber"
                  type="text"
                />
                {touched.registrationNumber && errors.registrationNumber && (
                  <div className="text-red-500 text-sm">
                    {errors.registrationNumber}
                  </div>
                )}
                <Field
                  className={FieldClass}
                  placeholder="Mobile Number"
                  name="phoneNumber"
                  type="text"
                />
                {touched.phoneNumber && errors.phoneNumber && (
                  <div className="text-red-500 text-sm">
                    {errors.phoneNumber}
                  </div>
                )}
                <button
                  disabled={Object.keys(errors).length > 0 || loading}
                  className={`w-full m-1 sm:w-48 flex justify-around items-center py-1 bg-registerGreen text-black rounded-md px-2 cursor-pointer  ${
                    Object.keys(errors).length > 0 ||
                    (loading && 'cursor-not-allowed')
                  }`}
                  type="submit"
                >
                  <span className="text-lg font-medium">
                    {loading ? 'Please wait...' : 'REGISTER'}
                  </span>
                  <img src="../images/register_vector.png"></img>
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <Footer />
    </div>
  )
}
export async function getServerSideProps(context: { query: { event: any } }) {
  const eventSlug = context.query != undefined ? context.query.event : null

  let checkIfEventExist: EventProps
  if (eventSlug == null) return { notFound: true }
  try {
    checkIfEventExist = await getEvent(eventSlug)
  } catch (err) {
    return {
      notFound: true,
    }
  }
  return {
    props: checkIfEventExist[0],
  }
}

export default Register
