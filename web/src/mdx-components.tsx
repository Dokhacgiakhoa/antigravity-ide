import type { MDXComponents } from "mdx/types";
import Link from "next/link";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-2">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 mb-4 mt-8">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-3 mt-6">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-2 mt-4">
        {children}
      </h4>
    ),
    p: ({ children }) => (
      <p className="text-zinc-700 dark:text-zinc-300 mb-4">{children}</p>
    ),
    a: ({ href, children }) => {
      const isExternal = href?.startsWith("http");
      if (isExternal) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            {children}
          </a>
        );
      }
      return (
        <Link
          href={href || "#"}
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          {children}
        </Link>
      );
    },
    ul: ({ children }) => (
      <ul className="list-disc list-inside text-zinc-700 dark:text-zinc-300 space-y-2 mb-4">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside text-zinc-700 dark:text-zinc-300 space-y-2 mb-4">
        {children}
      </ol>
    ),
    li: ({ children }) => <li>{children}</li>,
    code: ({ children }) => (
      <code className="px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-sm font-mono text-zinc-900 dark:text-zinc-100">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="p-4 rounded-lg bg-zinc-950 overflow-x-auto mb-4 text-sm">
        {children}
      </pre>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-zinc-300 dark:border-zinc-700 pl-4 italic text-zinc-600 dark:text-zinc-400 mb-4">
        {children}
      </blockquote>
    ),
    hr: () => <hr className="border-zinc-200 dark:border-zinc-800 my-8" />,
    table: ({ children }) => (
      <div className="overflow-x-auto mb-4">
        <table className="min-w-full divide-y divide-zinc-200 dark:divide-zinc-800">
          {children}
        </table>
      </div>
    ),
    th: ({ children }) => (
      <th className="px-4 py-2 text-left text-sm font-semibold text-zinc-900 dark:text-zinc-50 bg-zinc-50 dark:bg-zinc-900">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="px-4 py-2 text-sm text-zinc-700 dark:text-zinc-300 border-t border-zinc-200 dark:border-zinc-800">
        {children}
      </td>
    ),
    ...components,
  };
}
