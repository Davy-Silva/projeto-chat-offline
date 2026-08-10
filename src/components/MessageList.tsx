import type { Message } from "../types/message";
import { MessageBubble } from "./MessageBubble";

type MessageListProps = {
  messages: Message[];
};

export function MessageList({ messages }: MessageListProps) {
  if (messages.length === 0) {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-3 text-center text-sm text-stone-500">
        <p className="rounded-full bg-white px-4 py-2 shadow-sm">
          Seu histórico aparecerá aqui.
        </p>
        <p>Comece escrevendo uma mensagem para abrir a conversa.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      {messages.map((message) => (
        <MessageBubble key={message.id} message={message} />
      ))}
    </div>
  );
}
