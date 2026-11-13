
import Link from "next/link";

import { jobs } from "@/data/jobs";
import { applications } from "@/data/applications";

export default function AdminDashboard() {
  const stats = [
    {
      label: "Total Jobs",
      value: jobs.length,
    },
    {
      label: "Published Jobs",
      value: jobs.filter(
        (job) => job.status === "published"
      ).length,
    },
    {
      label: "Total Applications",
      value: applications.length,
    },
    {
      label: "Under Review",
      value: applications.filter(
        (app) => app.status === "reviewing"
      ).length,
    },
  ];

  return (
    <main className="p-6 md:p-10">
      <div className="mb-8">
        <h2 className="text-3xl font-bold">
          Dashboard
        </h2>

        <p className="mt-2 text-slate-500">
          Overview of recruitment activity
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl border border-slate-200 bg-white p-6"
          >
            <p className="text-sm text-slate-500">
              {stat.label}
            </p>

            <p className="mt-3 text-3xl font-bold">
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-xl border border-slate-200 bg-white p-6">
        <h3 className="text-xl font-semibold">
          Recruitment Management
        </h3>

        <p className="mt-2 text-slate-600">
          Manage vacancies and review
          incoming job applications.
        </p>

        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            href="/admin/jobs"
            className="rounded-lg bg-blue-700 px-5 py-3 text-sm font-medium text-white"
          >
            Manage Jobs
          </Link>

          <Link
            href="/admin/applications"
            className="rounded-lg border border-slate-300 px-5 py-3 text-sm font-medium"
          >
            View Applications
          </Link>
        </div>
      </div>
    </main>
  );
}