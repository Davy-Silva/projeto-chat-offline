import type { Message } from "../types/message";

type MessageBubbleProps = {
  message: Message;
};

export function MessageBubble({ message }: MessageBubbleProps) {
  const isUser = message.sender === "user";

  return (
    <div className={`flex w-full ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm shadow-sm ${
          isUser
            ? "bg-stone-800 text-white"
            : "border border-stone-200 bg-white text-stone-700"
        }`}
      >
        <p className="text-[11px] uppercase tracking-[0.2em] opacity-70">
          {isUser ? "Você" : "Robô"}
        </p>
        <p className="mt-1 whitespace-pre-wrap">{message.content}</p>
      </div>
    </div>
  );
}
