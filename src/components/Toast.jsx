import { useEffect } from "react";

export default function Toast({ message, onClose }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 2000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed bottom-5 right-5 bg-primary text-white px-4 py-2 rounded-xl shadow-lg animate-fade">
      {message}
      <style>{`
        @keyframes fade { 0% {opacity:0; transform: translateY(10px);} 100% {opacity:1; transform: translateY(0);} }
        .animate-fade { animation: fade 0.3s ease-out; }
      `}</style>
    </div>
  );
}

