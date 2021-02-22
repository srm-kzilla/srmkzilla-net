import Head from 'next/head'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Fade from 'react-reveal/Fade'
import ProjectIcon from '../shared/components/project_icons'
import sanityClient from '../shared/client'
import Service from '../shared/components/services'
import Navbar from '../shared/components/navbar'
import Footer from '../shared/components/footer'

const projects = () => {
  const [projectData, setProject] = useState([])
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"]{
        title,
        slug,
        logo{
          asset->{
            _id,
            url
          },
          alt
        }
      }`
      )
      .then((data) => setProject(data))
      .catch(console.error)
  }, [])

  return (
    <div className="overflow-hidden">
      <Head>
        <title>SRMKZILLA | Projects</title>
        <link rel="icon" href="./images/kzillalogo.png" />
      </Head>
      <div className="h-screen bg-black-200">
        <Navbar />
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
          {projectData &&
            projectData.map(
              (
                project: {
                  title: String
                  logo: { asset: { url: string | undefined } }
                },
                index: any
              ) => (
                <Link href="/projects/[slug]" as={`/projects/${project.title}`}>
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
        <Service />
      </div>
      <Footer />
    </div>
  )
}

export default projects
