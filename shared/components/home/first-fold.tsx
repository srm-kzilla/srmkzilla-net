import { motion } from 'framer-motion'
import Navbar from '../navbar'

const FirstFold = () => (
  <section className="hero h-screen bg-hero-pattern bg-fixed overflow-hidden relative">
    <Navbar />
    <div className="absolute top-2/4 transform -translate-y-1/2">
      <motion.div className="relative w-screen sm:h-64 h-52 z-30">
        <motion.img
          className="sm:h-64 h-52 absolute left-2/4 transform -translate-x-1/2"
          src="./images/hero_logo.gif"
          draggable="false"
        />
      </motion.div>

      <div className="lg:px-60 group sm:px-32 px-10 z-30 mt-10">
        <h1 className="text-center text-white sm:text-5xl text-4xl sm:mt-auto mt-5 font-semibold ">
          The campus club you love
        </h1>
        <p className="text-white opacity-30 text-center text-2xl mt-6">
          We make tech exuberant and open source. We know no limits.
        </p>
      </div>
    </div>
  </section>
)

export default FirstFold
