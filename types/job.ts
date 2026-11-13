export type JobStatus =
  | "draft"
  | "published"
  | "archived";

export type Job = {
  id: string;
  title: string;
  company: string;
  location: string;

  workMode: "remote" | "hybrid" | "onsite";
  employmentType:
    | "full_time"
    | "part_time"
    | "contract";

  salaryMin: number;
  salaryMax: number;

  description: string;
  requirements: string[];
  skills: string[];

  status: JobStatus;
  createdAt: string;
};