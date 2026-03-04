import DonateIntro from '../components/donate/DonateIntro'
import DonationList from '../components/donate/DonationList'
import PageTemplate from '../components/layout/PageTemplate'

const Donate = () => {
  return (
    <PageTemplate title="Tài trợ">
      <DonateIntro />
      <DonationList />
    </PageTemplate>
  )
}

export default Donate