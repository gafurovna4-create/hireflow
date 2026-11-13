
import Link from "next/link";

const navigation = [
  {
    label: "Dashboard",
    href: "/admin",
  },
  {
    label: "Manage Jobs",
    href: "/admin/jobs",
  },
  {
    label: "Applications",
    href: "/admin/applications",
  },
];

export default function AdminSidebar() {
  return (
    <aside className="w-full shrink-0 border-b border-slate-800 bg-slate-950 p-6 text-white md:sticky md:top-0 md:h-screen md:w-64 md:border-b-0">
      <Link
        href="/admin"
        className="text-2xl font-bold"
      >
        HireFlow
        <span className="ml-2 text-xs font-normal text-slate-400">
          Admin
        </span>
      </Link>

      <nav
        aria-label="Admin navigation"
        className="mt-10 flex flex-col gap-2"
      >
        {navigation.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-lg px-4 py-3 text-sm text-slate-300 transition hover:bg-slate-800 hover:text-white"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="mt-12 border-t border-slate-800 pt-5">
        <Link
          href="/jobs"
          className="text-sm text-slate-400 hover:text-white"
        >
          ← View Public Website
        </Link>
      </div>
    </aside>
  );
}