"use client";

import Image from "next/image";
import Link from "next/link";
import useScrolling from "@/hooks/useScrolling";
import { Button } from "@/components/ui/button";
import { TextFlip } from "@/components/animations/text-flip";
import { GithubLogoIcon } from "@phosphor-icons/react/dist/csr/GithubLogo";
import { NAV_LINKS } from "./constants";
import MobileNav from "./mobile-nav";

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
            <Image
              src="/assets/icons/ic_pt-white.svg"
              alt="Programming Tadulako"
              width={36}
              height={36}
              priority
              className="size-9"
            />
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">
            {NAV_LINKS.map(({ href, id, title }) => (
              <Link key={id} href={href} className="text-sm font-medium">
                <TextFlip text={title} />
              </Link>
            ))}

            <div className="flex items-center gap-2">
              <Button size="sm" variant="secondary" asChild>
                <Link href="https://www.instagram.com/programming.tadulako" target="_blank">
                  Join Us
                </Link>
              </Button>
              <Button size="sm" variant="secondary" asChild>
                <Link href="https://github.com/Programming-Tadulako/vatulemo" target="_blank">
                  <GithubLogoIcon weight="bold" className="size-5" />
                </Link>
              </Button>
            </div>
          </nav>
          <div className="flex lg:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
}
