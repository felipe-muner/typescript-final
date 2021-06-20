import type { NextApiRequest, NextApiResponse } from "next";

import { IMessage } from "../../../types";
import { msgs } from "../serverJson";

export default (req: NextApiRequest, res: NextApiResponse<IMessage[]>) => {
  const channelId: number = req.query.channelId as any;

  const filtered: IMessage[] = msgs.filter((m) => m.channelId === channelId);
  res.status(200).json(filtered);
};
