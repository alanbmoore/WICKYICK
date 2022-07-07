// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";
import { IUser } from "../../../../interfaces/user";

import middleware from "../../../../middleware/middleware";
import { getErrorMessageAndStatusCode } from "../../../../utils/errors";
import { getProfileFromUserId } from "../../../../utils/profile";

type Data = {
  user?: IUser | null;
  message?: string;
  media?: any;
};

const handler = nextConnect();
handler.use(middleware);

handler.get(async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  try {
    let id = "";

    if (req.query.id) {
      id = req.query.id.length ? req.query.id[0] : req.query.id.toString();
    }
    const profile = await getProfileFromUserId(id);

    if (!profile.instagram_data) res.status(200).json({ user: profile });

    const data = profile.instagram_data;
    const instagram_token = data?.instagram_access_token;
    const instagram_user_id = data?.instagram_user_id;
    const params = {
      fields: "media.limit(100){id,caption,media_url,username}",
      access_token: instagram_token,
    };
    const response = await axios.get(
      `https://graph.instagram.com/${instagram_user_id}`,
      { params }
    );
    const user_media = response.data.media;
    res.status(200).json({ media: user_media, user: profile });
  } catch (error: any) {
    const { code, message } = await getErrorMessageAndStatusCode(error);
    res.status(code).json({ message });
  }
});

export default handler;
