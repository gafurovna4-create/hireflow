
import type { ReactNode } from "react";

import AdminSidebar from "@/components/layout/AdminSidebar";

export default function AdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen md:flex">
      <AdminSidebar />

      <div className="min-w-0 flex-1">
        <header className="border-b border-slate-200 bg-white px-6 py-5">
          <h1 className="text-lg font-semibold">
            Admin Workspace
          </h1>

          <p className="text-sm text-slate-500">
            Manage vacancies and applications
          </p>
        </header>

        {children}
      </div>
    </div>
  );
}