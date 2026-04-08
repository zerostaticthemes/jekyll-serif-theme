"use client";

import { HiOutlineMail } from "react-icons/hi";
import { RiFacebookFill } from "react-icons/ri";

import { useRevealOnView } from "@/components/shared/use-reveal-on-view";

const contactItems = [
  {
    title: "Email lien he",
    value: "seas.cvn@gmail.com",
    href: "mailto:seas.cvn@gmail.com",
    icon: HiOutlineMail,
  },
  {
    title: "Cong dong Facebook",
    value: "facebook.com/seas.cvn",
    href: "https://facebook.com/seas.cvn",
    icon: RiFacebookFill,
  },
];

export function ContactSection() {
  const { ref, isVisible } = useRevealOnView<HTMLElement>();

  return (
    <section ref={ref} className="py-10 pb-16 md:py-14 md:pb-20">
      <div className="container">
        <div className="grid gap-8 rounded-[28px] bg-white px-6 py-7 shadow-[0_20px_48px_rgba(150,199,224,0.14)] md:px-10 md:py-9 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-10">
          <div>
            <h1
              className={[
                "font-space-grotesk text-[2.8rem] font-bold uppercase leading-[0.96] tracking-[-0.05em] text-[#04536E] transition-all duration-[850ms] ease-[cubic-bezier(0.16,1,0.3,1)] md:text-6xl",
                isVisible
                  ? "translate-y-0 opacity-100 [transition-delay:120ms]"
                  : "translate-y-10 opacity-0",
              ].join(" ")}
            >
              LIEN HE
            </h1>
          </div>

          <div
            className={[
              "border-l-4 border-[#2D8BBA] pl-5 transition-all duration-[850ms] ease-[cubic-bezier(0.16,1,0.3,1)] md:pl-6",
              isVisible
                ? "translate-y-0 opacity-100 [transition-delay:260ms]"
                : "translate-y-12 opacity-0",
            ].join(" ")}
          >
            <p className="max-w-[620px] font-lexend text-[1rem] leading-[1.9] text-[#4D5761] md:text-[1.06rem]">
              Neu ban co bat ky cau hoi nao ve SEAS, vui long lien he voi chung
              toi qua email hoac nhan tin truc tiep tren trang Facebook.
            </p>

            <div
              className={[
                "mt-7 space-y-7 transition-all duration-[850ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
                isVisible
                  ? "translate-y-0 opacity-100 [transition-delay:400ms]"
                  : "translate-y-12 opacity-0",
              ].join(" ")}
            >
              {contactItems.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.title}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                    className="flex items-center gap-4"
                  >
                    <span className="grid h-[40px] w-[40px] place-items-center rounded-full bg-[#2D8BBA] text-[1.2rem] text-white md:h-[44px] md:w-[44px] md:text-[1.3rem]">
                      <Icon />
                    </span>
                    <span className="block">
                      <span className="block font-space-grotesk text-[1.05rem] font-bold text-[#04536E] md:text-[1.15rem]">
                        {item.title}
                      </span>
                      <span className="mt-1 block font-lexend text-[0.98rem] text-[#4D5761] underline decoration-[#2D8BBA] underline-offset-4 md:text-[1rem]">
                        {item.value}
                      </span>
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
