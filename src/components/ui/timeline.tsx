"use client";

import React from "react";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";

interface TimelineEntry {
  year: string;
  title: string;
  content: {
    description: string;
    list?: string[];
    image: string;
  };
}

export const Timeline: React.FC<{ data: TimelineEntry[] }> = ({ data }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [height, setHeight] = React.useState(0);
  const [offset, setOffset] = React.useState<[`start ${number}%`, `end ${number}%`]>(["start 10%", "end 50%"]);

  React.useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setHeight(entry.contentRect.height);
      }
    });

    observer.observe(container);

    return () => observer.unobserve(container);
  }, [ref]);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setOffset(["start 10%", "end 90%"]);
      } else {
        setOffset(["start 10%", "end 50%"]);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: offset,
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div ref={ref} className="relative mx-auto">
      {data.map((item, index) => (
        <div key={index} className={`justify-star flex md:gap-10 ${index > 0 && "pt-12 md:pt-32"}`}>
          <div className="sticky top-40 z-40 flex max-w-xs flex-col items-center self-start md:w-full md:flex-row lg:max-w-sm">
            <div className="absolute left-3 flex h-10 w-10 items-center justify-center rounded-full bg-white md:left-3">
              <div className="h-4 w-4 rounded-full border border-neutral-300 bg-neutral-200 p-2" />
            </div>
            <div className="flex flex-col">
              <h3 className="text-pt-primary hidden text-xl font-bold md:block md:pl-20 md:text-5xl">{item.year}</h3>
              <h4 className="text-md text-pt-primary hidden font-semibold md:block md:pl-20 md:text-3xl">
                {item.title}
              </h4>
            </div>
          </div>

          <div className="relative w-full pr-8 pl-20 md:pl-4">
            <div className="mb-1 flex flex-col -space-y-1">
              <h3 className="text-pt-primary block text-left text-2xl font-bold md:hidden">{item.year}</h3>
              <h4 className="text-pt-primary block text-lg font-semibold md:hidden md:pl-20 md:text-3xl">
                {item.title}
              </h4>
            </div>
            <div className="flex flex-col justify-between gap-6 md:gap-10 lg:flex-row">
              <div>
                <p className="mb-2 text-left text-sm font-normal text-neutral-800 md:text-base">
                  {item.content.description}
                </p>
                {item.content.list && (
                  <ul className="list-inside list-disc text-left text-sm md:text-base">
                    {item.content.list.map((listItem, i) => (
                      <li key={i}>{listItem}</li>
                    ))}
                  </ul>
                )}
              </div>
              <Image
                src={item.content.image}
                alt="batch image"
                width={500}
                height={500}
                className="aspect-2/1 w-full rounded-lg object-cover shadow-sm lg:w-1/2"
              />
            </div>
          </div>
        </div>
      ))}
      <div
        style={{
          height: height + "px",
        }}
        className="absolute top-0 left-8 w-[2px] overflow-hidden bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-0% via-neutral-200 to-transparent to-99% mask-[linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] md:left-8"
      >
        <motion.div
          style={{
            height: heightTransform,
            opacity: opacityTransform,
          }}
          className="via-pt-primary absolute inset-x-0 top-0 w-[2px] rounded-full bg-linear-to-t from-blue-400 from-0% via-10% to-transparent"
        />
      </div>
    </div>
  );
};
