import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-xl border border-border bg-surface/60 backdrop-blur-sm transition-colors duration-300 hover:border-signal/40",
        className,
      )}
      {...props}
    />
  );
}
