// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { updateEmail, updatePassword } from "firebase/auth";
import type { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";
import { auth } from "../../../config/firebase-server";
import { IUser } from "../../../interfaces/user";
import middleware from "../../../middleware/middleware";
import { getErrorMessageAndStatusCode } from "../../../utils/errors";
import { getProfileFromUser } from "../../../utils/profile";
import { getUserFromUid } from "../../../utils/users";

type Data = {
  user?: IUser | null;
  messsage?: string;
};

const handler = nextConnect();
handler.use(middleware);

handler.post(async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  try {
    const user = await auth.updateUser(req.user.uid, {
      email: req.body.email,
    });

    const profile = await getProfileFromUser(user);
    res
      .status(200)
      .json({ messsage: "Email updated successfully", user: profile });
  } catch (error) {
    const { code, message } = await getErrorMessageAndStatusCode(error);
    res.status(code).json({ message });
  }
});

export default handler;
