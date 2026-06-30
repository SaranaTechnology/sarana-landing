import type { MDXComponents } from "mdx/types";
import type { ComponentPropsWithoutRef } from "react";
import Link from "next/link";

// Styling global untuk semua file MDX (tanpa plugin @tailwindcss/typography).
const components: MDXComponents = {
  h1: (props: ComponentPropsWithoutRef<"h1">) => (
    <h1
      className="mt-2 mb-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
      {...props}
    />
  ),
  h2: (props: ComponentPropsWithoutRef<"h2">) => (
    <h2
      className="mt-12 mb-4 scroll-mt-24 border-t border-gray-100 pt-8 text-2xl font-semibold text-gray-900"
      {...props}
    />
  ),
  h3: (props: ComponentPropsWithoutRef<"h3">) => (
    <h3
      className="mt-8 mb-3 scroll-mt-24 text-lg font-semibold text-gray-900"
      {...props}
    />
  ),
  p: (props: ComponentPropsWithoutRef<"p">) => (
    <p className="my-4 leading-7 text-gray-700" {...props} />
  ),
  a: ({ href = "#", ...props }: ComponentPropsWithoutRef<"a">) => {
    const external = /^https?:\/\//.test(href);
    return (
      <Link
        href={href}
        className="font-medium text-indigo-600 underline underline-offset-2 hover:text-indigo-800"
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...props}
      />
    );
  },
  ul: (props: ComponentPropsWithoutRef<"ul">) => (
    <ul className="my-4 list-disc space-y-1 pl-6 text-gray-700" {...props} />
  ),
  ol: (props: ComponentPropsWithoutRef<"ol">) => (
    <ol className="my-4 list-decimal space-y-1 pl-6 text-gray-700" {...props} />
  ),
  li: (props: ComponentPropsWithoutRef<"li">) => (
    <li className="leading-7" {...props} />
  ),
  strong: (props: ComponentPropsWithoutRef<"strong">) => (
    <strong className="font-semibold text-gray-900" {...props} />
  ),
  blockquote: (props: ComponentPropsWithoutRef<"blockquote">) => (
    <blockquote
      className="my-6 border-l-4 border-indigo-200 bg-indigo-50/50 px-4 py-2 text-gray-700 [&>p]:my-2"
      {...props}
    />
  ),
  hr: () => <hr className="my-10 border-gray-200" />,
  // Inline code (pre>code di-skip karena `pre` punya styling sendiri)
  code: (props: ComponentPropsWithoutRef<"code">) => (
    <code
      className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-[0.85em] text-pink-600 [pre_&]:bg-transparent [pre_&]:p-0 [pre_&]:text-gray-100"
      {...props}
    />
  ),
  pre: (props: ComponentPropsWithoutRef<"pre">) => (
    <pre
      className="my-6 overflow-x-auto rounded-lg bg-gray-900 p-4 font-mono text-sm leading-6 text-gray-100"
      {...props}
    />
  ),
  table: (props: ComponentPropsWithoutRef<"table">) => (
    <div className="my-6 overflow-x-auto">
      <table
        className="w-full border-collapse text-left text-sm text-gray-700"
        {...props}
      />
    </div>
  ),
  thead: (props: ComponentPropsWithoutRef<"thead">) => (
    <thead className="border-b border-gray-300 bg-gray-50" {...props} />
  ),
  th: (props: ComponentPropsWithoutRef<"th">) => (
    <th className="px-3 py-2 font-semibold text-gray-900" {...props} />
  ),
  td: (props: ComponentPropsWithoutRef<"td">) => (
    <td className="border-b border-gray-100 px-3 py-2 align-top" {...props} />
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
