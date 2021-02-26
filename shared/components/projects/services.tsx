const Fade = require('react-reveal/Fade')

import CardProject from './card-projects'

const Service = ({ serviceProjects }) => {
  return (
    <div className="mt-36">
      <Fade up>
        <h1 className="text-white text-center text-4xl">Services</h1>
      </Fade>
      <Fade up>
        <p className="text-white text-center font-light text-xl mt-3 sm:px-auto px-8">
          Projects that we have done for others
        </p>
      </Fade>

      <div className="flex flex-wrap items-center justify-center sm:mt-20 mt-14 pb-10">
        {serviceProjects &&
          serviceProjects.map(
            (card: {
              title: String
              logo: { asset: { url: String | undefined } }
              description: String
              link: String
            }) => (
              <CardProject
                key={card.title as string}
                name={card?.title}
                desc={card?.description}
                image={card?.logo?.asset?.url}
                link={card?.link}
              />
            )
          )}
      </div>
    </div>
  )
}

export default Service
