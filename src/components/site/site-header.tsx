"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navigation = [
  { href: "/about", label: "Về Chúng Tôi" },
  { href: "/program", label: "Chương Trình" },
  { href: "/staff", label: "Đội Ngũ" },
  { href: "/apply", label: "Đăng Ký Tham Gia" },
  { href: "/sponsor", label: "Tài trợ" },
  { href: "/contact", label: "Liên Hệ" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b bg-white/92 backdrop-blur-[18px]">
      <div className="container relative flex min-h-[92px] items-center justify-between gap-6">
        <Link
          href="/home"
          aria-label="SEAS Home"
          className="header-fly-down"
          style={{ animationDelay: "0ms" }}
        >
          <Image
            src="/images/logo/SEAS_LOGO_Transparent.png"
            alt="SEAS"
            width={68}
            height={68}
            priority
          />
        </Link>

        <button
          type="button"
          className="inline-block h-12 w-12 rounded-[14px] border border-[rgba(19,151,203,0.18)] bg-white lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label="Mở điều hướng"
        >
          <span className="mx-auto my-[5px] block h-0.5 w-5 rounded-full bg-[#0f5b7e]" />
          <span className="mx-auto my-[5px] block h-0.5 w-5 rounded-full bg-[#0f5b7e]" />
          <span className="mx-auto my-[5px] block h-0.5 w-5 rounded-full bg-[#0f5b7e]" />
        </button>

        <nav
          className={[
            "absolute right-0 left-0 top-[calc(100%+8px)] hidden flex-col items-start gap-2.5 rounded-[22px] border border-[rgba(19,151,203,0.16)] bg-white/98 p-[18px] shadow-[0_24px_50px_rgba(4,35,56,0.16)] lg:static lg:flex lg:flex-row lg:items-center lg:gap-6 lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none",
            open ? "flex" : "",
          ].join(" ")}
        >
          {navigation.map((item, index) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="header-fly-down relative w-full py-2 font-lexend font-semibold text-black after:absolute after:right-0 after:bottom-0 after:h-[3px] after:w-full after:origin-left after:scale-x-0 after:rounded-full after:bg-[linear-gradient(90deg,#1397cb,#56c6f2)] after:transition-transform after:duration-200 hover:after:scale-x-100 lg:w-auto lg:py-2"
              style={{
                animationDelay: `${120 + index * 70}ms`,
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
