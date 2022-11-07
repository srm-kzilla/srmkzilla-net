import { motion } from 'framer-motion'

export const PrizeCard = (props: {
  amount: string
  descripition: string
  asset: string
  sponsor: string
}) => {
  return (
    <motion.div
      className="bg-black-200 sm:w-72  w-64 rounded-xl xl:mx-12 mx-6 p-2 mb-10 shadow-box"
      whileHover={{ scale: 1.05 }}
    >
      <img
        className="h-full w-full object-cover rounded-xl overflow-hidden"
        draggable={false}
        src={props.asset}
        alt="card-image"
      />
      <h1 className="text-white text-center text-xl font-medium mt-5">
        Amount: {props.amount}
      </h1>
      <p className="text-white font-light px-3 mt-3 text-xs">
        {props.descripition}
      </p>
      <h1 className="text-white text-center text-xl font-medium mt-5">
        Sponsor <br /> {props.sponsor}
      </h1>
    </motion.div>
  )
}
