import styles from "../../styles/SignUp.module.scss";
import Image from "next/image";
import logoImage from "../../public/static/images/logo.png";
import googleLogo from "../../public/static/images/google-logo.png";
import linkedInLogo from "../../public/static/images/linkedin-logo.png";
import { Button, Form, Row, Col } from "react-bootstrap";
import Link from "next/link";

const LoginForm = () => {
  return (
    <>
      <div className={styles["signup-form"]}>
        <Form>
          <Link href={"/"} passHref>
            <Image src={logoImage} width={"55.38px"} height={"55.38p "} />
          </Link>
          <p className={styles["title"]}>Create an account</p>
          <div className="d-flex flex-column w-100">
            <Button className={styles["social-btn"] + " mb-2"}>
              <Image src={googleLogo} width={"35px"} height={"35px"} />
              <p> Sign Up with Google</p>
            </Button>
            <Button className={styles["social-btn"] + " mb-2"}>
              <Image src={linkedInLogo} width={"30px"} height={"30px"} />
              <p> Sign Up with LinkedIn</p>
            </Button>
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

          <p className={styles["forgot-password-text"]}>Forgot password</p>

          <Button className={styles["submit-btn"]} type="submit">
            Login
          </Button>
        </Form>
        <div className={styles["hint-text"]}>Don’t have an account?</div>

        <Link href={"/signup"} passHref>
          <p className={styles["do-link"]}>Sign up</p>
        </Link>
      </div>
    </>
  );
};

export default LoginForm;
