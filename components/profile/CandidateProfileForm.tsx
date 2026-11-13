
"use client";

import {
  useState,
  type FormEvent,
} from "react";

type ProfileData = {
  fullName: string;
  email: string;
  phone: string;
  age: string;
  city: string;
  desiredPosition: string;
  experienceYears: string;
  previousCompany: string;
  previousRole: string;
  education: string;
  skills: string;
  portfolioUrl: string;
  cvUrl: string;
  about: string;
};

type Field = {
  name: keyof ProfileData;
  label: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
};

const fields: Field[] = [
  {
    name: "fullName",
    label: "Full Name",
    required: true,
    placeholder: "Ali Karimov",
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    required: true,
    placeholder: "ali@example.com",
  },
  {
    name: "phone",
    label: "Phone Number",
    type: "tel",
    placeholder: "+998 XX XXX XX XX",
  },
  {
    name: "age",
    label: "Age (optional)",
    type: "number",
    placeholder: "23",
  },
  {
    name: "city",
    label: "City",
    required: true,
    placeholder: "Tashkent",
  },
  {
    name: "desiredPosition",
    label: "Desired Position",
    required: true,
    placeholder: "Frontend Developer",
  },
  {
    name: "experienceYears",
    label: "Years of Experience",
    type: "number",
    required: true,
    placeholder: "2",
  },
  {
    name: "previousCompany",
    label: "Previous Company",
    placeholder: "TechSoft",
  },
  {
    name: "previousRole",
    label: "Previous Position",
    placeholder: "Junior Frontend Developer",
  },
  {
    name: "education",
    label: "Education",
    placeholder: "University or qualification",
  },
  {
    name: "skills",
    label: "Skills",
    required: true,
    placeholder: "React, TypeScript, Next.js",
  },
  {
    name: "portfolioUrl",
    label: "Portfolio URL",
    type: "url",
    placeholder: "https://example.com",
  },
  {
    name: "cvUrl",
    label: "CV URL",
    type: "url",
    placeholder: "https://example.com/cv",
  },
];

export default function CandidateProfileForm() {
  const [preview, setPreview] =
    useState<ProfileData | null>(null);

  function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    const formData = new FormData(
      event.currentTarget
    );

    const get = (name: string) =>
      String(formData.get(name) ?? "").trim();

    const profile: ProfileData = {
      fullName: get("fullName"),
      email: get("email"),
      phone: get("phone"),
      age: get("age"),
      city: get("city"),
      desiredPosition: get("desiredPosition"),
      experienceYears: get("experienceYears"),
      previousCompany: get("previousCompany"),
      previousRole: get("previousRole"),
      education: get("education"),
      skills: get("skills"),
      portfolioUrl: get("portfolioUrl"),
      cvUrl: get("cvUrl"),
      about: get("about"),
    };

    setPreview(profile);
  }

  return (
    <div className="grid items-start gap-8 lg:grid-cols-[1fr_320px]">
      <form
        onSubmit={handleSubmit}
        className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8"
      >
        <h2 className="text-2xl font-semibold">
          Personal Information
        </h2>

        <p className="mt-2 text-sm text-slate-500">
          Complete your professional profile.
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {fields.map((field) => (
            <div
              key={field.name}
              className="flex flex-col gap-2"
            >
              <label
                htmlFor={field.name}
                className="text-sm font-medium"
              >
                {field.label}
              </label>

              <input
                id={field.name}
                name={field.name}
                type={field.type ?? "text"}
                required={field.required}
                min={
                  field.type === "number"
                    ? 0
                    : undefined
                }
                placeholder={field.placeholder}
                className="rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
              />
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-col gap-2">
          <label
            htmlFor="about"
            className="text-sm font-medium"
          >
            About Me
          </label>

          <textarea
            id="about"
            name="about"
            rows={5}
            placeholder="Tell us about your experience, projects and career goals..."
            className="rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
          />
        </div>

        <button
          type="submit"
          className="mt-8 rounded-lg bg-blue-700 px-6 py-3 font-medium text-white hover:bg-blue-800"
        >
          Preview Profile
        </button>
      </form>

      <aside className="rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="text-lg font-semibold">
          Profile Preview
        </h2>

        {!preview ? (
          <p className="mt-4 text-sm leading-6 text-slate-500">
            Fill in the form and click
            Preview Profile to see your
            information here.
          </p>
        ) : (
          <div className="mt-5 space-y-4 text-sm">
            <div>
              <h3 className="text-xl font-semibold">
                {preview.fullName}
              </h3>

              <p className="text-blue-700">
                {preview.desiredPosition}
              </p>
            </div>

            <div>
              <p className="text-slate-500">
                Location
              </p>
              <p>{preview.city}</p>
            </div>

            <div>
              <p className="text-slate-500">
                Experience
              </p>
              <p>
                {preview.experienceYears} years
              </p>
            </div>

            <div>
              <p className="text-slate-500">
                Previous Work
              </p>
              <p>
                {preview.previousRole || "Not provided"}
                {preview.previousCompany &&
                  ` at ${preview.previousCompany}`}
              </p>
            </div>

            <div>
              <p className="text-slate-500">
                Skills
              </p>
              <p>{preview.skills}</p>
            </div>

            <div>
              <p className="text-slate-500">
                Education
              </p>
              <p>
                {preview.education || "Not provided"}
              </p>
            </div>

            {preview.about && (
              <div>
                <p className="text-slate-500">
                  About
                </p>
                <p className="whitespace-pre-wrap">
                  {preview.about}
                </p>
              </div>
            )}

            <p
              role="status"
              className="rounded-lg bg-amber-50 p-3 text-xs text-amber-800"
            >
              Demo only. Data is stored in React
              state and will disappear on refresh.
            </p>
          </div>
        )}
      </aside>
    </div>
  );
}