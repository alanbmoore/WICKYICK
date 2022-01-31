import LoginForm from "../components/login-form";

const Login = () => {
  return (
    <>
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

export default Login;
