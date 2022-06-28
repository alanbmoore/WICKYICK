import nextConnect, { NextHandler } from "next-connect";
import { parse, getBoundary } from "parse-multipart-data";
import {
  IncomingMessageWithUser,
  ServerResponseWithRedirect,
} from "../types/http";
import { getErrorMessageAndStatusCode } from "../utils/errors";
import { verifyToken } from "../utils/token";

const middleware = nextConnect();

middleware.use(
  async (
    req: IncomingMessageWithUser,
    res: ServerResponseWithRedirect,
    next: NextHandler
  ) => {
    try {
      const token = req.headers.authorization?.replace("Token ", "");

      if (token) {
        const decodedUser = await verifyToken(
          (req.headers.authorization || "").replace("Token ", "")
        );
        req.user = decodedUser;
      } else {
        res.redirect(403, "/");
      }

      if (req.headers["content-type"]?.includes("multipart/form-data")) {
        const boundary = getBoundary(req.headers["content-type"]);
        const body = Buffer.from(req.body);
        const parts = parse(body, boundary);

        let returnBody = {};
        let returnFiles: any[] = [];

        parts.forEach((p: any) => {
          if (!p.filename) {
            const obj = { [p.name]: p.data.toString() };
            returnBody = { ...returnBody, ...obj };
          } else {
            returnFiles.push(p);
          }
        });

        req.body = returnBody;
        req.files = returnFiles;
      }
      next();
    } catch (error: any) {
      const { code, message } = await getErrorMessageAndStatusCode(error);
      switch (code) {
        case 403:
        case 401:
          res.redirect(code, "/");
          break;
        default:
          next(error);
      }
    }
  }
);

export default middleware;
