const DonateIntro = () => {
    return (
        <>
            <section className="bg-[#F8F8F8] pt-12 sm:pt-16 pb-5 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-6 sm:mb-8 roboto-slab">
                        Tài trợ
                    </h1>
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Chúng tôi kêu gọi đối tác tài trợ để nâng cao chương trình SEAS, mở rộng cơ hội học tập cho học sinh THPT miền Trung. Sự đồng hành của quý vị sẽ góp phần phát triển khoa học công nghệ tiên tiến và kiến tạo tương lai cho thế hệ trẻ Việt Nam.
                    </p>
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed mt-4">
                        Mọi hỗ trợ tài chính xin quý vị vui lòng liên hệ qua email, Facebook hoặc chuyển khoản trực tiếp tới STK: 19073810358015, Techcombank, Nguyễn Thế Quỳnh, mã QR:
                    </p>
                    <img src="/images/bank/bank_info.jpg" alt="QR Code" className="w-48 sm:w-56 md:w-64 mt-4" />
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed mt-4">
                        Nhằm đảm bảo tính minh bạch, sau khi nhận được sự ủng hộ, thông tin của các nhà tài trợ sẽ được đăng tải công khai trên trang web:
                    </p>
                </div>
            </section>
        </>
    );
};

export default DonateIntro;