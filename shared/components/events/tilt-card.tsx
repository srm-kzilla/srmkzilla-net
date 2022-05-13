import Tilt from 'react-parallax-tilt'

const TiltCard = (props: { image: string }) => {
  return (
    <div className="z-10 lg:w-2/4 sm:w-3/4 w-full relative lg:mx-0 transform lg:translate-x-0 sm:translate-x-5 translate-x-0 mt-44 lg:mt-64 mx-auto ">
      <div className="absolute videoCard h-64 z-0 w-2/3 left-2/4 top-2/3 transform -rotate-3 rounded-lg sm:block hidden -translate-y-1/2 -translate-x-1/2"></div>
      <Tilt>
        <div className="absolute bg-white sm:h-64 h-56 z-20 sm:w-2/3 w-3/4 sm:mx-auto left-2/4 top-3/4 transform  rounded-lg -translate-y-36 sm:-translate-x-64  -translate-x-1/2 overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={props.image}
            alt="poster"
          />
        </div>
      </Tilt>
    </div>
  )
}
export default TiltCard
