
import { jobs } from "@/data/jobs";

const statusStyles = {
  draft: "bg-amber-50 text-amber-700",
  published: "bg-green-50 text-green-700",
  archived: "bg-slate-100 text-slate-600",
};

export default function AdminJobsPage() {
  return (
    <main className="p-6 md:p-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          Manage Jobs
        </h1>

        <p className="mt-2 text-slate-500">
          View and manage all job vacancies.
        </p>
      </div>

      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
        <div className="border-b border-slate-200 px-6 py-4">
          <h2 className="font-semibold">
            All Vacancies ({jobs.length})
          </h2>
        </div>

        <div className="divide-y divide-slate-100">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="flex flex-wrap items-center justify-between gap-4 px-6 py-5"
            >
              <div>
                <h3 className="font-semibold">
                  {job.title}
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  {job.company} · {job.location}
                </p>
              </div>

              <span
                className={`rounded-full px-3 py-1 text-xs font-medium ${statusStyles[job.status]}`}
              >
                {job.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      <p className="mt-5 text-sm text-slate-500">
        Create, Edit, Publish and Archive
        actions will be implemented with
        Server Actions in upcoming lessons.
      </p>
    </main>
  );
}
