import { motion } from 'framer-motion'

const HomeCard = (props: {
  name: String
  image: string
  desc: String
  slug: String
  eventCompleted: boolean
  startDate: string
}) => {
  return (
    <motion.div
      className="bg-black-200 sm:w-72 w-64 rounded-xl xl:mx-12 mx-6 p-2 mb-10 shadow-box"
      whileHover={{ scale: 1.05 }}
    >
      <img
        className="h-full w-full object-cover rounded-xl overflow-hidden"
        draggable={false}
        src={props.image}
        alt="card-image"
      />

      <h1 className="text-white text-center text-xl font-medium mt-5">
        {props.name}
      </h1>
      <p className="text-white font-light px-3 mt-3 text-xs">{props.desc}</p>
      <div className="text-center mt-10 mb-5 flex gap-x-5 justify-center items-center">
        <a href={`events/${props.slug}`} rel="noopener noreferrer">
          <button className="bg-black border rounded-full text-white text-xs px-5 py-1 border-white focus:outline-none">
            Know More
          </button>
        </a>
        <a href={`/register?event=${props.slug}`} rel="noopener noreferrer">
          <button className="bg-black border rounded-full text-white text-xs px-5 py-1 border-white focus:outline-none">
            Register Now
          </button>
        </a>
      </div>
    </motion.div>
  )
}

export default HomeCard
