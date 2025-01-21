import Image from "next/image";
import { FOOT_LINKS } from "./constant";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-white">
      <div className="h-[40vh] bg-[url('/assets/images/footer/waves.svg')] bg-cover bg-top bg-no-repeat"></div>
      <div className="flex h-fit items-center justify-center bg-pt-primary p-5 py-12 lg:py-20">
        <div className="flex flex-col items-center justify-center gap-16 lg:flex-row lg:items-start lg:gap-52">
          <div>
            <Image
              src="/assets/images/footer/footer_logo.svg"
              width={200}
              height={200}
              alt="logo"
              className="w-36 lg:w-52"
            />
          </div>
          <div className="space-y-4">
            <div>
              <h1 className="text-3xl font-bold">Navigate</h1>
            </div>
            <div className="flex flex-col items-center gap-2 lg:items-start">
              {FOOT_LINKS.map(({ id, href, title }) => (
                <Link key={id} href={href} className="text-base font-normal text-white">
                  {title}
                </Link>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <h1 className="text-3xl font-bold">Social</h1>
            </div>
            <div className="flex flex-col items-center gap-2 lg:items-start">
              <Link href={""} className="text-base font-normal text-white">
                Discord
              </Link>
              <Link href={""} className="text-base font-normal text-white">
                Instagram
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
