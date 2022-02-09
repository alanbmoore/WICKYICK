import Image from "next/image";
import logoImage from "../../public/static/images/logo.png";
import googleLogo from "../../public/static/images/google-logo.png";
import linkedInLogo from "../../public/static/images/linkedin-logo.png";
import { Button, Form, Row, Col } from "react-bootstrap";
import Link from "next/link";
import facebookLogo from "../../public/static/images/facebook.png";
import styles from "../../styles/SignUp.module.scss";
import { useRouter } from "next/router";

const SignUpForm = () => {
  const router = useRouter();

  return (
    <>
      <div className={styles["signup-form"]}>
        <p className={styles["form-heading"]}>
          WickYick is an invite-only platform and profiles are only available to
          agents
        </p>
        <Form>
          <Link href={"/"} passHref>
            <Image
              src={logoImage}
              width={"55.38px"}
              height={"55.38px"}
              alt={"logo image"}
            />
          </Link>
          <p className={styles["title"]}>
            Request An Invite By Creating An Account
          </p>
          <div className="d-flex flex-column w-100">
            <Button className={styles["social-btn"] + " mb-2"}>
              <Image
                src={googleLogo}
                width={"35px"}
                height={"35px"}
                alt={"google image"}
              />
              <p> Sign Up with Google</p>
            </Button>
            <Button className={styles["social-btn"] + " mb-2"}>
              <Image
                src={linkedInLogo}
                width={"30px"}
                height={"30px"}
                alt={"linkedin image"}
              />
              <p> Sign Up with LinkedIn</p>
            </Button>
            <Button className={styles["social-btn"] + " mb-2"}>
              <Image
                src={facebookLogo}
                width={"30px"}
                height={"30px"}
                alt={"fb image"}
              />
              <p> Login with Facebook</p>
            </Button>
          </div>
          <div className={styles["or-seperator"]}>or</div>

          <Row>
            <Col xs={12} md={6}>
              <div className={styles["form-input"]}>
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" />
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className={styles["form-input"]}>
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" />
              </div>
            </Col>
          </Row>

          <Row>
            <Col className="mt-3">
              <div className={styles["form-input"]}>
                <Form.Label>
                  Email Address (Professional Email Recommended)
                </Form.Label>
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
          <Button
            onClick={(e: any) => {
              e.preventDefault();
              router.push("/settings");
            }}
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
