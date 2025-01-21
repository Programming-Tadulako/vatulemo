import Image from "next/image";
import { FOOT_LINKS } from "./constant";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="text-white">
      <div className="bg-[url('/assets/images/footer/waves.svg')] bg-cover bg-top bg-no-repeat h-[40vh]"></div>
      <div className="bg-pt-primary h-fit flex items-center justify-center p-5 lg:py-20 py-12">
        <div className="flex justify-center items-center lg:gap-52 gap-16 flex-col lg:flex-row lg:items-start">
        <div>
          <Image src="/assets/images/footer/footer_logo.svg" width={200} height={200} alt="logo" className="lg:w-52 w-36"/>
        </div>
        <div className="space-y-4">
        <div>
          <h1 className="text-3xl font-bold">Navigate</h1>
        </div>
        <div className="flex flex-col gap-2 items-center lg:items-start">
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
        <div className="flex flex-col gap-2 items-center lg:items-start">
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
    </>
  )
}
