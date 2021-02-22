import React from 'react'
import Navbar from '../shared/components/navbar'
import Head from 'next/head'
import CardSwipe from '../shared/components/about/swipe-card'
import {
  LeftTimeline,
  RightTimeline,
} from '../shared/components/about/timeline'
import Cardsnew from '../shared/components/about/newCards'
import FooterCommon from '../shared/components/footer_common'

const values = 
  {
    name: 'Values',
    desc1:'We aim to grow bit by bit by our experiences, ideas, and perspectives manifested by the community of keen individuals',
    desc2: 'To help these individuals create a powerful nation and solve complex technical problems hindering their development.',
    desc3:'As a part of Mozilla’s open-source community, our mission is to provide a platform for inquisitive minds by guiding and empowering their aspirations.'
  }

  

const mission =
  {
    name: 'Mission',
    desc1:'To guide these individuals to exhibit professional work ethics, commitment, and leadership qualities to emerge as influential leaders in the times to come.',
    desc2:'To help these individuals create a powerful nation and solve complex technical problems hindering their development.',
    desc3: 'As a part of Mozilla’s open-source community, our mission is to provide a platform for inquisitive minds by guiding and empowering their aspirations. ',
  }

const vision = 
  {
    name: 'Vision',
    desc1:'To advocate free education and appraise the power of technical education in the form of seminars, workshops, and webinars.',
    desc2:'To spread awareness about the latest technological advancements and helping the curious minds choose their niche to feed in. ',
    desc3:'A community that discovers and invests in young minds that have the potential to make a difference.',
  }


const aboutus = () => {
  return (
    <div className="bg-black text-white overflow-hidden">
      <Head>
        <title>SRMKZILLA | About</title>
        <link rel="icon" href="./images/kzillalogo.png" />
      </Head>
      <Navbar />

      <div className="w-screen mt-0 md:mt-12">
        <div className="md:h-screen h-auto items-center flex justify-center">
          <div className="md:h-3/4 h-full sm:w-10/12 w-full md:mb-16 mb-8 rounded-none md:rounded-xl overflow-hidden">
            <img
              src="/images/mozofest.png"
              draggable={false}
              alt="image"
              className="object-contain"
            />
            {/* <iframe className="object-contain" width="100%" height="100%" src="https://www.youtube.com/embed/LPt3vocZGfE" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
          </div>
        </div>
        <div className="flex flex-wrap
         items-center justify-center">
            <Cardsnew data={values} />
            <Cardsnew data={mission} />
            <Cardsnew data={vision} />        
      
        </div>

        <div className="h-auto overflow-hidden bg-black text-white lg:mx-auto mt-14 md:mt-20">
          <div className=" mx-auto my-4">
            <h2 className="text-4xl lg:text-5xl text-center text-white ">
              Our Virtues
            </h2>
          </div>

          <div className=" h-auto overflow-hidden flex items-center justify-center bg-black">
            <div className="container  w-full h-full">
              <div className="relative wrap overflow-hidden pr-3 py-10 lg:p-10 h-full mx-4 md:mx-16 lg:mx-10">
                <div className=" absolute lg:top-20 invisible md:visible lg:visible md:left-1/2 lg:left-1/2 border-white h-full border"></div>
                {/* timeline */}
                <LeftTimeline
                  title="MOZOFEST"
                  desc="A three-day extravaganza to emanate the power of open source community sprinkled with a load of fun and frolic. MOZOFEST is our annual flagship event that witnesses speakers and developers from the community who educate the young minds about the latest developments in technology. Along with the intriguing tech talks, we organize many more exciting events to provide the perfect respite for people from all walks of life."
                  date="29-31 March, 2019"
                  chat="lorem ipsum"
                  bg="bg-mozofest"
                />
                <RightTimeline
                  title="MOZOHACK"
                  desc="A thrilling 24-hour hackathon where students across the nation come together to bring some amazing ideas to life. An event that brings together the experts, enthusiasts, and beginners to put in their game-changing ideas for real-world problems. MOZOHACK is our flagship hackathon that is well received by developers across the globe."
                  date="30-31 March, 2019"
                  chat="Dream it up. Code it down."
                  bg="bg-mozohack"
                />
                <LeftTimeline
                  title="SOCIAL RESPONSIBILITY"
                  desc="SRMKZILLA is committed to bring forth a change, in all ways possible. In our Social Outreach Programme, we visit orphanages and homes for the differently-abled and spent time with them while sharing happiness and love. We strive our best to bring smiles to their faces in a noble way. "
                  date="9th feb 2020"
                  chat="lorem ipsum"
                  bg="bg-social"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterCommon />
    </div>
  )
}

export default aboutus
