
import type {
  Application,
} from "@/types/application";

export const applications: Application[] = [
  {
    id: "app-1",
    jobId: "frontend-developer",
    candidateName: "Ali Karimov",
    candidateEmail: "ali@example.com",
    status: "pending",
    appliedAt: "2026-11-05",
  },
  {
    id: "app-2",
    jobId: "frontend-developer",
    candidateName: "Vali Akbarov",
    candidateEmail: "vali@example.com",
    status: "reviewing",
    appliedAt: "2026-11-06",
  },
  {
    id: "app-3",
    jobId: "backend-developer",
    candidateName: "Malika Saidova",
    candidateEmail: "malika@example.com",
    status: "accepted",
    appliedAt: "2026-11-07",
  },
];