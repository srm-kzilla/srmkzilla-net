import { PrizeType } from '@pages/events'

const PrizesCard = ({ prize }: { prize: PrizeType }) => {
  const { amount, description, asset, sponsor } = prize
  return (
    <div>
      <h1>{amount}</h1>
      <h1>{description}</h1>
      <h1>{asset}</h1>
      <h1>{sponsor}</h1>
    </div>
  )
}

export default PrizesCard
