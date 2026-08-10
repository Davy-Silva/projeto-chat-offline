type MessageInputProps = {
  placeholder?: string;
};

export function MessageInput({
  placeholder = "Escreva sua mensagem...",
}: MessageInputProps) {
  return (
    <div className="rounded-[1.5rem] border border-stone-200 bg-white p-3 shadow-sm">
      <div className="flex items-end gap-3">
        <textarea
          rows={1}
          placeholder={placeholder}
          className="min-h-12 flex-1 resize-none border-0 bg-transparent text-sm text-stone-700 outline-none placeholder:text-stone-400"
        />
        <button
          type="button"
          className="rounded-full bg-stone-800 px-4 py-2 text-sm font-medium text-white transition hover:bg-stone-700 disabled:cursor-not-allowed disabled:bg-stone-300"
        >
          Enviar
        </button>
      </div>
    </div>
  );
}
