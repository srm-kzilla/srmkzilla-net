import dynamic from 'next/dynamic'
import Loader from '../shared/components/loader'
const ServicePage = dynamic(() => import('../shared/components/services'), {
  ssr: false,
  loading: () => <Loader />,
})

const index = () => {
  return (
    <div>
      <ServicePage />
    </div>
  )
}

export default index
