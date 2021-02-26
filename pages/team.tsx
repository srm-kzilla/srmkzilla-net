import Head from 'next/head'

import Navbar from '@shared/components/navbar'
import MemberCard from '@shared/components/team/membercard'
import NewCarousel from '@shared/components/team/carousel'
import Footer from '@shared/components/footer'
import { getTeamMembers } from '@lib/sanity-api'

const Team = ({ teamMembers }) => {
  return (
    <>
      <Head>
        <title>SRMKZILLA | Team</title>
        <meta
          name="description"
          content="SRMKZILLA is a community of young tech enthusiasts, Meet the team,
            An awesome tech community driven by passion and innovation "
        />
        <link rel="icon preload canonical" href="./images/kzillalogo.webp" />
      </Head>
      <div className="bg-black overflow-hidden ">
        <Navbar />
        <p>fhjfvk</p>
        <div className="my-20">
          <h1 className="text-4xl font-semibold text-gray-100 text-center mb-10 mx-2">
            Meet the team
          </h1>
          <h3 className="text-2xl text-gray-100 text-center px-5">
            An awesome tech community driven by passion and innovation
          </h3>
        </div>
        <div className=" text-white rounded-2xl pt-8 px-1 md:p-10 bg-black-200 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 lg:gap-2 md:mx-20 mx-2">
          {teamMembers.length > 0 &&
            teamMembers.map(
              (
                member: {
                  picture: { asset: { url: string } }
                  name: string
                  designation: string
                  description: { asset: { url: string } }
                },
                index
              ) => {
                return (
                  <MemberCard
                    key={index}
                    src={member?.picture?.asset?.url}
                    name={member?.name}
                    designation={member?.designation}
                    audiourl={member?.description?.asset?.url}
                  />
                )
              }
            )}
        </div>

        <div className="my-10 px-0 md:px-10">
          <div className="flex flex-col place-items-center my-20">
            <h1 className="text-4xl font-semibold text-gray-100 text-center">
              Hear it form the team
            </h1>
            <h3 className="w-2/3 text-sm md:text-lg text-gray-100 text-center mt-5">
              The journey of building an awesome tech community is fuelled by
              the ardour of its team members. At SRMKZILLA, their ride has been
              full of incredible experiences to inspire and aspire. Let us hear
              what they have to say!
            </h3>
          </div>
          <NewCarousel />
        </div>
      </div>
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  const teamMembers = await getTeamMembers()

  return {
    props: { teamMembers },
  }
}

export default Team
