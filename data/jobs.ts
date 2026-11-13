
import type { Job } from "@/types/job";

export const jobs: Job[] = [
  {
    id: "frontend-developer",
    title: "Frontend Developer",
    company: "TechNova",
    location: "Tashkent",
    workMode: "hybrid",
    employmentType: "full_time",
    salaryMin: 800,
    salaryMax: 1500,
    description:
      "We are looking for a Frontend Developer to build modern web applications.",
    requirements: [
      "Experience with React and TypeScript",
      "Knowledge of Next.js App Router",
      "Experience integrating REST APIs",
      "Good understanding of Git",
    ],
    skills: ["React", "TypeScript", "Next.js"],
    status: "published",
    createdAt: "2026-11-01",
  },
  {
    id: "backend-developer",
    title: "Backend Developer",
    company: "Digital Solutions",
    location: "Remote",
    workMode: "remote",
    employmentType: "full_time",
    salaryMin: 1200,
    salaryMax: 2200,
    description:
      "Join our backend team and help us develop scalable APIs and services.",
    requirements: [
      "Node.js and TypeScript",
      "Experience with PostgreSQL",
      "Knowledge of API security",
      "Understanding of database design",
    ],
    skills: ["Node.js", "PostgreSQL", "Docker"],
    status: "published",
    createdAt: "2026-11-02",
  },
  {
    id: "ui-ux-designer",
    title: "UI/UX Designer",
    company: "Creative Studio",
    location: "Tashkent",
    workMode: "onsite",
    employmentType: "part_time",
    salaryMin: 500,
    salaryMax: 1000,
    description:
      "Design user-friendly interfaces for web and mobile products.",
    requirements: [
      "Experience using Figma",
      "Understanding of UX principles",
      "Ability to build design systems",
    ],
    skills: ["Figma", "UI Design", "UX Research"],
    status: "published",
    createdAt: "2026-11-03",
  },
  {
    id: "qa-engineer",
    title: "QA Engineer",
    company: "TechNova",
    location: "Tashkent",
    workMode: "hybrid",
    employmentType: "full_time",
    salaryMin: 700,
    salaryMax: 1200,
    description:
      "We need a QA Engineer to help improve product quality.",
    requirements: [
      "Understanding of manual testing",
      "Ability to write test cases",
      "Basic knowledge of API testing",
    ],
    skills: ["Testing", "Postman", "QA"],
    status: "draft",
    createdAt: "2026-11-04",
  },
  {
    id: "marketing-manager",
    title: "Marketing Manager",
    company: "Brand Agency",
    location: "Samarkand",
    workMode: "onsite",
    employmentType: "full_time",
    salaryMin: 600,
    salaryMax: 1100,
    description:
      "Manage digital marketing campaigns and partnerships.",
    requirements: [
      "Digital marketing experience",
      "Campaign planning",
      "Analytical skills",
    ],
    skills: ["Marketing", "Analytics"],
    status: "archived",
    createdAt: "2026-10-15",
  },
];

export const publishedJobs = jobs.filter(
  (job) => job.status === "published"
);