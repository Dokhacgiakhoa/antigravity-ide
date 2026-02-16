import { ReactNode } from "react";

interface TipProps {
  title: string;
  children: ReactNode;
}

export function Tip({ title, children }: TipProps) {
  return (
    <div className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg p-4">
      <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
        {title}
      </h4>
      <div className="text-sm text-zinc-600 dark:text-zinc-400 [&>p]:mb-0">
        {children}
      </div>
    </div>
  );
}

interface ProTipsProps {
  children: ReactNode;
}

export function ProTips({ children }: ProTipsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">{children}</div>
  );
}
