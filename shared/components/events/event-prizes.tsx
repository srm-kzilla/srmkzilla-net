import { EventType } from '@pages/events'
import { PrizeCard } from './prize-card'

const EventPrizes = (props: { event: EventType }) => {
  const { prizes } = props.event

  return (
    <>
      {prizes.map((prize, index) => {
        <PrizeCard
          key={index}
          amount={prize.amount}
          descripition={prize.descripition}
          asset={prize.asset}
          sponsor={prize.sponsor}
        />
      })}
    </>
  )
}

export default EventPrizes
