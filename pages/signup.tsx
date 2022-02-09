import SignUpForm from "../components/sign-up-form";

const SignUp = () => {
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
        <SignUpForm />
      </div>
    </>
  );
};

export default SignUp;
