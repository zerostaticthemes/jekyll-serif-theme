import { HiArrowRight } from "react-icons/hi";

type PillArrowButtonVariant = "brand" | "light" | "outline-light";

type PillArrowButtonProps = {
  href: string;
  label: string;
  className?: string;
  variant?: PillArrowButtonVariant;
};

const variantClasses: Record<PillArrowButtonVariant, string> = {
  brand:
    "bg-[linear-gradient(90deg,#2D8BBA_0%,#2D8BBA_100%)] text-white shadow-[0_4px_24px_rgba(45,139,186,0.28)] hover:shadow-[0_14px_34px_rgba(45,139,186,0.34)]",
  light:
    "border-2 border-white bg-white text-[#2D8BBA] shadow-[0_4px_24px_rgba(255,255,255,0.16)] hover:shadow-[0_14px_34px_rgba(255,255,255,0.24)]",
  "outline-light":
    "border-2 border-white bg-transparent text-white shadow-[0_4px_24px_rgba(4,77,97,0.14)] hover:bg-white/8 hover:shadow-[0_14px_34px_rgba(4,77,97,0.22)]",
};

export function PillArrowButton({
  href,
  label,
  className = "",
  variant = "brand",
}: PillArrowButtonProps) {
  return (
    <a
      href={href}
      className={`group font-space-grotesk inline-flex min-h-[44px] min-w-[232px] items-center justify-center gap-3 rounded-full px-6 text-[1.05rem] font-semibold uppercase transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:scale-[1.01] ${variantClasses[variant]} ${className}`.trim()}
    >
      <span>{label}</span>
      <HiArrowRight
        aria-hidden="true"
        className="text-[1.35rem] transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0.5"
      />
    </a>
  );
}
