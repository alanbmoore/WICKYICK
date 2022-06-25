// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";
import { IUser } from "../../../interfaces/user";
import middleware from "../../../middleware/middleware";
import { getErrorMessageAndStatusCode } from "../../../utils/errors";
import { getProfileFromUserId } from "../../../utils/profile";
import { addFollower } from "../../../utils/users";

type Data = {
  user?: IUser | null;
  messsage?: string;
};

const handler = nextConnect();
handler.use(middleware);

handler.post(async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  try {
    const { body } = req;

    await addFollower(body.user_id, body.agent_id);
    const profile = await getProfileFromUserId(body.agent_id);

    res.status(200).json({ user: profile });
  } catch (error) {
    const { code, message } = await getErrorMessageAndStatusCode(error);
    res.status(code).json({ message });
  }
});

export default handler;
