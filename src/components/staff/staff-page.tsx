 "use client";

import { useEffect } from "react";
import { StaffFoundersSection } from "@/components/staff/staff-founders-section";
import { StaffIntroSection } from "@/components/staff/staff-intro-section";
import { StaffMembersSection } from "@/components/staff/staff-members-section";

export function StaffPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <main className="overflow-clip bg-[#F9FCFF]">
      <StaffIntroSection />
      <StaffFoundersSection />
      <StaffMembersSection />
    </main>
  );
}
