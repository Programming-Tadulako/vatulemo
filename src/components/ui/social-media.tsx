import { IconProps } from "@/components/icon/type";
import DiscordLogo from "@/components/icon/discord-logo";
import InstagramLogo from "@/components/icon/instagram-logo";
import LinkedinLogo from "@/components/icon/linkedin-logo";
import Link from "next/link";

interface SocialMedia {
  icon: React.FC<IconProps>;
  href: string;
}

const SocialMedia: React.FC<{ size?: number }> = ({ size = 24 }) => {
  const SOCIAL_MEDIA: SocialMedia[] = [
    {
      icon: InstagramLogo,
      href: "https://www.instagram.com/programming.tadulako",
    },
    {
      icon: DiscordLogo,
      href: "https://discord.gg/gyBWNxAb",
    },
    {
      icon: LinkedinLogo,
      href: "https://www.linkedin.com/company/programming-tadulako",
    },
  ];

  return (
    <div className="flex items-center gap-4">
      {SOCIAL_MEDIA.map(({ icon: Icon, href }) => (
        <Link key={href} target="_blank" href={href}>
          <Icon size={size} className="fill-white" />
        </Link>
      ))}
    </div>
  );
};

export { SocialMedia };
