import { useState } from "react";
import { MessageInput } from "./MessageInput";
import { MessageList } from "./MessageList";
import { SenderToggle } from "./SenderToggle";
import type { Message, MessageSender } from "../types/message";

const initialMessages: Message[] = [];

export function ChatScreen() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [draft, setDraft] = useState("");
  const [senderMode, setSenderMode] = useState<MessageSender>("user");
  const shouldShowSenderToggle = draft.trim().length > 0;

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
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.7),rgba(241,233,225,0.95))] px-4 py-4 text-stone-800 sm:px-6 sm:py-6 lg:px-8">
      <div className="mx-auto flex min-h-[calc(100vh-2rem)] max-w-2xl flex-col rounded-[2rem] border border-stone-200/80 bg-stone-100/70 p-3 shadow-[0_20px_60px_rgba(120,89,57,0.16)] backdrop-blur sm:p-6">
        <main className="flex flex-1 min-h-0 overflow-y-auto rounded-[1.5rem] bg-stone-50/80 p-3 sm:p-4">
          <MessageList messages={messages} />
        </main>

        <div className="mt-3 flex flex-col gap-3 border-t border-stone-200/70 pt-3 sm:mt-4 sm:pt-4">
          {shouldShowSenderToggle ? (
            <div className="flex justify-end">
              <SenderToggle senderMode={senderMode} onToggle={setSenderMode} />
            </div>
          ) : null}

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
