import { IAddress } from "./address";

export interface IUser {
  pk: String | null;
  email: String | null;
  first_name: String | null;
  last_name: String | null;
  picture: String | null;
  license_number: String | null;
  company: String | null;
  location: String | null;
  phone_number: String | null;
  site_username: String | null;
  bio: String | null;
  language: String | null;
  job_title: String | null;
  instagram_data: String | null;
  instagram_connected: boolean;
  address: IAddress | null;
  tags: String | null;
  is_on_boarding_completed: boolean;
  is_verified: boolean;
  agent_followed: Array<any>;
  agent_liked: Array<any>;
  experience: String | null;
  role: String | null;
}
