export function ComingSoonCard() {
  return (
    <div className="rounded-[30px] bg-white px-6 py-10 text-center shadow-[0_24px_56px_rgba(150,199,224,0.18)] md:px-10 md:py-14">
      <div className="mx-auto mb-7 flex h-[150px] w-[150px] items-center justify-center rounded-full bg-[radial-gradient(circle,rgba(45,139,186,0.12),rgba(45,139,186,0.02))]">
        <div className="rounded-[28px] border-[6px] border-[#04536E] bg-white px-7 py-9 shadow-[10px_10px_0_rgba(45,139,186,0.18)]">
          <div className="space-y-2">
            <div className="h-1.5 w-16 rounded-full bg-[#9bdaf6]" />
            <div className="h-1.5 w-12 rounded-full bg-[#c9ebf8]" />
            <div className="h-1.5 w-14 rounded-full bg-[#9bdaf6]" />
            <div className="h-1.5 w-10 rounded-full bg-[#c9ebf8]" />
          </div>
        </div>
      </div>

      <h3 className="font-space-grotesk text-[2.6rem] font-bold uppercase leading-none text-[#2D8BBA] md:text-[4rem]">
        Coming Soon
      </h3>
      <p className="mx-auto mt-5 max-w-[920px] font-lexend text-[1.05rem] leading-[1.8] text-[#4D5761] md:text-[1.18rem]">
        Thông tin chi tiết về SEAS 2026 sẽ sớm được cập nhật. Hãy theo dõi để
        không bỏ lỡ cơ hội tham gia vào một trải nghiệm học tập và phát triển
        tuyệt vời!
      </p>
    </div>
  );
}
