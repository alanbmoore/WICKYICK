import { IAddress } from "./address";

export interface IUser {
  id?: string | undefined;
  pk?: string | undefined;
  email?: string | undefined;
  first_name?: string | undefined;
  last_name?: string | undefined;
  picture?: string | undefined;
  license_number?: string | undefined;
  company?: string | undefined;
  location?: string | undefined;
  phone_number?: string | undefined;
  site_username?: string | undefined;
  bio?: string | undefined;
  language?: string | undefined;
  job_title?: string | undefined;
  instagram_data?: string | undefined;
  instagram_connected?: boolean;
  address?: IAddress | undefined;
  tags?: string | undefined;
  is_on_boarding_completed?: boolean;
  is_verified?: boolean;
  agent_followed?: Array<any>;
  agent_liked?: Array<any>;
  experience?: string | undefined;
  role?: string | undefined;
}
