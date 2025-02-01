import { cn } from "@/lib/utils";

export const BentoGrid = ({ className, children }: { className?: string; children?: React.ReactNode }) => {
  return (
    <div className={cn("mx-auto grid grid-cols-1 gap-4 md:auto-rows-[20rem] md:grid-cols-3", className)}>
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "group/bento row-span-1 flex flex-col justify-evenly space-y-4 rounded-xl border border-border p-4 shadow-input transition duration-200 hover:shadow-xl",
        className
      )}
    >
      {header}
      <div className="transition duration-200 group-hover/bento:translate-x-2">
        {icon}
        <div className="mb-2 mt-2 text-2xl font-bold text-pt-primary">{title}</div>
        <div className="max-w-screen-sm text-sm">{description}</div>
      </div>
    </div>
  );
};
