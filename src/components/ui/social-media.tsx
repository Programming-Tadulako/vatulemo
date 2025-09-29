import { IconProps } from "@/components/icon/type";
import DiscordLogo from "@/components/icon/discord-logo";
import InstagramLogo from "@/components/icon/instagram-logo";
import LinkedinLogo from "@/components/icon/linkedin-logo";
import Link from "next/link";

interface SocialMediaItem {
  icon: React.FC<IconProps>;
  href: string;
  label: string;
}

const SOCIAL_MEDIA: SocialMediaItem[] = [
  {
    icon: InstagramLogo,
    href: "https://www.instagram.com/programming.tadulako",
    label: "Follow Programming Tadulako on Instagram",
  },
  {
    icon: DiscordLogo,
    href: "https://discord.gg/gyBWNxAb",
    label: "Join Programming Tadulako Discord community",
  },
  {
    icon: LinkedinLogo,
    href: "https://www.linkedin.com/company/programming-tadulako",
    label: "Connect with Programming Tadulako on LinkedIn",
  },
];

interface SocialMediaProps {
  size?: number;
}

const SocialMedia: React.FC<SocialMediaProps> = ({ size = 24 }) => {
  return (
    <div className="flex items-center gap-4">
      {SOCIAL_MEDIA.map(({ icon: Icon, href, label }) => (
        <Link key={href} target="_blank" href={href} aria-label={label}>
          <Icon size={size} className="fill-white transition-transform duration-300 hover:scale-120 hover:rotate-5" />
        </Link>
      ))}
    </div>
  );
};

export { SocialMedia };
