import React from 'react'
import Head from 'next/head'
import InstagramEmbed from 'react-instagram-embed'
import Tilt from 'react-parallax-tilt'
import Navbar from '../shared/components/navbar'
import Footer from '../shared/components/footer'
import * as BlockContent from '@sanity/block-content-to-react'
const Fade = require('react-reveal/Fade')
import { motion } from 'framer-motion'
import Router, { useRouter } from 'next/router'
import Link from 'next/link'
import { getEvent, register } from '../utils/services/api'
import { useFormik } from 'formik'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { AxiosRequestConfig, AxiosResponse } from 'axios'
type EventProps = {
  title: string
  description: string
  banner: string
  slug: string
  _id: string
  startDate: Date
  icons: string[]
  eventCover: string
  isCompleted: boolean
  err?: string
}

const Register = ({ title, description, banner, slug }: EventProps) => {
  console.log(title)
  const validate = (values) => {
    const errors: any = {}
    if (!values.name) {
      errors.name = 'Required'
    } else if (values.name.length > 20) {
      errors.name = 'Must be 20 characters or less'
    }

    if (!values.phoneNumber) {
      errors.phoneNumber = 'Required'
    } else if (values.phoneNumber.length > 10) {
      errors.phoneNumber = 'Must be 10 characters'
    }

    if (!values.email) {
      errors.email = 'Required'
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address'
    }
    if (!values.registrationNumber) {
      errors.registrationNumber = 'Required'
    }
    return errors
  }
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      registrationNumber: '',
      phoneNumber: '',
    },
    validate,
    validateOnChange: false,

    onSubmit: async (values) => {
      const postData = {
        name: values.name,
        email: values.email,
        phoneNumber: parseInt(values.phoneNumber),
        regNumber: values.registrationNumber,
        slug: slug,
      }
      const registerUser = await register(postData)
      if (registerUser.status == 201) {
        toast.success('Registered successfully !')
        setTimeout(() => {
          Router.push('/')
        }, 2000)
      } else {
        toast.warn('Oops ! Something went wrong !')
      }
    },
  })
  return (
    <div className="bg-black overflow-hidden">
      <Head>
        <title>{title} Registration</title>
      </Head>

      <div className="bg-black overflow-hidden ">
        <Navbar />
        <ToastContainer />

        <div className="flex justify-center mt-16">
          <div className="flex flex-col w-5/6 justify-center items-center mt-12 bg-register-event rounded-2xl sm:flex-row">
            <div className="w-full px-4 flex flex-col items-center m-2 h-2/3 sm:w-2/5 sm:items-start sm:p-2 m-2">
              <h1 className="text-white text-4xl r font-bold p-2 mb-6 lg:text-5xl ">
                {title}
              </h1>

              <h4 className="w-full ml-2 text-white text-base font-light lg:text-base xl:w-2/3 sm:font-light">
                {description}
              </h4>
            </div>

            <div className=" w-full items-center  sm:w-3/5 h-auto p-1 flex flex-col m-1  sm:items-end justify-around sm:mb-20 sm:p-4 sm:m-4">
              <div className="flex flex-col p-2 m-2  items-center sm:items-end  justify-around  sm:pt-10">
                <h1 className="text-white text-4xl font-bold p-2 mb-6 lg:text-5xl">
                  Register
                </h1>
                <form
                  className="flex flex-col p-2 m-2  items-end justify-around"
                  onSubmit={formik.handleSubmit}
                >
                  <div className="h-14 flex flex-col items-start sm:items-end mb-2">
                    <input
                      className="border-b-2  border-white bg-transparent  w-56 text-white placeholder-white sm:text-right font-normal focus:outline-none xl:w-72  outline-none   appearance-none bg-transparent "
                      placeholder="Name"
                      name="name"
                      onChange={formik.handleChange}
                      value={formik.values.name}
                    />
                    {formik.errors.name ? (
                      <span className="text-red-500 mt-2 text-sm">
                        {formik.errors.name}
                      </span>
                    ) : (
                      <span></span>
                    )}
                  </div>
                  <div className="h-14 flex flex-col items-start sm:items-end mb-2">
                    <input
                      className="border-b-2  border-white w-56 bg-transparent text-white placeholder-white sm:text-right font-normal focus:outline-none xl:w-72 "
                      placeholder="Email"
                      name="email"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                    />
                    {formik.errors.email ? (
                      <span className="text-red-500   text-sm">
                        {formik.errors.email}
                      </span>
                    ) : (
                      <></>
                    )}
                  </div>
                  <div className="h-14 flex flex-col items-start sm:items-end mb-2">
                    <input
                      className="border-b-2    border-white  w-56  bg-transparent text-white placeholder-white sm:text-right font-normal focus:outline-none xl:w-72 "
                      placeholder="Registration Number"
                      name="registrationNumber"
                      onChange={formik.handleChange}
                      value={formik.values.registrationNumber}
                    />
                    {formik.errors.registrationNumber ? (
                      <span className="text-red-500 text-sm">
                        {formik.errors.registrationNumber}
                      </span>
                    ) : (
                      <></>
                    )}
                  </div>
                  <div className="h-14 flex flex-col items-start sm:items-end mb-2">
                    <input
                      className="border-b-2   border-white w-56 bg-transparent text-white placeholder-white sm:text-right font-normal focus:outline-none xl:w-72 "
                      placeholder="Mobile Number"
                      name="phoneNumber"
                      onChange={formik.handleChange}
                      value={formik.values.phoneNumber}
                    />
                    {formik.errors.phoneNumber ? (
                      <span className="text-red-500   text-sm">
                        {formik.errors.phoneNumber}
                      </span>
                    ) : (
                      <></>
                    )}
                  </div>
                  <button
                    className="w-full m-1 sm:w-48 flex justify-around items-center   py-1 bg-registerGreen rounded-md px-2 cursor-pointer"
                    type="submit"
                  >
                    <span className="font-medium text-lg font-medium">
                      Register
                    </span>
                    <img src="../images/register_vector.png"></img>
                  </button>
                </form>
              </div>
            </div>

            {/* <img className="p-4 m-8 rounded-3xl" src="../images/banner.png" /> */}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
export async function getServerSideProps(context) {
  const eventSlug = context.query != undefined ? context.query.event : null
  let checkIfEventExist: EventProps
  if (eventSlug == null) return { notFound: true }
  try {
    checkIfEventExist = await getEvent(eventSlug)
    console.log(checkIfEventExist)
  } catch (err) {
    return {
      notFound: true,
    }
  }

  return {
    props: checkIfEventExist,
  }
}

export default Register
