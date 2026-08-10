import { useState } from "react";
import { MessageInput } from "./MessageInput";
import { MessageList } from "./MessageList";
import { SenderToggle } from "./SenderToggle";
import type { Message, MessageSender } from "../types/message";

type ChatScreenProps = {
  title?: string;
  subtitle?: string;
};

const initialMessages: Message[] = [
  {
    id: "welcome",
    sender: "robot",
    content: "Olá! Estou pronto para conversar offline.",
  },
  {
    id: "welcome-user",
    sender: "user",
    content: "Que bom! Vamos testar o fluxo.",
  },
];

export function ChatScreen({
  title = "Chat offline",
  subtitle = "Uma conversa simples e acolhedora para testar o fluxo.",
}: ChatScreenProps) {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [draft, setDraft] = useState("");
  const [senderMode, setSenderMode] = useState<MessageSender>("user");

  const handleSendMessage = () => {
    const nextContent = draft.trim();

    if (!nextContent) {
      return;
    }

    const newMessage: Message = {
      id: `message-${Date.now()}-${Math.random().toString(16).slice(2)}`,
      sender: senderMode,
      content: nextContent,
    };

    setMessages((currentMessages) => [...currentMessages, newMessage]);
    setDraft("");
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.7),rgba(241,233,225,0.95))] px-4 py-6 text-stone-800 sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-[calc(100vh-3rem)] max-w-2xl flex-col rounded-4xl border border-stone-200/80 bg-stone-100/70 p-4 shadow-[0_20px_60px_rgba(120,89,57,0.16)] backdrop-blur sm:p-6">
        <header className="mb-4 flex items-center justify-between border-b border-stone-200 pb-4">
          <div>
            <h1 className="text-lg font-semibold text-stone-900">{title}</h1>
            <p className="text-sm text-stone-500">{subtitle}</p>
          </div>
          <div className="rounded-full bg-stone-200/80 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-stone-600">
            Offline
          </div>
        </header>

        <main className="flex-1 overflow-y-auto rounded-3xl bg-stone-50/80 p-4">
          <MessageList messages={messages} />
        </main>

        <div className="mt-4 flex flex-col gap-3">
          <div className="flex justify-end">
            <SenderToggle senderMode={senderMode} onToggle={setSenderMode} />
          </div>

          <MessageInput
            value={draft}
            onChange={setDraft}
            onSend={handleSendMessage}
            senderMode={senderMode}
          />
        </div>
      </div>
    </div>
  );
}
