import { DOMAINS } from '@lib/data/domains'
import Footer from '@shared/components/footer'
import MemberCard from '@shared/components/team/membercard'
import Head from 'next/head'
import type { GetStaticPropsContext } from 'next'

import * as fs from 'fs'
import * as path from 'path'

interface Member {
  url: string
  name: string
  designation: string
  domain: string
}

const Team = ({
  year,
  teamMembers,
}: {
  year: string
  teamMembers: Array<Member>
}) => {
  const title = `SRMKZILLA | Team of ${year}`
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="SRMKZILLA is a community of young tech enthusiasts, Meet the team,
            An awesome tech community driven by passion and innovation "
        />
        <link rel="icon preload canonical" href="/images/kzillalogo.png" />
      </Head>
      <div className="bg-black overflow-hidden ">
        <div className="mt-24 mb-20">
          <h1 className="text-4xl font-semibold text-gray-100 text-center mb-10 mx-2">
            Team of {year}
          </h1>
          <h3 className="text-xl text-gray-100 text-center px-5">
            An awesome tech community driven by passion and innovation
          </h3>
        </div>
        <div className=" text-white rounded-2xl pt-8 px-1  md:p-10 bg-black-200  md:mx-20 mx-5">
          {DOMAINS.map((domain, idx) => (
            <div className="mb-10 mt-20" key={idx}>
              <div className="mx-5 lg:mx-36">
                <hr
                  className="text-center uppercase hr-text text-3xl md:text-4xl font-bold pb-10"
                  data-content={domain.name}
                />
              </div>

              <h5 className="text-center team_text text-lg text-gray-300 md:text-xl  pb-20">
                {domain.desc}
              </h5>

              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 lg:gap-2 items-center">
                {teamMembers.map((member, index) => {
                  if (member.domain == `${domain.name}`) {
                    return (
                      <MemberCard
                        key={index}
                        src={member.url}
                        name={member.name}
                        designation={member.designation}
                      />
                    )
                  }
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  )
}

export async function getStaticPaths() {
  const filePath = path.resolve(process.cwd(), 'pages', 'team', 'data')
  const years = fs
    .readdirSync(filePath)
    .map((file) => file.replace(/\.json$/, ''))

  const paths = years.map((year) => ({
    params: { year },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const year = context.params?.year as string
  const teamMembers = JSON.parse(
    fs.readFileSync(
      path.join(process.cwd(), 'pages', 'team', 'data', `${year}.json`),
      'utf8'
    )
  )

  return {
    props: { year, teamMembers },
  }
}

export default Team
