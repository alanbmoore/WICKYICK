// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { updatePassword } from "firebase/auth";
import type { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";
import { auth } from "../../../config/firebase-server";
import { IUser } from "../../../interfaces/user";
import middleware from "../../../middleware/middleware";
import { getErrorMessageAndStatusCode } from "../../../utils/errors";
import { getUserFromUid } from "../../../utils/users";

type Data = {
  user?: IUser | null;
  messsage?: string;
};

const handler = nextConnect();
handler.use(middleware);

handler.post(async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  try {
    await auth.updateUser(req.user.uid, {
      password: req.body.new_password,
    });

    res.status(200).json({ messsage: "Password updated successfully" });
  } catch (error) {
    const { code } = await getErrorMessageAndStatusCode(error);
    res
      .status(code)
      .json({
        message: "There was an error setting your password, please try again.",
      });
  }
});

export default handler;
