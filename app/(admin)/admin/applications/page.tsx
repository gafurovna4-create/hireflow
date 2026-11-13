
import { applications } from "@/data/applications";
import { jobs } from "@/data/jobs";

const statusStyles = {
  pending: "bg-amber-50 text-amber-700",
  reviewing: "bg-blue-50 text-blue-700",
  accepted: "bg-green-50 text-green-700",
  rejected: "bg-red-50 text-red-700",
};

export default function AdminApplicationsPage() {
  return (
    <main className="p-6 md:p-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          Applications
        </h1>

        <p className="mt-2 text-slate-500">
          View applications submitted by candidates.
        </p>
      </div>

      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
        <div className="divide-y divide-slate-100">
          {applications.map((application) => {
            const job = jobs.find(
              (item) => item.id === application.jobId
            );

            return (
              <div
                key={application.id}
                className="flex flex-wrap items-center justify-between gap-4 p-6"
              >
                <div>
                  <h2 className="font-semibold">
                    {application.candidateName}
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    {application.candidateEmail}
                  </p>

                  <p className="mt-2 text-sm">
                    Applied for:{" "}
                    <strong>
                      {job?.title ?? "Unknown Job"}
                    </strong>
                  </p>
                </div>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${statusStyles[application.status]}`}
                >
                  {application.status}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <p className="mt-5 text-sm text-slate-500">
        Application status updates will be
        implemented in a later lesson.
      </p>
    </main>
  );
}