import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import {
  allStaffProfiles,
  getStaffMemberBySlug,
} from "@/components/staff/staff-members-content";
import { StaffMemberProfilePage } from "@/components/staff/staff-member-profile-page";

export function generateStaticParams() {
  return allStaffProfiles.map((member) => ({ slug: member.slug }));
}

export default async function StaffMemberRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const member = getStaffMemberBySlug(slug);

  if (!member) {
    notFound();
  }

  return (
    <>
      <SiteHeader />
      <StaffMemberProfilePage member={member} />
      <SiteFooter />
    </>
  );
}
