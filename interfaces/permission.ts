enum IPermissionType {
  acount = "account",
  admin = "admin",
  auth = "auth",
  authtoken = "authtoken",
  contenttypes = "contenttypes",
  invitations = "invitations",
  sessions = "sessions",
  sites = "sites",
  socialaccount = "socialaccount",
  user = "user",
}
export interface IPermission {
  type: IPermissionType;
  key: String;
  value: String;
}
