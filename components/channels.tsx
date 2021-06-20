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
      style={{ marginLeft: "10px" }}
    >
      {" "}
      {c.name}
    </button>
  ));
  return (
    <div>
      <div>
        <h3>All Channels</h3>
        <div>{buttons}</div>
      </div>
    </div>
  );
}
