import Tilt from 'react-parallax-tilt'

const TiltCard = (props: { image: string }) => {
  return (
    <div className="z-10 sm:w-3/4 lg:w-2/4 w-full relative lg:mx-0 mx-auto transform">
      {/* <div className="absolute videoCard h-64 z-0 w-2/3 left-2/4 top-2/3 transform -rotate-3 rounded-lg sm:block hidden"></div> */}
      <Tilt>
        <div className="z-20 overflow-hidden">
          <img
            className="w-full h-full object-cover rounded-3xl"
            src={props.image}
            alt="poster"
          />
        </div>
      </Tilt>
    </div>
  )
}
export default TiltCard
