import styles from "../../styles/Settings.module.scss";
import { Form, Row, Col, Button } from "react-bootstrap";
import SideNav from "./settings-side-nav";
import LicenseForm from "./license";
import ProfileTopSection from "./profile/profile-top-section";
import Profile from "./profile";
import { useState } from "react";
import SocialConnect from "./social";
import Tiktok from "../../public/static/images/tik-tok.png";
import Facebook from "../../public/static/images/facebook.svg";
import LinkedIn from "../../public/static/images/linkedIn.svg";

const socialData = [
  {
    name: "Facebook/Instagram",
    image: Facebook,
    description:
      "By connecting your account with your Facebook/Instagram account, you acknowledge and agree that information you choose to share will be uploaded to WickYick and may be viewed by WickYick and other WickYick’s users. Also, your Facebook/Instagram account information may be used by WickYick. If you no longer want to share this information, please disconnect your Facebook/Instagram account.",
  },
  {
    name: "Tiktok",
    image: Tiktok,
    description:
      "By connecting your account with your Tiktok account, you acknowledge and agree that information you choose to share will be uploaded to WickYick and may be viewed by WickYick and other WickYick’s users. Also, your Tiktok account information may be used by WickYick. If you no longer want to share this information, please disconnect your Tiktok account.",
  },
  {
    name: "LinkedIn",
    image: LinkedIn,
    description:
      "By connecting your account with your LinkedIn account, you acknowledge and agree that information you choose to share will be uploaded to WickYick and may be viewed by WickYick and other WickYick’s users. Also, your LinkedIn account information may be used by WickYick. If you no longer want to share this information, please disconnect your LinkedIn account.",
  },
];

const SettingForm = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);

  return (
    <>
      <div className={styles["setting-form"]}>
        <Form>
          <Row>
            <Col xs={12} md={3}>
              <SideNav
                goToNextStep={(stepNo: number) => setCurrentStep(stepNo)}
                currentStep={currentStep}
              />
            </Col>
            <Col xs={12} md={9}>
              {currentStep === 0 ? (
                <div style={{ maxHeight: "700px", overflow: "auto" }}>
                  <LicenseForm
                    goToNextStep={(stepNo: number) => setCurrentStep(stepNo)}
                  />
                </div>
              ) : currentStep === 1 ? (
                <div>
                  <Row>
                    <Col xs={12} md={11}>
                      <Profile
                        goToNextStep={(stepNo: number) =>
                          setCurrentStep(stepNo)
                        }
                      />
                    </Col>
                  </Row>
                </div>
              ) : (
                <>
                  {socialData.map((item: any, index: number) => {
                    return (
                      <SocialConnect
                        key={index}
                        name={item.name}
                        image={item.image}
                        description={item.description}
                      />
                    );
                  })}
                  <Button
                    className={styles["continue-btn"] + " mt-3"}
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                  >
                    Finish
                  </Button>
                </>
              )}
            </Col>
          </Row>
        </Form>

        {/*<div className={styles["hint-text"]}>Already have an account?</div>*/}
        {/*<Link href={"/login"} passHref>*/}
        {/*  <p className={styles["do-link"]}>Sign in</p>*/}
        {/*</Link>*/}
      </div>
    </>
  );
};

export default SettingForm;
