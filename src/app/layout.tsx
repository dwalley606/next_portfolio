// src/app/layout.tsx
import Link from "next/link";
import Image from "next/image";
import Navigation from "./components/Navigation";
import "./globals.css";

export const metadata = {
  title: "Daniel Walley | Portfolio",
  description: "Full Stack Developer Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
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

  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-gray-900 text-white">
        <header className="bg-blue-700 text-white p-4 sticky top-0 shadow-md z-10">
          <nav className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
            {/* Name and Photo */}
            <div className="flex items-center gap-4">
              <Link href="/" className="text-2xl font-bold hover:text-blue-300 transition-colors">
                Daniel Walley
              </Link>
            </div>
            {/* Navigation Links */}
            <Navigation />
          </nav>
        </header>
        <main className="flex-grow">{children}</main>
        <footer className="bg-gray-800 text-gray-300 p-6">
          <div className="container mx-auto flex justify-center gap-12">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 hover:text-blue-300 transition-colors"
              >
                <Image
                  src={social.img}
                  alt={social.name}
                  width={32}
                  height={32}
                  className="hover:scale-110 transition-transform"
                />
                <span className="text-sm">{social.name}</span>
              </a>
            ))}
          </div>
        </footer>
      </body>
    </html>
  );
}