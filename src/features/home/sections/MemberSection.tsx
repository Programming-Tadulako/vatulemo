import Image from "next/image";
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import { TEAM_MEMBERS } from "../constants";

export default function MemberSection() {
  const firstRow = TEAM_MEMBERS.slice(0, TEAM_MEMBERS.length / 2);
  const secondRow = TEAM_MEMBERS.slice(TEAM_MEMBERS.length / 2);

  const TeamCard = ({
    name,
    role,
    company,
    isActive,
  }: {
    name: string;
    role: string;
    company: string;
    isActive: boolean;
  }) => {
    const currPosition = isActive ? `${role} at ${company}` : `Ex ${role} at ${company}`;

    return (
      <figure
        className={cn(
          "relative w-72 cursor-pointer overflow-hidden rounded-xl border p-4",
          "border-gray-950/10 bg-gray-950/1 hover:bg-gray-950/5"
        )}
      >
        <div className="flex items-center gap-2">
          <Image className="rounded-full p-1.5" width={40} height={40} alt={name} src="/assets/icons/ic_pt-dark.svg" />
          <div className="flex flex-col">
            <figcaption className="text-sm font-semibold">{name}</figcaption>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <p className="line-clamp-1 text-start text-xs font-medium">{currPosition}</p>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{currPosition}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </figure>
    );
  };

  return (
    <section id="member">
      <div className="container p-12">
        <h1 className="text-pt-primary pb-4 text-center text-4xl font-bold">Our Members</h1>
        <div className="relative mt-4 flex w-full flex-col items-center justify-center overflow-hidden rounded-lg">
          <Marquee pauseOnHover>
            {firstRow.map((member) => (
              <TeamCard key={member.name} {...member} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover>
            {secondRow.map((member) => (
              <TeamCard key={member.name} {...member} />
            ))}
          </Marquee>
          <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/5 bg-linear-to-r" />
          <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/5 bg-linear-to-l" />
        </div>
      </div>
    </section>
  );
}
