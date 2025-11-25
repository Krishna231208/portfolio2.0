import { useState } from "react";
import ChatWindow from "./ChatWindow";

export default function FloatingChat() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div style={{
         position: "fixed",
         right: 20,
         bottom: 20,
         zIndex: 9999
      }}>
        <button
          onClick={() => setOpen(v => !v)}
          title="Ask about Krishna"
          className="bg-blue-500 text-white rounded-full w-14 h-14 shadow-xl flex items-center justify-center hover:scale-105 transition"
        >
          {/* simple chat icon */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {open && (
        <div style={{
            position: "fixed",
            right: 20,
            bottom: 90,
            zIndex: 9999,
            width: 360,
            maxWidth: "90vw"
        }}>
          <ChatWindow onClose={() => setOpen(false)} />
        </div>
      )}
    </>
  );
}
