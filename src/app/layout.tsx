// src/app/layout.tsx
import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "David Walley | Portfolio",
  description: "Full Stack Developer Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-gray-100">
        <header className="bg-blue-600 text-white p-4 sticky top-0">
          <nav className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold">
              DW
            </Link>
            <ul className="flex space-x-6">
              <li><Link href="/" className="hover:underline">Home</Link></li>
              <li><Link href="/about" className="hover:underline">About</Link></li>
              <li><Link href="/portfolio" className="hover:underline">Portfolio</Link></li>
              <li><Link href="/resume" className="hover:underline">Resume</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact</Link></li>
            </ul>
          </nav>
        </header>
        <main className="flex-grow">{children}</main>
        <footer className="bg-gray-800 text-white p-4 text-center">
          <p>© 2025 David Walley. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
