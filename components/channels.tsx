import { IChannel } from "../types/index";

export default function Channels({ channels }: { channels: IChannel[] }) {
  return <h1>{JSON.stringify(channels)}</h1>
}
