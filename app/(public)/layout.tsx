
import type { ReactNode } from "react";

import PublicHeader from "@/components/layout/PublicHeader";

export default function PublicLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <PublicHeader />

      <div className="flex-1">
        {children}
      </div>

      <footer className="border-t border-slate-200 bg-white px-5 py-6 text-center text-sm text-slate-500">
        © HireFlow — Find your next opportunity
      </footer>
    </div>
  );
}