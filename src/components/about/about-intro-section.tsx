"use client";

import Image from "next/image";

import { useRevealOnView } from "@/components/shared/use-reveal-on-view";

export function AboutIntroSection() {
  const { ref, isVisible } = useRevealOnView<HTMLElement>();

  return (
    <section ref={ref} className="bg-white py-10 md:py-14">
      <div className="container space-y-5 md:space-y-8">
        <div className="grid gap-8 rounded-[28px] bg-[#F7FAFF] px-6 py-7 shadow-[0_18px_42px_rgba(150,199,224,0.12)] md:px-10 md:py-9 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-10">
          <h1
            className={[
              "font-space-grotesk text-[2.5rem] font-bold uppercase leading-[0.95] tracking-[-0.04em] text-[#04536E] transition-all duration-[850ms] ease-[cubic-bezier(0.16,1,0.3,1)] md:text-6xl",
              isVisible
                ? "translate-y-0 opacity-100 [transition-delay:120ms]"
                : "translate-y-10 opacity-0",
            ].join(" ")}
          >
            VE CHUNG TOI
          </h1>

          <div
            className={[
              "border-l-4 border-[#2D8BBA] pl-5 transition-all duration-[850ms] ease-[cubic-bezier(0.16,1,0.3,1)] md:pl-6",
              isVisible
                ? "translate-y-0 opacity-100 [transition-delay:260ms]"
                : "translate-y-12 opacity-0",
            ].join(" ")}
          >
            <p className="font-lexend text-[1rem] leading-[1.9] text-[#4D5761] md:text-[1.06rem]">
              <span className="font-semibold text-[#4D5761]">
                SEAS (Summer in Engineering and Applied Sciences)
              </span>{" "}
              la{" "}
              <span className="font-semibold text-[#2D8BBA]">
                truong he mien phi
              </span>{" "}
              danh cho hoc sinh THPT mien Trung, duoc thanh lap boi cac chuyen
              vien nghien cuu nguoi mien Trung dang lam viec tai cac vien nghien
              cuu hang dau trong nuoc va the gioi. Muc tieu cua SEAS la giup cac
              ban hoc sinh tiep can voi cac nganh khoa hoc cong nghe moi nhu tri
              tue nhan tao (AI), khoa hoc du lieu, lap trinh, nang luong tai
              tao, cong nghe luong tu, va hon the nua.
            </p>
          </div>
        </div>

        <div className="overflow-hidden rounded-[28px] shadow-[0_22px_52px_rgba(150,199,224,0.2)] md:rounded-[34px]">
          <Image
            src="/images/layout/about-hero-bg.png"
            alt="SEAS team"
            width={1440}
            height={800}
            className="h-[250px] w-full object-cover md:h-[420px]"
            priority
          />
        </div>
      </div>
    </section>
  );
}
