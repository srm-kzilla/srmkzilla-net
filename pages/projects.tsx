import dynamic from 'next/dynamic'
import Loader from '../shared/components/loader'
const ProjectsPage = dynamic(() => import('../shared/components/projects'), {
  ssr: false,
  loading: () => <Loader />,
})

const index = () => {
  return <ProjectsPage />
}

export default index
