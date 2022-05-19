import Card from '@shared/components/events/featured-events-card'
import Fade from 'react-reveal/Fade'

interface Card {
  title: String
  picture: string
  description: String
  slug: String
  eventCompleted: boolean
  startDate: string
  subTitle: String
}

const WhatsNew = ({ cardContent }: { cardContent: Card[] }) => (
  <section className="works">
    <div className="bg-black sm:pt-26 pt-24">
      <Fade up>
        <h1 className="text-white font-medium text-center text-4xl">
          Featured Events
        </h1>
      </Fade>

      <div className="flex flex-wrap items-center justify-center sm:mt-20 mt-14 pb-10">
        {cardContent &&
          cardContent.map((card, index) => (
            <Card
              key={index}
              name={card?.title}
              image={card?.picture}
              desc={card?.description}
              slug={card?.slug}
              eventCompleted={card.eventCompleted}
              subTitle={card.subTitle}
              startDate={card.startDate}
            />
          ))}
      </div>
    </div>
  </section>
)

export default WhatsNew
