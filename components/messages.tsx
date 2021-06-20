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
  return (
    <div>
      <h3>{description}</h3>
      <h1></h1>
      <h1>{JSON.stringify(channel)}</h1>
    </div>
  );
}
