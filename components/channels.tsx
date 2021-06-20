import { IChannel } from "../types/index";

export default function Channels({
  channels,
  setChannel,
}: {
  channels: IChannel[];
  setChannel: any;
}) {
  const buttons = channels.map((c) => (
    <button
      key={c.id.toString()}
      color="primary"
      onClick={() => setChannel(c.id)}
      style={{ marginRight: "10px" }}
    >
      {" "}
      {c.name}
    </button>
  ));
  return (
    <div>
      <div>
        <div>{buttons}</div>
      </div>
    </div>
  );
}
