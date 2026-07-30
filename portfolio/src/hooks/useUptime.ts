"use client";

import { useEffect, useState } from "react";

/** Days elapsed since a given year — a small, honest "uptime" signature. */
export function useUptimeDays(sinceYear: number) {
  const [days, setDays] = useState<number | null>(null);

  useEffect(() => {
    const since = new Date(sinceYear, 0, 1).getTime();
    setDays(Math.floor((Date.now() - since) / 86_400_000));
  }, [sinceYear]);

  return days;
}
