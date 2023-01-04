import { EventType } from '@pages/events'
import PrizesCard from './prizes-card'

const PrizePage = ({ event }: { event: EventType }) => {
  const { title, description, slug, prizes } = event
  return (
    <div className="mx-auto mt-16">
      {prizes[0] && (
        <>
          <h1 className="text-6xl sm:text-6xl font-semibold mt-10 mx-auto text-center md:mb-20">
            Prizes
          </h1>
          <div className="flex flex-wrap xl:flex-row flex-col items-center justify-center sm:mt-20 mt-14 pb-10">
            {prizes.map((i) => {
              return <PrizesCard prize={i} />
            })}
          </div>
        </>
      )}
    </div>
  )
}

export default PrizePage
