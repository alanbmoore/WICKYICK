import AgentProfileBanner from "../../components/agent-profile";

const AgentProfile = () => {
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
        <AgentProfileBanner />
      </div>
    </>
  );
};

export default AgentProfile;
