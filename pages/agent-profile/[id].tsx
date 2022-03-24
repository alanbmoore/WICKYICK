import AgentProfileBanner from "../../components/agent-profile";
import AppFooter from "../../components/footer";

const AgentProfile = () => {
  return (
    <>
      <div
        style={{
          background: "#EEF0F3",
          minHeight: "110vh",
          height: "100%",
          width: "100%",
          display: "flex",
        }}
      >
        <AgentProfileBanner />
      </div>
      <AppFooter />
    </>
  );
};

export default AgentProfile;
