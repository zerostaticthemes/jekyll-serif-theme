"use client";

import { useEffect, useRef, useState } from "react";

import { PillArrowButton } from "@/components/shared/pill-arrow-button";

type FooterSectionProps = {
  title: string;
  subtitle: string;
  description: string;
  primaryAction: {
    href: string;
    label: string;
  };
  secondaryAction: {
    href: string;
    label: string;
  };
  backgroundImage?: string;
};

export function FooterSection({
  title,
  subtitle,
  description,
  primaryAction,
  secondaryAction,
  backgroundImage = "/images/layout/footer-bg.png",
}: FooterSectionProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.28,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="container">
      <div className="relative min-h-[500px] overflow-hidden rounded-[36px] px-3 pt-3 max-[900px]:min-h-[420px] max-md:min-h-[430px] max-md:rounded-[26px]">
        <div
          className={[
            "absolute inset-0 rounded-[36px] bg-cover bg-center transition-all duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] max-md:rounded-[26px]",
            isVisible
              ? "translate-y-0 scale-100 opacity-100"
              : "translate-y-[52px] scale-[1.06] opacity-0",
          ].join(" ")}
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(7,100,144,0.68), rgba(67,188,236,0.42)), url('${backgroundImage}')`,
          }}
        />
        <div
          className={[
            "absolute inset-0 rounded-[36px] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.16),transparent_30%),linear-gradient(180deg,rgba(5,56,82,0.1),rgba(5,56,82,0.34))] transition-opacity duration-[1300ms] max-md:rounded-[26px]",
            isVisible ? "opacity-100" : "opacity-0",
          ].join(" ")}
        />
        <div
          className={[
            "absolute inset-x-[8%] top-0 h-[150px] rounded-full bg-[radial-gradient(circle,rgba(151,230,255,0.3),transparent_68%)] blur-3xl transition-all duration-[1400ms]",
            isVisible
              ? "translate-y-0 scale-100 opacity-100"
              : "-translate-y-8 scale-[0.84] opacity-0",
          ].join(" ")}
        />

        <div className="relative mx-auto grid min-h-[500px] max-w-[860px] place-items-center gap-3.5 px-6 py-12 text-center max-[900px]:min-h-[420px] max-md:min-h-[430px] max-md:max-w-none max-md:place-items-start max-md:gap-4 max-md:px-4 max-md:py-7 max-md:text-left">
          <p
            className={[
              "m-0 font-space-grotesk text-[clamp(3.8rem,9vw,6.8rem)] font-bold uppercase leading-[0.92] text-white transition-all duration-[850ms] ease-[cubic-bezier(0.16,1,0.3,1)] max-md:text-[4rem] max-md:leading-[0.94]",
              isVisible
                ? "translate-y-0 opacity-100 [transition-delay:180ms]"
                : "translate-y-10 opacity-0",
            ].join(" ")}
          >
            {title}
          </p>
          <h2
            className={[
              "m-0 font-space-grotesk text-[clamp(2.3rem,5vw,2.8rem)] font-bold uppercase leading-[0.95] text-white transition-all duration-[850ms] ease-[cubic-bezier(0.16,1,0.3,1)] max-md:text-[1.8rem] max-md:leading-[1.05]",
              isVisible
                ? "translate-y-0 opacity-100 [transition-delay:280ms]"
                : "translate-y-12 opacity-0",
            ].join(" ")}
          >
            {subtitle}
          </h2>
          <p
            className={[
              "font-lexend text-[1.3rem] leading-[1.55] text-white/95 transition-all duration-[850ms] ease-[cubic-bezier(0.16,1,0.3,1)] max-md:text-[1.05rem] max-md:leading-[1.55]",
              isVisible
                ? "translate-y-0 opacity-100 [transition-delay:380ms]"
                : "translate-y-12 opacity-0",
            ].join(" ")}
          >
            {description}
          </p>
          <div
            className={[
              "mt-[18px] flex flex-wrap justify-center gap-3.5 transition-all duration-[850ms] ease-[cubic-bezier(0.16,1,0.3,1)] max-md:w-full max-md:flex-col max-md:items-stretch max-md:justify-start max-md:gap-3 max-md:pt-2",
              isVisible
                ? "translate-y-0 opacity-100 [transition-delay:500ms]"
                : "translate-y-14 opacity-0",
            ].join(" ")}
          >
            <PillArrowButton
              href={primaryAction.href}
              label={primaryAction.label}
              variant="light"
              className="min-h-[58px] min-w-[220px] px-7 max-md:min-h-[54px] max-md:w-full max-md:min-w-0"
            />
            <PillArrowButton
              href={secondaryAction.href}
              label={secondaryAction.label}
              variant="outline-light"
              className="min-h-[58px] min-w-[220px] px-7 max-md:min-h-[54px] max-md:w-full max-md:min-w-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
