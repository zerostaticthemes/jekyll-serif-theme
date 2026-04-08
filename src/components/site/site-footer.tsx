import Link from "next/link";
import { HiOutlineMail } from "react-icons/hi";
import { RiFacebookFill, RiGithubFill } from "react-icons/ri";
import { FooterSection } from "@/components/shared/footer-section";

const iconMap = {
  GitHub: RiGithubFill,
  Facebook: RiFacebookFill,
  Email: HiOutlineMail,
};

const socialLinks = [
  { href: "https://github.com/SEAS-CVN", label: "GitHub" },
  { href: "https://www.facebook.com/seas.cvn", label: "Facebook" },
  { href: "mailto:seas.cvn@gmail.com", label: "Email" },
];

export function SiteFooter() {
  return (
    <footer className="bg-[#F9FCFF] py-12 md:pt-7" id="contact">
      <div id="sponsor">
        <FooterSection
          title="SẴN SÀNG"
          subtitle="BẮT ĐẦU HÀNH TRÌNH CỦA BẠN?"
          description="Đừng bỏ lỡ cơ hội khám phá tiềm năng của bản thân trong lĩnh vực Khoa học, Công nghệ, Kỹ thuật và Toán học cùng cộng đồng SEAS."
          primaryAction={{ href: "#apply", label: "ĐĂNG KÝ THAM GIA" }}
          secondaryAction={{ href: "#sponsor", label: "TÀI TRỢ SEAS" }}
          backgroundImage="/images/layout/footer-bg.png"
        />
      </div>

      <div className="container flex items-start justify-between gap-10 pt-9 text-[#414141] max-md:flex-col max-md:gap-8 max-md:pt-6">
        <div className="max-md:w-full">
          <h3 className="mb-5 mt-0 font-lexend text-[1.2rem] font-semibold text-[#2D8BBA] md:text-[1.2rem] max-md:mb-1 max-md:max-w-[280px] max-md:text-[1.05rem] max-md:leading-[1.45]">
            SEAS - Summer in Engineering and Applied Sciences
          </h3>

          <div className="flex gap-[18px] max-md:hidden">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.label as keyof typeof iconMap];

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  aria-label={link.label}
                  className="grid h-[54px] w-[54px] place-items-center rounded-full border-2 border-[#2D8BBA] bg-white text-[1.8rem] text-[#2D8BBA] transition-colors duration-200 hover:bg-[#2D8BBA] hover:text-white"
                >
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col items-end gap-6 max-md:w-full max-md:items-start max-md:gap-5">
          <nav className="flex flex-wrap items-center gap-10 font-lexend text-[1.2rem] md:gap-6 md:text-[1.1rem] max-md:flex-col max-md:items-start max-md:gap-4 max-md:text-[1.05rem]">
            <a
              href="#top"
              className="relative pb-1 text-[#414141] after:absolute after:right-0 after:bottom-0 after:h-[3px] after:w-full after:origin-left after:scale-x-0 after:rounded-full after:bg-[linear-gradient(90deg,#1397cb,#56c6f2)] after:transition-transform after:duration-200 hover:after:scale-x-100"
            >
              Về đầu trang
            </a>
            <Link
              href="/home"
              className="relative pb-1 text-[#414141] after:absolute after:right-0 after:bottom-0 after:h-[3px] after:w-full after:origin-left after:scale-x-0 after:rounded-full after:bg-[linear-gradient(90deg,#1397cb,#56c6f2)] after:transition-transform after:duration-200 hover:after:scale-x-100"
            >
              Trang chủ
            </Link>
            <a
              href="/contact"
              className="relative pb-1 text-[#414141] after:absolute after:right-0 after:bottom-0 after:h-[3px] after:w-full after:origin-left after:scale-x-0 after:rounded-full after:bg-[linear-gradient(90deg,#1397cb,#56c6f2)] after:transition-transform after:duration-200 hover:after:scale-x-100"
            >
              Liên hệ
            </a>
          </nav>

          <p className="m-0 font-lexend text-[1rem] text-[#4d4d4d] md:text-[1rem] max-md:hidden">
            &copy; 2026 SEAS Center. All rights reserved.
          </p>
        </div>

        <div className="hidden gap-[18px] max-md:flex">
          {socialLinks.map((link) => {
            const Icon = iconMap[link.label as keyof typeof iconMap];

            return (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                aria-label={link.label}
                className="grid h-[54px] w-[54px] place-items-center rounded-full border-2 border-[#2D8BBA] bg-white text-[1.8rem] text-[#2D8BBA] transition-colors duration-200 hover:bg-[#2D8BBA] hover:text-white"
              >
                <Icon />
              </a>
            );
          })}
        </div>

        <p className="hidden font-lexend text-[0.98rem] text-[#4d4d4d] max-md:block">
          &copy; 2026 SEAS Center. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
