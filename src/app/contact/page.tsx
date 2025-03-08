// src/app/contact/page.tsx
import Image from "next/image";
import pool from "@/lib/db";

export default function Contact() {
  const socials = [
    {
      name: "GitHub",
      link: "https://github.com/dwalley606",
      img: "/icons/github.png",
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/daniel-walley/",
      img: "/icons/linkedin.png",
    },
    {
      name: "Facebook",
      link: "https://www.facebook.com/dwalle1/",
      img: "/icons/facebook.png",
    },
  ];

  async function handleSubmit(formData: FormData) {
    "use server"; // Marks this as a Server Action
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    await pool.query(
      "INSERT INTO contacts (name, email, message) VALUES ($1, $2, $3)",
      [name, email, message]
    );
  }

  return (
    <div className="container max-w-5xl mx-auto py-16 px-4 bg-gradient-to-b from-gray-900 to-gray-800 flex flex-col items-center">
      <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text mb-12 text-center">
        Contact Me
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-4xl">
        {/* Contact Form */}
        <form action={handleSubmit} className="flex flex-col gap-6">
          <div>
            <label htmlFor="name" className="text-gray-300">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full p-3 mt-1 bg-gray-700 rounded-md text-white border border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-gray-300">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full p-3 mt-1 bg-gray-700 rounded-md text-white border border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
          <div>
            <label htmlFor="message" className="text-gray-300">Message</label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              className="w-full p-3 mt-1 bg-gray-700 rounded-md text-white border border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl font-semibold text-blue-400">Get in Touch</h2>
          <p className="text-gray-300">
            <span className="font-medium">Email:</span>{" "}
            <a href="mailto:your.email@example.com" className="hover:text-blue-400 transition-colors">
              dwalley606@gmail.com
            </a>
          </p>
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-semibold text-gray-200">Socials</h3>
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors"
              >
                <Image
                  src={social.img}
                  alt={social.name}
                  width={24}
                  height={24}
                  className="hover:scale-110 transition-transform"
                />
                <span>{social.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}