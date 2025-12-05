"use client";

import Link from "next/link";
import { InstagramLogoIcon } from "@phosphor-icons/react/dist/csr/InstagramLogo";
import { DiscordLogoIcon } from "@phosphor-icons/react/dist/csr/DiscordLogo";
import { LinkedinLogoIcon } from "@phosphor-icons/react/dist/csr/LinkedinLogo";
import { GithubLogoIcon } from "@phosphor-icons/react/dist/csr/GithubLogo";
import { IconProps } from "@phosphor-icons/react/dist/lib/types";

interface SocialMediaProps {
  size?: number;
}

const SocialMedia: React.FC<SocialMediaProps> = ({ size = 24 }) => {
  return (
    <div className="flex items-center gap-4">
      {SOCIAL_MEDIA.map(({ icon: Icon, href, label }) => (
        <Link key={href} target="_blank" href={href} aria-label={label}>
          <Icon
            size={size}
            weight="fill"
            className="fill-white transition-transform duration-300 hover:scale-120 hover:rotate-5"
          />
        </Link>
      ))}
    </div>
  );
};

interface SocialMediaItem {
  icon: React.FC<IconProps>;
  href: string;
  label: string;
}

const SOCIAL_MEDIA: SocialMediaItem[] = [
  {
    icon: InstagramLogoIcon,
    href: "https://www.instagram.com/programming.tadulako",
    label: "Follow Programming Tadulako on Instagram",
  },
  {
    icon: DiscordLogoIcon,
    href: "https://discord.gg/gyBWNxAb",
    label: "Join Programming Tadulako Discord community",
  },
  {
    icon: LinkedinLogoIcon,
    href: "https://www.linkedin.com/company/programming-tadulako",
    label: "Connect with Programming Tadulako on LinkedIn",
  },
  {
    icon: GithubLogoIcon,
    href: "https://github.com/Programming-Tadulako/vatulemo",
    label: "View Programming Tadulako on GitHub",
  },
];

export { SocialMedia, SOCIAL_MEDIA };
