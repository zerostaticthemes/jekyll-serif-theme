import Image from "next/image";
import { PillArrowButton } from "@/components/shared/pill-arrow-button";

const exploreCards = [
  {
    title: "Chương Trình Của Chúng Tôi",
    description:
      "Khám phá các chương trình hè toàn diện của chúng tôi trong lĩnh vực kỹ thuật và khoa học ứng dụng dành cho học sinh trung học phổ thông.",
    image: "/images/layout/explore-card-1.jpg",
  },
  {
    title: "Gặp gỡ đội ngũ SEAS",
    description:
      "Tìm hiểu về đội ngũ nghiên cứu và chuyên gia của chúng tôi từ các trường đại học danh tiếng và các công ty công nghệ hàng đầu.",
    image: "/images/layout/explore-card-2.jpg",
  },
  {
    title: "Nộp Đơn Tham Gia",
    description:
      "Tham gia chúng tôi vào mùa hè này! Gửi đơn đăng ký và trở thành một phần của cộng đồng học tập của chúng tôi.",
    image: "/images/layout/explore-card-3.jpg",
  },
];

export function HomeExploreSection() {
  return (
    <section className="py-[72px] pb-[96px] max-md:py-14" id="program">
      <div className="container">
        <div className="mb-10 text-left md:text-center">
          <h2 className="font-space-grotesk text-[2.5rem] font-bold uppercase leading-[1.08] tracking-[-0.03em] text-[#04536E] md:text-6xl md:leading-[1.05]">
            Khám phá SEAS
          </h2>
          <p className="mt-5 max-w-[760px] font-lexend text-[0.98rem] leading-[1.55] text-[#5b6770] md:mx-auto md:text-[1.15rem] md:leading-[1.6]">
            Tìm hiểu thêm về chương trình, đội ngũ và cách thức tham gia trại hè
            SEAS.
          </p>
        </div>

        <div className="grid items-stretch gap-5 lg:grid-cols-3">
          {exploreCards.map((card) => (
            <article
              key={card.title}
              className="cursor-pointer group flex h-full flex-col overflow-hidden rounded-[30px] border border-[rgba(180,216,234,0.26)] bg-white shadow-[0_22px_54px_rgba(150,199,224,0.22)] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:scale-[1.02] hover:border-[#2D8BBA] hover:shadow-[0_28px_60px_rgba(45,139,186,0.23)]"
            >
              <div className="overflow-hidden rounded-t-[30px] p-2 pb-0">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={640}
                  height={420}
                  className="h-[190px] w-full rounded-[24px] object-cover md:h-[205px]"
                />
              </div>

              <div className="flex flex-1 flex-col px-7 pb-6 pt-5">
                <h3 className="font-space-grotesk text-[1.45rem] font-bold leading-[1.12] text-[#111111]">
                  {card.title}
                </h3>

                <p className="mt-4 font-lexend text-[1.02rem] leading-[1.62] text-[#4D5761]">
                  {card.description}
                </p>

                <div className="mt-auto pt-6 pb-2 flex justify-center">
                  <PillArrowButton
                    href="#apply"
                    label="TÌM HIỂU THÊM"
                    className="min-h-[44px] min-w-[190px] px-6 text-[0.95rem] normal-case"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
