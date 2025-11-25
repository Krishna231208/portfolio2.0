import { useState } from "react";

export default function ChatWindow({ onClose }) {
  const [messages, setMessages] = useState([
    { role: "bot", text: "Hi! Ask me anything about Krishna's resume." }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  async function send() {
    if (!input.trim()) return;
    const userMsg = input.trim();
    setMessages(m => [...m, { role: "user", text: userMsg }]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/chatbot/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: userMsg })
      });
      const data = await res.json();
      const answer = data.answer || "No answer found";
      setMessages(m => [...m, { role: "bot", text: answer }]);
    } catch (err) {
      setMessages(m => [...m, { role: "bot", text: "Error contacting server" }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-white dark:bg-[#0b1720] rounded-lg shadow-lg overflow-hidden" style={{ display: "flex", flexDirection: "column", height: 520 }}>
      <div style={{ padding: 12, borderBottom: "1px solid #eee", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ fontWeight: 700 }}>Krishna's Resume Bot</div>
        <div style={{ display: "flex", gap: 8 }}>
          <button onClick={() => { setMessages([{ role: "bot", text: "Hi! Ask me anything about Krishna's resume." }]); }} className="text-sm text-gray-600">Reset</button>
          <button onClick={onClose} className="text-sm text-gray-600">Close</button>
        </div>
      </div>

      <div style={{ padding: 12, flex: 1, overflowY: "auto" }}>
        {messages.map((m, i) => (
          <div key={i} style={{ marginBottom: 12, textAlign: m.role === "user" ? "right" : "left" }}>
            <div style={{
              display: "inline-block",
              padding: "8px 12px",
              borderRadius: 8,
              background: m.role === "user" ? "#e6f0ff" : "#f1f5f9",
              color: m.role === "user" ? "#0b3a66" : "#111",
              maxWidth: "90%"
            }}>
              {m.text}
            </div>
          </div>
        ))}
        {loading && <div>Bot is typing...</div>}
      </div>

    <div className="p-3 border-t border-gray-200 dark:border-gray-700 flex gap-2">
  <input
    value={input}
    onChange={e => setInput(e.target.value)}
    onKeyDown={e => e.key === "Enter" && send()}
    placeholder="Ask about Krishna..."
    className="
      flex-1 px-3 py-2 rounded-lg border 
      border-gray-300 
      dark:border-gray-600 
      bg-white 
      dark:bg-gray-800 
      text-black 
      dark:text-white 
      placeholder-gray-400 
      dark:placeholder-gray-500
    "
  />

  <button
    onClick={send}
    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
  >
    Send
  </button>
</div>

    </div>
  );
}
