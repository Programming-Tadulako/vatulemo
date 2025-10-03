import Link from "next/link";
import Image from "next/image";
import { SocialMedia } from "@/components/ui/social-media";

import { FOOTER_DATA } from "./constant";

export default function Footer() {
  const { navigate, contact, social } = FOOTER_DATA;

  return (
    <footer>
      <Image src="/assets/images/footer/waves.svg" alt="Footer Waves" width={2000} height={1000} className="mt-8" />
      <div className="bg-pt-primary py-12 text-white">
        <div className="container grid items-center justify-center justify-items-center gap-8 lg:grid-cols-4 lg:items-start">
          <Link href="/">
            <Image
              src="/assets/images/footer/footer_logo.svg"
              width={200}
              height={200}
              alt="logo"
              className="w-32 lg:w-40"
            />
          </Link>

          {/* Navigate */}
          <div className="space-y-2">
            <h3 className="text-center text-2xl font-semibold lg:text-start">{navigate.title}</h3>
            <div className="grid gap-x-4 gap-y-2 text-center lg:grid-cols-3 lg:text-start">
              {navigate.data.map(({ name, url }) => (
                <Link key={name} href={url} className="text-sm opacity-90 hover:underline">
                  {name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-2">
            <h3 className="text-center text-2xl font-semibold lg:text-start">{contact.title}</h3>
            <div className="flex flex-col items-center gap-2 lg:items-start">
              {contact.data.map(({ value, url }) => (
                <Link target="_blank" key={value} href={url || "#"} className="text-sm opacity-90 hover:underline">
                  {value}
                </Link>
              ))}
            </div>
          </div>

          {/* Social */}
          <div className="space-y-2">
            <h3 className="text-center text-2xl font-semibold lg:text-start">{social.title}</h3>
            <div className="flex items-center justify-center gap-2 lg:items-start lg:justify-start">
              <SocialMedia />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
