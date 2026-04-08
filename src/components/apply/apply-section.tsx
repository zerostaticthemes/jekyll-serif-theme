import Link from "next/link";
import {
  HiOutlineAcademicCap,
  HiOutlineClock,
  HiOutlineGlobeAlt,
  HiOutlineMail,
  HiOutlineStar,
  HiOutlineUserGroup,
} from "react-icons/hi";
import { RiFacebookFill } from "react-icons/ri";
import { PillArrowButton } from "@/components/shared/pill-arrow-button";

const infoSections = [
  {
    title: "Doi tuong",
    icon: HiOutlineUserGroup,
    items: [
      "Hoc sinh THPT co dam me voi khoa hoc cong nghe, khong nhat thiet phai hoc sinh chuyen cac mon tu nhien. SEAS tuyet nhien bung hoc cac nganh xa hoi.",
      "Sinh vien dai hoc nam 1, 2.",
    ],
  },
  {
    title: "Ban se hoc gi?",
    icon: HiOutlineAcademicCap,
    items: [
      "Tuan 1: Lap trinh Python, Hoc may (Machine Learning), Toan hoc cho AI.",
      "Tuan 2: Ung dung AI trong cuoc song va khoa hoc.",
    ],
    note: "Lam du an nhom de dung AI giai quyet cac van de thuc tien, duoi su huong dan cua doi ngu giang day.",
  },
  {
    title: "Tai sao ban nen tham gia?",
    icon: HiOutlineStar,
    items: [
      "Hoc va tham gia du an duoi su huong dan cua nghien cuu sinh va chuyen vien den tu cac dai hoc va vien nghien cuu hang dau.",
      "Nhan giay chung nhan co so ho tro gui ho so dai hoc.",
      "Hoan toan mien phi an o, tai lieu, phan mem, hoat dong trai nghiem tai Quang Binh.",
      "Ket noi voi ban be va chuyen gia co cung dam me.",
    ],
  },
  {
    title: "Tieu chi xet tuyen",
    icon: HiOutlineAcademicCap,
    items: [
      "Thanh tich hoc tap.",
      "Cac bai luan.",
      "Giai thuong hoc thuat va hoat dong ngoai khoa.",
      "Vong phong van online voi ban to chuc (BTC).",
      "Thong tin moi gioi ve AI/BTC co the lien lac de nam ro hon ve xac thuc cac thanh tich cua ban.",
    ],
  },
];

const contacts = [
  {
    label: "Website chinh thuc",
    value: "https://seas-cvn.com/",
    href: "https://seas-cvn.com/",
    icon: HiOutlineGlobeAlt,
  },
  {
    label: "Lien he",
    value: "seas.cvn@gmail.com",
    href: "mailto:seas.cvn@gmail.com",
    icon: HiOutlineMail,
  },
  {
    label: "Theo doi toi",
    value: "facebook.com/seas.cvn",
    href: "https://facebook.com/seas.cvn",
    icon: RiFacebookFill,
  },
];

