// src/app/contact/page.tsx
export default function Contact() {
    return (
      <div className="container mx-auto py-12 text-center">
        <h1 className="text-3xl font-bold mb-6">Get in Touch</h1>
        <p className="text-lg text-gray-700 mb-4">
          Want to chat about a project? Reach me at:
        </p>
        <a
          href="mailto:dwalley@example.com"
          className="text-blue-500 hover:underline text-xl"
        >
          dwalley@example.com
        </a>
        <p className="text-gray-600 mt-6">
          (Contact form coming soon!)
        </p>
      </div>
    );
  }