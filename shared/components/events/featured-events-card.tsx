import Image from 'next/image'
import Link from 'next/link'
const HomeCard = (props: {
  name: String
  image: string
  desc: String
  slug: String
  eventCompleted: boolean
  startDate: string
  subTitle: String
}) => {
  return (
    <div className=" w-full px-14 md:px-28 py-4">
      <div className="bg-black-200 rounded-lg py-1 px-2 hidden md:flex">
        <div className=" md:flex">
          <div className="md:flex ">
            <div className="pl-6 my-auto text-center pr-6">
              <div className="text-base">{props.startDate} </div>
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
            <div className="md:flex">
              <div>
                {/* <Image
                  src={props.image}
                  alt="Picture of the author"
                  width={80}
                  height={80}
                /> */}
              </div>
              <div className="pl-6">
                <div className="text-4xl pb-1 font-medium">{props.name}</div>
                <div className="text-xl">{props.subTitle}</div>
              </div>
              <div className="absolute right-32 pt-4">
                <Link href={`/register?event=${props.slug}`}>
                  <button
                    className={`${
                      props.eventCompleted
                        ? `bg-logoGreen hover:bg-logoBlue`
                        : `bg-logoBlue hover:bg-logoGreen`
                    } text-white font-bold py-2 px-4 rounded-lg`}
                  >
                    {props.eventCompleted ? 'Get Certificate' : 'Register Now'}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <div className="bg-black-200 rounded-xl flex items-center justify-center pb-1 text-center">
          <div className="py-3">
            <span className="text-2xl font-medium pb-1">{props.name}</span>,{' '}
            {props.subTitle}
            <div className="flex justify-evenly py-4">
              <div className="my-auto">
                <div className="text-base">{props.startDate} </div>
              </div>
              <Image
                src="/images/borderline.png"
                alt="border line"
                width={2}
                height={65}
              />
              <img src={props.image} className="" />
            </div>
            <Link href={`/register?event=${props.slug}`}>
              <button
                className={`${
                  props.eventCompleted
                    ? `bg-logoGreen hover:bg-logoBlue`
                    : `bg-logoBlue hover:bg-logoGreen`
                } text-white font-bold py-2 px-4 rounded-lg float-left`}
              >
                {props.eventCompleted ? 'Get Certificate' : 'Register Now'}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeCard
