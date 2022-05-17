import { motion } from 'framer-motion'

const SpeakerPage = (props: {
  name: String
  image?: string
  about: String
  linkedIn: String
}) => {
  return (
    <motion.div
      className="bg-black-200 sm:w-72 w-64 rounded-xl xl:mx-12 mx-6 p-2 mb-10 shadow-box"
      whileHover={{ scale: 1.05 }}
    >
      {props.image ? (
        <img
          className="h-full w-full object-cover rounded-xl overflow-hidden"
          draggable={false}
          src={props.image}
          alt="card-image"
        />
      ) : (
        <div></div>
      )}

      <h1 className="text-white text-center text-xl font-medium mt-5">
        {props.name}
      </h1>
      <p className="text-white font-light px-3 mt-3 text-xs">{props.about}</p>
      <a>
        <p className="text-white font-light px-3 mt-3 text-xs">
          {props.linkedIn}
        </p>
      </a>
    </motion.div>
  )
}

export default SpeakerPage
