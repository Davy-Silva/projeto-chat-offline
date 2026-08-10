export type MessageSender = "user" | "robot";

export type Message = {
  id: string;
  sender: MessageSender;
  content: string;
};
