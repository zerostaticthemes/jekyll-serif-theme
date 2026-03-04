import ComingSoon from "../layout/ComingSoon";

const ApplyIntro = () => {
    return (
        <>
            <section className="bg-[#F8F8F8] py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
                    {/* Title */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-6 sm:mb-8 roboto-slab">
                        Nộp Đơn
                    </h1>

                    {/* Main Description */}
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8">
                        Đơn ứng tuyển cho học sinh THPT và sinh viên đại học tham gia trại hè SEAS:
                    </p>
                    <ComingSoon text="Thông tin chi tiết về quy trình nộp đơn và các yêu cầu sẽ sớm được cập nhật. Hãy theo dõi để không bỏ lỡ cơ hội tham gia vào một trải nghiệm học tập và phát triển tuyệt vời!" />
                </div>
            </section>
        </>
    );
};

export default ApplyIntro;