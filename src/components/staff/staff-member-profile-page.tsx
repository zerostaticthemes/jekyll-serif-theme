import Image from "next/image";
import Link from "next/link";
import {
  HiArrowLeft,
  HiOutlineAcademicCap,
  HiOutlineBriefcase,
  HiOutlineCode,
  HiOutlineGlobeAlt,
  HiOutlineLightBulb,
  HiOutlineSparkles,
} from "react-icons/hi";
import type { StaffMember } from "@/components/staff/staff-members-content";

const highlightIcons = [
  HiOutlineBriefcase,
  HiOutlineAcademicCap,
  HiOutlineSparkles,
  HiOutlineGlobeAlt,
];

export function StaffMemberProfilePage({ member }: { member: StaffMember }) {
  return (
    <main className="overflow-clip bg-[#F9FCFF] py-8 pb-16 md:py-10 md:pb-20">
      <div className="container">
        <Link
          href="/staff"
          className="mb-6 inline-flex items-center gap-2 font-lexend text-[1rem] font-medium text-[#2D8BBA] transition-colors hover:text-[#0f6e98]"
        >
          <HiArrowLeft className="text-[1.1rem]" />
          <span>Quay ve</span>
        </Link>

        <div className="relative pt-4 md:pt-6">
          <div className="pointer-events-none absolute left-0 top-6 h-[92%] w-full rounded-[30px] bg-[#d6f0fb] md:left-[-18px] md:top-4 md:w-[96%] md:-rotate-[4deg]" />

          <section className="relative rounded-[30px] bg-white px-6 py-6 shadow-[0_24px_56px_rgba(150,199,224,0.18)] md:px-8 md:py-8 lg:px-10 lg:py-10">
            <div className="grid gap-8 lg:grid-cols-[220px_1fr] lg:gap-10">
              <div className="mx-auto w-full max-w-[220px]">
                <div className="overflow-hidden rounded-[20px] border-[3px] border-[#2D8BBA] shadow-[0_16px_32px_rgba(45,139,186,0.16)]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={320}
                    height={360}
                    className="h-[220px] w-full object-cover md:h-[250px]"
                  />
                </div>
              </div>

              <div>
                <h1 className="font-space-grotesk text-[2.35rem] font-bold uppercase leading-[0.98] tracking-[-0.04em] text-[#04536E] md:text-5xl">
                  {member.name}
                </h1>
                <p className="mt-4 font-lexend text-[1.05rem] font-semibold text-[#2D8BBA] md:text-[1.2rem]">
                  {member.role}
                </p>

                <div className="my-6 h-[4px] w-[74px] rounded-full bg-[linear-gradient(90deg,#b7e2f6_0%,#2D8BBA_100%)]" />

                <p className="font-lexend text-[1rem] leading-[1.9] text-[#4D5761] md:text-[1.05rem]">
                  {member.profileSummary}
                </p>

                {member.links?.length ? (
                  <div className="mt-8 space-y-3">
                    {member.links.map((link) => {
                      const Icon =
                        link.label === "GitHub"
                          ? HiOutlineCode
                          : link.label === "Website"
                            ? HiOutlineGlobeAlt
                            : HiOutlineSparkles;

                      return (
                        <div
                          key={`${member.slug}-${link.label}`}
                          className="flex items-start gap-3"
                        >
                          <span className="mt-1 text-[1.15rem] text-[#2D8BBA]">
                            <Icon />
                          </span>
                          <div className="font-lexend text-[0.98rem] leading-[1.8] text-[#4D5761] md:text-[1rem]">
                            <span className="font-semibold text-[#04536E]">
                              {link.label}:
                            </span>{" "}
                            <span>{link.href}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : null}

                <div className="mt-8 space-y-5">
                  {member.highlights.map((highlight, index) => {
                    const Icon = highlightIcons[index % highlightIcons.length];

                    return (
                      <div
                        key={`${member.slug}-highlight-${index}`}
                        className="flex items-start gap-3"
                      >
                        <span className="mt-1 text-[1.15rem] text-[#2D8BBA]">
                          <Icon />
                        </span>
                        <p className="font-lexend text-[0.98rem] leading-[1.8] text-[#4D5761] md:text-[1rem]">
                          {highlight}
                        </p>
                      </div>
                    );
                  })}

                  <div className="flex items-start gap-3">
                    <span className="mt-1 text-[1.15rem] text-[#2D8BBA]">
                      <HiOutlineLightBulb />
                    </span>
                    <div className="flex-1">
                      <p className="font-lexend text-[0.98rem] leading-[1.8] text-[#4D5761] md:text-[1rem]">
                        Chia se:
                      </p>
                      <blockquote className="mt-3 border-l-[3px] border-[#2D8BBA] pl-4 font-lexend text-[1rem] font-medium leading-[1.85] text-[#2D8BBA]">
                        {member.quote}
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
