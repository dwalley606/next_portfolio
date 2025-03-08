// src/app/portfolio/page.tsx
import Image from "next/image";
import pool from "@/lib/db";

// Define the Project type based on your Supabase table
type Project = {
  id: number;
  title: string;
  description: string;
  image_url: string | null;
  created_at: Date;
  tech_stack: string[] | string; // Handles both array and string cases
  github_url: string | null;
  live_url: string | null;
};

export default async function Portfolio() {
  const result = await pool.query("SELECT * FROM projects ORDER BY id ASC");
  const projects: Project[] = result.rows; // Type the result

  return (
    <div className="container max-w-5xl mx-auto py-16 px-4 bg-gradient-to-b from-gray-900 to-gray-800 flex flex-col items-center">
      <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text mb-12 text-center">
        My Portfolio
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="group p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 animate-fade-in flex flex-col border-t-2 border-blue-700/50"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Image from Supabase Storage */}
            {project.image_url ? (
              <div className="relative">
                <Image
                  src={project.image_url}
                  alt={project.title}
                  width={300}
                  height={192}
                  className="w-full h-48 object-cover rounded-md mb-4 hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-md"></div>
              </div>
            ) : (
              <div className="w-full h-48 bg-gray-700 rounded-md mb-4 flex items-center justify-center">
                <span className="text-gray-400">No Image</span>
              </div>
            )}

            {/* Title */}
            <h2 className="text-2xl font-semibold text-blue-400 mb-2">{project.title}</h2>

            {/* Description */}
            <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>

            {/* Tech Stack */}
            {project.tech_stack && (
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="text-sm text-gray-400 font-medium">Tech:</span>
                {(Array.isArray(project.tech_stack)
                  ? project.tech_stack
                  : project.tech_stack.toString().replace(/[{}]/g, "").split(",")
                ).map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-blue-700 text-white text-xs rounded-full"
                  >
                    {tech.trim()}
                  </span>
                ))}
              </div>
            )}

            {/* Created At */}
            {project.created_at && (
              <p className="text-sm text-gray-500 mb-3">
                <span className="font-medium">Added:</span>{" "}
                {new Date(project.created_at).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
            )}

            {/* Links */}
            <div className="flex flex-wrap gap-4">
              {project.github_url && (
                <a
                  href={project.github_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  GitHub
                </a>
              )}
              {project.live_url && (
                <a
                  href={project.live_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  Live Site
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}