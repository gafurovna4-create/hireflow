
import CandidateProfileForm from "@/components/profile/CandidateProfileForm";

export default function ProfilePage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-12">
      <div className="mb-10">
        <p className="font-medium text-blue-700">
          Candidate Area
        </p>

        <h1 className="mt-2 text-4xl font-bold">
          My Profile
        </h1>

        <p className="mt-3 max-w-2xl text-slate-600">
          Add information about yourself,
          your experience, and your skills.
          A complete profile will help you
          prepare for job applications.
        </p>
      </div>

      <div className="mb-6 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
        This is a demo profile. Use sample data
        only. Authentication and database
        saving will be added later.
      </div>

      <CandidateProfileForm />
    </main>
  );
}