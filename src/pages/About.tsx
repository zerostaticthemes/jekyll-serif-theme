import PageTemplate from '../components/layout/PageTemplate'
import AboutIntro from '../components/about/AboutIntro'
import AboutInfo from '../components/about/AboutInfo'

const About = () => {
  return (
    <PageTemplate title="Giới thiệu">
      <AboutIntro />
      <AboutInfo />
    </PageTemplate>
  )
}

export default About

