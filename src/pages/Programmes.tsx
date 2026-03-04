import PageTemplate from '../components/layout/PageTemplate'
import ProgrammeTabs from '../components/programmes/ProgrammesTab'
import ProgrammesIntro from '../components/programmes/ProgrammesIntro'

const Programmes = () => {
  return (
    <PageTemplate title="Chương Trình">
      <ProgrammesIntro />
      <ProgrammeTabs />
    </PageTemplate>
  )
}

export default Programmes
