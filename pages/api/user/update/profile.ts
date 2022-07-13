// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import middleware from "../../../../middleware/middleware";
import nextConnect from "next-connect";

import type { NextApiRequest, NextApiResponse } from "next";

import { IUser } from "../../../../interfaces/user";
import {
  getProfileFromUser,
  updateUserProfile,
} from "../../../../utils/profile";
import { getErrorMessageAndStatusCode } from "../../../../utils/errors";
import { NextApiRequestWithUser } from "../../../../types/http";
import { getFileExtension, saveBase64StringToAWS } from "../../../../utils/s3";
import dayjs from "dayjs";

type Data = {
  user?: IUser | null;
  message?: string;
};

const handler = nextConnect();
handler.use(middleware);

handler.put(async (req: NextApiRequestWithUser, res: NextApiResponse<Data>) => {
  try {
    const { body, user, files } = req;
    const saveBody = { ...body };
    const profile = await getProfileFromUser(user);
    if (body.picture64) {
      const result = await saveBase64StringToAWS(
        body.picture64,
        `${process.env.AWS_PROFILE_IMAGE_PATH}${profile.id}.${getFileExtension(
          files[0].filename
        )}` || dayjs().format()
      );
      saveBody.picture = result.url;
    }

    const profileRecord = await updateUserProfile(profile.id, saveBody);

    res.status(200).json({ user: profileRecord });
  } catch (error: any) {
    const { message, code } = await getErrorMessageAndStatusCode(error);
    res.status(code).json({ message });
  }
});

export default handler;
