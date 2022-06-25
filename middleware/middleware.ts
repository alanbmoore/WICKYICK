import nextConnect from "next-connect";
import { parse, getBoundary } from "parse-multipart-data";
import { getErrorMessageAndStatusCode } from "../utils/errors";
import { verifyToken } from "../utils/token";

const middleware = nextConnect();

middleware.use(async (req, res, next) => {
  try {
    const token = req.headers.authorization?.replace("Token ", "");

    if (token) {
      const decodedUser = await verifyToken(
        req.headers.authorization?.replace("Token ", "")
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
      let returnFiles = [];

      parts.forEach((p) => {
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
  } catch (error) {
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
});

export default middleware;
