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
import { hideLoading, showLoading } from "../../store/loadingSlice";
import { AuthService } from "../../services/auth";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { setUser } from "../../store/userSlice";
import { isValid } from "../../utils/helper";
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  AuthProvider,
} from "firebase/auth";
import { getErrorMessageFromFirebaseCode } from "../../utils/errors";
import { submitSocialLogin } from "../../utils/login";

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

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

  const signUpWithSocialLogin = async (
    providerName: "google" | "facebook",
    authProvider: AuthProvider
  ) => {
    try {
      const response = await submitSocialLogin(providerName, authProvider);
      onSuccess(response);
      setTimeout(() => {
        dispatch(hideLoading());
      }, 1000);
    } catch (error: any) {
      let message;
      if (error.code) message = getErrorMessageFromFirebaseCode(error.code);
      else message = error?.message;

      dispatch(hideLoading());
      toast.error(message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const onSuccess = (data: any) => {
    dispatch(setUser(data.user));
    localStorage.setItem("id_token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));
    toast.success(data.message, {
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

  const login = async (e: any) => {
    e.preventDefault();
    let isValidForm = validate();
    if (isValidForm) {
      dispatch(showLoading());
      AuthService.login({ email: email.value, password: password.value })
        .then((data: any) => {
          // console.log("AuthService.login: response", data);
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
            <Button
              className={styles["social-btn"] + " mb-2"}
              onClick={async () => {
                await signUpWithSocialLogin("google", googleProvider);
              }}
            >
              <Image
                src={googleLogo}
                width={"30px"}
                height={"30px"}
                alt={"google image"}
              />
              <p> Login with Google</p>
            </Button>
            <Button
              className={styles["social-btn"] + " mb-2"}
              onClick={async () => {}}
            >
              <Image
                src={linkedInLogo}
                width={"30px"}
                height={"30px"}
                alt={"linkedin image"}
              />
              <p> Login with LinkedIn</p>
            </Button>
            <Button
              className={styles["social-btn"] + " mb-2"}
              onClick={async () => {
                await signUpWithSocialLogin("facebook", facebookProvider);
              }}
            >
              <Image
                src={facebookLogo}
                width={"30px"}
                height={"30px"}
                alt={"facebook image"}
              />
              <p> Login with Facebook</p>
            </Button>
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
