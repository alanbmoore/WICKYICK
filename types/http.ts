import { DecodedIdToken } from "firebase-admin/auth";
import { IncomingMessage, ServerResponse } from "http";
import { NextApiRequest } from "next";

export interface NextApiRequestWithUser extends NextApiRequest {
  user: DecodedIdToken;
}

export interface IncomingMessageWithUser extends IncomingMessage {
  user?: DecodedIdToken;
  body: any;
  files: any[];
}
export interface ServerResponseWithRedirect extends ServerResponse {
  redirect: (statusCode: number, url: string) => void;
}
