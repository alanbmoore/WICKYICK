// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";
import { IUser } from "../../../interfaces/user";
import middleware from "../../../middleware/middleware";

import { getProfiles } from "../../../utils/profile";

type Data = {
  count: number;
  next: number | null; // next offset link
  previous: number | null; // previous offset link
  results: IUser[] | undefined;
};

const handler = nextConnect();
handler.use(middleware);

handler.get(async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { offset, limit, keyword } = req.query;

  if (!offset || !limit) {
    const users = await getProfiles(
      undefined,
      undefined,
      undefined,
      keyword?.toString()
    );

    res.status(200).json({
      count: users ? users.length : 0,
      next: null,
      previous: null,
      results: users,
    });
  } else {
    const start = parseInt(offset.toString());
    const limitNum = parseInt(limit.toString());
    const end = start + limitNum;

    const users = await getProfiles(
      limitNum,
      start,
      end,
      typeof keyword === "object" ? keyword[0] : keyword
    );
    res.status(200).json({
      count: users ? users.length : 0,
      next: 0,
      previous: 1,
      results: users,
    });
  }
});

export default handler;
