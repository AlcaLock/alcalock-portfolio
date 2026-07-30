interface SectionHeadingProps {
  eyebrow: string;
  title: string;
}

/** Eyebrow renders like a log/status label: "// about", monospaced. */
export function SectionHeading({ eyebrow, title }: SectionHeadingProps) {
  return (
    <div className="mb-10 md:mb-14">
      <p className="font-mono text-xs uppercase tracking-widest text-signal">
        {`// ${eyebrow}`}
      </p>
      <h2 className="mt-3 text-balance font-display text-3xl font-medium tracking-tight text-ink md:text-4xl">
        {title}
      </h2>
    </div>
  );
}
