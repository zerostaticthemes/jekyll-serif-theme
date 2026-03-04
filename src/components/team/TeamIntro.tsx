
const TeamIntro = () => {
    return (
        <>
            <section className="bg-[#F8F8F8] pt-12 sm:pt-16 md:pt-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
                    {/* Title */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-6 sm:mb-8 roboto-slab">
                        Đội Ngũ SEAS
                    </h1>

                    {/* Main Description */}
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Đội ngũ giảng viên của SEAS bao gồm các chuyên gia hàng đầu trong lĩnh vực khoa học công nghệ, với kinh nghiệm giảng dạy và nghiên cứu tại các viện nghiên cứu và trường đại học danh tiếng trong và ngoài nước.
                    </p>
                </div>
            </section>
        </>
    );
};

export default TeamIntro;