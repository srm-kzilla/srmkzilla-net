import dynamic from 'next/dynamic'
import Loader from '../shared/components/loader'
const HomePage = dynamic(() => import('../shared/components/home'), {
  ssr: false,
  loading: () => <Loader />,
})

const index = () => {
  return <HomePage />
}

export default index
