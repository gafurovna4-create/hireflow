
import Link from "next/link";

import type { Job } from "@/types/job";

type Props = {
  job: Job;
};

const workModeLabels = {
  remote: "Remote",
  hybrid: "Hybrid",
  onsite: "On-site",
};

const employmentLabels = {
  full_time: "Full-time",
  part_time: "Part-time",
  contract: "Contract",
};

export default function JobCard({
  job,
}: Props) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-blue-300 hover:shadow-md">
      <div className="mb-4 flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-medium text-blue-700">
            {job.company}
          </p>

          <h2 className="mt-2 text-xl font-semibold">
            {job.title}
          </h2>
        </div>

        <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
          Open
        </span>
      </div>

      <p className="text-sm text-slate-600">
        {job.location} · {workModeLabels[job.workMode]}
      </p>

      <p className="mt-2 text-sm text-slate-600">
        {employmentLabels[job.employmentType]}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {job.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-md bg-slate-100 px-2.5 py-1 text-xs text-slate-700"
          >
            {skill}
          </span>
        ))}
      </div>

      <div className="mt-auto pt-6">
        <p className="font-semibold">
          ${job.salaryMin.toLocaleString()}
          {" – "}
          ${job.salaryMax.toLocaleString()}
          <span className="text-sm font-normal text-slate-500">
            {" "}/ month
          </span>
        </p>

        <Link
          href={`/jobs/${job.id}`}
          className="mt-4 inline-flex rounded-lg bg-blue-700 px-4 py-2.5 text-sm font-medium text-white hover:bg-blue-800"
        >
          View Details
        </Link>
      </div>
    </article>
  );
}