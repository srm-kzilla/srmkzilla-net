import { EventType } from '@pages/events'
import PrizesCard from './prizes-card'

const PrizePage = ({ event }: { event: EventType }) => {
  const { title, description, slug, prizes } = event
  return (
    <div className="mx-auto mt-16">
      <h1 className="text-6xl sm:text-6xl font-semibold mt-10 mx-auto text-center md:mb-20">
        Prizes
      </h1>
      <div className="flex flex-col mt-10 justify-center w-full">
        {prizes.map((i) => {
          return <PrizesCard prize={i} />
        })}
      </div>
    </div>
  )
}

export default PrizePage
