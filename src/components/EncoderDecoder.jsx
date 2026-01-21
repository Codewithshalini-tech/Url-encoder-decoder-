import { useState } from "react";
import Toast from "./Toast";

export default function EncoderDecoder() {
  const [input, setInput] = useState(
    "https://www.example.com/?name=Shalini & age=25"
  );
  const [output, setOutput] = useState("");
  const [toastMsg, setToastMsg] = useState("");

  const encodeURL = () => setOutput(encodeURIComponent(input));

  const decodeURL = () => {
    try {
      setOutput(decodeURIComponent(input));
    } catch {
      setOutput("Invalid encoded URL");
    }
  };

  const clearAll = () => {
    setInput("");
    setOutput("");
  };

  const copyOutput = () => {
    navigator.clipboard.writeText(output);
    setToastMsg("Copied!");
  };

  return (
    <div className="w-full grid gap-10">
      
      {/* Input Section */}
      <section className="w-full">
        <h2 className="text-lg font-semibold mb-2">Input</h2>

        <textarea
          className="w-full h-48 p-4 border border-gray-300 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Paste URL or text..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <button
            onClick={encodeURL}
            className="flex-1 bg-indigo-600 text-white py-3 rounded-xl hover:bg-indigo-700 transition"
          >
            Encode
          </button>

          <button
            onClick={decodeURL}
            className="flex-1 bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 transition"
          >
            Decode
          </button>

          <button
            onClick={clearAll}
            className="flex-1 bg-gray-200 py-3 rounded-xl hover:bg-gray-300 transition"
          >
            Clear
          </button>
        </div>
      </section>

      {/* Output Section */}
      <section className="w-full">
        <h2 className="text-lg font-semibold mb-2">Output</h2>

        <textarea
          className="w-full h-48 p-4 border border-gray-300 rounded-xl resize-none focus:outline-none"
          placeholder="Result will appear here..."
          value={output}
          readOnly
        />

        <div className="mt-4">
          <button
            onClick={copyOutput}
            className="bg-indigo-600 text-white px-6 py-2 rounded-xl hover:bg-indigo-700 transition"
          >
            Copy
          </button>
        </div>
      </section>

      {toastMsg && (
        <Toast message={toastMsg} onClose={() => setToastMsg("")} />
      )}
    </div>
  );
}
