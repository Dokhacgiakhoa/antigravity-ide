import { ReactNode } from "react";
import { Info, AlertTriangle, AlertCircle, Lightbulb } from "lucide-react";

type CalloutType = "info" | "warning" | "error" | "tip";

interface CalloutProps {
  type?: CalloutType;
  title?: string;
  children: ReactNode;
}

const calloutStyles: Record<CalloutType, { bg: string; border: string; icon: typeof Info; iconColor: string }> = {
  info: {
    bg: "bg-blue-50 dark:bg-blue-950/30",
    border: "border-blue-200 dark:border-blue-800",
    icon: Info,
    iconColor: "text-blue-600 dark:text-blue-400",
  },
  warning: {
    bg: "bg-yellow-50 dark:bg-yellow-950/30",
    border: "border-yellow-200 dark:border-yellow-800",
    icon: AlertTriangle,
    iconColor: "text-yellow-600 dark:text-yellow-400",
  },
  error: {
    bg: "bg-red-50 dark:bg-red-950/30",
    border: "border-red-200 dark:border-red-800",
    icon: AlertCircle,
    iconColor: "text-red-600 dark:text-red-400",
  },
  tip: {
    bg: "bg-zinc-50 dark:bg-zinc-900/50",
    border: "border-zinc-200 dark:border-zinc-800",
    icon: Lightbulb,
    iconColor: "text-zinc-600 dark:text-zinc-400",
  },
};

export function Callout({ type = "info", title, children }: CalloutProps) {
  const styles = calloutStyles[type];
  const Icon = styles.icon;

  return (
    <div className={`${styles.bg} ${styles.border} border rounded-lg p-4 mb-4`}>
      <div className="flex items-start gap-3">
        <Icon className={`w-5 h-5 mt-0.5 shrink-0 ${styles.iconColor}`} />
        <div className="flex-1">
          {title && (
            <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50 mb-1">
              {title}
            </h4>
          )}
          <div className="text-sm text-zinc-700 dark:text-zinc-300 [&>p]:mb-0">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
