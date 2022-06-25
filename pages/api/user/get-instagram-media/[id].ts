// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";
import { IUser } from "../../../../interfaces/user";
import middleware from "../../../../middleware/middleware";
import { getErrorMessageAndStatusCode } from "../../../../utils/errors";
import { getProfileFromUser } from "../../../../utils/profile";

type Data = {
  user?: IUser | null;
  messsage?: string;
};

const handler = nextConnect();
handler.use(middleware);

handler.get(async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  try {
    const { id } = req.query;
    const { user: decodedUser } = req;

    const profile = await getProfileFromUser(decodedUser);

    res.status(200).json({ user: profile });
  } catch (error) {
    const { code, message } = await getErrorMessageAndStatusCode(error);
    res.status(code).json({ message });
  }
});

export default handler;
