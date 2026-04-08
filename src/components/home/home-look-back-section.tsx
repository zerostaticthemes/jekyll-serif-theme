import Image from "next/image";
import { PillArrowButton } from "@/components/shared/pill-arrow-button";

const stats = [
  { value: "350+", label: "Số đơn đăng ký trên cả nước" },
  { value: "43", label: "Học sinh đã tham gia" },
  { value: "8", label: "Dự án học thuật của học sinh được hoàn thành" },
  {
    value: "12",
    label:
      "Trợ giảng từ các trường đại học, công ty danh tiếng trong nước và trên thế giới",
  },
];

export function HomeLookBackSection() {
  return (
    <section className="py-[72px] md:py-14">
      <div className="container">
        <div className="grid items-center gap-8 md:gap-12 xl:gap-24 lg:grid-cols-[0.98fr_0.82fr]">
          <div>
            <p className="mb-4 font-lexend text-[1.05rem] uppercase font-medium text-[#ff6d2d] md:text-lg">
              Nhìn lại SEAS 2025
            </p>

            <h2 className="mb-5 max-w-[620px] font-space-grotesk text-[2.5rem] font-bold uppercase leading-[1.04] tracking-[-0.03em] text-[#04536E] md:mb-6 md:text-6xl md:leading-[1.2] md:tracking-[-0.02em]">
              Hành trình kiến tạo <br />
              giá trị thực thụ
            </h2>

            <p className="mb-6 max-w-[700px] font-lexend text-[1.05rem] leading-[1.55] text-[#4D5761] md:text-[1.1rem] md:leading-[1.5]">
              Năm 2025 đánh dấu bước khởi đầu rực rỡ của cộng đồng SEAS tại
              Quảng Bình. Với chủ đề{" "}
              <span className="font-semibold text-[#2D8BBA]">
                Trí tuệ nhân tạo
              </span>
              , chúng tôi đã chứng kiến những bước tiến vượt bậc và sự trưởng
              thành của 43 học viên xuất sắc.
            </p>

            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {stats.map((item) => (
                <article
                  key={item.label}
                  className="cursor-pointer min-h-[126px] rounded-[22px] bg-white px-4 py-4 shadow-[0_14px_32px_rgba(150,199,224,0.2)] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:scale-[1.02] hover:border-[#7fc8ef] hover:shadow-[0_18px_42px_rgba(45,139,186,0.18)] md:min-h-0 md:rounded-[24px] md:px-6 md:py-5 md:shadow-[0_16px_38px_rgba(150,199,224,0.2)] text-[#4D5761] hover:text-[#2D8BBA] border-2 border-[rgba(180,216,234,0.4)]"
                >
                  <strong className="block font-space-grotesk text-[2.55rem] font-bold leading-none tracking-[-0.05em] text-[#2D8BBA] md:text-[3rem]">
                    {item.value}
                  </strong>
                  <p className="mt-2 font-lexend text-[0.90rem] leading-[1.42] md:mt-2.5 md:text-[1rem] md:leading-[1.5]">
                    {item.label}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="group relative mx-auto w-full max-w-[500px] pt-4 md:pt-6 lg:max-w-[430px] lg:justify-self-end lg:pt-10">
            <div className="pointer-events-none absolute left-0 top-5 h-[84%] w-full -rotate-[-7deg] rounded-[28px] bg-[#cfeefc] transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:rotate-[-8deg] group-hover:scale-[1.01] md:-left-2 md:top-10 md:h-[78%] md:w-[102%] md:rounded-[34px]" />

            <article className="relative overflow-hidden rounded-[28px] bg-white shadow-[0_22px_46px_rgba(150,199,224,0.26)] transition-all duration-300 ease-out group-hover:-translate-y-1.5 group-hover:scale-[1.02] group-hover:shadow-[0_28px_60px_rgba(45,139,186,0.24)] md:rounded-[30px] md:shadow-[0_26px_56px_rgba(150,199,224,0.3)]">
              <div className="cursor-pointer overflow-hidden rounded-t-[28px] p-1.5 pb-0 md:rounded-t-[30px]">
                <Image
                  src="/images/layout/SEAS 2025 Activities.png"
                  alt="SEAS 2025 Activities"
                  width={760}
                  height={500}
                  className="h-[250px] w-full rounded-[22px] object-cover object-center md:h-[320px] md:rounded-[26px]"
                />
              </div>

              <div className="px-5 pb-5 pt-4 md:px-8 md:pb-7 md:pt-5">
                <p className="mb-2 font-lexend text-[0.92rem] font-medium leading-[1.4] text-[#2D8BBA] md:text-[0.98rem]">
                  Đọc bài báo về SEAS 2025 từ Báo Quảng Trị
                </p>

                <h3 className="mb-5 font-space-grotesk text-[1rem] font-bold leading-[1.15] text-[#111111] md:mb-6 md:text-[1.28rem] md:leading-[1.08]">
                  Khơi dậy đam mê khoa học công nghệ
                </h3>

                <PillArrowButton
                  href="#discover"
                  label="Tìm hiểu thêm"
                  className="min-h-[48px] min-w-[176px] px-6 text-[0.9rem] md:min-h-[44px] md:min-w-[232px] md:text-[1.05rem]"
                />
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
