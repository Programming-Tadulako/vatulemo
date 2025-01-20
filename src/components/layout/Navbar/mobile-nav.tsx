"use client";
import { useState } from "react";
import { Menu } from "lucide-react";
import Link from "next/link";

import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/common/ThemeToggle";

import { LINKS } from "../../layout/Navbar/constant";
import { Button } from "@/components/ui/button";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className="rounded-sm border p-2">
        <Menu className="size-4" />
      </SheetTrigger>
      <SheetContent side="top" className="w-screen">
        <SheetHeader>
          <SheetTitle className="ml-2 flex justify-center">
            <Link href="/" onClick={() => setIsOpen(false)}>
              <div className="size-8 bg-[url('/assets/icons/ic_pt-dark.svg')] bg-cover bg-center bg-no-repeat" />
            </Link>
          </SheetTitle>
          <SheetDescription asChild>
            <nav className="mt-2 flex flex-col items-center gap-4">
              {LINKS.map(({ href, id, title }) => (
                <Link key={id} href={href} className="text-sm font-medium">
                  {title}
                </Link>
              ))}
              <ThemeToggle />
              <Button asChild>
                <Link href="/">Join Us</Link>
              </Button>
            </nav>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
