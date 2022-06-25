// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";
import { IUser } from "../../../interfaces/user";
import middleware from "../../../middleware/middleware";
import { fakeUsers } from "../../../utils/fake";
import { getProfiles } from "../../../utils/profile";

type Data = {
  count: number;
  next: string | null; // next offset link
  previous: string | null; // previous offset link
  results: Array<IUser>;
};

const handler = nextConnect();
handler.use(middleware);

handler.get(async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { offset, limit } = req.query;
  if (!offset || !limit) {
    const users = await getProfiles();

    res.status(200).json({
      count: fakeUsers.length,
      next: null,
      previous: null,
      results: users,
    });
  } else {
    const start = parseInt(offset);
    const limitNum = parseInt(limit);
    const end = start + limitNum;

    const users = await getProfiles(limitNum, start, end);
    res.status(200).json({
      count: fakeUsers.length,
      next: start + end,
      previous: start,
      results: fakeUsers.slice(start, end),
    });
  }
});

export default handler;
