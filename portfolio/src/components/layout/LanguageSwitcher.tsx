"use client";

import {useLocale} from "next-intl";
import {usePathname, useRouter} from "@/i18n/navigation";
import {Globe} from "lucide-react";

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  

  const nextLocale = locale === "en" ? "es" : "en";
  console.log({
  locale,
  pathname,
  nextLocale
});

  return (
    
    <button
      type="button"
      onClick={() => {
        router.replace(pathname, {
          locale: nextLocale
        });
      }}
      className="flex h-9 items-center gap-1.5 rounded-md border border-border px-2.5"
    >
      
      <Globe size={14}/>
      {nextLocale.toUpperCase()}
    </button>
    
  );
  
}