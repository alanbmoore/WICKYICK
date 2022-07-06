import Image from "next/image";
import logoImage from "../../public/static/images/logo.png";
import { Button, Form, Row, Col } from "react-bootstrap";
import router, { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { setUser } from "../../store/userSlice";
import styles from "../../styles/SignUp.module.scss";
import { useState } from "react";
import { isValid } from "../../utils/helper";
import { hideLoading, showLoading } from "../../store/loadingSlice";
import { AuthService } from "../../services/auth";

const SetPasswordForm = ({ params }: any) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [confirmPassword, setConfirmPassword] = useState({
    isInvalid: false,
    value: "",
    err: "",
  });
  const [password, setPassword] = useState({
    isInvalid: false,
    value: "",
    err: "",
  });

  const handleConfirmPassword = (e: any) => {
    setConfirmPassword({
      isInvalid: false,
      value: e.currentTarget.value,
      err: "",
    });
  };

  const handlePassword = (e: any) => {
    setPassword({ isInvalid: false, value: e.currentTarget.value, err: "" });
  };

  const validate = () => {
    let isValidFlag = true;
    if (password.value !== confirmPassword.value) {
      let err = "Passwords are not same";
      setPassword({ isInvalid: true, value: password.value, err: err });
      setConfirmPassword({ isInvalid: true, value: password.value, err: err });
      return false;
    } else if (password.value.length < 8) {
      let err = "Password must contain atleast eight characters!";
      setPassword({ isInvalid: true, value: password.value, err: err });
      setConfirmPassword({ isInvalid: true, value: password.value, err: err });
      isValidFlag = false;
    }

    const errors = isValid(password.value, { password: true });

    if (errors.length) {
      setPassword({ isInvalid: true, value: password.value, err: errors[0] });
      setConfirmPassword({
        isInvalid: true,
        value: password.value,
        err: errors[0],
      });
      isValidFlag = false;
    }

    return isValidFlag;
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    if (validate()) {
      let obj = {
        new_password: password.value,
        signature: params[0],
        token: params[1],
      };
      dispatch(showLoading());
      AuthService.setPassword(obj)
        .then((data: any) => {
          // console.log("AuthService.setPassword: response", data);
          toast.success("Password reset successfully.", {
            position: toast.POSITION.TOP_RIGHT,
          });
          setTimeout(() => {
            dispatch(hideLoading());
          }, 1000);
          localStorage.removeItem("user");
          localStorage.removeItem("id_token");
          router.push("/login");
        })
        .catch((error: any) => {
          setTimeout(() => {
            dispatch(hideLoading());
          }, 1000);
        });
    }
  };

  return (
    <>
      <div className={styles["signup-form"] + " mx-auto my-5 py-5"}>
        <Form className="my-5" onSubmit={onSubmit}>
          <div className="d-flex">
            <Image
              className={"logo"}
              onClick={() => router.push("/")}
              src={logoImage}
              width={"55.38px"}
              height={"55.38p "}
              alt={"logo image"}
            />
            <p className={styles["title"] + " mx-5"}>Set Password</p>
          </div>

          <Row style={{ marginTop: "7%" }}>
            <Col>
              <div className={styles["form-input"]}>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  value={password.value}
                  onChange={handlePassword}
                  type="password"
                />
              </div>
              <div className={styles["form-input"] + " my-3"}>
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  value={confirmPassword.value}
                  onChange={handleConfirmPassword}
                  type="password"
                />
                {confirmPassword.isInvalid && (
                  <div
                    style={{ color: "red", fontSize: "12px", marginTop: "5px" }}
                  >
                    {confirmPassword.err}
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

export default SetPasswordForm;
