export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-6 flex flex-col sm:flex-row justify-between items-center">
        {/* Copyright */}
        <p className="text-xs text-gray-400 mt-2 sm:mt-0">
          Summarization powered by <strong>Google FLAN-T5</strong>
        </p>

        {/* Contact info */}
        <div className="flex flex-col sm:flex-row sm:space-x-6 text-sm sm:text-base">
          <a
            href="https://github.com/MehediHasan171052"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            GitHub
          </a>
          <a
            href="mailto:youremail@example.com"
            className="hover:text-white transition"
          >
            Email: mehedihasan171052@gmail.com
          </a>
          <a href="tel:+880123456789" className="hover:text-white transition">
            Phone: +8801603717770
          </a>
        </div>
      </div>
    </footer>
  );
}
