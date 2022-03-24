import withoutAuth from "../utils/withoutAuth";
import PasswordResetForm from "../components/password-reset-form";

const PasswordReset = () => {
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
          height: "110vh",
          width: "100%",
          display: "flex",
        }}
      >
        <PasswordResetForm />
      </div>
    </>
  );
};

export default withoutAuth(PasswordReset);
