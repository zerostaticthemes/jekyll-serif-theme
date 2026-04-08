import Image from "next/image";

export function SponsorDonationSection() {
  return (
    <section className="bg-[url('/images/layout/donation-bg.png')] bg-cover bg-center bg-no-repeat py-12 md:py-25">
      <div className="container flex justify-center">
        <article className="grid w-full max-w-[980px] gap-8 rounded-[30px] bg-white px-8 py-8 shadow-[0_24px_56px_rgba(150,199,224,0.18)] md:px-10 md:py-10 lg:grid-cols-[1fr_280px] lg:items-center">
          <div className="flex flex-col gap-8">
            <div>
              <p className="max-w-[560px] font-lexend text-[1rem] leading-[1.65] text-[#4D5761] md:text-[1.06rem]">
                Mọi hỗ trợ tài chính xin quý vị vui lòng liên hệ qua email,
                Facebook hoặc chuyển khoản trực tiếp tới:
              </p>

              <div className="mt-7 space-y-2 font-space-grotesk text-[#111111]">
                <p className="text-[1.55rem] font-bold md:text-[1.8rem]">
                  Nguyễn Thế Quỳnh
                </p>
                <p className="text-[1.55rem] font-bold md:text-[1.8rem]">
                  STK: <span className="text-[#2D8BBA]">19073810358015</span>
                </p>
                <p className="text-[1.55rem] font-bold md:text-[1.8rem]">
                  Techcombank
                </p>
              </div>
            </div>

            <div className="mx-auto w-full max-w-[300px] md:max-w-[248px] rounded-[24px] border-[4px] border-[#b9e7f7] bg-white p-2 shadow-[0_12px_30px_rgba(150,199,224,0.16)] lg:hidden">
              <Image
                src="/images/bank/bank_info.jpg"
                alt="SEAS bank QR"
                width={520}
                height={700}
                className="h-auto w-full rounded-[18px]"
              />
            </div>

            <p className="max-w-[600px] font-lexend text-[1rem] leading-[1.65] text-[#4D5761] md:text-[1.06rem]">
              Nhằm đảm bảo tính minh bạch, sau khi nhận được sự ủng hộ, thông
              tin của các nhà tài trợ sẽ được đăng tải công khai trên trang web
              bên dưới.
            </p>
          </div>

          <div className="mx-auto hidden w-full max-w-[248px] rounded-[24px] border-[4px] border-[#b9e7f7] bg-white p-2 shadow-[0_12px_30px_rgba(150,199,224,0.16)] lg:block">
            <Image
              src="/images/bank/bank_info.jpg"
              alt="SEAS bank QR"
              width={520}
              height={700}
              className="h-auto w-full rounded-[18px]"
            />
          </div>
        </article>
      </div>
    </section>
  );
}
