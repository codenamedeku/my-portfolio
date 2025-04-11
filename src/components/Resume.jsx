import { FiDownload, FiFileText } from "react-icons/fi";

const Resume = () => {
  return (
    <main className="min-h-screen flex-1 text-gray-800 dark:text-gray-50 overflow-hidden">
      {/* Introduction Section */}
      <section className="mb-6 animate-fade-up">
        <h1 className="text-2xl font-bold flex items-center text-gray-800 dark:text-gray-50">Resume</h1>
        <p className="mt-4 text-gray-500 dark:text-gray-300">
          A comprehensive overview of my professional journey, skills, and
          achievements that shape my career story.
        </p>
      </section>
      {/* Divider */}
      <hr className="mb-6 border-gray-200 dark:border-gray-900 animate-fade-up" />
      {/* Resume PDF Section */}
      <section className="w-full animate-fade-up">
        <div className="border border-gray-200 dark:border-gray-900 p-4 rounded-md max-w-4xl mx-auto shadow-lg">
          {/* Buttons Section */}
          <div className="flex flex-col md:flex-row justify-center gap-4 mb-6">
            <a
              href="https://drive.google.com/uc?export=download&id=1_d4aj7vKmDz0R0v9A8E5tA_6FZOmX2Cv"
              className="flex w-full md:w-1/2 items-center justify-center gap-2 px-4 py-2 border border-gray-200 dark:border-gray-900 rounded-md text-sm font-medium text-gray-800 dark:text-gray-50 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors animate-fade-up"
              download
            >
              <FiDownload className="w-4 h-4" />
              Download my resume
            </a>
            <button
              disabled
              className="flex w-full md:w-1/2 items-center justify-center gap-2 px-4 py-2 border border-gray-200 dark:border-gray-900 rounded-md text-sm font-medium text-gray-800 dark:text-gray-50 opacity-50"
            >
              <FiFileText className="w-4 h-4" />
              View my certificates
            </button>
          </div>
          {/* Resume PDF */}
          <div className="animate-fade-up border border-gray-200 dark:border-none">
            <iframe
              src="https://drive.google.com/file/d/1_d4aj7vKmDz0R0v9A8E5tA_6FZOmX2Cv/preview"
              className="w-full h-[100vh] border-none"
              allow="autoplay"
              title="Resume PDF"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Resume;