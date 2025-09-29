import { Suspense } from "react";
import Image from "next/image";
import { Marquee } from "@/components/ui/marquee";
import { Skeleton } from "@/components/ui/skeleton";

interface TeamMember {
  name: string;
  role: string;
  company: string;
  avatarUrl: string;
}

const TeamCard = ({ name, role, company, avatarUrl }: TeamMember) => {
  const currPosition = `${role} at ${company}`;
  const baseUrl = "https://raw.githubusercontent.com/Programming-Tadulako/our-members/refs/heads/main";

  return (
    <figure className="border-border shadow-input relative flex h-full w-md cursor-pointer items-center gap-2 overflow-hidden rounded-xl border p-8 hover:shadow-md">
      <Image
        width={56}
        height={56}
        alt={name.charAt(0).toUpperCase()}
        src={avatarUrl ? `${baseUrl}/${avatarUrl}` : "/assets/icons/ic_pt-dark.svg"}
        className="ring-border size-14 rounded-full object-cover ring-2"
      />

      <div className="space-y-1">
        <figcaption className="font-semibold">{name}</figcaption>
        <p className="line-clamp-2 text-sm font-medium text-pretty text-gray-600">{currPosition}</p>
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

        <div className="relative mt-4 overflow-hidden">
          <Suspense
            fallback={
              <div className="grid grid-cols-3 gap-4">
                {Array.from({ length: 6 }).map((_, index) => (
                  <Skeleton key={index} className="h-32 w-full rounded-md" />
                ))}
              </div>
            }
          >
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
          </Suspense>

          <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r" />
          <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l" />
        </div>
      </div>
    </section>
  );
}
