import { MessageInput } from "./MessageInput";

type ChatScreenProps = {
  title?: string;
  subtitle?: string;
};

export function ChatScreen({
  title = "Chat offline",
  subtitle = "Uma conversa simples e acolhedora para testar o fluxo.",
}: ChatScreenProps) {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.7),_rgba(241,233,225,0.95))] px-4 py-6 text-stone-800 sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-[calc(100vh-3rem)] max-w-2xl flex-col rounded-[2rem] border border-stone-200/80 bg-stone-100/70 p-4 shadow-[0_20px_60px_rgba(120,89,57,0.16)] backdrop-blur sm:p-6">
        <header className="mb-4 flex items-center justify-between border-b border-stone-200 pb-4">
          <div>
            <h1 className="text-lg font-semibold text-stone-900">{title}</h1>
            <p className="text-sm text-stone-500">{subtitle}</p>
          </div>
          <div className="rounded-full bg-stone-200/80 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-stone-600">
            Offline
          </div>
        </header>

        <main className="flex-1 overflow-y-auto rounded-[1.5rem] bg-stone-50/80 p-4">
          <div className="flex h-full flex-col items-center justify-center gap-3 text-center text-sm text-stone-500">
            <p className="rounded-full bg-white px-4 py-2 shadow-sm">
              Seu histórico aparecerá aqui.
            </p>
            <p>Comece escrevendo uma mensagem para abrir a conversa.</p>
          </div>
        </main>

        <div className="mt-4">
          <MessageInput />
        </div>
      </div>
    </div>
  );
}
