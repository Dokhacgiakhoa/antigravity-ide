import { ReactNode } from "react";

interface StepProps {
  number: number;
  title: string;
  children: ReactNode;
}

export function Step({ number, title, children }: StepProps) {
  return (
    <div className="flex gap-4">
      <div className="flex-none w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold text-sm">
        {number}
      </div>
      <div className="flex-1 pb-6">
        <h3 className="font-semibold text-zinc-900 dark:text-zinc-50 mt-0 mb-2">
          {title}
        </h3>
        <div className="text-zinc-600 dark:text-zinc-400 text-sm [&>p]:mb-2">
          {children}
        </div>
      </div>
    </div>
  );
}

interface StepListProps {
  children: ReactNode;
}

export function StepList({ children }: StepListProps) {
  return <div className="space-y-2 mb-8">{children}</div>;
}
