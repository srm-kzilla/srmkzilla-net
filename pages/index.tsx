import { getNewUpdates } from '@lib/sanity-api'
import Footer from '@shared/components/footer'
import FirstFold from '@shared/components/home/first-fold'
import Process from '@shared/components/home/process'
import WhatsNew from '@shared/components/home/whats-new'
import Head from 'next/head'

const Home = ({ updatesCard }) => (
  <>
    <Head>
      <title>SRMKZILLA | Home</title>
      <meta
        name="description"
        content="SRMKZILLA is a community of young tech enthusiasts who eat, sleep and breath technology. We organize everything from technical workshops to gaming events, you name it & we do it. "
      />
      <link
        rel="icon preload canonical"
        href="./images/kzillalogo.png"
        as="image"
      />
    </Head>
    <div className="bg-black overflow-hidden">
      <FirstFold />
      <WhatsNew cardContent={updatesCard} />
      <Process />
      <Footer />
    </div>
  </>
)

export async function getStaticProps() {
  const updatesCard = await getNewUpdates()

  return {
    props: { updatesCard },
  }
}

export default Home
