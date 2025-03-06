// src/app/resume/page.tsx
import Link from "next/link";

export default function Resume() {
  return (
    <div className="container mx-auto py-12 text-center">
      <h1 className="text-3xl font-bold mb-6">Resume</h1>
      <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
        Here’s a snapshot of my skills and experience as a Full Stack Developer. Download the full version below!
      </p>
      <a
        href="/resume.pdf"
        download
        className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
      >
        Download Resume (PDF)
      </a>
      <div className="mt-8 text-left max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Highlights</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Proficient in MERN stack and Next.js</li>
          <li>Experience with PostgreSQL on Ubuntu</li>
          <li>Built Charlie_Foxtrot, a Timcast-style app</li>
          <li>Passionate about clean code and learning new tech</li>
        </ul>
      </div>
    </div>
  );
}