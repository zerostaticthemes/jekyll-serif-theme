import Image from "next/image";

const benefitCards = [
  {
    title: "Giấy chứng nhận",
    description:
      "Giấy chứng nhận uy tín từ SEAS cùng các đối tác. Minh chứng cho năng lực.",
    image: "/images/layout/benefit-card-4.jpg",
    overlay: true,
  },
  {
    title: "Kết nối",
    description:
      "Kết nối với chuyên gia, sinh viên từ các trường đại học hàng đầu.",
    image: "/images/layout/benefit-card-2.jpg",
    overlay: true,
  },
  {
    title: "Thư giới thiệu",
    description: "Cơ hội nhận thư giới thiệu hỗ trợ hồ sơ đại học.",
    image: "/images/layout/benefit-card-1.jpg",
    overlay: true,
  },
  {
    title: "Trải nghiệm",
    description: "Giao lưu văn hóa, du lịch khám phá vẻ đẹp Quảng Bình.",
    image: "/images/layout/benefit-card-3.jpg",
    overlay: true,
  },
];

export function AboutBenefitsSection() {
  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <div className="mb-8 text-center md:mb-10">
          <p className="mb-4 font-lexend text-[1.05rem] uppercase font-medium text-[#ff6d2d] md:text-lg">
            Đặc quyền học viên
          </p>
          <h2 className="font-space-grotesk text-[2.5rem] font-bold uppercase leading-[0.98] tracking-[-0.03em] text-[#04536E] md:text-6xl md:leading-[1.05]">
            Lợi ích tham gia
          </h2>
        </div>

        <div className="grid gap-4 md:gap-5 lg:grid-cols-2">
          {benefitCards.map((card) => (
            <article
              key={card.image + card.title}
              className="group relative overflow-hidden rounded-[24px] shadow-[0_18px_42px_rgba(150,199,224,0.22)] transition-all duration-300 md:rounded-[26px] cursor-pointer hover:shadow-[0_22px_50px_rgba(45,139,186,0.2)]"
            >
              <Image
                src={card.image}
                alt={card.title || "SEAS benefit"}
                width={1200}
                height={700}
                className="h-[190px] w-full scale-100 object-cover transition-transform duration-300 group-hover:scale-[1.05] md:h-[235px]"
              />

              {card.overlay ? (
                <>
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,84,109,0.46),rgba(6,84,109,0.68))] transition-opacity duration-500 group-hover:opacity-0" />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(24,24,24,0.78),rgba(24,24,24,0.9))] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </>
              ) : null}

              {card.title ? (
                <div className="absolute inset-0 flex flex-col justify-center px-7 text-white transition-transform duration-300 group-hover:scale-[1.01] md:px-12">
                  <h3 className="font-space-grotesk text-[2rem] font-bold uppercase leading-none md:text-[2.35rem]">
                    {card.title}
                  </h3>
                  <p className="mt-4 max-w-[420px] font-lexend text-[1rem] font-medium text-white/95 md:text-[1.08rem]">
                    {card.description}
                  </p>
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
