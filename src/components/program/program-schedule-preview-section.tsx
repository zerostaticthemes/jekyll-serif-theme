"use client";

import { useMemo, useState } from "react";
import {
  HiArrowLeft,
  HiArrowRight,
  HiChevronDown,
  HiChevronUp,
} from "react-icons/hi";
import { PillButton } from "@/components/shared/pill-button";
import { ComingSoonCard } from "../shared/coming-soon-card";

type PreviewSlot = {
  time: string;
  title: string;
  muted?: boolean;
};

type PreviewDay = {
  label: string;
  date: string;
  slots: PreviewSlot[];
};

type PreviewWeek = {
  label: string;
  days: PreviewDay[];
};

const previewSchedule: Record<"SEAS 2025" | "SEAS 2026", PreviewWeek[]> = {
  "SEAS 2025": [
    {
      label: "Tuần 1",
      days: [
        {
          label: "Thứ 2",
          date: "21/7",
          slots: [
            { time: "8:00 - 9:00", title: "Lễ chào mừng" },
            { time: "9:00 - 10:00", title: "Bài giảng khách mời 1" },
            { time: "10:00 - 11:00", title: "Đại số tuyến tính 1: Cơ bản" },
            {
              time: "11:00 - 12:00",
              title:
                "Đại số tuyến tính 2: Biến đổi tuyến tính (Linear transformations)",
            },
            { time: "12:00 - 13:00", title: "Nghỉ trưa", muted: true },
            { time: "13:00 - 14:30", title: "Lập trình Python 1" },
            { time: "14:30 - 16:00", title: "Bài tập toán trên Python 1" },
          ],
        },
        {
          label: "Thứ 3",
          date: "22/7",
          slots: [
            {
              time: "8:00 - 9:00",
              title:
                "Đại số tuyến tính 3: Ma trận nghịch đảo (Matrix inversion)",
            },
            {
              time: "9:00 - 10:00",
              title:
                "Đại số tuyến tính 4: Phép phân tích riêng (Eigendecomposition)",
            },
            { time: "10:00 - 11:00", title: "Xác suất thống kê 1: Cơ bản" },
            { time: "11:00 - 12:00", title: "Học máy 1: Giới thiệu" },
            { time: "12:00 - 13:00", title: "Nghỉ trưa", muted: true },
            { time: "13:00 - 14:30", title: "Lập trình Python 2" },
            { time: "14:30 - 16:00", title: "Bài tập toán trên Python 2" },
          ],
        },
        {
          label: "Thứ 4",
          date: "23/7",
          slots: [
            {
              time: "8:00 - 9:00",
              title: "Đại số tuyến tính 5: Giải tích ma trận (Matrix calculus)",
            },
            {
              time: "9:00 - 10:00",
              title: "Xác suất thống kê 2: Mô hình thống kê",
            },
            {
              time: "10:00 - 11:00",
              title:
                "Xác suất thống kê 3: Hồi quy tuyến tính (Linear regression)",
            },
            {
              time: "11:00 - 12:00",
              title: "Học máy 2: Học giám sát (Supervised learning)",
            },
            { time: "12:00 - 13:00", title: "Nghỉ trưa", muted: true },
            { time: "13:00 - 14:30", title: "Lập trình Python 3" },
            { time: "14:30 - 16:00", title: "Bài tập toán trên Python 3" },
          ],
        },
        {
          label: "Thứ 5",
          date: "24/7",
          slots: [
            {
              time: "8:00 - 9:00",
              title: "Đại số tuyến tính 6: Tổng kết & Ví dụ ứng dụng",
            },
            {
              time: "9:00 - 10:00",
              title: "Học máy 3: Thuật toán giảm độ dốc (Gradient descent)",
            },
            {
              time: "10:00 - 11:00",
              title: "Học máy 4: Học không giám sát (Unsupervised learning)",
            },
            { time: "11:00 - 12:00", title: "Bài giảng khách mời 2" },
            { time: "12:00 - 13:00", title: "Nghỉ trưa", muted: true },
            { time: "13:00 - 14:30", title: "Lập trình Python 4" },
            { time: "14:30 - 16:00", title: "Bài tập toán trên Python 4" },
          ],
        },
        {
          label: "Thứ 6",
          date: "25/7",
          slots: [
            {
              time: "8:00 - 9:00",
              title: "Học máy 5: Mạng thần kinh nhân tạo (Neural networks)",
            },
            {
              time: "9:00 - 10:00",
              title: "Học máy 6: Tổng kết & Giới thiệu các chủ đề khác",
            },
            { time: "10:00 - 11:00", title: "-" },
            { time: "11:00 - 12:00", title: "-" },
            { time: "12:00 - 13:00", title: "Nghỉ trưa", muted: true },
            {
              time: "13:00 - 14:30",
              title: "Giới thiệu dự án nhóm tuần 2 (dự án ứng dụng thực tiễn)",
            },
            {
              time: "14:30 - 16:00",
              title: "Giới thiệu dự án nhóm tuần 2 (dự án ứng dụng khoa học)",
            },
          ],
        },
      ],
    },
    {
      label: "Tuần 2",
      days: [
        {
          label: "Thứ 2",
          date: "28/7",
          slots: [
            {
              time: "8:00 - 9:00",
              title: "Bài giảng liên quan dự án nhóm ứng dụng thực tiễn",
            },
            {
              time: "9:00 - 10:00",
              title: "Bài giảng liên quan dự án nhóm ứng dụng thực tiễn",
            },
            {
              time: "10:00 - 11:00",
              title: "Bài giảng liên quan dự án nhóm ứng dụng khoa học",
            },
            { time: "11:00 - 12:00", title: "Học viên làm dự án nhóm" },
            { time: "12:00 - 13:00", title: "Nghỉ trưa", muted: true },
            { time: "13:00 - 14:30", title: "Học viên làm dự án nhóm" },
            { time: "14:30 - 16:00", title: "-" },
          ],
        },
        {
          label: "Thứ 3",
          date: "29/7",
          slots: [
            {
              time: "8:00 - 9:00",
              title: "Bài giảng liên quan dự án nhóm ứng dụng thực tiễn",
            },
            {
              time: "9:00 - 10:00",
              title: "Bài giảng liên quan dự án nhóm ứng dụng thực tiễn",
            },
            {
              time: "10:00 - 11:00",
              title: "Bài giảng liên quan dự án nhóm ứng dụng khoa học",
            },
            { time: "11:00 - 12:00", title: "Học viên làm dự án nhóm" },
            { time: "12:00 - 13:00", title: "Nghỉ trưa", muted: true },
            { time: "13:00 - 14:30", title: "Học viên làm dự án nhóm" },
            { time: "14:30 - 16:00", title: "-" },
          ],
        },
        {
          label: "Thứ 4",
          date: "30/7",
          slots: [
            { time: "8:00 - 9:00", title: "Học viên làm dự án nhóm" },
            { time: "9:00 - 10:00", title: "-" },
            { time: "10:00 - 11:00", title: "-" },
            { time: "11:00 - 12:00", title: "-" },
            { time: "12:00 - 13:00", title: "Nghỉ trưa", muted: true },
            {
              time: "13:00 - 14:30",
              title: "Hoạt động: Công viên Đông Mỹ Biên Nhật Lệ",
            },
            { time: "14:30 - 16:00", title: "-" },
          ],
        },
        {
          label: "Thứ 5",
          date: "31/7",
          slots: [
            { time: "8:00 - 9:00", title: "Học viên làm dự án nhóm" },
            { time: "9:00 - 10:00", title: "Học viên làm dự án nhóm" },
            { time: "10:00 - 11:00", title: "Bài giảng khách mời 3" },
            {
              time: "11:00 - 12:00",
              title: "Bài giảng khách mời 4 / Giao lưu hỏi & đáp",
            },
            { time: "12:00 - 13:00", title: "Nghỉ trưa", muted: true },
            { time: "13:00 - 14:30", title: "Học viên làm dự án nhóm" },
            { time: "14:30 - 16:00", title: "-" },
          ],
        },
        {
          label: "Thứ 6",
          date: "1/8",
          slots: [
            { time: "8:00 - 9:00", title: "Thuyết trình dự án nhóm" },
            { time: "9:00 - 10:00", title: "-" },
            { time: "10:00 - 11:00", title: "-" },
            { time: "11:00 - 12:00", title: "-" },
            { time: "12:00 - 13:00", title: "Nghỉ trưa", muted: true },
            { time: "13:00 - 14:30", title: "Thảo luận" },
            { time: "14:30 - 16:00", title: "Lễ tổng kết" },
          ],
        },
      ],
    },
  ],
  "SEAS 2026": [],
};

