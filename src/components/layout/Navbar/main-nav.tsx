import Link from "next/link";
import MobileNav from "./mobile-nav";
import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "./constant";

export default function MainNav() {
  return (
    <header aria-label="navbar" className="sticky top-0 z-50 w-full bg-pt-primary text-white">
      <div className="container mx-auto p-5">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="size-8 bg-[url('/assets/icons/ic_pt-white.svg')] bg-cover bg-center bg-no-repeat" />
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {NAV_LINKS.map(({ href, id, title }) => (
              <Link key={id} href={href} className="text-sm font-medium">
                {title}
              </Link>
            ))}
            <Button size="sm" variant="secondary" asChild>
              <Link href="/">Join Us</Link>
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
