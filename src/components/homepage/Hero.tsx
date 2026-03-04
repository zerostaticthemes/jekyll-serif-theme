const HeroBG = "/images/layout/hero-bg-3.jpg"

const Hero = () => {
  return (
    <section className="relative py-12  px-4 sm:px-6 lg:px-8 min-h-[500px] sm:min-h-[600px] flex items-center">
      <div className="max-w-7xl mx-auto w-full p-10 relative z-10 rounded-4xl overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={HeroBG}
            alt="Hero background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        {/* Content */}
        <div className="relative z-10 max-w-4xl w-full px-4 sm:px-8 lg:px-12">
          <div className="flex flex-col gap-6 sm:gap-8 items-start">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white roboto-slab leading-tight">
              SEAS - Summer in Engineering and Applied Sciences
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl">
              Trường hè Kỹ thuật và Khoa học Ứng dụng Miền Trung (SEAS) là tổ chức phi lợi nhuận mang đến cơ hội học tập miễn phí cho học sinh trung học phổ thông. Tại đây, các em được trực tiếp hướng dẫn bởi các nghiên cứu sinh và chuyên gia đến từ những trường đại học danh tiếng cũng như các tập đoàn công nghệ hàng đầu.
            </p>
            <a
              href="/about"
              className="bg-white text-[#2d8bba] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200 font-semibold hover:text-teal-600"
            >
              Thông tin về SEAS
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero