"use client";

import Image from "next/image";
import Link from "next/link";
import MobileNav from "./mobile-nav";
import useScrolling from "@/hooks/useScrolling";
import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "./constant";
import { TextFlip } from "@/components/ui/animations/text-flip";

export default function MainNav() {
  const isScrolled = useScrolling();

  return (
    <header
      aria-label="navbar"
      className={`fixed top-0 z-50 w-full text-white duration-300 ease-in-out ${isScrolled ? "bg-pt-primary shadow-xs" : "bg-transparent"}`}
    >
      <div className="container py-5">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/assets/icons/ic_pt-white.svg" alt="Programming Tadulako" width={36} height={36} />
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {NAV_LINKS.map(({ href, id, title }) => (
              <Link key={id} href={href} className="text-sm font-medium">
                <TextFlip text={title} />
              </Link>
            ))}
            <Button size="sm" variant="secondary" asChild>
              <Link href="https://www.instagram.com/programming.tadulako" target="_blank">
                Join Us
              </Link>
            </Button>
          </nav>
          <div className="flex lg:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
}
