type PillButtonProps = {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
};

export function PillButton({
  label,
  isActive = false,
  onClick,
  className = "",
  type = "button",
}: PillButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={[
        "min-w-[126px] cursor-pointer rounded-full border-2 px-6 py-3 font-lexend text-[1rem] font-semibold transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:scale-[1.01]",
        isActive
          ? "border-[#2D8BBA] bg-[#2D8BBA] text-white shadow-[0_4px_20px_rgba(45,139,186,0.18)] hover:shadow-[0_12px_28px_rgba(45,139,186,0.28)]"
          : "border-[#2D8BBA] bg-white text-[#2D8BBA] shadow-[0_4px_18px_rgba(150,199,224,0.12)] hover:bg-[#edf8fd] hover:shadow-[0_12px_26px_rgba(45,139,186,0.16)]",
        className,
      ].join(" ")}
    >
      {label}
    </button>
  );
}
