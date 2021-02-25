import Head from 'next/head'
import Link from 'next/link'
const Fade = require('react-reveal/Fade')

import ProjectIcon from '@shared/components/projects/project-icons'
import Service from '@shared/components/projects/services'
import Navbar from '@shared/components/navbar'
import Footer from '@shared/components/footer'
import { getProjects, getServiceProjects } from '@lib/sanity-api'

const Projects = ({ projects, serviceProjects }) => {
  return (
    <div className="overflow-hidden">
      <Head>
        <title>SRMKZILLA | Projects</title>
        <link rel="icon" href="./images/kzillalogo.png" />
      </Head>
      <div>
        <Navbar />
        <video
          autoPlay
          loop
          src="/images/projects-hero.mp4"
          className="h-screen mx-auto"
        ></video>
      </div>
      <div className="bg-black pt-28">
        <Fade up>
          <h1 className="text-white text-center text-4xl">Projects</h1>
        </Fade>
        <Fade up>
          <p className="text-white text-center font-light text-xl mt-3 sm:px-auto px-8">
            Get ready to be swept off your feet
          </p>
        </Fade>
        <div className="flex flex-wrap items-center justify-center lg:px-36 md:px-24 px-10 mt-4">
          {projects &&
            projects.map(
              (project: {
                title: String
                logo: { asset: { url: string | undefined } }
              }) => (
                <Link
                  href="/projects/[slug]"
                  as={`/projects/${project.title}`}
                  key={project.title as string}
                >
                  <a>
                    <ProjectIcon
                      icon={project?.logo?.asset?.url}
                      title={project?.title}
                    />
                  </a>
                </Link>
              )
            )}
        </div>
        <Service serviceProjects={serviceProjects} />
      </div>
      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const projects = await getProjects()
  const serviceProjects = await getServiceProjects()

  return {
    props: { projects, serviceProjects },
  }
}

export default Projects
