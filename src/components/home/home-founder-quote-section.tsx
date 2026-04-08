import Image from "next/image";

export function HomeFounderQuoteSection() {
  return (
    <section
      className="bg-[url('/images/layout/founder-bg.png')] bg-cover bg-center bg-no-repeat py-12 md:py-25"
      id="team"
    >
      <div className="container flex items-center justify-center">
        <div className="relative max-w-[750px] rounded-[34px] bg-white px-10 py-12 shadow-[0_16px_50px_rgba(104,187,227,0.18)] md:px-14 md:py-14">
          <div className="pointer-events-none absolute top-[-160] right-10 leading-none text-[#2D8BBA] transform rotate-180 scale-x-[-1] md:text-[14rem]">
            &rdquo;
          </div>

          <div className="mx-auto flex flex-col items-center text-center">
            <div className="mb-5 overflow-hidden rounded-full border-[3px] border-[#2D8BBA] shadow-[0_10px_22px_rgba(45,139,186,0.24)]">
              <Image
                src="/images/team/founders/Duc_Hoang.jpg"
                alt="HOANG MINH DUC"
                width={84}
                height={84}
                className="h-[84px] w-[84px] object-cover"
              />
            </div>

            <h2 className="font-space-grotesk text-[1.8rem] font-bold uppercase leading-none text-[#111111]">
              Hoàng Minh Đức
            </h2>
            <p className="mt-2 font-lexend text-[1.1rem] text-[#2D8BBA]">
              Đồng sáng lập
            </p>

            <div className="my-5 h-[4px] w-[96px] rounded-full bg-[linear-gradient(90deg,transparent_0%,#82c6e7_22%,#2D8BBA_50%,#82c6e7_78%,transparent_100%)]" />

            <blockquote className="m-0 font-space-grotesk text-xl font-bold leading-[1.45] tracking-[-0.03em] text-[#04536E] md:text-[1.7rem]">
              &ldquo;SEAS là giấc mơ được chúng tôi ấp ủ nhiều năm. Đó không chỉ
              là nơi truyền cảm hứng mà còn mở ra cơ hội để các bạn học sinh quê
              mình thấy rằng khoa học, công nghệ không còn xa vời mà đang ở rất
              gần, từ chính nơi mình sinh ra.&rdquo;
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
