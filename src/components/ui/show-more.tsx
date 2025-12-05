"use client";

import { useState, useRef, useEffect, ReactNode } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ShowMoreProps<T> {
  items: T[];
  initialCount: number;
  renderItem: (item: T, index: number) => ReactNode;
  className?: string;
  scrollToTop?: boolean;
}

export function ShowMore<T>({ items, initialCount, renderItem, className = "", scrollToTop = true }: ShowMoreProps<T>) {
  const [showAll, setShowAll] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const hasMore = items.length > initialCount;

  const displayedItems = showAll ? items : items.slice(0, initialCount);

  useEffect(() => {
    if (!showAll && scrollToTop && containerRef.current) {
      const containerTop = containerRef.current.getBoundingClientRect().top + window.scrollY;
      const offset = 200;
      window.scrollTo({
        top: containerTop - offset,
        behavior: "smooth",
      });
    }
  }, [showAll, scrollToTop]);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div ref={containerRef} className="space-y-8">
      <div className={className}>
        {displayedItems.map((item, index) => (
          <div
            key={index}
            className={`transition-all duration-500 ease-in-out ${
              index >= initialCount && showAll ? "animate-in fade-in-0 zoom-in-95" : ""
            }`}
            style={{
              animationDelay: index >= initialCount && showAll ? `${(index - initialCount) * 50}ms` : "0ms",
              animationDuration: "500ms",
              animationFillMode: "both",
            }}
          >
            {renderItem(item, index)}
          </div>
        ))}
      </div>

      {hasMore && (
        <div className="flex items-center justify-center">
          <Button onClick={toggleShowAll} variant="outline">
            {showAll ? (
              <>
                Show Less <ChevronUp className="ml-1 size-4" />
              </>
            ) : (
              <>
                Show More ({items.length - initialCount} more) <ChevronDown className="ml-1 size-4" />
              </>
            )}
          </Button>
        </div>
      )}
    </div>
  );
}
