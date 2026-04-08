"use client";

import Image from "next/image";

const cards = [
  {
    name: "DINH LAM KIEU PHUONG",
    role: "Trai sinh SEAS 2025",
    extra: "Ky su Hoc may, Nhat Ban",
    content:
      "Qua viec hoc cac ky nang nhu mo hinh hoa mot bai toan thuc te, lam viec nhom va trinh bay project, em cam nhan ro hon ve su da dang, mat thiet cua toan trong nhieu linh vuc khac nhau cung nhu viec hoc Toan ly thuyet khong phai la cach duy nhat de theo duoi toan.",
    image: "/images/team/founders/Duc_Hoang.jpg",
  },
  {
    name: "NGUYEN HOANG MINH",
    role: "Trai sinh SEAS 2025",
    extra: "Hoc vien Khoa hoc du lieu",
    content:
      "SEAS giup em tu tin hon khi tiep can mot van de lon, chia no thanh nhung phan nho va hop tac voi ban be de giai quyet. Day la trai nghiem em rat tran trong.",
    image: "/images/team/founders/hoang-seas.jpg",
  },
  {
    name: "LE HAI AN",
    role: "Trai sinh SEAS 2025",
    extra: "Ky su He thong, Viet Nam",
    content:
      "Em hoc duoc cach bien mot y tuong thanh san pham co the trinh bay ro rang. Cac buoi mentoring va phan bien la phan giup em truong thanh nhieu nhat.",
    image: "/images/team/founders/minh-tran-huu-binh.jpg",
  },
  {
    name: "TRAN MINH QUAN",
    role: "Trai sinh SEAS 2025",
    extra: "Hoc vien AI ung dung",
    content:
      "Moi nguoi o SEAS deu rat san sang lang nghe va giup do. Em thay minh duoc truyen dong luc de tiep tuc theo duoi khoa hoc va cong nghe bang mot cach gan gui hon.",
    image: "/images/team/founders/Quynh-Nguyen.jpeg",
  },
  {
    name: "PHAM THAO VY",
    role: "Trai sinh SEAS 2025",
    extra: "Nghien cuu sinh tre",
    content:
      "Dieu quy nhat voi em la nhung ket noi sau chuong trinh. Tu mot trai he, em co them mentor, ban be va mot cach nhin dai han hon ve con duong minh muon di.",
    image: "/images/team/founders/Duc_Hoang.jpg",
  },
];

export function HomeReviewSection() {
  return (
    <section className="py-[72px] max-md:py-14">
      <div className="container">
        <div className="mb-10 text-left md:text-center">
          <p className="mb-4 font-lexend text-[1.05rem] font-medium uppercase text-[#ff6d2d] md:text-lg">
            Câu chuyện SEAS
          </p>
          <h2 className="font-space-grotesk text-[2.5rem] font-bold uppercase leading-[1.08] tracking-[-0.03em] text-[#04536E] md:text-6xl md:leading-[1.05]">
            Cảm nhận của học viên
          </h2>
          <p className="mt-5 max-w-[760px] font-lexend text-[0.98rem] leading-[1.55] text-[#5b6770] md:mx-auto md:text-[1.15rem] md:leading-[1.6]">
            Lắng nghe chia sẻ từ chính những thế hệ học viên đã từng tham gia
            trại hè.
          </p>
        </div>
      </div>

      <div className="review-marquee-shell w-full overflow-hidden pb-3">
        <div className="flex w-max gap-6 px-6 md:px-10">
          <div className="review-marquee-track flex w-max gap-6">
            {cards.map((card) => (
              <ReviewCard key={`${card.name}-${card.extra}-a`} card={card} />
            ))}
          </div>
          <div
            className="review-marquee-track flex w-max gap-6"
            aria-hidden="true"
          >
            {cards.map((card) => (
              <ReviewCard key={`${card.name}-${card.extra}-b`} card={card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

type ReviewCardData = (typeof cards)[number];

function ReviewCard({ card }: { card: ReviewCardData }) {
  return (
    <article className="relative w-[min(520px,calc(100vw-72px))] min-w-[520px] rounded-[24px] border border-[#7fc8ef] bg-[linear-gradient(180deg,#ffffff_0%,#f8fcff_100%)] px-6 py-6 shadow-[0_18px_44px_rgba(150,199,224,0.16)] max-md:w-[calc(100vw-56px)] max-md:min-w-[calc(100vw-56px)]">
      <div className="pointer-events-none absolute right-3 top-0 text-[4.4rem] leading-none text-[#fce1b4]">
        &rdquo;
      </div>

      <div className="mb-5 flex items-start gap-4">
        <div className="overflow-hidden rounded-full">
          <Image
            src={card.image}
            alt={card.name}
            width={44}
            height={44}
            className="h-11 w-11 rounded-full object-cover"
          />
        </div>

        <div>
          <h3 className="font-space-grotesk text-[1.55rem] font-bold uppercase leading-none text-[#04536E]">
            {card.name}
          </h3>
          <p className="mt-2 font-lexend text-[0.95rem] font-medium text-[#2D8BBA]">
            {card.role}
          </p>
          <p className="mt-1 font-lexend text-[0.92rem] text-[#6a7480]">
            {card.extra}
          </p>
        </div>
      </div>

      <p className="font-lexend text-[1.05rem] leading-[1.65] text-[#4D5761]">
        &ldquo;{card.content}&rdquo;
      </p>
    </article>
  );
}
