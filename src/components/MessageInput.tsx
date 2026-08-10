import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import type { MessageSender } from "../types/message";

type MessageInputProps = {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
  senderMode: MessageSender;
};

export function MessageInput({
  placeholder = "Escreva sua mensagem...",
  value,
  onChange,
  onSend,
  senderMode,
}: MessageInputProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [height, setHeight] = useState("48px");

  useEffect(() => {
    const textarea = textareaRef.current;

    if (!textarea) {
      return;
    }

    textarea.style.height = "auto";
    const nextHeight = Math.min(textarea.scrollHeight, 160);
    setHeight(`${nextHeight}px`);
  }, [value]);

  const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();

      if (value.trim()) {
        onSend();
      }
    }
  };

  const isRobotMode = senderMode === "robot";

  return (
    <div
      className={`rounded-3xl border p-3 shadow-sm transition ${
        isRobotMode
          ? "border-violet-300 bg-violet-50"
          : "border-stone-200 bg-white"
      }`}
    >
      <div className="flex items-end gap-3">
        <textarea
          ref={textareaRef}
          rows={1}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className={`min-h-12 flex-1 resize-none border-0 bg-transparent py-1 text-sm outline-none ${
            isRobotMode
              ? "text-violet-700 placeholder:text-violet-300"
              : "text-stone-700 placeholder:text-stone-400"
          }`}
          style={{ height }}
        />
        <button
          type="button"
          onClick={onSend}
          disabled={!value.trim()}
          className="rounded-full bg-stone-800 px-4 py-2 text-sm font-medium text-white transition hover:bg-stone-700 disabled:cursor-not-allowed disabled:bg-stone-300"
        >
          Enviar
        </button>
      </div>
    </div>
  );
}
