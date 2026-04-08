import { ProgramIntroSection } from "@/components/program/program-intro-section";
import { ProgramSchedulePreviewSection } from "@/components/program/program-schedule-preview-section";

export function ProgramPage() {
  return (
    <main className="overflow-clip bg-[#F9FCFF]">
      <ProgramIntroSection />
      <ProgramSchedulePreviewSection />
    </main>
  );
}
