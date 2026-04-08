import Image from "next/image";
import { PillArrowButton } from "@/components/shared/pill-arrow-button";

export function HomeStorySection() {
  return (
    <section className="py-[72px] md:py-20" id="about">
      <div className="container">
        <div className="mb-8">
          <div className="mb-6 flex items-center gap-5 font-space-grotesk uppercase max-md:flex-col max-md:items-start max-md:gap-2">
            <span className="text-7xl font-bold leading-[0.78] text-[#005D78] md:text-8xl">
              SEAS
            </span>
            <span className="max-w-[640px] text-4xl font-bold leading-[0.98] text-[#2D8BBA]">
              Summer in Engineering and Applied Sciences
            </span>
          </div>

          <div className="hidden grid-cols-[minmax(0,760px)_auto] items-center justify-between gap-8 lg:grid">
            <p className="m-0 font-lexend text-[1.1rem] leading-[1.7] text-[#4D5761]">
              Trường hè Kỹ thuật và Khoa học Ứng dụng Miền Trung (SEAS) là tổ
              chức phi lợi nhuận mang đến cơ hội học tập miễn phí cho học sinh
              trung học phổ thông. Tại đây, các em được trực tiếp hướng dẫn bởi
              các nghiên cứu sinh và chuyên gia đến từ những trường đại học danh
              tiếng cũng như các tập đoàn công nghệ hàng đầu.
            </p>

            <PillArrowButton
              href="#discover"
              label="CÂU CHUYỆN VỀ SEAS"
              className="min-w-[226px]"
            />
          </div>
        </div>

        <div className="overflow-hidden rounded-[34px] shadow-[0_20px_55px_rgba(45,139,186,0.18)]">
          <Image
            src="/images/layout/seas-story-bg.png"
            alt="SEAS story section"
            width={1400}
            height={760}
            className="h-auto w-full object-cover"
            priority
          />
        </div>

        <div className="mt-7 space-y-7 lg:hidden">
          <p className="m-0 font-lexend text-[1.05rem] leading-[1.72] text-[#4D5761]">
            Trường hè Kỹ thuật và Khoa học Ứng dụng Miền Trung (SEAS) là tổ chức
            phi lợi nhuận mang đến cơ hội học tập miễn phí cho học sinh trung
            học phổ thông. Tại đây, các em được trực tiếp hướng dẫn bởi các
            nghiên cứu sinh và chuyên gia đến từ những trường đại học danh tiếng
            cũng như các tập đoàn công nghệ hàng đầu.
          </p>

          <PillArrowButton
            href="#discover"
            label="CÂU CHUYỆN VỀ SEAS"
            className="mt-8 min-h-[58px] min-w-0 px-8"
          />
        </div>
      </div>
    </section>
  );
}
