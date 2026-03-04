import PageTemplate from '../components/layout/PageTemplate'
import Hero from '../components/homepage/Hero'
import HomeDetail from '../components/homepage/HomeDetail'
import HomeDivider from '../components/homepage/HomeDivider'
import HomeQuote from '../components/homepage/HomeQuote'

const Home = () => {
  return (
    <PageTemplate title="Trang chủ">
      <Hero />
      <HomeDivider />
      <HomeQuote />
      <HomeDivider />
      <HomeDetail />
    </PageTemplate>
  )
}

export default Home