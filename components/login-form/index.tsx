import styles from "../../styles/SignUp.module.scss";
import Image from "next/image";
import logoImage from "../../public/static/images/logo.png";
import googleLogo from "../../public/static/images/google-logo.png";
import linkedInLogo from "../../public/static/images/linkedin-logo.png";
import facebookLogo from "../../public/static/images/facebook.png";
import { Button, Form, Row, Col } from "react-bootstrap";
import Link from "next/link";
import router from "next/router";
import SocialButton from "../sign-up-form/SocialButton";
import { hideLoading, showLoading } from "../../store/loadingSlice";
import { AuthServices } from "../../services/auth";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const LoginForm = () => {
  const dispatch = useDispatch();

  const onSuccess = (data: any) => {
    localStorage.setItem("id_token", data.token.key);
    localStorage.setItem("user", JSON.stringify(data.user));
    toast.success("You have successfully registered", {
      position: toast.POSITION.TOP_RIGHT,
    });
    router.push("/settings");
  };

  return (
    <>
      <div className={styles["signup-form"]}>
        <Form>
          <Image
            className={"logo"}
            onClick={() => router.push("/")}
            src={logoImage}
            width={"55.38px"}
            height={"55.38p "}
            alt={"logo image"}
          />
          <p className={styles["title"]}>Log In</p>

          <div className="d-flex flex-column w-100">
            <SocialButton
              provider="google"
              appId={process.env.REACT_APP_GG_APP_ID || ""}
              onLoginSuccess={async (user: any) => {
                let obj = {
                  access_token: user?.token?.accessToken,
                  provider: "google",
                };
                dispatch(showLoading());
                AuthServices.submitSocialLogin(
                  obj,
                  "api/user/social-login/google/"
                )
                  .then((response: any) => {
                    onSuccess(response);
                    setTimeout(() => {
                      dispatch(hideLoading());
                    }, 1000);
                  })
                  .catch((error: any) => {
                    setTimeout(() => {
                      dispatch(hideLoading());
                    }, 1000);
                  });
              }}
              onLoginFailure={(err: any) => {}}
              icon={googleLogo}
            >
              Login with Google
            </SocialButton>

            <Button className={styles["social-btn"] + " mb-2"}>
              <Image
                src={linkedInLogo}
                width={"30px"}
                height={"30px"}
                alt={"linkedin image"}
              />
              <p> Login with LinkedIn</p>
            </Button>

            <SocialButton
              provider="facebook"
              appId={process.env.REACT_APP_FACEBOOK_ID || ""}
              onLoginSuccess={async (user: any) => {
                let obj = {
                  access_token: user?.token?.accessToken,
                  provider: "facebook",
                };
                dispatch(showLoading());
                AuthServices.submitSocialLogin(
                  obj,
                  "api/user/social-login/facebook/"
                )
                  .then((response: any) => {
                    setTimeout(() => {
                      dispatch(hideLoading());
                    }, 1000);
                    onSuccess(response);
                  })
                  .catch((error: any) => {
                    setTimeout(() => {
                      dispatch(hideLoading());
                    }, 1000);
                  });
              }}
              onLoginFailure={(err: any) => {}}
              icon={facebookLogo}
            >
              Login with Facebook
            </SocialButton>
          </div>

          <div className={styles["or-seperator"]}>or</div>

          <Row>
            <Col>
              <div className={styles["form-input"]}>
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="text" />
              </div>
            </Col>
          </Row>

          <Row>
            <Col className="mt-3">
              <div className={styles["form-input"]}>
                <Form.Label>Password</Form.Label>
                <Form.Control type="text" />
              </div>
            </Col>
          </Row>

          <p className={styles["forgot-password-text"]}>Forgot Password?</p>

          <Button className={styles["submit-btn"]} type="submit">
            Login
          </Button>
        </Form>
        <div className={styles["hint-text"]}>Don’t have an account?</div>

        <Link href={"/signup"} passHref>
          <p className={styles["do-link"]}>Sign Up</p>
        </Link>
      </div>
    </>
  );
};

export default LoginForm;
