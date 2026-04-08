"use client";

import { useState } from "react";
import { PillButton } from "@/components/shared/pill-button";

const programInfo = {
  "SEAS 2026": [
    { label: "Chủ đề", value: "Trí tuệ nhân tạo & Ứng dụng" },
    { label: "Thời gian dự kiến", value: "13/07/2026 - 24/07/2026" },
    { label: "Địa điểm", value: "TP. Đồng Hới, tỉnh Quảng Bình" },
    {
      label: "Quy mô",
      value: "Tối đa khoảng 40 học sinh xuất sắc, ưu tiên đến từ miền Trung",
    },
  ],
  "SEAS 2025": [
    { label: "Chủ đề", value: "Trí tuệ nhân tạo & Ứng dụng" },
    { label: "Thoi gian", value: "15/07/2025 - 26/07/2025" },
    { label: "Địa điểm", value: "THPT Chuyên Võ Nguyên Giáp, Quảng Bình" },
    { label: "Quy mô", value: "43 học viên và 12 trợ giảng tham gia" },
  ],
} as const;

const years = Object.keys(programInfo) as Array<keyof typeof programInfo>;

export function AboutProgramInfoSection() {
  const [activeYear, setActiveYear] =
    useState<(typeof years)[number]>("SEAS 2026");

  return (
    <section className="py-12 md:py-16" id="program">
      <div className="container">
        <h2 className="mb-8 font-space-grotesk text-[2.4rem] font-bold uppercase leading-[0.98] tracking-[-0.04em] text-[#04536E] md:mb-12 md:text-6xl">
          THÔNG TIN CHƯƠNG TRÌNH
        </h2>

        <div className="grid gap-6 lg:grid-cols-[auto_1fr] lg:items-start lg:gap-8">
          <div className="flex gap-3 lg:flex-col">
            {years.map((year) => {
              const isActive = year === activeYear;

              return (
                <PillButton
                  key={year}
                  onClick={() => setActiveYear(year)}
                  isActive={isActive}
                  label={year}
                  className="min-w-[128px]"
                />
              );
            })}
          </div>

          <div className="rounded-[28px] bg-white px-6 py-6 shadow-[0_20px_50px_rgba(150,199,224,0.18)] md:px-8 md:py-8">
            <dl className="grid gap-4 md:gap-5">
              {programInfo[activeYear].map((item) => (
                <div
                  key={item.label}
                  className="grid gap-1 border-b border-[#edf4f9] pb-4 last:border-b-0 last:pb-0 md:grid-cols-[160px_1fr] md:gap-4"
                >
                  <dt className="font-lexend text-[1rem] text-[#4D5761] md:text-[1.04rem]">
                    {item.label}
                  </dt>
                  <dd className="m-0 font-space-grotesk text-[1.05rem] font-bold uppercase leading-[1.25] text-[#2D8BBA] md:text-[1.2rem]">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
