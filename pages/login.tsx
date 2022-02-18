import LoginForm from "../components/login-form";
import withoutAuth from "../utils/withoutAuth";

const Login = () => {
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
        <LoginForm />
      </div>
    </>
  );
};

export default withoutAuth(Login);
