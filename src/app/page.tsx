// src/app/page.tsx
import Image from "next/image";

export default function Home() {
  return (
    <div className="container max-w-5xl mx-auto py-16 px-4 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="flex flex-col md:flex-row justify-center items-center gap-10">
        {/* Profile Picture */}
        <div className="relative">
          <div className="absolute -inset-4 bg-blue-500/20 rounded-full blur-xl"></div>
          <Image
            src="/profilepic.jpg"
            alt="Daniel Walley"
            width={400}
            height={400}
            className="relative w-full max-w-[60%] sm:max-w-[50%] md:max-w-[40%] h-auto rounded-full object-cover border-4 border-blue-500 hover:scale-105 transition-all duration-300"
          />
        </div>
        {/* Bio Text */}
        <div className="w-full max-w-[80%] md:max-w-[50%] text-center md:text-left animate-fade-in animate-delay-200">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Daniel Walley
          </h1>
          <p className="text-xl text-gray-400 mb-6 font-light italic">Full Stack Developer</p>
          <p className="text-lg text-gray-200 leading-relaxed space-y-4">
            Welcome to my portfolio! I’m Daniel Walley, a passionate and detail-oriented Web Developer with over four years of experience in creating and maintaining scalable web applications. Leveraging modern tools such as React.js, Node.js, GraphQL, and RESTful APIs, I thrive in developing responsive user interfaces and robust backend systems.
            <br /><br />
            My journey into web development is enriched by my background in strategic communications and project management, allowing me to bring a collaborative and solutions-focused approach to every project. Whether it’s designing a dynamic landing page, optimizing website performance, or implementing innovative full-stack solutions, I’m dedicated to delivering impactful digital experiences. Explore my projects and skills to see how I turn ideas into functional, user-friendly applications!
          </p>
          <a
            href="/portfolio"
            className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors"
          >
            View My Work
          </a>
        </div>
      </div>
    </div>
  );
}
