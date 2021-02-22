import dynamic from 'next/dynamic';
import Loader from '../shared/components/loader'
const ProjectsPage = dynamic(() => import('../shared/components/projects'), {
  ssr: false,
  loading: () => <Loader />
});

const index = () => {
  return (
    <div>
      <ProjectsPage />
    </div>
  )
}

export default index
