// src/app/portfolio/page.tsx
import Link from "next/link";
import pool from "@/lib/db";

export default async function Portfolio() {
  const result = await pool.query("SELECT * FROM projects ORDER BY created_at DESC");
  const projects = result.rows;

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-900">My Portfolio</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="border rounded-lg p-6 bg-white shadow-md hover:shadow-lg transition-shadow"
          >
            {/* Image from Supabase Storage */}
            {project.image_url ? (
              <img
                src={project.image_url}
                alt={project.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
            ) : (
              <div className="w-full h-48 bg-gray-200 rounded-md mb-4 flex items-center justify-center">
                <span className="text-gray-500">No Image</span>
              </div>
            )}

            {/* Title */}
            <h2 className="text-xl font-semibold mb-2 text-gray-800">{project.title}</h2>

            {/* Description */}
            <p className="text-gray-600 mb-4">{project.description}</p>

            {/* Tech Stack */}
            {project.tech_stack && (
              <p className="text-sm text-gray-500 mb-3">
                <span className="font-medium">Tech:</span>{" "}
                {Array.isArray(project.tech_stack)
                  ? project.tech_stack.join(", ")
                  : project.tech_stack.toString().replace(/[{}]/g, "").split(",").join(", ")}
              </p>
            )}

            {/* Created At */}
            {project.created_at && (
              <p className="text-sm text-gray-400 mb-3">
                <span className="font-medium">Added:</span>{" "}
                {new Date(project.created_at).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
            )}

            {/* Links */}
            <div className="flex flex-col gap-2">
              {project.github_url && (
                <a
                  href={project.github_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  GitHub
                </a>
              )}
              {project.live_url && (
                <a
                  href={project.live_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Live Site
                </a>
              )}
              <Link
                href={`/portfolio/${project.id}`}
                className="text-blue-500 hover:underline"
              >
                View Details (TBD)
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}