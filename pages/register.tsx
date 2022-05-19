import { Field, Form, Formik } from 'formik'
import Head from 'next/head'
import Router from 'next/router'
import React, {useState} from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Footer from '../shared/components/footer'
import { getEvent, register } from '../utils/api'
import { registerFormData, registerValidationSchema } from '../utils/schema'
import { useReward } from 'react-rewards';

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

const Register = ( { title, description, eventCover, slug }: EventProps ) =>
{
  const { reward, isAnimating } = useReward('rewardId', 'confetti');
  const [ registerText, setRegisterText ] = useState( "REGISTER" );
  const FieldClass =
    'border-b-2 border-white bg-transparent placeholder-gray-500 text-right font-normal focus:outline-none xl:w-72 p-3 font-subHeading'

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
        setLoading( false );
        setRegisterText("REGISTERED");
        toast.success('Wohoooo, you have been registered successfully, Check your email!', {
          position: "top-right",
          autoClose: 10000,
          hideProgressBar: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        } )
        reward()

      } else if(registerUser.status===502) {
        toast.warn('Easy enthusiastic soldier, you have already been registered!')
        setLoading( false )

      }
    } catch (error) {
      toast.warn('Oops, Something went wrong! Refresh the page and contact us.')
      setLoading( false )

    }
  }
  return (
    <div className="bg-black overflow-hidden">
       <Head>
        <title>SRMKZILLA | Register</title>
        <meta
          name="description"
          content="SRMKZILLA is a community of young tech enthusiasts who eat, sleep and breath technology. We organize everything from technical workshops to gaming events, you name it & we do it. "
        />
        <link rel="icon" href="./images/kzillalogo.png" />
      </Head>
      <ToastContainer />
        <img
          className="bg-opacity-40 absolute top-0 left-0 xl:h-screen h-2/4 z-0"
          src="../images/projectbg-alt.png"
          alt="background"
          draggable={false}
        />
      <div className="relative h-screen max-h-screen text-white">
      
        <div className="z-20 h-full absolute inset-0 flex flex-col md:flex-row items-center justify-center gap-24 p-4 md:p-8 max-w-6xl mx-auto pt-72 md:pt-10 ">
          <div className="pr-0 md:pr-0">
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
                  className={`${FieldClass}`}
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
                  className={`w-full mt-10 m-1 sm:w-48 flex justify-around items-center py-2 bg-registerGreen text-black rounded-md px-2 cursor-pointer  ${
                    Object.keys(errors).length > 0 ||
                    (loading && 'cursor-not-allowed')
                  }`}
                  type="submit"
                >
                  <span id="rewardId" className="text-lg font-medium">
                    {loading ? 'Please wait...' : registerText}
                  </span>
                  <img src="../images/register_vector.png"></img>
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <div className='h-32'></div>
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
