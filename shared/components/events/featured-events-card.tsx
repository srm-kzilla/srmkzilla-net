import { motion } from 'framer-motion'
import dayjs from 'dayjs'
import Image from 'next/image'
const HomeCard = (props: {
  name: String
  image: string
  desc: String
  link: String
  eventCompleted: boolean
  date: number
  subTitle: String
}) => {
  const date = formatDate(props.date)
  return (
    <div className=" w-full px-28 py-4">
      <div className="bg-black-200 rounded-lg py-1 px-2">
        <div className="flex">
          <div className="flex ">
            <div className="pl-6 my-auto text-center pr-6">
              <div className="text-base"> {date.month}</div>
              <div className="text-3xl"> {date.day} </div>
              <div className="text-base">{date.year} </div>
            </div>
            <div className="mt-3">
              <Image
                src="/images/borderline.png"
                alt="border line"
                width={2}
                height={75}
              />
            </div>
          </div>
          <div className="my-auto pt-2 pl-8">
            <div className="flex">
              <div>
                <Image
                  src={props.image}
                  alt="Picture of the author"
                  width={80}
                  height={80}
                />
              </div>
              <div className="pl-6">
                <div className="text-4xl pb-1">{props.name}</div>
                <div className="text-xl">{props.subTitle}</div>
              </div>
              <div className="absolute right-32 pt-4">
                <button className="bg-logoBlue hover:bg-logoGreen text-white font-bold py-2 px-4 rounded-lg">
                  Button
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeCard

const formatDate = (date: number) => {
  return {
    day: dayjs(new Date(date)).format('DD'),
    month: dayjs(new Date(date)).format('MMM'),
    year: dayjs(new Date(date)).format('YYYY'),
  }
}
