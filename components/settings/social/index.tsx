import Image from "next/image";
import styles from "../../../styles/Social-Connect.module.scss";

const SocialConnect = ({ name, image, description }: any) => {
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
          <a className={styles["connect-btn"]}>Connect</a>
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
