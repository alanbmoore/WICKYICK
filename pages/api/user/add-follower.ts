// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";
import { IUser } from "../../../interfaces/user";
import middleware from "../../../middleware/middleware";
import { getErrorMessageAndStatusCode } from "../../../utils/errors";

type Data = {
  user?: IUser | null;
  messsage?: string;
};

const handler = nextConnect();
handler.use(middleware);

handler.put(async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  try {
    res.status(200).json({});
  } catch (error) {
    const { code, message } = await getErrorMessageAndStatusCode(error);
    res.status(code).json({ message });
  }
});

export default handler;
