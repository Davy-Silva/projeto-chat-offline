import type { MessageSender } from "../types/message";

type SenderToggleProps = {
  senderMode: MessageSender;
  onToggle: (sender: MessageSender) => void;
};

export function SenderToggle({ senderMode, onToggle }: SenderToggleProps) {
  const options: Array<{ value: MessageSender; label: string }> = [
    { value: "user", label: "Usuário" },
    { value: "robot", label: "Robô" },
  ];

  return (
    <div className="flex items-center gap-2 rounded-full border border-stone-200 bg-stone-100 p-1">
      {options.map((option) => {
        const isActive = senderMode === option.value;

        return (
          <button
            key={option.value}
            type="button"
            aria-pressed={isActive}
            onClick={() => onToggle(option.value)}
            className={`rounded-full px-3 py-1.5 text-sm font-medium transition ${
              isActive
                ? "bg-stone-800 text-white shadow-sm"
                : "text-stone-600 hover:bg-white"
            }`}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
