import { IChannel } from "../types";

export default function Messages({ channel }: { channel: IChannel }) {
  return <h1>{JSON.stringify(channel)}</h1>;
}
