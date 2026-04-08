"use client";

import Image from "next/image";
import { useState } from "react";
import { PillButton } from "@/components/shared/pill-button";

type ScheduleCell = {
  text: string;
  tone?: "pink" | "gold" | "orange" | "green" | "mint" | "cyan" | "indigo" | "plain";
  rowSpan?: number;
};

type ScheduleTable = {
  title: string;
  headers: string[];
  rows: Array<{
    time: string;
    cells: ScheduleCell[];
    lunch?: boolean;
  }>;
};

const cellToneClasses: Record<NonNullable<ScheduleCell["tone"]>, string> = {
  pink: "bg-[#ef6d97]",
  gold: "bg-[#fae8b4]",
  orange: "bg-[#ffb74d]",
  green: "bg-[#5aa26f] text-white",
  mint: "bg-[#abdde0]",
  cyan: "bg-[#69c8c2] text-white",
  indigo: "bg-[#7d87eb] text-white",
  plain: "bg-white",
};

const detailedSchedules: Record<"SEAS 2025" | "SEAS 2026", ScheduleTable[]> = {
  "SEAS 2025": [
    {
      title: "Lich trinh Tuan 1",
      headers: ["Thoi gian", "Thu 2\n21/7", "Thu 3\n22/7", "Thu 4\n23/7", "Thu 5\n24/7", "Thu 6\n25/7", "Thu 7\n26/7"],
      rows: [
        {
          time: "8:00 - 9:00",
          cells: [
            { text: "Le chao mung", tone: "pink" },
            { text: "Dai so tuyen tinh 3: Ma tran nghich dao (Matrix inversion)", tone: "orange" },
            { text: "Dai so tuyen tinh 5: Giai tich ma tran (Matrix calculus)", tone: "orange" },
            { text: "Dai so tuyen tinh 6: Tong ket & Vi du ung dung", tone: "orange" },
            { text: "Hoc may 5: Mang than kinh nhan tao (Neural networks)", tone: "green" },
            { text: "-", tone: "mint" },
          ],
        },
        {
          time: "9:00 - 10:00",
          cells: [
            { text: "Bai giang khach moi 1", tone: "gold" },
            { text: "Dai so tuyen tinh 4: Phep phan tich rieng (Eigendecomposition)", tone: "orange" },
            { text: "Xac suat thong ke 2: Mo hinh Thong ke", tone: "cyan" },
            { text: "Hoc may 3: Thuat toan giam do doc (Gradient descent)", tone: "green" },
            { text: "Hoc may 6: Tong ket & Gioi thieu cac chu de khac", tone: "green" },
            { text: "-", tone: "mint" },
          ],
        },
        {
          time: "10:00 - 11:00",
          cells: [
            { text: "Dai so tuyen tinh 1: Co ban", tone: "orange" },
            { text: "Xac suat thong ke 1: Co ban", tone: "cyan" },
            { text: "Xac suat thong ke 3: Hoi quy tuyen tinh (Linear regression)", tone: "cyan" },
            { text: "Hoc may 4: Hoc khong giam sat (Unsupervised learning)", tone: "green" },
            { text: "-", tone: "plain" },
            { text: "-", tone: "mint" },
          ],
        },
        {
          time: "11:00 - 12:00",
          cells: [
            { text: "Dai so tuyen tinh 2: Bien doi tuyen tinh (Linear transformations)", tone: "orange" },
            { text: "Hoc may 1: Gioi thieu", tone: "green" },
            { text: "Hoc may 2: Hoc giam sat (Supervised learning)", tone: "green" },
            { text: "Bai giang khach moi 2", tone: "gold" },
            { text: "-", tone: "plain" },
            { text: "Chuyen di dong Phong Nha", tone: "mint" },
          ],
        },
        {
          time: "Nghi trua",
          lunch: true,
          cells: [],
        },
        {
          time: "1:00 - 2:00",
          cells: [
            { text: "Lap trinh Python 1", tone: "plain" },
            { text: "Lap trinh Python 2", tone: "plain" },
            { text: "Lap trinh Python 3", tone: "plain" },
            { text: "Lap trinh Python 4", tone: "plain" },
            { text: "Gioi thieu du an nhom tuan 2 (du an ung dung thuc tien)", tone: "pink", rowSpan: 2 },
            { text: "-", tone: "mint" },
          ],
        },
        {
          time: "2:00 - 3:00",
          cells: [
            { text: "-", tone: "plain" },
            { text: "-", tone: "plain" },
            { text: "-", tone: "plain" },
            { text: "-", tone: "plain" },
            { text: "-", tone: "mint" },
          ],
        },
        {
          time: "3:00 - 4:00",
          cells: [
            { text: "Bai tap toan tren Python 1", tone: "plain" },
            { text: "Bai tap toan tren Python 2", tone: "plain" },
            { text: "Bai tap toan tren Python 3", tone: "plain" },
            { text: "Bai tap toan tren Python 4", tone: "plain" },
            { text: "Gioi thieu du an nhom tuan 2 (du an ung dung khoa hoc)", tone: "indigo" },
            { text: "-", tone: "mint" },
          ],
        },
        {
          time: "4:00 - 5:00",
          cells: [
            { text: "-", tone: "plain" },
            { text: "-", tone: "plain" },
            { text: "-", tone: "plain" },
            { text: "-", tone: "plain" },
            { text: "Hoc vien lap nhom", tone: "gold" },
            { text: "-", tone: "mint" },
          ],
        },
      ],
    },
    {
      title: "Lich trinh Tuan 2",
      headers: ["Thoi gian", "Thu 2\n28/7", "Thu 3\n29/7", "Thu 4\n30/7", "Thu 5\n31/7", "Thu 6\n1/8"],
      rows: [
        {
          time: "8:00 - 9:00",
          cells: [
            { text: "Bai giang lien quan du an nhom ung dung thuc tien", tone: "pink" },
            { text: "Bai giang lien quan du an nhom ung dung thuc tien", tone: "pink" },
            { text: "Hoc vien lam du an nhom", tone: "gold" },
            { text: "Hoc vien lam du an nhom", tone: "gold" },
            { text: "Thuyet trinh du an nhom", tone: "mint" },
          ],
        },
        {
          time: "9:00 - 10:00",
          cells: [
            { text: "Bai giang lien quan du an nhom ung dung thuc tien", tone: "pink" },
            { text: "Bai giang lien quan du an nhom ung dung thuc tien", tone: "pink" },
            { text: "-", tone: "gold" },
            { text: "Hoc vien lam du an nhom", tone: "gold" },
            { text: "-", tone: "mint" },
          ],
        },
        {
          time: "10:00 - 11:00",
          cells: [
            { text: "Bai giang lien quan du an nhom ung dung khoa hoc", tone: "indigo" },
            { text: "Bai giang lien quan du an nhom ung dung khoa hoc", tone: "indigo" },
            { text: "-", tone: "gold" },
            { text: "Bai giang khach moi 3", tone: "gold" },
            { text: "-", tone: "mint" },
          ],
        },
        {
          time: "11:00 - 12:00",
          cells: [
            { text: "Hoc vien lam du an nhom", tone: "gold" },
            { text: "Hoc vien lam du an nhom", tone: "gold" },
            { text: "-", tone: "gold" },
            { text: "Bai giang khach moi 4 / Giao luu hoi & dap", tone: "gold" },
            { text: "-", tone: "mint" },
          ],
        },
        {
          time: "Nghi trua",
          lunch: true,
          cells: [],
        },
        {
          time: "1:00 - 2:00",
          cells: [
            { text: "Hoc vien lam du an nhom", tone: "gold" },
            { text: "Hoc vien lam du an nhom", tone: "gold" },
            { text: "Hoat dong: Cong vien Dong My Bien Nhat Le", tone: "mint" },
            { text: "Hoc vien lam du an nhom", tone: "gold" },
            { text: "Thao luan", tone: "mint" },
          ],
        },
        {
          time: "2:00 - 3:00",
          cells: [
            { text: "-", tone: "gold" },
            { text: "-", tone: "gold" },
            { text: "-", tone: "mint" },
            { text: "-", tone: "gold" },
            { text: "-", tone: "mint" },
          ],
        },
        {
          time: "3:00 - 4:00",
          cells: [
            { text: "-", tone: "gold" },
            { text: "-", tone: "gold" },
            { text: "-", tone: "mint" },
            { text: "-", tone: "gold" },
            { text: "Le tong ket", tone: "pink" },
          ],
        },
        {
          time: "4:00 - 5:00",
          cells: [
            { text: "-", tone: "gold" },
            { text: "-", tone: "gold" },
            { text: "-", tone: "mint" },
            { text: "-", tone: "gold" },
            { text: "-", tone: "plain" },
          ],
        },
      ],
    },
  ],
  "SEAS 2026": [],
};

