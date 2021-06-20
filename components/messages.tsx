import { IMessage, IChannel } from "../types/index";

export default function Messages({
  messages,
  channel,
}: {
  messages: IMessage[];
  channel: IChannel;
}) {
  const description = channel
    ? "Channel: " + channel + " -  total: " + messages?.length
    : "No channel selected";

  const content = (
    <ul>
      {messages?.length
        ? messages.map((m) => <li key={m.msgId}>{m.content}</li>)
        : ""}
    </ul>
  );

  return (
    <div>
      <h3>{description}</h3>
      <div>{content}</div>
    </div>
  );
}
