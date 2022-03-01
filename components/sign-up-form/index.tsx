import Image from "next/image";
import logoImage from "../../public/static/images/logo.png";
import googleLogo from "../../public/static/images/google-logo.png";
import linkedInLogo from "../../public/static/images/linkedin-logo.png";
import { Button, Form, Row, Col } from "react-bootstrap";
import Link from "next/link";
import facebookLogo from "../../public/static/images/facebook.png";
import styles from "../../styles/SignUp.module.scss";
import { useRouter } from "next/router";
import { useState } from "react";
import { AuthServices } from "../../services/auth";
import { isValid } from "../../utils/helper";
import { toast } from "react-toastify";
import SocialButton from "./SocialButton";
import { useDispatch } from "react-redux";
import { hideLoading, showLoading } from "../../store/loadingSlice";

const SignUpForm = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [email, setEmail] = useState({ isInvalid: false, value: "", err: "" });
  const [firstName, setFirstName] = useState({
    isInvalid: false,
    value: "",
    err: "",
  });

  const [lastName, setLastName] = useState({
    isInvalid: false,
    value: "",
    err: "",
  });

  const [password, setPassword] = useState({
    isInvalid: false,
    value: "",
    err: "",
  });

  const handleEmail = (e: React.FormEvent<any>) => {
    setEmail({ isInvalid: false, value: e.currentTarget.value, err: "" });
  };

  const handleFirstName = (e: React.FormEvent<any>) => {
    setFirstName({ isInvalid: false, value: e.currentTarget.value, err: "" });
  };

  const handleLastName = (e: React.FormEvent<any>) => {
    setLastName({ isInvalid: false, value: e.currentTarget.value, err: "" });
  };

  const handlePassword = (e: React.FormEvent<any>) => {
    setPassword({ isInvalid: false, value: e.currentTarget.value, err: "" });
  };

  const validate = () => {
    let isValidFlag = true;
    if (password.value.length < 8) {
      let err = "Password must contain at-least eight characters!";
      setPassword({ isInvalid: true, value: password.value, err: err });
      isValidFlag = false;
    }

    const errors = isValid(password.value, { password: true });

    if (errors.length) {
      setPassword({ isInvalid: true, value: password.value, err: errors[0] });
      isValidFlag = false;
    }

    if (firstName.value === "") {
      let err = "First name is required !";
      setFirstName({ isInvalid: true, value: firstName.value, err: err });
      isValidFlag = false;
    }

    if (lastName.value === "") {
      let err = "Last name is required !";
      setLastName({ isInvalid: true, value: lastName.value, err: err });
      isValidFlag = false;
    }

    if (email.value === "") {
      let err = "Email is required !";
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

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (validate()) {
      let obj = {
        first_name: firstName.value,
        last_name: lastName.value,
        email: email.value,
        password1: password.value,
        password2: password.value,
      };
      dispatch(showLoading());
      AuthServices.signup(obj)
        .then((data: any) => {
          setTimeout(() => {
            dispatch(hideLoading());
          }, 1000);
          onSuccess(data);
        })
        .catch((error: any) => {
          setTimeout(() => {
            dispatch(hideLoading());
          }, 1000);
          if (error?.email) {
            toast.error(error?.email[0], {
              position: toast.POSITION.TOP_RIGHT,
            });
          }
        });
    }
  };

  const onSuccess = (data: any) => {
    localStorage.setItem("id_token", data.token.key);
    localStorage.setItem("user", JSON.stringify(data.user));
    toast.success("You have successfully registered", {
      position: toast.POSITION.TOP_RIGHT,
    });
    router.push("/settings");
  };

  const handleSocialLoginFailure = (err: any) => {
    console.error(err);
  };

  return (
    <>
      <div className={styles["signup-form"]}>
        <p className={styles["form-heading"]}>
          WickYick is an invite-only platform and profiles are only available to
          agents
        </p>
        <Form>
          <Image
            className={"logo"}
            onClick={() => router.push("/")}
            src={logoImage}
            width={"55.38px"}
            height={"55.38px"}
            alt={"logo image"}
          />
          <p className={styles["title"]}>
            Request An Invite By Creating An Account
          </p>
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
              Sign Up with Google
            </SocialButton>

            <Button className={styles["social-btn"] + " mb-2"}>
              <Image
                src={linkedInLogo}
                width={"30px"}
                height={"30px"}
                alt={"linkedin image"}
              />
              <p> Sign Up with LinkedIn</p>
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
              Sign Up with Facebook
            </SocialButton>
          </div>

          <div className={styles["or-seperator"]}>or</div>

          <Row>
            <Col xs={12} md={6}>
              <div className={styles["form-input"]}>
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  value={firstName.value}
                  onChange={handleFirstName}
                  type="text"
                />
                {firstName.isInvalid && (
                  <div
                    style={{ color: "red", fontSize: "12px", marginTop: "5px" }}
                  >
                    {firstName.err}
                  </div>
                )}
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className={styles["form-input"]}>
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  value={lastName.value}
                  onChange={handleLastName}
                  type="text"
                />
                {lastName.isInvalid && (
                  <div
                    style={{ color: "red", fontSize: "12px", marginTop: "5px" }}
                  >
                    {lastName.err}
                  </div>
                )}
              </div>
            </Col>
          </Row>

          <Row>
            <Col className="mt-3">
              <div className={styles["form-input"]}>
                <Form.Label>
                  Email Address (Professional Email Recommended)
                </Form.Label>
                <Form.Control
                  value={email.value}
                  onChange={handleEmail}
                  type="email"
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
          <Button
            onClick={handleSubmit}
            className={styles["submit-btn"]}
            type="submit"
          >
            Sign Up For Free
          </Button>
          <p className={styles["agreement-text"]}>
            By creating an account you agree with our{" "}
            <span className={styles["sub-agreement-text"]}>
              Terms of Service
            </span>
          </p>
        </Form>
        <div className={styles["hint-text"]}>Already have an account?</div>
        <Link href={"/login"} passHref>
          <p className={styles["do-link"]}>Sign In</p>
        </Link>
      </div>
    </>
  );
};

export default SignUpForm;
