import { EventType } from '@pages/events'
import Link from 'next/link'
import TiltCard from '@shared/components/events/tilt-card'

const EventDetails = (props: { event: EventType }) => {
  const { title, tagline, description, slug, eventCover } = props.event
  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:gap-14 lg:gap-24">
      <div className="w-full md:w-1/2">
        <div className="mb-4 text-center md:text-left">
          <h1 className="text-3xl sm:text-5xl  font-semibold mt-10">{title}</h1>
          <h3>{tagline}</h3>
          <p className="sm:text-xl mt-4 text-center md:text-left text-sm">
            {description}
          </p>
        </div>
        <div className="flex items-center md:items-start justify-center md:justify-start">
          <Link
            href={{
              pathname: '/register',
              query: { event: 'multiverse_of_iot' },
            }}
          >
            <button className="focus:outline-none transform transition-transform duration-200 hover:-translate-y-1">
              <p className="bg-orange300 px-9 py-3 rounded-full font-bold lg:my-10 my-10 text-white ">
                REGISTER
              </p>
            </button>
          </Link>
        </div>
      </div>

      <TiltCard image={eventCover} />
    </div>
  )
}

export default EventDetails
