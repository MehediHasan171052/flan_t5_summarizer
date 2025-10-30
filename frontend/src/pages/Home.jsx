import { useState } from "react";
import Loader from "../components/Loader";
import SummaryCard from "../components/SummaryCard";
import { summarizeText } from "../api/api";

export default function Home() {
  const [input, setInput] = useState("");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSummarize = async () => {
    if (!input.trim()) return;
    setLoading(true);
    const result = await summarizeText(input);
    setSummary(result);
    setLoading(false);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 mt-8">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6">
        🧠 Text Summarizer
      </h1>
      <textarea
        className="w-full border rounded-lg p-4 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
        rows={6}
        placeholder="Enter text here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <div className="flex justify-center mt-4">
        <button
          className="bg-blue-600 text-white px-6 py-2 sm:px-10 sm:py-3 rounded-lg hover:bg-blue-700 transition text-sm sm:text-base"
          onClick={handleSummarize}
        >
          {loading ? "Summarizing..." : "Summarize"}
        </button>
      </div>
      {loading && <Loader />}
      {summary && <SummaryCard summary={summary} />}
    </div>
  );
}