const previewYears = Object.keys(previewSchedule) as Array<
  keyof typeof previewSchedule
>;

export function ProgramSchedulePreviewSection() {
  const [activeYear, setActiveYear] =
    useState<(typeof previewYears)[number]>("SEAS 2025");
  const [activeWeekIndex, setActiveWeekIndex] = useState(0);
  const [activeDayIndex, setActiveDayIndex] = useState(0);
  const [mobileDayMenuOpen, setMobileDayMenuOpen] = useState(false);

  const weeks = previewSchedule[activeYear];
  const activeWeek = weeks[activeWeekIndex];
  const activeDay = activeWeek?.days[activeDayIndex];
  const hasSchedule = weeks.length > 0;
  const weekNavLabel = useMemo(
    () => activeWeek?.label ?? "Tuần 1",
    [activeWeek],
  );

  return (
    <section className="py-12 md:py-16" id="program-preview">
      <div className="container">
        <div className="mb-8 flex flex-col gap-6 md:mb-10 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <p className="mb-4 font-lexend text-[1.05rem] uppercase font-medium text-[#ff6d2d] md:text-lg">
              Kế hoạch
            </p>
            <h2 className="font-space-grotesk text-[2.5rem] font-bold uppercase leading-[1] tracking-[-0.04em] text-[#04536E] md:text-6xl">
              Lịch trình SEAS
            </h2>
          </div>

          <div className="flex gap-3">
            {previewYears.map((year) => {
              const isActive = year === activeYear;

              return (
                <PillButton
                  key={year}
                  onClick={() => {
                    setActiveYear(year);
                    setActiveWeekIndex(0);
                    setActiveDayIndex(0);
                  }}
                  isActive={isActive}
                  label={year}
                />
              );
            })}
          </div>
        </div>

        {hasSchedule ? (
          <div className="rounded-[30px] bg-white px-5 py-6 shadow-[0_24px_56px_rgba(150,199,224,0.18)] md:px-8 md:py-8">
            <div className="mb-6 flex flex-col gap-5 md:grid md:grid-cols-[176px_1fr] md:items-center md:gap-5 lg:grid-cols-[216px_1fr]">
              <div className="flex items-center justify-center gap-4 md:justify-start md:gap-4 lg:gap-6">
                <button
                  type="button"
                  onClick={() => {
                    setActiveWeekIndex((current) => Math.max(0, current - 1));
                    setActiveDayIndex(0);
                  }}
                  disabled={activeWeekIndex === 0}
                  className="text-[1.65rem] text-[#2D8BBA] transition-colors hover:text-[#0f6e98] disabled:cursor-not-allowed disabled:text-[#dbe6ee] lg:text-[1.8rem]"
                  aria-label="Tuần trước"
                >
                  <HiArrowLeft />
                </button>

                <div className="flex items-center gap-4">
                  <span className="font-space-grotesk text-[1.9rem] font-bold uppercase text-[#2D8BBA] md:text-[1.5rem] lg:text-[1.8rem]">
                    {weekNavLabel}
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      setActiveWeekIndex((current) =>
                        Math.min(weeks.length - 1, current + 1),
                      );
                      setActiveDayIndex(0);
                    }}
                    disabled={activeWeekIndex === weeks.length - 1}
                    className="text-[1.65rem] text-[#2D8BBA] transition-colors hover:text-[#0f6e98] disabled:cursor-not-allowed disabled:text-[#dbe6ee] lg:text-[1.8rem]"
                    aria-label="Tuần tiếp theo"
                  >
                    <HiArrowRight />
                  </button>
                </div>
              </div>

              <div className="hidden md:grid md:grid-cols-5 md:items-center md:gap-2 lg:gap-4">
                {activeWeek.days.map((day, index) => {
                  const isActive = index === activeDayIndex;

                  return (
                    <button
                      key={`${day.label}-${day.date}`}
                      type="button"
                      onClick={() => setActiveDayIndex(index)}
                      className={[
                        "w-full rounded-full py-3 text-center font-space-grotesk text-[0.82rem] font-bold uppercase leading-[1.15] whitespace-nowrap transition-colors duration-200 lg:px-4 lg:text-[1rem]",
                        isActive
                          ? "bg-[#2D8BBA] text-white"
                          : "bg-transparent text-[#2D8BBA] hover:bg-[#edf8fd]",
                      ].join(" ")}
                    >
                      {day.label} - {day.date}
                    </button>
                  );
                })}
              </div>

              <div className="md:hidden">
                <label className="sr-only" htmlFor="program-preview-day">
                  Chọn ngày
                </label>
                <div className="relative">
                  <select
                    id="program-preview-day"
                    value={activeDayIndex}
                    onFocus={() => setMobileDayMenuOpen(true)}
                    onBlur={() => setMobileDayMenuOpen(false)}
                    onChange={(event) =>
                      setActiveDayIndex(Number(event.target.value))
                    }
                    className="w-full appearance-none rounded-[16px] border border-[#d7e3ec] bg-white px-5 py-4 pr-14 font-space-grotesk text-[1rem] font-bold uppercase text-[#2D8BBA] shadow-[0_12px_30px_rgba(105,140,170,0.2)] outline-none"
                  >
                    {activeWeek.days.map((day, index) => (
                      <option key={`${day.label}-${day.date}`} value={index}>
                        {day.label} - {day.date}
                      </option>
                    ))}
                  </select>
                  <span className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-[1.75rem] text-[#2D8BBA]">
                    {mobileDayMenuOpen ? <HiChevronUp /> : <HiChevronDown />}
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {activeDay.slots.map((slot) =>
                slot.muted ? (
                  <div
                    key={`${slot.time}-${slot.title}`}
                    className="rounded-[24px] border border-[#7fc8ef] bg-[#F7FAFF] px-6 py-8 text-center font-space-grotesk text-[1.05rem] font-bold uppercase leading-[1.35] text-[#575757]"
                  >
                    {slot.title}
                  </div>
                ) : (
                  <div
                    key={`${slot.time}-${slot.title}`}
                    className="grid grid-cols-[92px_minmax(0,1fr)] gap-3 md:grid-cols-[216px_1fr]"
                  >
                    <div className="rounded-[16px] border border-[#7fc8ef] bg-white px-2 py-5 text-center font-lexend text-[0.95rem] font-semibold leading-[1.35] text-[#575757] md:rounded-[20px] md:px-5 md:py-7 md:text-[1.05rem]">
                      {slot.time}
                    </div>

                    <div className="rounded-[16px] border border-[#7fc8ef] bg-white px-4 py-5 text-left font-space-grotesk text-[0.95rem] font-bold uppercase leading-[1.42] text-[#2D8BBA] md:rounded-[20px] md:px-6 md:py-7 md:text-center md:text-[1.05rem] md:leading-[1.35]">
                      {slot.title}
                    </div>
                  </div>
                ),
              )}
            </div>

            {/*<div className="pt-7">
              <PillArrowButton
                href="#program-details"
                label="Xem chi tiết lịch trình đầy đủ"
                className="min-h-[48px] min-w-0 px-6 text-[0.95rem] max-md:w-full"
              />
            </div>*/}
          </div>
        ) : (
          <ComingSoonCard />
        )}
      </div>
    </section>
  );
}
