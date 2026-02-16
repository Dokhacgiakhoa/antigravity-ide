import { ReactNode } from "react";

interface FeatureProps {
  title: string;
  description?: string;
  children?: ReactNode;
}

export function Feature({ title, description, children }: FeatureProps) {
  return (
    <div className="p-3 bg-white dark:bg-zinc-900 rounded border border-zinc-100 dark:border-zinc-800 text-center">
      <div className="font-bold text-xs mb-1">{title}</div>
      {description && (
        <div className="text-[10px] text-zinc-500">{description}</div>
      )}
      {children}
    </div>
  );
}

interface FeatureGridProps {
  cols?: 2 | 3 | 4;
  children: ReactNode;
}

export function FeatureGrid({ cols = 4, children }: FeatureGridProps) {
  const colsClass = {
    2: "grid-cols-2",
    3: "grid-cols-3",
    4: "grid-cols-2 md:grid-cols-4",
  };

  return (
    <div className="bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-lg p-4 mb-6">
      <div className={`grid ${colsClass[cols]} gap-4`}>{children}</div>
    </div>
  );
}
