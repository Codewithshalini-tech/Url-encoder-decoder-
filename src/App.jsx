import EncoderDecoder from "./components/EncoderDecoder";
import Feature from "./components/FeatureCards";
export default function App() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-indigo-100 text-gray-900 -(--primary">

      {/* Header */}
      <header className="w-full sticky top-0 z-50 bg-gradient-to-r from-indigo-100 via-white to-indigo-50 border-b shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between px-6 py-4 gap-1 sm:gap-0">
          <div className="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            <div className="flex flex-col leading-tight">
              <h1 className="text-2xl font-bold text-gray-800">URL Encoder & Decoder</h1>
              <span className="text-sm text-gray-500">Fast & simple online tool</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="min-h-screen w-full px-6 py-10">
        <EncoderDecoder />
      </main>

      {/* Features Cards */}
      <Feature/>

      {/* Footer */}
      <footer className="border-t text-center text-sm text-gray-500 py-6 mt-10">
        © 2026 • URL Encoder/Decoder Tool
      </footer>
    </div>
  );
}
