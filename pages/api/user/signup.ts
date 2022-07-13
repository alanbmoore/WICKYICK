// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type { NextApiRequest, NextApiResponse } from "next";
import { getErrorMessageAndStatusCode } from "../../../utils/errors";
import {
  createNewUserAndProfile,
  generateEmailVerificationEmail,
} from "../../../utils/users";

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { body } = req;

  try {
    const profile = await createNewUserAndProfile(body, body.password1);
    await generateEmailVerificationEmail(profile);
    res.status(200).json({ message: "Verification e-mail sent." });
  } catch (error: any) {
    const { code, message } = await getErrorMessageAndStatusCode(error);
    res.status(code).json({ message });
  }
}
