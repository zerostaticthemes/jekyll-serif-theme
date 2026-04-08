"use client";

import { useState } from "react";
import { PillButton } from "@/components/shared/pill-button";
import { ComingSoonCard } from "../shared/coming-soon-card";

const donorYears = ["SEAS 2025", "SEAS 2026"] as const;

const donors2025 = [
  {
    date: "25/07/2025",
    name: "Công Ty TNHH Tư Vấn KS-TK Hoành Sơn",
    support: "5,000,000 đ",
    highlighted: true,
  },
  {
    date: "24/04/2025",
    name: "Trung tâm ngoại ngữ CELALS - 35 Ngô Quyền Đồng Hới",
    support:
      "Tài trợ khóa học tiếng Anh 120h trong 2 tuần cho toàn bộ học sinh tham gia chương trình, trị giá 60.000.000 VND",
  },
  {
    date: "19/04/2025",
    name: "Tân Phát Sport",
    support:
      "Toàn bộ áo quần, mũ, phù hiệu, ngoài ra còn hỗ trợ nước uống và hỗ trợ thêm trong chuyến đi Phong Nha",
  },
  {
    date: "25/07/2025",
    name: "Công Ty TNHH Tư Vấn KS-TK Hoành Sơn",
    support: "5,000,000 đ",
    highlighted: true,
  },
  {
    date: "25/07/2025",
    name: "Công Ty TNHH Tư Vấn KS-TK Hoành Sơn",
    support: "5,000,000 đ",
    highlighted: true,
  },
  {
    date: "25/07/2025",
    name: "Công Ty TNHH Tư Vấn KS-TK Hoành Sơn",
    support: "5,000,000 đ",
    highlighted: true,
  },
  {
    date: "25/07/2025",
    name: "Công Ty TNHH Tư Vấn KS-TK Hoành Sơn",
    support: "5,000,000 đ",
    highlighted: true,
  },
  {
    date: "25/07/2025",
    name: "Công Ty TNHH Tư Vấn KS-TK Hoành Sơn",
    support: "5,000,000 đ",
    highlighted: true,
  },
];

export function SponsorDonorsSection() {
  const [activeYear, setActiveYear] =
    useState<(typeof donorYears)[number]>("SEAS 2025");

  return (
    <section className="py-12 pb-20 md:py-16 md:pb-24">
      <div className="container">
        <div className="mb-8 flex flex-col gap-5 md:mb-10 lg:flex-row lg:items-center lg:justify-between">
          <h2 className="font-space-grotesk text-[2.35rem] font-bold uppercase leading-[1] tracking-[-0.04em] text-[#04536E] md:text-5xl">
            Nhà hảo tâm
          </h2>

          <div className="flex gap-3">
            {donorYears.map((year) => {
              const isActive = year === activeYear;

              return (
                <PillButton
                  key={year}
                  onClick={() => setActiveYear(year)}
                  isActive={isActive}
                  label={year}
                />
              );
            })}
          </div>
        </div>

        {activeYear === "SEAS 2025" ? (
          <div className="overflow-hidden rounded-[24px] border border-[#b9e7f7] bg-white shadow-[0_20px_48px_rgba(150,199,224,0.14)]">
            <div className="grid grid-cols-[170px_1.5fr_1.4fr] bg-[#dff2fb] font-space-grotesk text-[1rem] font-bold uppercase text-[#04536E]">
              <div className="border-r border-[#b9e7f7] px-5 py-5">Ngày</div>
              <div className="border-r border-[#b9e7f7] px-5 py-5">Tên</div>
              <div className="px-5 py-5">Số tiền hoặc vật chất</div>
            </div>

            {donors2025.map((donor, index) => (
              <div
                key={`${donor.name}-${index}`}
                className={[
                  "grid grid-cols-[170px_1.5fr_1.4fr] border-t border-[#d7eaf4] font-lexend text-[1rem]",
                  donor.highlighted ? "bg-[#f7fbff]" : "bg-white",
                ].join(" ")}
              >
                <div className="px-5 py-5 text-[#4D5761]">{donor.date}</div>
                <div className="px-5 py-5 font-semibold text-[#111111]">
                  {donor.name}
                </div>
                <div className="px-5 py-5 font-medium text-[#2D8BBA]">
                  {donor.support}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <ComingSoonCard />
        )}
      </div>
    </section>
  );
}
