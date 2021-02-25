import Head from 'next/head'

import FirstFold from '@shared/components/home/first-fold'
import WhatsNew from '@shared/components/home/whats-new'
import Process from '@shared/components/home/process'
import Footer from '@shared/components/footer'
import { getNewUpdates } from '@lib/sanity-api'

const Home = ({ updatesCard }) => (
  <div className="bg-black overflow-hidden">
    <Head>
      <title>SRMKZILLA</title>
    </Head>
    <FirstFold />
    <WhatsNew cardContent={updatesCard} />
    <Process />
    <Footer />
  </div>
)

export async function getStaticProps() {
  const updatesCard = await getNewUpdates()

  return {
    props: { updatesCard },
  }
}

export default Home
