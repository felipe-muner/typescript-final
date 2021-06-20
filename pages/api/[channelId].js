import { channels, msgs, autoIncrement } from "./serverJson";

export default function handler(req, res) {
  const msgId = autoIncrement.id++;
  const { msg: content, channelId } = req.body;
  msgs.push({ msgId, channelId, content });
  res.status(201).json({ msg: "New Message added" });
}
