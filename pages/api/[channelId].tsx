import type { NextApiRequest, NextApiResponse } from "next";

import { msgs, autoIncrement } from "./serverJson";

export default (req: NextApiRequest, res: NextApiResponse<object>) => {
  const msgId = autoIncrement.id++;
  const { msg: content, channelId } = req.body;
  msgs.push({ msgId, channelId, content });

  const msg: object = { msg: "New Message added" };
  res.status(201).json(msg);
};
