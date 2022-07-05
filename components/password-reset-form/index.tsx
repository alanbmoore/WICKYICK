import Image from "next/image";
import logoImage from "../../public/static-files/images/logo.png";
import { Button, Form, Row, Col } from "react-bootstrap";
import router, { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import styles from "../../styles/SignUp.module.scss";
import { useState } from "react";
import { isValid } from "../../utils/helper";
import { hideLoading, showLoading } from "../../store/loadingSlice";
import { AuthService } from "../../services/auth";

const PasswordResetForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState({ isInvalid: false, value: "", err: "" });

  const handleEmail = (e: React.FormEvent<any>) => {
    setEmail({ isInvalid: false, value: e.currentTarget.value, err: "" });
  };

  const validate = () => {
    let isValidFlag = true;
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
        email: email.value,
      };
      dispatch(showLoading());
      AuthService.resetPassword(obj)
        .then((data: any) => {
          // console.log("AuthService.resetPassword: response", data);
          toast.success("Password reset e-mail has been sent.", {
            position: toast.POSITION.TOP_RIGHT,
          });
          setTimeout(() => {
            dispatch(hideLoading());
          }, 1000);
        })
        .catch((error: any) => {
          toast.error(error?.message, {
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
      <div className={styles["signup-form"] + " mx-auto my-5 py-5"}>
        <Form className="my-5" onSubmit={handleSubmit}>
          <div className="d-flex">
            <Image
              className={"logo"}
              onClick={() => router.push("/")}
              src={logoImage}
              width={"55.38px"}
              height={"55.38p "}
              alt={"logo image"}
            />
            <p className={styles["title"] + " mx-5"}>Password Reset</p>
          </div>

          <Row style={{ marginTop: "7%" }}>
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

          <Button className={styles["submit-btn"]} type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};

export default PasswordResetForm;
