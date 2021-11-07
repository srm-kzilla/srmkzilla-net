import Fade from 'react-reveal/Fade'

import Card from '@shared/components/events/featured-events-card'

const WhatsNew = ({ cardContent }) => (
  <section className="works">
    <div className="bg-black sm:pt-32 pt-24">
      <Fade up>
        <h1 className="text-white font-medium text-center text-4xl">
          Featured Events
        </h1>
      </Fade>

      <div className="flex flex-wrap items-center justify-center sm:mt-20 mt-14 pb-10">
        {cardContent &&
          cardContent.map(
            (
              card: {
                title: String
                picture: string
                description: String
                link: String
                eventCompleted: boolean
                date: number
                subTitle: String
              },
              index
            ) => (
              <Card
                key={index}
                name={card?.title}
                image={card?.picture}
                desc={card?.description}
                link={card?.link}
                eventCompleted={card.eventCompleted}
                subTitle={card.subTitle}
                date={card.date}
              />
            )
          )}
      </div>
    </div>
  </section>
)

export default WhatsNew
