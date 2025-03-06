// src/app/portfolio/page.tsx
import Link from "next/link";
import pool from "@/lib/db";

export default async function Portfolio() {
  const result = await pool.query("SELECT * FROM projects ORDER BY created_at DESC");
  const projects = result.rows;

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-6 text-center">My Portfolio</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="border rounded-lg p-4 bg-white shadow-md">
            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <Link href={`/portfolio/${project.id}`} className="text-blue-500 hover:underline">
              View Details (TBD)
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}