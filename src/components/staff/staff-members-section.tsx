"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { staffMembers2025 } from "@/components/staff/staff-members-content";
import { ComingSoonCard } from "../shared/coming-soon-card";
import { PillButton } from "@/components/shared/pill-button";

const memberYears = ["SEAS 2025", "SEAS 2026"] as const;
const mobilePageSize = 6;

export function StaffMembersSection() {
  const [activeYear, setActiveYear] =
    useState<(typeof memberYears)[number]>("SEAS 2025");
  const [mobilePage, setMobilePage] = useState(1);
  const mobileSectionTopRef = useRef<HTMLDivElement | null>(null);
  const shouldScrollRef = useRef(false);

  const totalMobilePages = Math.ceil(staffMembers2025.length / mobilePageSize);
  const mobileMembers = staffMembers2025.slice(
    (mobilePage - 1) * mobilePageSize,
    mobilePage * mobilePageSize,
  );

  useEffect(() => {
    if (!shouldScrollRef.current) return;
    if (!mobileSectionTopRef.current) return;

    requestAnimationFrame(() => {
      const top =
        mobileSectionTopRef.current!.getBoundingClientRect().top +
        window.scrollY -
        12;

      window.scrollTo({ top, behavior: "smooth" });
      shouldScrollRef.current = false;
    });
  }, [mobilePage]);

  const handleMobilePageChange = (page: number) => {
    if (page === mobilePage) return;
    shouldScrollRef.current = true;
    setMobilePage(page);
  };

  return (
    <section className="py-12 pb-20 md:py-16 md:pb-24">
      <div className="container">
        <div ref={mobileSectionTopRef}>
          <p className="mb-4 font-lexend text-[1.05rem] font-medium uppercase text-[#ff6d2d] md:text-lg">
            Members
          </p>
          <h2 className="mb-8 font-space-grotesk text-[2.5rem] font-bold uppercase leading-[0.98] tracking-[-0.03em] text-[#04536E] md:text-6xl md:leading-[1.05]">
            Thành viên SEAS
          </h2>
        </div>

        <div className="mb-10 flex gap-3 md:mb-10">
          {memberYears.map((year) => {
            const isActive = year === activeYear;

            return (
              <PillButton
                key={year}
                onClick={() => {
                  shouldScrollRef.current = true;
                  setActiveYear(year);
                  setMobilePage(1);
                }}
                isActive={isActive}
                label={year}
              />
            );
          })}
        </div>

        {activeYear === "SEAS 2025" ? (
          <>
            <div className="grid grid-cols-2 gap-5 md:hidden">
              {mobileMembers.map((member) => (
                <Link
                  key={member.name}
                  href={`/staff/${member.slug}`}
                  className="rounded-[20px] border border-[#edf3f8] bg-white px-6 py-5 text-center shadow-[0_16px_38px_rgba(150,199,224,0.12)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[1.6px] hover:border-[#2D8BBA] hover:bg-white hover:shadow-[0_22px_50px_rgba(45,139,186,0.2)]"
                >
                  <div className="mx-auto mb-5 h-[92px] w-[92px] overflow-hidden rounded-full border-[3px] border-[#dff2fb]">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={140}
                      height={140}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <h3 className="font-space-grotesk text-[1.2rem] font-bold text-[#04536E]">
                    {member.name}
                  </h3>
                  <p className="font-lexend text-[0.9rem] leading-[1.4] text-[#2D8BBA]">
                    {member.role}
                  </p>
                  <p className="mt-6 font-lexend text-[0.9rem] leading-[1.4] text-[#72777d]">
                    {member.bio}
                  </p>
                </Link>
              ))}
            </div>

            <div className="mt-8 flex items-center justify-center gap-3 md:hidden">
              <button
                type="button"
                onClick={() =>
                  handleMobilePageChange(Math.max(1, mobilePage - 1))
                }
                disabled={mobilePage === 1}
                className="inline-flex items-center gap-1 font-lexend text-[1rem] text-[#4D5761] disabled:opacity-45"
              >
                <HiChevronLeft className="text-[1.2rem]" />
                <span>Truoc</span>
              </button>

              <div className="flex items-center gap-3">
                {Array.from({ length: totalMobilePages }, (_, index) => {
                  const pageNumber = index + 1;
                  const isActive = pageNumber === mobilePage;

                  return (
                    <button
                      key={pageNumber}
                      type="button"
                      onClick={() => handleMobilePageChange(pageNumber)}
                      className={[
                        "grid h-[48px] w-[48px] place-items-center rounded-[12px] border font-lexend text-[1rem] font-semibold transition-colors duration-200",
                        isActive
                          ? "border-[#2D8BBA] bg-[#2D8BBA] text-white"
                          : "border-[#dceaf3] bg-white text-[#575757]",
                      ].join(" ")}
                    >
                      {pageNumber}
                    </button>
                  );
                })}
              </div>

              <button
                type="button"
                onClick={() =>
                  handleMobilePageChange(
                    Math.min(totalMobilePages, mobilePage + 1),
                  )
                }
                disabled={mobilePage === totalMobilePages}
                className="inline-flex items-center gap-1 font-lexend text-[1rem] text-[#4D5761] disabled:opacity-45"
              >
                <span>Sau</span>
                <HiChevronRight className="text-[1.2rem]" />
              </button>
            </div>

            <div className="hidden gap-5 md:grid md:grid-cols-2 xl:grid-cols-4">
              {staffMembers2025.map((member) => (
                <Link
                  key={member.name}
                  href={`/staff/${member.slug}`}
                  className="rounded-[24px] border border-[#edf3f8] bg-white px-5 py-6 text-center shadow-[0_16px_38px_rgba(150,199,224,0.12)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[1.6px] hover:border-[#2D8BBA] hover:bg-white hover:shadow-[0_22px_50px_rgba(45,139,186,0.2)]"
                >
                  <div className="mx-auto mb-6 h-[104px] w-[104px] overflow-hidden rounded-full border-[3px] border-[#dff2fb]">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={140}
                      height={140}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <h3 className="font-space-grotesk text-[1.05rem] font-bold text-[#04536E] md:text-[1.2rem]">
                    {member.name}
                  </h3>
                  <p className="font-lexend text-[0.9rem] leading-[1.45] text-[#2D8BBA]">
                    {member.role}
                  </p>
                  <p className="mt-7 font-lexend text-[0.9rem] leading-[1.4] text-[#72777d]">
                    {member.bio}
                  </p>
                </Link>
              ))}
            </div>
          </>
        ) : (
          <ComingSoonCard />
        )}
      </div>
    </section>
  );
}
