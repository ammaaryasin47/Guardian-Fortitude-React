import React, { useState } from "react";

const AIChat = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "ai", text: "Hello! I'm your product assistant. What are you looking for?" }
  ]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { sender: "user", text: input }];
    setMessages(newMessages);

    try {
      const res = await fetch("http://localhost:5000/ai-recommend", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ query: input })
      });

      const data = await res.json();

      setMessages([
        ...newMessages,
        { sender: "ai", text: data.reply || "Sorry, I couldn't find anything." }
      ]);
    } catch (err) {
      setMessages([
        ...newMessages,
        { sender: "ai", text: "AI server error." }
      ]);
    }

    setInput("");
  };

  return (
    <>
      {/* Floating Button */}
     <button
  onClick={() => setOpen(!open)}
  className="fixed bottom-6 right-6 z-[9999] w-14 h-14 flex items-center justify-center
  rounded-full bg-[#800000]
  shadow-lg hover:shadow-[0_0_25px_rgba(128,0,0,0.7)]
  hover:scale-110
  transition-all duration-300"
>

  {/* AI Sparkles Icon */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="white"
    className="w-6 h-6"
  >
    <path d="M12 2l1.8 4.6L18 8.4l-4.2 1.8L12 15l-1.8-4.8L6 8.4l4.2-1.8L12 2zM5 16l1 2.5L8.5 20 6 21l-1 2.5L4 21l-2.5-1L4 18.5 5 16zm14 0l1 2.5L22.5 20 20 21l-1 2.5L18 21l-2.5-1 2.5-1.5L19 16z"/>
  </svg>

</button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-20 z-[9999] right-6 w-80 h-96 bg-black text-white border border-gray-700 rounded-xl flex flex-col shadow-2xl">

          {/* Header */}
          <div className="p-3 border-b border-gray-700 flex justify-between">
            <span className="font-bold">AI Assistant</span>
            <button onClick={() => setOpen(false)}>✖</button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-3 overflow-y-auto space-y-2">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-2 rounded max-w-[75%] ${
                  msg.sender === "user"
                    ? "bg-[#800000] self-end ml-auto"
                    : "bg-gray-800"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-2 border-t border-gray-700 flex">
            <input
              className="flex-1 bg-gray-900 text-white p-2 rounded-l outline-none"
              value={input}
              onChange={(e) => setInput(e.target.value)}
               onKeyDown={(e) => {
    if (e.key === "Enter") {
      sendMessage();}}}
              placeholder="Ask about products..."
            />
            <button
              onClick={sendMessage}
              className="bg-[#800000] px-3 rounded-r"
            >
              Send
            </button>
          </div>

        </div>
      )}
    </>
  );
};

export default AIChat;