const detailYears = Object.keys(detailedSchedules) as Array<keyof typeof detailedSchedules>;

export function ProgramDetailedScheduleSection() {
  const [activeYear, setActiveYear] = useState<(typeof detailYears)[number]>("SEAS 2025");
  const tables = detailedSchedules[activeYear];

  return (
    <section className="py-12 pb-20 md:py-16 md:pb-24" id="program-details">
      <div className="container">
        <div className="mb-8 flex flex-col gap-5 md:mb-10 lg:flex-row lg:items-center lg:justify-between">
          <h2 className="font-space-grotesk text-[2.35rem] font-bold uppercase leading-[1] tracking-[-0.04em] text-[#04536E] md:text-5xl">
            Lich trinh chi tiet
          </h2>

          <div className="flex gap-3">
            {detailYears.map((year) => {
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

        {tables.length > 0 ? (
          <div className="space-y-10">
            {tables.map((table) => (
              <div key={table.title}>
                <div className="mb-6 text-center">
                  <h3 className="font-space-grotesk text-[2rem] font-bold text-[#04536E] md:text-[2.4rem]">
                    {table.title}
                  </h3>
                  <div className="mx-auto mt-3 h-[5px] w-[120px] rounded-full bg-[linear-gradient(90deg,transparent_0%,#8fd2ee_22%,#2D8BBA_50%,#8fd2ee_78%,transparent_100%)]" />
                </div>

                <div className="overflow-hidden rounded-[22px] border border-[#d7e9f3] bg-white shadow-[0_18px_44px_rgba(150,199,224,0.18)]">
                  <div className="overflow-x-auto">
                    <table className="min-w-[980px] border-collapse">
                      <thead>
                        <tr className="bg-[linear-gradient(90deg,#0d617d,#2D8BBA)] text-white">
                          {table.headers.map((header, index) => (
                            <th
                              key={`${table.title}-${header}`}
                              className={[
                                "border-r border-[rgba(255,255,255,0.15)] px-4 py-4 text-left font-lexend text-[0.98rem] font-semibold last:border-r-0",
                                index === 0 ? "min-w-[132px]" : "min-w-[180px]",
                              ].join(" ")}
                            >
                              {header.split("\n").map((line) => (
                                <span key={line} className="block">
                                  {line}
                                </span>
                              ))}
                            </th>
                          ))}
                        </tr>
                      </thead>

                      <tbody>
                        {table.rows.map((row) =>
                          row.lunch ? (
                            <tr key={`${table.title}-${row.time}`}>
                              <td
                                colSpan={table.headers.length}
                                className="bg-[#98a1ad] px-4 py-3 text-center font-space-grotesk text-[1.35rem] font-bold text-white"
                              >
                                {row.time}
                              </td>
                            </tr>
                          ) : (
                            <tr key={`${table.title}-${row.time}`} className="align-top">
                              <td className="border-r border-t border-[#d7e9f3] bg-[#fafbfd] px-4 py-6 font-lexend text-[1rem] font-medium text-[#111111]">
                                {row.time}
                              </td>
                              {row.cells.map((cell, cellIndex) => (
                                <td
                                  key={`${table.title}-${row.time}-${cellIndex}-${cell.text}`}
                                  rowSpan={cell.rowSpan ?? 1}
                                  className={[
                                    "border-r border-t border-[#d7e9f3] px-4 py-5 align-top font-lexend text-[0.98rem] leading-[1.55] text-[#111111] last:border-r-0",
                                    cellToneClasses[cell.tone ?? "plain"],
                                  ].join(" ")}
                                >
                                  {cell.text}
                                </td>
                              ))}
                            </tr>
                          ),
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-[30px] bg-white px-6 py-10 text-center shadow-[0_24px_56px_rgba(150,199,224,0.18)] md:px-10 md:py-14">
            <Image
              src="/images/layout/checklist.png"
              alt="Checklist illustration"
              width={220}
              height={180}
              className="mx-auto mb-7 h-auto w-[180px] md:w-[220px]"
            />

            <h3 className="font-space-grotesk text-[2.6rem] font-bold uppercase leading-none text-[#2D8BBA] md:text-[4rem]">
              Coming Soon
            </h3>
            <p className="mx-auto mt-5 max-w-[920px] font-lexend text-[1.05rem] leading-[1.8] text-[#4D5761] md:text-[1.18rem]">
              Thong tin chi tiet ve lich trinh SEAS 2026 se som duoc cap nhat. Hay
              theo doi de khong bo lo cac noi dung moi nhat cua chuong trinh.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