export function ApplySection() {
  return (
    <section className="py-10 pb-16 md:py-14 md:pb-20">
      <div className="container">
        <div className="mb-8 text-center md:mb-10">
          <h1 className="font-space-grotesk text-[2.5rem] font-bold uppercase leading-[0.98] tracking-[-0.04em] text-[#0a6f9a] md:text-6xl">
            Dang ky tham gia
          </h1>
        </div>

        <article className="mx-auto max-w-[760px] rounded-[28px] border-[4px] border-[#2D8BBA] bg-white px-4 py-4 shadow-[0_16px_40px_rgba(45,139,186,0.18)] md:px-7 md:py-6">
          <div className="rounded-[22px] bg-white">
            <div className="space-y-5 font-lexend text-[0.96rem] leading-[1.75] text-[#4D5761] md:text-[1rem]">
              <div className="rounded-[20px] border border-[#edf3f8] bg-white px-4 py-4 md:px-5">
                <p>
                  Chao mung ban den voi Truong he Ky thuat va Khoa hoc Ung dung Mien
                  Trung, <span className="font-semibold text-[#2D8BBA]">SEAS 2026</span>.
                </p>
                <p className="mt-3">
                  Truong he ky thuat va khoa hoc ung dung Mien Trung (SEAS) la co hoi
                  hoc tap mien phi va dai han cho hoc sinh THPT va sinh vien nam dau.
                  Chuong trinh keo dai trong hai tuan voi chu de{" "}
                  <span className="font-semibold text-[#2D8BBA]">
                    Tri tue nhan tao va Ung dung
                  </span>{" "}
                  tai TP. Dong Hoi, Quang Binh.
                </p>
                <p className="mt-3">
                  Chung toi hy vong SEAS se la noi cac ban co the hoc hoi, thu suc
                  voi nhung y tuong moi va ket noi voi nhung nguoi ban va chuyen gia
                  co cung dam me.
                </p>
              </div>

              {infoSections.map((section) => {
                const Icon = section.icon;

                return (
                  <section key={section.title} className="space-y-3">
                    <div className="flex items-center gap-2 text-[#2D8BBA]">
                      <Icon className="text-[1.15rem]" />
                      <h2 className="font-space-grotesk text-[1.05rem] font-bold text-[#2D8BBA] md:text-[1.15rem]">
                        {section.title}
                      </h2>
                    </div>

                    <div className="rounded-[18px] bg-[#f7fbff] px-4 py-4 md:px-5">
                      <div className="grid gap-3 md:grid-cols-2">
                        {section.items.map((item) => (
                          <p key={item} className="relative pl-4">
                            <span className="absolute left-0 top-[0.55rem] h-[6px] w-[6px] rounded-full bg-[#c0d8e8]" />
                            {item}
                          </p>
                        ))}
                      </div>

                      {section.note ? (
                        <p className="mt-4">{section.note}</p>
                      ) : null}
                    </div>
                  </section>
                );
              })}

              <div className="border-l-[4px] border-[#2D8BBA] pl-4 md:pl-6">
                <p className="font-lexend text-[1rem] font-semibold leading-[1.85] text-[#04536E] md:text-[1.04rem]">
                  Luu y: Muc tieu cua cac cau hoi tu luan la de ban to chuc hieu
                  cach ban suy nghi, hoc hoi, va lam viec voi nguoi khac. Vi vay,
                  hay tra loi bang trai nghiem that va suy nghi that cua ban,{" "}
                  <span className="text-[#2D8BBA]">
                    dung vi du cu the khi co the.
                  </span>{" "}
                  Mot cau tra loi chan thanh, ro rang, va mang dau an ca nhan se
                  co gia tri hon mot cau tra loi trau chuot nhung chung chung.
                </p>
              </div>

              <section className="space-y-3">
                <div className="flex items-center gap-2 text-[#2D8BBA]">
                  <HiOutlineClock className="text-[1.15rem]" />
                  <h2 className="font-space-grotesk text-[1.05rem] font-bold text-[#2D8BBA] md:text-[1.15rem]">
                    Moc thoi gian luu y
                  </h2>
                </div>

                <div className="grid gap-3 rounded-[18px] bg-[#f7fbff] px-4 py-4 md:grid-cols-2 md:px-5">
                  <p className="relative pl-4">
                    <span className="absolute left-0 top-[0.55rem] h-[6px] w-[6px] rounded-full bg-[#c0d8e8]" />
                    Thoi gian nop don: <span className="font-semibold">05/04 - 31/05/2026</span>
                  </p>
                  <p className="relative pl-4">
                    <span className="absolute left-0 top-[0.55rem] h-[6px] w-[6px] rounded-full bg-[#c0d8e8]" />
                    Thoi gian du kien Cong bo ket qua: <span className="font-semibold">15/6/2026</span>
                  </p>
                </div>
              </section>

              <p className="font-semibold text-[#f2a200]">
                Hay dien don dang ky va san sang trai nghiem mot mua he dang nho!
              </p>

              <div className="flex justify-center pt-2">
                <PillArrowButton
                  href="https://forms.gle/"
                  label="Dang ky tham gia"
                  className="min-h-[46px] min-w-0 px-8 text-[0.9rem] md:min-w-[220px]"
                />
              </div>

              <div className="grid gap-4 border-t border-[#edf3f8] pt-5 md:grid-cols-3">
                {contacts.map((item) => {
                  const Icon = item.icon;

                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="flex items-start gap-3"
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                    >
                      <span className="grid h-[26px] w-[26px] place-items-center rounded-full bg-[#e7f4fb] text-[0.95rem] text-[#2D8BBA]">
                        <Icon />
                      </span>
                      <span>
                        <span className="block font-space-grotesk text-[0.95rem] font-bold text-[#04536E]">
                          {item.label}
                        </span>
                        <span className="mt-1 block text-[0.88rem] text-[#4D5761]">
                          {item.value}
                        </span>
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
