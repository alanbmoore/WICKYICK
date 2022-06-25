// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
import FormData from "form-data";
import type { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";
import { IUser } from "../../../interfaces/user";
import middleware from "../../../middleware/middleware";
import { getErrorMessageAndStatusCode } from "../../../utils/errors";
import { getProfileFromUser, updateUserProfile } from "../../../utils/profile";

type Data = {
  user?: IUser | null;
  messsage?: string;
};

const handler = nextConnect();
handler.use(middleware);

handler.post(async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  try {
    const {
      INSTAGRAM_CLIENT_SECRET,
      INSTAGRAM_CLIENT_ID,
      INSTAGRAM_REDIRECT_URI,
      INSTAGRAM_GRANT_TYPE,
    } = process.env;

    const { body, user } = req;
    const formData = new FormData();
    formData.append("code", body.code);
    formData.append("client_secret", INSTAGRAM_CLIENT_SECRET);
    formData.append("client_id", INSTAGRAM_CLIENT_ID);
    formData.append("redirect_uri", INSTAGRAM_REDIRECT_URI);
    formData.append("grant_type", INSTAGRAM_GRANT_TYPE);

    // get short-lived token
    const instagramResponse = await axios.post(
      "https://api.instagram.com/oauth/access_token",
      formData,
      {
        headers: formData.getHeaders(),
      }
    );

    // exchange short-lived access token with long one
    const longLivedTokenResponse = await axios.get(
      `https://graph.instagram.com/access_token/?client_secret=${INSTAGRAM_CLIENT_SECRET}&access_token=${instagramResponse.data.access_token}&grant_type=ig_exchange_token`
    );

    //  get instagram user name
    const userNameResponse = await axios.get(
      `https://graph.instagram.com/v13.0/${instagramResponse.data.user_id}/?fields=id,username&access_token=${longLivedTokenResponse.data.access_token}`
    );

    // # get instagram follower info
    // # user_info = requests.get(f'https://www.instagram.com/{user_name.json().get("username")}?__a=1')

    const instagramData = {
      instagram_user_id: instagramResponse.data.user_id,
      instagram_user_name: userNameResponse.data.username,
      // # 'follower_count': user_info.json()['graphql']['user']['edge_followed_by']['count'],
      instagram_profile_url: `https://www.instagram.com/${userNameResponse.data.username}`,
      instagram_access_token: longLivedTokenResponse.data.access_token,
    };
    const profile = await getProfileFromUser(user);

    const profileRecord = await updateUserProfile(profile.id, {
      instagram_data: instagramData,
      instagram_connected: true,
    });

    res.status(200).json({ user: profileRecord });
  } catch (error) {
    const { code, message } = await getErrorMessageAndStatusCode(error);
    res.status(code).json({ message });
  }
});

export default handler;
