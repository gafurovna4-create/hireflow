
import Link from "next/link";

import JobCard from "@/components/jobs/JobCard";
import { publishedJobs } from "@/data/jobs";

export default function HomePage() {
  const featuredJobs = publishedJobs.slice(0, 3);

  return (
    <main>
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
            Your career starts here
          </span>

          <h1 className="mt-8 max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
            Find a job that fits your skills and ambitions.
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-slate-600">
            Discover opportunities from great companies
            and take the next step in your career.
          </p>

          <Link
            href="/jobs"
            className="mt-8 inline-flex rounded-xl bg-blue-700 px-6 py-3 font-medium text-white hover:bg-blue-800"
          >
            Explore Jobs
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold">
              Featured Jobs
            </h2>

            <p className="mt-2 text-slate-600">
              Explore our latest opportunities.
            </p>
          </div>

          <Link
            href="/jobs"
            className="font-medium text-blue-700"
          >
            View All Jobs
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featuredJobs.map((job) => (
            <JobCard
              key={job.id}
              job={job}
            />
          ))}
        </div>
      </section>
    </main>
  );
}