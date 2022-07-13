import { IAddress } from "./address";

export interface IUser {
  id?: string | null | undefined;
  pk?: string | null | undefined;
  email?: string | null | undefined;
  first_name?: string | null | undefined;
  last_name?: string | null | undefined;
  display_name?: string | null | undefined;
  picture?: string | null | undefined;
  license_number?: string | null | undefined;
  company?: string | null | undefined;
  location?: string | null | undefined;
  phone_number?: string | null | undefined;
  site_username?: string | null | undefined;
  bio?: string | null | undefined;
  language?: string | null | undefined;
  job_title?: string | null | undefined;
  instagram_data?: IInstagramData;
  instagram_connected?: boolean;
  address?: IAddress | undefined;
  tags?: string | null | undefined;
  is_on_boarding_completed?: boolean;
  is_verified?: boolean;
  agent_followed?: Array<any>;
  agent_liked?: Array<any>;
  experience?: string | null | undefined;
  role?: string | null | undefined;
}
export interface IInstagramData {
  instagram_access_token: string;
  instagram_profile_url: string;
  instagram_user_id: number;
  instagram_user_name: string;
}
