import ApplyInfo from '../components/apply/ApplyInfo'
import ApplyIntro from '../components/apply/ApplyIntro'
import PageTemplate from '../components/layout/PageTemplate'

const Apply = () => {
  return (
    <PageTemplate title="Đăng ký">
      <ApplyIntro />
      <ApplyInfo />
    </PageTemplate>
  )
}

export default Apply