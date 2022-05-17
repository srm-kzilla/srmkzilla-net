import Link from 'next/link'

const EventDetails = (props: {
  title: string
  description: string
  slug: string
}) => {
  return (
    <div>
      <div>
        <h1 className="text-white text-3xl sm:text-5xl  font-semibold mt-10">
          {props.title}
        </h1>
        <p className="text-white  sm:text-xl mt-4 text-center md:text-left text-sm">
          {props.description}
        </p>
      </div>
      <div className="mt-4 ">
        <Link href={{ pathname: '/register', query: { event: props.slug } }}>
          <button className="focus:outline-none transform transition-transform duration-200 hover:-translate-y-1">
            <p className="bg-orange300 px-9 py-3 rounded-full font-bold lg:my-10 my-10 text-white ">
              REGISTER
            </p>
          </button>
        </Link>
      </div>
    </div>
  )
}

export default EventDetails
