import Fade from 'react-reveal/Fade'

import Card from '@shared/components/events/card'

const WhatsNew = ({ cardContent }) => (
  <section className="works">
    <div className="bg-black sm:pt-32 pt-24">
      <Fade up>
        <h1 className="text-white font-medium text-center text-4xl">
          What's New
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
              },
              index
            ) => (
              <Card
                key={index}
                title={card?.title}
                image={card?.picture}
                desc={card?.description}
                slug={card?.link}
              />
            )
          )}
      </div>
    </div>
  </section>
)

export default WhatsNew
