import Image from "next/image";
import { Marquee } from "@/components/ui/marquee";

interface TeamMember {
  name: string;
  role: string;
  company: string;
  isActive: boolean;
}

const TeamCard = ({ name, role, company, isActive }: TeamMember) => {
  const currPosition = isActive ? `${role} at ${company}` : `Ex ${role} at ${company}`;

  return (
    <figure className="relative h-full w-72 cursor-pointer overflow-hidden rounded-xl border border-gray-950/10 bg-gray-950/1 p-4 hover:bg-gray-950/5">
      <div className="flex items-center gap-2">
        <Image width={24} height={24} alt={name} src="/assets/icons/ic_pt-dark.svg" className="shrink-0 rounded-full" />
        <div className="space-y-1">
          <figcaption className="text-sm font-medium">{name}</figcaption>
          <p className="line-clamp-2 text-xs font-medium text-gray-600">{currPosition}</p>
        </div>
      </div>
    </figure>
  );
};

export default async function MembersSection() {
  const TEAM_MEMBERS_URL =
    "https://raw.githubusercontent.com/Programming-Tadulako/our-members/refs/heads/main/our_members.json";
  const TEAM_MEMBERS: TeamMember[] = await fetch(TEAM_MEMBERS_URL)
    .then((res) => res.json())
    .catch(() => []);

  const firstRow = TEAM_MEMBERS.slice(0, TEAM_MEMBERS.length / 2);
  const secondRow = TEAM_MEMBERS.slice(TEAM_MEMBERS.length / 2);

  return (
    <section id="member" className="scroll-mt-28 md:scroll-mt-32">
      <div className="container space-y-8">
        <div className="space-y-2">
          <h2 className="text-pt-primary text-3xl font-bold lg:text-center lg:text-4xl">Our Members</h2>
          <p className="text-sm text-neutral-700 md:text-base lg:text-center">
            Belajar bareng, ngoding bareng, tumbuh bareng
          </p>
        </div>

        <div className="relative mt-4 flex w-full flex-col items-center justify-center overflow-hidden">
          <Marquee pauseOnHover className="[--duration:20s]">
            {firstRow.map((member) => (
              <TeamCard key={member.name} {...member} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:20s]">
            {secondRow.map((member) => (
              <TeamCard key={member.name} {...member} />
            ))}
          </Marquee>
          <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r" />
          <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l" />
        </div>
      </div>
    </section>
  );
}
