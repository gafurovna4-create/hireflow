
import Link from "next/link";
import { notFound } from "next/navigation";

import { jobs } from "@/data/jobs";

type Props = {
  params: Promise<{
    jobId: string;
  }>;
};

export function generateStaticParams() {
  return jobs
    .filter((job) => job.status === "published")
    .map((job) => ({
      jobId: job.id,
    }));
}

export default async function JobDetailsPage({
  params,
}: Props) {
  const { jobId } = await params;

  const job = jobs.find(
    (item) =>
      item.id === jobId &&
      item.status === "published"
  );

  if (!job) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-5xl px-5 py-12">
      <Link
        href="/jobs"
        className="text-sm font-medium text-blue-700"
      >
        ← Back to Jobs
      </Link>

      <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-8">
        <p className="font-medium text-blue-700">
          {job.company}
        </p>

        <h1 className="mt-3 text-3xl font-bold">
          {job.title}
        </h1>

        <p className="mt-4 text-slate-600">
          {job.location} · {job.workMode}
          {" · "}
          {job.employmentType.replace("_", "-")}
        </p>

        <p className="mt-5 text-xl font-semibold">
          ${job.salaryMin.toLocaleString()}
          {" – "}
          ${job.salaryMax.toLocaleString()}
          {" / month"}
        </p>

        <hr className="my-8 border-slate-200" />

        <section>
          <h2 className="text-xl font-semibold">
            Job Description
          </h2>

          <p className="mt-3 leading-7 text-slate-600">
            {job.description}
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold">
            Requirements
          </h2>

          <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600">
            {job.requirements.map((requirement) => (
              <li key={requirement}>
                {requirement}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold">
            Required Skills
          </h2>

          <div className="mt-4 flex flex-wrap gap-2">
            {job.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-lg bg-slate-100 px-3 py-2 text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <div className="mt-10 border-t border-slate-200 pt-8">
          <Link
            href="/profile"
            className="inline-flex rounded-lg bg-blue-700 px-6 py-3 font-medium text-white hover:bg-blue-800"
          >
            Complete Profile to Apply
          </Link>

          <p className="mt-3 text-sm text-slate-500">
            Application submission will be added
            in a later lesson.
          </p>
        </div>
      </div>
    </main>
  );
}