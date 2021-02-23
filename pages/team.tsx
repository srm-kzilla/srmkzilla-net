import dynamic from 'next/dynamic'
import Loader from '../shared/components/loader'
const TeamPage = dynamic(() => import('../shared/components/team'), {
  ssr: false,
  loading: () => <Loader />,
})

const index = () => {
  return (
    <div>
      <TeamPage />
    </div>
  )
}

export default index
