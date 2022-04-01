import styles from "../styles/Settings.module.scss";
import ProfileManagementForm from "../components/profile-management";
import withAuth from "../utils/withAuth";
import AppFooter from "../components/footer";

const ProfileManagement = () => {
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
          <ProfileManagementForm />
        </div>
      </div>
      <AppFooter />
    </>
  );
};

export default withAuth(ProfileManagement);
