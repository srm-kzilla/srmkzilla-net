import { EventType } from '@pages/events'
import Card from '@shared/components/events/card'
import Fade from 'react-reveal/Fade'

interface WhatsNewProps {
  cardContent: EventType[]
}

const WhatsNew = ({ cardContent }: WhatsNewProps) => (
  <section className="works">
    <div className="bg-black-200 sm:pt-32 pt-24">
      <Fade up>
        <h1 className="text-white font-medium text-center text-4xl">
          Our latest brew
        </h1>
      </Fade>

      <div className="flex flex-wrap items-center justify-center sm:mt-20 mt-14 pb-10">
        {cardContent &&
          cardContent.map((card, index) => (
            <Card
              key={index}
              name={card?.title}
              eventCover={card?.eventCover}
              tagline={card?.tagline}
              slug={card?.slug}
              eventCompleted={false}
              startDate={''}
            />
          ))}
      </div>
    </div>
  </section>
)

export default WhatsNew
