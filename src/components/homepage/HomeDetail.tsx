import cards from '../../assets/infomation/home.cards'
import HomeCard from './HomeCard'

const HomeDetail = () => {
  return (
    <section className="bg-gray-100 py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
            Khám Phá SEAS
          </h2>
          <p className="text-base sm:text-lg text-gray-600 px-4">
            Tìm hiểu thêm về chương trình, đội ngũ và cách thức tham gia trại hè SEAS thông qua các phần dưới đây.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {cards.map((card) => (
            <HomeCard key={card.id} {...card} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomeDetail