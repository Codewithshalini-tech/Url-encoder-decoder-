import { useState } from "react";
import Toast from "./Toast";

export default function EncoderDecoder() {
  // Default input text for testing
  const [input, setInput] = useState("https://www.example.com/?name=Shalini & age=25");
  const [output, setOutput] = useState("");
  const [toastMsg, setToastMsg] = useState("");

  const encodeURL = () => setOutput(encodeURIComponent(input));
  const decodeURL = () => {
    try { setOutput(decodeURIComponent(input)); } 
    catch { setOutput("Invalid encoded URL"); }
  };
  const clearAll = () => { setInput(""); setOutput(""); };
  const copyOutput = () => {
    navigator.clipboard.writeText(output);
    setToastMsg("Copied!");
  };

  return (
    <div className="w-full max-w-3xl bg-white rounded-3xl shadow-2xl p-8 grid gap-8">
      <header className="text-center">
        <h1 className="text-4xl font-bold text-primary">URL Encoder & Decoder</h1>
       
      </header>

      {/* Input */}
      <div className="flex flex-col">
        <h2 className="text-lg font-semibold mb-2">Input</h2>
        <textarea
          className="h-48 p-4 border border-gray-300 rounded-2xl resize-none focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Paste URL or text..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <div className="flex flex-col sm:flex-row gap-3 mt-3">
  <button
    className="flex-1 bg-indigo-600 text-white px-4 py-2 rounded-xl hover:bg-indigo-700 transition-colors"
    onClick={encodeURL}
  >
    Encode
  </button>
  <button
    className="flex-1 bg-green-600 text-white px-4 py-2 rounded-xl hover:bg-green-700 transition-colors"
    onClick={decodeURL}
  >
    Decode
  </button>
  <button
    className="flex-1 bg-gray-200 px-4 py-2 rounded-xl hover:bg-gray-300 transition-colors"
    onClick={clearAll}
  >
    Clear
  </button>
</div>

      </div>

      {/* Output */}
      <div className="flex flex-col">
        <h2 className="text-lg font-semibold mb-2">Output</h2>
        <textarea
          className="h-48 p-4 border border-gray-300 rounded-2xl resize-none focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Result will appear here..."
          value={output}
          readOnly
        />
        <div className="flex gap-3 mt-3">
          <button className="bg-primary text-white px-4 py-2 rounded-xl hover:bg-indigo-700" onClick={copyOutput}>Copy</button>
        </div>
      </div>

      <footer className="text-center text-gray-400 text-sm mt-4">
        © 2026 • Simple URL Encoder/Decoder
      </footer>

      {toastMsg && <Toast message={toastMsg} onClose={() => setToastMsg("")} />}
    </div>
  );
}
