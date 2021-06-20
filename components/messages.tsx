import { IMessage, IChannel } from "../types/index";

export default function Messages({
  messages,
  channel,
}: {
  messages: IMessage[];
  channel: IChannel;
}) {
  return (
    <div>
      <h1>{JSON.stringify(messages)}</h1>
      <h1></h1>
      <h1>{JSON.stringify(channel)}</h1>
    </div>
  );
}
