import { channels } from "../serverJson";

export default function handler(req, res) {
  res.status(200).json(channels);
}
