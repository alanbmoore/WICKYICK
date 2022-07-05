import styles from "../../styles/Settings.module.scss";
import { Form, Row, Col, Button } from "react-bootstrap";
import ProfileSideNav from "./settings-side-nav";
import ProfileDetails from "./profile-details";
import { useEffect, useState } from "react";
import SocialConnect from "./social";
import Tiktok from "../../public/static-files/images/tik-tok.png";
import Facebook from "../../public/static-files/images/facebook.svg";
import LinkedIn from "../../public/static-files/images/linkedIn.svg";
import { useRouter } from "next/router";
import { UserService } from "../../services/user";
import { hideLoading, showLoading } from "../../store/loadingSlice";
import { useDispatch } from "react-redux";
import { getUser } from "../../services/isLoggedIn";
import AccountDetails from "./account-details";

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

const ProfileManagementForm = () => {
  const router = useRouter();
  const user = getUser();
  const { code } = router.query;
  const history = useRouter();
  const dispatch = useDispatch();
  const [currentStep, setCurrentStep] = useState<number>(0);

  useEffect(() => {
    if (code && code?.length > 0) {
      setCurrentStep(2);
      let obj = {
        code: code,
      };

      dispatch(showLoading());
      UserService.sendInstagramCode(obj)
        .then((data: any) => {
          // console.log("sendInstagramCode: data", data);
          setTimeout(() => {
            dispatch(hideLoading());
          }, 1000);
          localStorage.setItem("user", JSON.stringify(data.user));
        })
        .catch((error: any) => {
          setTimeout(() => {
            dispatch(hideLoading());
          }, 1000);
        });
    }
  }, [dispatch, code]);

  return (
    <>
      <div className={styles["setting-form"]}>
        <Form>
          <Row>
            <Col xs={12} md={3}>
              <ProfileSideNav
                goToNextStep={(stepNo: number) => setCurrentStep(stepNo)}
                currentStep={currentStep}
              />
            </Col>
            <Col xs={12} md={9}>
              {currentStep === 0 ? (
                <div>
                  <Row>
                    <Col xs={12} md={11}>
                      <ProfileDetails
                        goToNextStep={(stepNo: number) =>
                          setCurrentStep(stepNo)
                        }
                      />
                    </Col>
                  </Row>
                </div>
              ) : currentStep === 1 ? (
                <div>
                  <Row>
                    <Col xs={12} md={11}>
                      <AccountDetails
                        goToNextStep={(stepNo: number) =>
                          setCurrentStep(stepNo)
                        }
                      />
                    </Col>
                  </Row>
                </div>
              ) : currentStep === 3 ? (
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
                      history.push(`agent-profile/${user.pk}`);
                    }}
                  >
                    Finish
                  </Button>
                </>
              ) : null}
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

export default ProfileManagementForm;
