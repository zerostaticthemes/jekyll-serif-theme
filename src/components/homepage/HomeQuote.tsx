
const HomeQuote = () => {
    return (
        <>
            <section className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-blue-100">
                <div className="absolute inset-0 bg-[url('/images/layout/quote-bg.jpg')] bg-cover bg-center opacity-45"></div>
                <div className="relative max-w-5xl mx-auto bg-white rounded-lg shadow-md p-8">
                    <div className="text-center">
                        <h2 className="playfair-display text-3xl font-bold text-gray-900 mb-3 sm:mb-4 px-2 leading-relaxed">
                            " SEAS là giấc mơ được chúng tôi ấp ủ nhiều năm. Đó không chỉ là nơi truyền cảm hứng mà còn mở ra cơ hội để các bạn học sinh quê mình thấy rằng khoa học, công nghệ không còn xa vời mà đang ở rất gần, từ chính nơi mình sinh ra. "
                        </h2>
                        <p className="text-sm sm:text-base text-gray-600 px-4 italic mt-4">
                            ー Hoàng Minh Đức, Đồng sáng lập SEAS
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomeQuote;