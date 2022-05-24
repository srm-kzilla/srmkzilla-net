import { EventType } from '@pages/events'
import React from 'react'
const Fade = require('react-reveal/Fade')
import { Chrono } from 'react-chrono'

const EventTimeline = ({ event }: { event: EventType }) => {
  const { timeline } = event

  const arrangeChronoData = () => {
    const newArray = timeline.map((e, i) => {
      return {
        cardDetailedText: [...e.description.split('\n'), ''],
        cardTitle: e.title,
        title: e.date,
      }
    })
    return newArray
  }
  return (
    <Fade up>
      <div className="mx-auto md:mt-16 mt-0 md:w-4/6">
        <h1 className="text-6xl sm:text-6xl font-semibold mt-10 mx-auto text-center md:mb-20 mb-20">
          Timeline
        </h1>
        <ul className="md:m-4 flex w-full flex-col md:flex-row gap-8 lg:gap-16">
          {timeline && (
            <Chrono
              items={arrangeChronoData()}
              mode="VERTICAL_ALTERNATING"
              disableNavOnKey
              useReadMore={true}
              scrollable={false}
              hideControls
              borderLessCards={true}
              disableClickOnCircle
              cardHeight={160}
              fontSizes={{
                cardSubtitle: '1.3rem',
                cardText: '0.9rem',
                cardTitle: '1.2rem',
              }}
              theme={{
                primary: 'white',
                secondary: '#FF644E',
                cardBgColor: '#151319',
                cardForeColor: 'white',
                titleColor: 'white',
              }}
            />
          )}
        </ul>
      </div>
    </Fade>
  )
}
export default EventTimeline
