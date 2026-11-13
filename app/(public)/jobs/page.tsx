
import JobCard from "@/components/jobs/JobCard";

import { publishedJobs } from "@/data/jobs";

export default function JobsPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-12">
      <div className="mb-10">
        <p className="font-medium text-blue-700">
          Explore opportunities
        </p>

        <h1 className="mt-2 text-4xl font-bold">
          Find Jobs
        </h1>

        <p className="mt-3 text-slate-600">
          Browse available job opportunities
          from different companies.
        </p>
      </div>

      <div className="mb-6 flex items-center justify-between gap-4">
        <h2 className="text-lg font-semibold">
          Available vacancies
        </h2>

        <p className="text-sm text-slate-500">
          {publishedJobs.length} jobs found
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {publishedJobs.map((job) => (
          <JobCard
            key={job.id}
            job={job}
          />
        ))}
      </div>
    </main>
  );
}