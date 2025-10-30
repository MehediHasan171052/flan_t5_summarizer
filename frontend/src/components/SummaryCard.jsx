export default function SummaryCard({ summary }) {
  return (
    <div className="mt-6 bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8 text-gray-800">
      <h2 className="text-lg sm:text-xl font-semibold mb-2">Summary:</h2>
      <p className="text-sm sm:text-base leading-relaxed">{summary}</p>
    </div>
  );
}
