import Image from "next/image";
import styles from "../styles/Settings.module.scss";
import SettingForm from "../components/settings";
import Link from "next/link";
import withAuth from "../utils/withAuth";

const Settings = () => {
  return (
    <>
      <style jsx global>{`
        body {
          background-color: #eef0f3;
        }
      `}</style>
      <div
        style={{
          background: "#EEF0F3",
          minHeight: "110vh",
          height: "auto",
          width: "100%",
          paddingBottom: "10%",
        }}
      >
        <div
          className={styles["header-wick-yick"] + " d-flex align-items-center"}
        >
          <SettingForm />

          {/*  <Link href={"/"} passHref>*/}
          {/*  <div className="d-flex">*/}
          {/*    <Image src="/logo.png" alt="Footer Logo" width={35} height={35} />*/}
          {/*    <p className={styles["logo-text"]}>WickYick</p>*/}
          {/*  </div>*/}
          {/*</Link>*/}
        </div>
      </div>
    </>
  );
};

export default withAuth(Settings);
