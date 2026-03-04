
const ProgrammesIntro = () => {
    return (
        <>
            <section className="bg-[#F8F8F8] py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
                    {/* Title */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-6 sm:mb-8 roboto-slab">
                        Chương trình Dạy Học
                    </h1>

                    {/* Main Description */}
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8">
                        Chương trình học được thiết kế thành hai tuần. Tuần đầu tiên là “Bootcamp Nền tảng”, tập trung vào Python, Đại số tuyến tính và Machine Learning. Tuần thứ hai tập trung vào “Ứng dụng của AI”, với các nội dung về Thị giác máy tính, AI trong khoa học và AI trong mạng máy tính. Ngoài ra, học viên còn được tham gia các dự án nhóm để thực hành và áp dụng kiến thức vào giải quyết các vấn đề thực tiễn.
                    </p>
                </div>
            </section>
        </>
    );
};

export default ProgrammesIntro;