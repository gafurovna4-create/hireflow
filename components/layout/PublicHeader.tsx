
import Link from "next/link";

export default function PublicHeader() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-5">
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight text-blue-700"
        >
          HireFlow
        </Link>

        <nav
          aria-label="Public navigation"
          className="flex flex-wrap items-center gap-5 text-sm font-medium"
        >
          <Link href="/" className="hover:text-blue-700">
            Home
          </Link>

          <Link href="/jobs" className="hover:text-blue-700">
            Find Jobs
          </Link>

          <Link href="/profile" className="hover:text-blue-700">
            My Profile
          </Link>

          <Link
            href="/admin"
            className="rounded-lg border border-slate-200 px-4 py-2 hover:border-blue-600"
          >
            Admin Demo
          </Link>
        </nav>
      </div>
    </header>
  );
}