import { PrizeType } from '@pages/events'

const PrizesCard = ({ prize }: { prize: PrizeType }) => {
  const { amount, description, asset, sponsor } = prize
  return (
    <div className="bg-black-200 w-96 rounded-xl xl:mx-12 mx-6 p-4 mb-10 shadow-box">
      <div className="h-60 mb-6  ">
        <img
          src={asset}
          alt="card-img"
          draggable={false}
          className="object-fill w-full h-full rounded-2xl"
        />
      </div>
      <div className="md:pl-10 xl:px-0">
        {amount && (
          <h1 className="text-white text-center md:text-left text-3xl sm:text-3xl  font-medium mt-5">
            Amount : ₹{amount}
          </h1>
        )}
        <p className="text-white font-light mt-3 md:max-w-xl">{description}</p>
        <br />
        <h1>
          Sponsor : <br /> {sponsor}
        </h1>
      </div>
    </div>
  )
}

export default PrizesCard
