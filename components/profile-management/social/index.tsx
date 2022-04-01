import Image from "next/image";
import styles from "../../../styles/Social-Connect.module.scss";
import axios from "axios";
import { useEffect, useState } from "react";

const SocialConnect = ({ name, image, description }: any) => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "");
    setUser(user);
  }, [user]);

  const connect = (name: string) => {
    if (name === "Facebook/Instagram") {
      window.location.href =
        process.env.REACT_APP_INSTAGRAM_URL +
        "?client_id=" +
        process.env.REACT_APP_INSTAGRAM_CLIENT_ID +
        "&redirect_uri=" +
        process.env.REACT_APP_INSTAGRAM_REDIRECT_URI +
        "&scope=user_profile,user_media&response_type=code";
    } else if (name == "Tiktok") {
      const csrfState = Math.random().toString(36).substring(2);
      window.location.href = `https://open-api.tiktok.com/platform/oauth/connect/?client_key=awnsq0gmo2w3yjed&scope=user.info.basic,video.list&response_type=code&redirect_uri=www.staging.wickyick.com&state=${csrfState}`;
    }
  };

  return (
    <>
      <div className={styles["social-card"]}>
        <div
          className={"d-flex justify-content-between align-items-center px-4"}
        >
          <div className={"d-flex align-items-center"}>
            <div className={styles["social-icon"]}>
              <Image
                src={image}
                width={"22px"}
                height={"22px"}
                alt={"card image"}
              />
            </div>
            <h5 className={"m-0 px-3 font-bold"}>
              <b>{name}</b>
            </h5>
          </div>
          {user?.instagram_data && name === "Facebook/Instagram" ? (
            <a
              onClick={() => {}}
              className={styles["connect-btn"] + " " + styles["connected"]}
            >
              Connected
            </a>
          ) : (
            <a onClick={() => connect(name)} className={styles["connect-btn"]}>
              Connect
            </a>
          )}
        </div>
        <div className={styles["vertical-line"]}></div>

        <div className={"py-3 px-4"}>
          <p className={styles["social-description"]}>{description}</p>
        </div>
      </div>
    </>
  );
};

export default SocialConnect;
