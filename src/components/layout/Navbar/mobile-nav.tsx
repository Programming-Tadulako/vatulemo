"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "../../layout/Navbar/constant";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className="rounded-lg border border-white p-2">
        <Menu className="size-5" />
      </SheetTrigger>
      <SheetContent side="top" className="bg-pt-primary text-white">
        <SheetHeader>
          <SheetTitle className="flex justify-center">
            <Link href="/" onClick={() => setIsOpen(false)}>
              <div className="size-8 bg-[url('/assets/icons/ic_pt-white.svg')] bg-cover bg-center bg-no-repeat" />
            </Link>
          </SheetTitle>
          <SheetDescription asChild>
            <nav className="flex flex-col items-center gap-4 pt-2">
              {NAV_LINKS.map(({ href, id, title }) => (
                <Link key={id} href={href} className="py-1 text-sm font-medium text-white opacity-90 hover:underline">
                  {title}
                </Link>
              ))}
              <Button size="sm" variant="secondary" asChild>
                <Link href="/">Join Us</Link>
              </Button>
            </nav>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
