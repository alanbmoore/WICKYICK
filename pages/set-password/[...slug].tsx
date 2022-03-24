import withoutAuth from "../../utils/withoutAuth";
import SetPasswordForm from "../../components/set-password-form";
import { useRouter } from "next/router";

const SetPassword = () => {
  const router = useRouter();
  const params = router;
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
        <SetPasswordForm params={params.query.slug} />
      </div>
    </>
  );
};

export default withoutAuth(SetPassword);
