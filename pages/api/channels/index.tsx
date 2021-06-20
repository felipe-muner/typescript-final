import type { NextApiRequest, NextApiResponse } from "next";
import { channels } from "../serverJson";
import { IChannel } from "../../../types";

export default (req: NextApiRequest, res: NextApiResponse<IChannel[]>) => {
  res.status(200).json(channels);
};
