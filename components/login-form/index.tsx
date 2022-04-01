import { useState } from "react";
import styles from "../../styles/SignUp.module.scss";
import Image from "next/image";
import logoImage from "../../public/static/images/logo.png";
import googleLogo from "../../public/static/images/google-logo.png";
import linkedInLogo from "../../public/static/images/linkedin-logo.png";
import facebookLogo from "../../public/static/images/facebook.png";
import { Button, Form, Row, Col } from "react-bootstrap";
import Link from "next/link";
import router, { useRouter } from "next/router";
import SocialButton from "../sign-up-form/SocialButton";
import { hideLoading, showLoading } from "../../store/loadingSlice";
import { AuthServices } from "../../services/auth";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { setUser } from "../../store/userSlice";
import { isValid } from "../../utils/helper";

const LoginForm = () => {
  const dispatch = useDispatch();
  const history = useRouter();
  const [email, setEmail] = useState({ isInvalid: false, value: "", err: "" });
  const [password, setPassword] = useState({
    isInvalid: false,
    value: "",
    err: "",
  });

  const handleEmail = (e: any) => {
    setEmail({ isInvalid: false, value: e.currentTarget.value, err: "" });
  };

  const handlePassword = (e: any) => {
    setPassword({ isInvalid: false, value: e.currentTarget.value, err: "" });
  };

  const onSuccess = (data: any) => {
    dispatch(setUser(data.user));
    localStorage.setItem("id_token", data?.token?.key || data.key);
    localStorage.setItem("user", JSON.stringify(data.user));
    toast.success("You have successfully registered", {
      position: toast.POSITION.TOP_RIGHT,
    });
    data.user.is_on_boarding_completed
      ? router.push(`/agent-profile/${data.user.pk}`)
      : router.push("/settings");
  };

  const validate = () => {
    let isValidFlag = true;
    if (password.value === "") {
      let err = "Password is required";
      setPassword({ isInvalid: true, value: password.value, err: err });
      isValidFlag = false;
    }

    if (email.value === "") {
      let err = "Email is required";
      setEmail({ isInvalid: true, value: email.value, err: err });
      isValidFlag = false;
    } else {
      const errors = isValid(email.value, { email: true });
      if (errors.length) {
        setEmail({ isInvalid: true, value: email.value, err: errors[0] });
        isValidFlag = false;
      }
    }

    return isValidFlag;
  };

  const login = (e: any) => {
    e.preventDefault();
    let isValidForm = validate();
    if (isValidForm) {
      dispatch(showLoading());
      AuthServices.login({ email: email.value, password: password.value })
        .then((data: any) => {
          onSuccess(data);
          setTimeout(() => {
            dispatch(hideLoading());
          }, 1000);
        })
        .catch((error: any) => {
          toast.error(error.non_field_errors[0], {
            position: toast.POSITION.TOP_RIGHT,
          });
          setTimeout(() => {
            dispatch(hideLoading());
          }, 1000);
        });
    }
  };

  return (
    <>
      <div className={styles["signup-form"]}>
        <Form onSubmit={login}>
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
                <Form.Control
                  value={email.value}
                  onChange={handleEmail}
                  type="text"
                />
                {email.isInvalid && (
                  <div
                    style={{ color: "red", fontSize: "12px", marginTop: "5px" }}
                  >
                    {email.err}
                  </div>
                )}
              </div>
            </Col>
          </Row>

          <Row>
            <Col className="mt-3">
              <div className={styles["form-input"]}>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  value={password.value}
                  onChange={handlePassword}
                  type="password"
                />
                {password.isInvalid && (
                  <div
                    style={{ color: "red", fontSize: "12px", marginTop: "5px" }}
                  >
                    {password.err}
                  </div>
                )}
              </div>
            </Col>
          </Row>

          <p
            onClick={() => {
              history.push("/password-reset");
            }}
            className={styles["forgot-password-text"]}
          >
            Forgot Password?
          </p>

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
