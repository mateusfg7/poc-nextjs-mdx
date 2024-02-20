import { ReactNode } from "react";

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <div className="border border-neutral-900 rounded-2xl w-2/3 m-auto p-6">
      {children}
    </div>
  )
}
