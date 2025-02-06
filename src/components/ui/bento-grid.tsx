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
        "group/bento border-border shadow-input row-span-1 flex flex-col justify-evenly space-y-4 rounded-xl border p-4 transition duration-200 hover:shadow-xl",
        className
      )}
    >
      {header}
      <div className="transition duration-200 group-hover/bento:translate-x-2">
        {icon}
        <div className="text-pt-primary mt-2 mb-2 text-2xl font-bold">{title}</div>
        <div className="max-w-2xl text-sm">{description}</div>
      </div>
    </div>
  );
};
