import { GrSend } from "react-icons/gr";

const Contact = () => {
  return (
    <main className="min-h-screen flex-1 text-gray-800 dark:text-gray-50 overflow-hidden">
      <section className="mb-6 animate-fade-up">
        <h1 className="text-2xl font-bold flex items-center text-gray-800 dark:text-gray-50">Contact</h1>
        <p className="mt-4 text-gray-500 dark:text-gray-400">
          Feel free to get in touch and let's have a discussion about how we can
          work together.
        </p>
      </section>
      {/* Divider */}
      <hr className="mb-6 border-gray-200 dark:border-gray-800 animate-fade-up" />
      <section className="mb-6 animate-fade-up">
        <h2 className="text-gray-800 dark:text-gray-50 font-semibold mb-6 animate-fade-up">
          Send me a message
        </h2>
        <form
          action="https://getform.io/f/broyjppa"
          method="POST"
          className="w-full animate-fade-up"
        >
          <div className="flex flex-col md:flex-row gap-4 mb-4 animate-fade-up">
            <div className="w-full md:w-1/2">
              <label className="block text-sm font-medium text-gray-800 dark:text-gray-50 mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Input your name."
                className="w-full px-4 py-2 bg-white dark:bg-transparent text-sm text-gray-800 dark:text-gray-50 border border-gray-200 dark:border-gray-700/60 rounded-md focus:outline-none focus:border-gray-300 dark:focus:border-gray-200/30"
                required
              />
            </div>
            <div className="w-full md:w-1/2">
              <label className="block text-sm font-medium text-gray-800 dark:text-gray-50 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Input your email."
                className="w-full px-4 py-2 bg-white dark:bg-transparent text-sm text-gray-800 dark:text-gray-50 border border-gray-200 dark:border-gray-700/60 rounded-md focus:outline-none focus:border-gray-300 dark:focus:border-gray-200/30"
                required
              />
            </div>
          </div>
          <div className="mb-4 animate-fade-up">
            <label className="block text-sm font-medium text-gray-800 dark:text-gray-50 mb-2">
              Message
            </label>
            <textarea
              name="message"
              placeholder="Type your message here."
              rows="5"
              className="w-full h-[80px] px-4 py-2 bg-white dark:bg-transparent text-sm text-gray-800 dark:text-gray-50 border border-gray-200 dark:border-gray-700/60 rounded-md focus:outline-none focus:border-gray-300 dark:focus:border-gray-200/30 min-h-[80px] resize-y"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full md:w-auto px-28 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-sm font-medium text-gray-700 dark:text-gray-200 rounded-md transition-colors duration-200 flex items-center justify-center gap-2 animate-fade-up"
          >
            <GrSend className="w-4 h-4" />
            Send
          </button>
        </form>
      </section>
    </main>
  );
};

export default Contact;