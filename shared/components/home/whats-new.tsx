import Card from '@shared/components/home/card'
import Fade from 'react-reveal/Fade'

const WhatsNew = ({ cardContent }) => (
  <section className="works">
    <div className="bg-black-200 sm:pt-32 pt-24">
      <Fade up>
        <h1 className="text-white font-medium text-center text-4xl">
          Our latest brew
        </h1>
      </Fade>

      <div className="flex flex-wrap items-center justify-center sm:mt-20 mt-14 pb-10">
        {cardContent &&
          cardContent.map(
            (
              card: {
                title: String
                picture: { asset: { url: string } }
                description: String
                link: String
              },
              index
            ) => (
              <Card
                key={index}
                name={card?.title}
                image={card?.picture?.asset?.url}
                desc={card?.description}
                link={card?.link}
              />
            )
          )}
      </div>
    </div>
  </section>
)

export default WhatsNew
