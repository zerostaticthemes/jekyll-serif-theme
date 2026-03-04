import ContactInfo from '../components/contact/ContactInfo'
import ContactIntro from '../components/contact/ContactIntro'
import PageTemplate from '../components/layout/PageTemplate'

const Contact = () => {
  return (
    <PageTemplate title="Liên hệ">
      <ContactIntro />
      <ContactInfo />
    </PageTemplate>
  )
}

export default Contact