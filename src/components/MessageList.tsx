import type { Message } from "../types/message";
import { MessageBubble } from "./MessageBubble";

type MessageListProps = {
  messages: Message[];
};

export function MessageList({ messages }: MessageListProps) {
  if (messages.length === 0) {
    return (
      <div className="px-4 py-8 text-center text-base font-medium text-stone-600">
        <p>Nenhuma mensagem por enquanto</p>
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col gap-3 pb-2">
      {messages.map((message) => (
        <MessageBubble key={message.id} message={message} />
      ))}
    </div>
  );
}
