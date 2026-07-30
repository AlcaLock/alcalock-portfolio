import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export function Badge({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded border border-border bg-surface-raised px-2 py-0.5 font-mono text-xs text-ink-muted",
        className,
      )}
      {...props}
    />
  );
}
