// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { IUser } from "../../../interfaces/user";
import { fakeUsers } from "../../../utils/fake";

type Data = {
  count: number;
  next: String | null; // next offset link
  previous: String | null; // previous offset link
  results: Array<IUser>;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    count: fakeUsers.length,
    next: null,
    previous: null,
    results: fakeUsers,
  });
}
