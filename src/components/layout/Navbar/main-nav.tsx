import { ThemeToggle } from "@/components/common/ThemeToggle";
import Link from "next/link";
import MobileNav from "./mobile-nav";
import { LINKS } from "./constant";
import { Button } from "@/components/ui/button";

export default function MainNav() {
  return (
    <header aria-label="navbar" className="sticky top-0 z-50 w-full">
      <div className="bg-pt-primary">
        <div className="container mx-auto p-5">
          <div className="flex items-center justify-between gap-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="size-8 bg-[url('/assets/icons/ic_pt-white.svg')] bg-cover bg-center bg-no-repeat" />
            </Link>

            <nav className="hidden items-center gap-7 lg:flex">
              {LINKS.map(({ href, id, title }) => (
                <Link key={id} href={href} className="text-sm font-medium text-foreground">
                  {title}
                </Link>
              ))}
              <div className="flex items-center gap-2">
                <ThemeToggle />
                <Button size="sm" asChild>
                  <Link href="/">Join Us</Link>
                </Button>
              </div>
            </nav>
            <div className="flex lg:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
