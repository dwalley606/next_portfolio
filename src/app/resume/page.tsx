// src/app/resume/page.tsx
export default function Resume() {
  const sections = [
    {
      title: "Web Development",
      items: [
        "Front-End: HTML5, CSS3, JavaScript (ES6+), React.js, Bootstrap, Material UI (MUI)",
        "Back-End: Node.js, Express.js, RESTful APIs, GraphQL, MongoDB, PostgreSQL",
        "Content Management Systems (CMS): AFPIMS, WordPress",
      ],
    },
    {
      title: "Programming & Tools",
      items: [
        "Version Control: Git, GitHub",
        "Testing & Debugging: Test-Driven Development (TDD), Jest, Unit Testing",
        "Frameworks & Libraries: React.js, Redux, Axios",
        "Database Management: MongoDB, MySQL, PostgreSQL",
      ],
    },
    {
      title: "Web Design",
      items: [
        "UX/UI Principles",
        "Responsive Design & Mobile-First Development",
        "Web Accessibility Standards (Section 508 Compliance, WCAG)",
        "SEO Optimization",
      ],
    },
    {
      title: "Project Management",
      items: [
        "Agile Methodologies (Scrum)",
        "Collaboration Tools: Trello, Slack",
        "Team Leadership & Mentorship",
      ],
    },
    {
      title: "Soft Skills",
      items: [
        "Problem-Solving & Analytical Thinking",
        "Communication & Team Collaboration",
        "Adaptability & Continuous Learning",
        "Attention to Detail",
      ],
    },
    {
      title: "Cloud & Hosting",
      items: [
        "AWS (S3) for Cloud Solutions",
        "Website Performance Optimization",
      ],
    },
  ];

  return (
    <div className="container max-w-5xl mx-auto py-16 px-4 bg-gradient-to-b from-gray-900 to-gray-800 flex flex-col items-center">
      <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text mb-8">
        Skills & Proficiencies
      </h1>
      <a
        href="https://docs.google.com/document/d/1aVTk6CBUfy0o--AYVth0uzqauYulCLMt/edit?usp=sharing&ouid=101214151770995815319&rtpof=true&sd=true"
        target="_blank"
        rel="noopener noreferrer"
        className="mb-10 px-8 py-4 bg-blue-600 text-white font-semibold rounded-md shadow-lg hover:bg-blue-700 transition-all duration-300"
      >
        Download Resume
      </a>
      <div className="grid gap-6 w-full max-w-4xl">
        {sections.map((section, index) => (
          <div
            key={index}
            className="p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <h2 className="text-2xl font-semibold text-blue-400 mb-3">{section.title}</h2>
            <ul className="list-disc list-inside text-gray-200 space-y-2">
              {section.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}