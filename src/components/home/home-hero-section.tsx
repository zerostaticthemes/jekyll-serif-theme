"use client";

import { useEffect, useRef, useState } from "react";

import { PillArrowButton } from "@/components/shared/pill-arrow-button";

const COUNTDOWN_TARGET = new Date("2026-05-31T23:59:59").getTime();
const INITIAL_COUNTDOWN = [
  { value: "00", label: "NGAY" },
  { value: "00", label: "GIO" },
  { value: "00", label: "PHUT" },
  { value: "00", label: "GIAY" },
];

function getTimeLeft() {
  const difference = Math.max(COUNTDOWN_TARGET - Date.now(), 0);
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / (1000 * 60)) % 60);
  const seconds = Math.floor((difference / 1000) % 60);

  return [
    { value: String(days).padStart(2, "0"), label: "NGAY" },
    { value: String(hours).padStart(2, "0"), label: "GIO" },
    { value: String(minutes).padStart(2, "0"), label: "PHUT" },
    { value: String(seconds).padStart(2, "0"), label: "GIAY" },
  ];
}

export function HomeHeroSection() {
  const [countdown, setCountdown] = useState(INITIAL_COUNTDOWN);
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateCountdown = () => {
      setCountdown(getTimeLeft());
    };

    const timeoutId = window.setTimeout(updateCountdown, 0);
    const intervalId = window.setInterval(() => {
      updateCountdown();
    }, 1000);

    return () => {
      window.clearTimeout(timeoutId);
      window.clearInterval(intervalId);
    };
  }, []);

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
        threshold: 0.3,
      },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-8 pb-10 max-md:pt-5" id="apply">
      <div className="container grid gap-4">
        <div className="relative overflow-hidden rounded-[28px] bg-[linear-gradient(90deg,#2D8BBA_0%,#004D61_100%)] px-12 py-14 shadow-[0_4px_40px_rgba(45,139,186,0.2)] max-lg:px-8 max-md:px-5 max-md:py-8">
          <div className="relative z-[1] flex min-h-[156px] items-center justify-between gap-10 max-lg:flex-col max-lg:items-start max-lg:gap-8">
            <div className="space-y-3 font-space-grotesk">
              <p
                className={[
                  "mb-4 text-7xl font-bold uppercase leading-[0.9] text-[#7CEFF1] transition-all duration-[850ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
                  isVisible
                    ? "translate-y-0 opacity-100 [transition-delay:120ms]"
                    : "translate-y-10 opacity-0",
                ].join(" ")}
              >
                SEAS 2026
              </p>
              <h1
                className={[
                  "m-0 text-3xl font-bold uppercase leading-none text-white transition-all duration-[850ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
                  isVisible
                    ? "translate-y-0 opacity-100 [transition-delay:240ms]"
                    : "translate-y-12 opacity-0",
                ].join(" ")}
              >
                Tri tue nhan tao va Ung dung
              </h1>
            </div>

            <dl className="grid gap-2 font-space-grotesk text-white">
              <div
                className={[
                  "grid grid-cols-[auto_auto] items-baseline gap-x-5 gap-y-1 transition-all duration-[850ms] ease-[cubic-bezier(0.16,1,0.3,1)] max-md:grid-cols-1 max-md:gap-x-0",
                  isVisible
                    ? "translate-y-0 opacity-100 [transition-delay:360ms]"
                    : "translate-y-12 opacity-0",
                ].join(" ")}
              >
                <dt className="font-lexend text-[1.05rem] font-normal text-[#E6F8FF]">
                  Thoi gian du kien
                </dt>
                <dd className="m-0 text-[1.15rem] font-semibold uppercase">
                  13/07/2026 - 24/07/2026
                </dd>
              </div>
              <div
                className={[
                  "grid grid-cols-[auto_auto] items-baseline gap-x-5 gap-y-1 transition-all duration-[850ms] ease-[cubic-bezier(0.16,1,0.3,1)] max-md:grid-cols-1 max-md:gap-x-0",
                  isVisible
                    ? "translate-y-0 opacity-100 [transition-delay:460ms]"
                    : "translate-y-12 opacity-0",
                ].join(" ")}
              >
                <dt className="font-lexend text-[1.05rem] font-normal text-[#E6F8FF]">
                  Dia diem
                </dt>
                <dd className="m-0 text-[1.15rem] font-semibold uppercase">
                  TP. Dong Hoi, tinh Quang Binh
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 max-md:grid-cols-2">
          {countdown.map((item, index) => (
            <article
              key={item.label}
              className="hero-rise-up hero-countdown-card rounded-[22px] bg-white px-3 py-5 text-center font-space-grotesk shadow-[0_4px_30px_rgba(45,139,186,0.18)] [animation-delay:calc(560ms+var(--item-delay))]"
              style={{ ["--item-delay" as string]: `${index * 90}ms` }}
            >
              <strong className="block text-[3.25rem] leading-none font-bold text-[#2d8bba]">
                {item.value}
              </strong>
              <span className="mt-2 block text-[1.05rem] font-bold text-[#575757]">
                {item.label}
              </span>
            </article>
          ))}
        </div>

        <div className="flex justify-center pt-4 transition-all duration-[850ms] ease-[cubic-bezier(0.16,1,0.3,1)]">
          <PillArrowButton
            href="#apply"
            label="Dang Ky Tham Gia"
            className="min-h-[58px] min-w-[220px] px-7 max-md:min-h-[54px] max-md:w-full max-md:min-w-0 border-[2.5px] border-white"
          />
        </div>
      </div>
    </section>
  );
}
