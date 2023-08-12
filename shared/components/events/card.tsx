import { motion } from 'framer-motion'

const HomeCard = (props: {
  name: String
  eventCover: string
  tagline: String
  slug: String
  eventCompleted: boolean
  registrationCompleted: boolean
  startDate: string
}) => {
  return (
    <motion.div
      className="bg-black-200 sm:w-72  w-64 rounded-xl xl:mx-12 mx-6 p-2 mb-10 shadow-box"
      whileHover={{ scale: 1.05 }}
    >
      <img
        className="h-full w-full object-cover rounded-xl overflow-hidden"
        draggable={false}
        src={props.eventCover}
        alt="card-image"
      />

      <h1 className="text-white text-center text-xl font-medium mt-5">
        {props.name}
      </h1>
      <p className="text-white font-light px-3 mt-3 text-xs">{props.tagline}</p>
      <div className="text-center mt-10 mb-5 flex gap-x-5 justify-center items-center">
        <a href={`events/${props.slug}`} rel="noopener noreferrer">
          <button className="bg-black border rounded-full text-white text-xs px-5 py-1 border-white focus:outline-none">
            Know More
          </button>
        </a>
        {props.eventCompleted && props.registrationCompleted ? (
          <div className="bg-black border rounded-full text-gray-100 text-xs px-5 py-1 border-gray-100 opacity-30 focus:outline-none">
            Event Ended
          </div>
        ) : props.registrationCompleted ? (
          <div className="bg-black border rounded-full text-red-500 text-xs px-5 py-1 border-red-500 focus:outline-none">
            Registration Closed
          </div>
        ) : (
          <a href={`/register?event=${props.slug}`} rel="noopener noreferrer">
            <button className="bg-black border rounded-full text-registerGreen text-xs px-5 py-1 border-registerGreen focus:outline-none">
              Register Now
            </button>
          </a>
        )}
      </div>
    </motion.div>
  )
}

export default HomeCard
