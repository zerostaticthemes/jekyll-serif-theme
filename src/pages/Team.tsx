import PageTemplate from '../components/layout/PageTemplate'
import Founders from '../components/team/Founders'
import Members from '../components/team/Members'
import TeamIntro from '../components/team/TeamIntro'

const Team = () => {
  return (
    <PageTemplate title="Đội ngũ">
      <TeamIntro />
      <Founders />
      <Members />
    </PageTemplate>
  )
}

export default Team