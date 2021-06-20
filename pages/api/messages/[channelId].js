import { channels, msgs } from "../serverJson";

export default function handler(req, res) {
  const { channelId } = req.query;
  const filtered = msgs.filter((m) => m.channelId === parseInt(channelId));
  res.status(200).json(filtered);
}
