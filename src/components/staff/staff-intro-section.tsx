"use client";

import { useRevealOnView } from "@/components/shared/use-reveal-on-view";

export function StaffIntroSection() {
  const { ref, isVisible } = useRevealOnView<HTMLElement>();

  return (
    <section ref={ref} className="py-10 md:py-14">
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
              DOI NGU SEAS
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
            <p className="font-lexend text-[1rem] leading-[1.9] text-[#4D5761] md:text-[1.06rem]">
              Doi ngu giang vien cua SEAS bao gom cac chuyen gia hang dau trong
              linh vuc khoa hoc cong nghe, voi kinh nghiem giang day va nghien
              cuu tai cac vien nghien cuu va truong dai hoc danh tieng trong va
              ngoai nuoc.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
