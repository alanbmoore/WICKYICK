import SignUpForm from "../components/sign-up-form";

const SignUp = () => {
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
        <SignUpForm />
      </div>
    </>
  );
};

export default SignUp;
