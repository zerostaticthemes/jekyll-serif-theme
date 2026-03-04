
const AboutCards = (props: any) => {
    return (
        <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full">
            <div
                style={props.color}
                className="flex items-center justify-center h-72 p-8">
                <img
                    src={props.image}
                    alt={props.title}
                    className="object-cover"
                />
            </div>
            <div className="bg-gray-100 p-6 text-center flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {props.title}
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                    {props.description}
                </p>
            </div>
        </div>
    );
};


const AboutIntro = () => {
    return (
        <section className="bg-[#F8F8F8] py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                {/* Title */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-8 sm:mb-12 roboto-slab">
                    Về Chúng Tôi
                </h1>

                {/* Main Description */}
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8">
                    SEAS (Summer in Engineering and Applied Sciences) là trường hè miễn phí dành cho học sinh THPT
                    miền Trung, được thành lập bởi các chuyên viên nghiên cứu người miền Trung đang làm việc tại các
                    viện nghiên cứu hàng đầu trong nước và thế giới. Mục tiêu của SEAS là giúp các bạn học sinh tiếp
                    cận với các ngành khoa học công nghệ mới như trí tuệ nhân tạo (AI), khoa học dữ liệu, lập trình, năng
                    lượng tái tạo, công nghệ lượng tử, và hơn thế nữa!
                </p>

                {/* Benefits Cards */}
                <div className="mt-8 sm:mt-12">
                    <h2 className="text-xl text-gray-800 mb-6 text-center">
                        SEAS được thành lập để tạo cơ hội cho học sinh THPT
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <AboutCards
                            color={{ backgroundColor: '#E0F7FA' }}
                            image="/images/layout/about-card-1.svg"
                            title="Tiếp cận kiến thức khoa học và kỹ thuật tiên tiến"
                            description="Học sinh sẽ được học từ các chuyên gia hàng đầu trong lĩnh vực khoa học công nghệ, với kinh nghiệm giảng dạy và nghiên cứu tại các viện nghiên cứu và trường đại học danh tiếng trong và ngoài nước."
                        />
                        <AboutCards
                            color={{ backgroundColor: '#FFF3E0' }}
                            image="/images/layout/about-card-2.svg"
                            title="Gặp gỡ, giao lưu với bạn bè và các anh chị đi trước có cùng chí hướng"
                            description="SEAS là nơi các bạn học sinh có thể gặp gỡ, giao lưu với các anh chị đi trước có cùng chí hướng, tạo điều kiện cho việc học hỏi và phát triển kỹ năng mềm."
                        />
                        <AboutCards
                            color={{ backgroundColor: '#F3E5F5' }}
                            image="/images/layout/about-card-3.svg"
                            title="Định hướng nghề nghiệp, trang bị kỹ năng và hồ sơ để ứng tuyển đại học, du học"
                            description="SEAS sẽ giúp học sinh định hướng nghề nghiệp, trang bị kỹ năng và hồ sơ để ứng tuyển đại học, du học, mở ra cơ hội cho tương lai của các bạn."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutIntro;