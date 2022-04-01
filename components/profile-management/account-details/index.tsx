import { Button, Col, Form, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { hideLoading, showLoading } from "../../../store/loadingSlice";
import { setUser } from "../../../store/userSlice";
import { isValid } from "../../../utils/helper";
import styles from "../../../styles/Profile-Settings.module.scss";
import { AuthServices } from "../../../services/auth";

const AccountDetails = ({ goToNextStep }: any) => {
  const dispatch = useDispatch();
  const [userInfo, setUserInfo] = useState<any>(null);

  const [email, setEmail] = useState({ isInvalid: false, value: "", err: "" });
  const [isChangeEmail, setIsChangeEmail] = useState<boolean>(false);

  const [currentPassword, setCurrentPassword] = useState({
    isInvalid: false,
    value: "",
    err: "",
  });

  const [newPassword, setNewPassword] = useState({
    isInvalid: false,
    value: "",
    err: "",
  });

  const handleEmail = (e: any) => {
    setEmail({ isInvalid: false, value: e.currentTarget.value, err: "" });
  };

  const handleNewPassword = (e: any) => {
    setNewPassword({ isInvalid: false, value: e.currentTarget.value, err: "" });
  };

  const handleCurrentPassword = (e: any) => {
    setCurrentPassword({
      isInvalid: false,
      value: e.currentTarget.value,
      err: "",
    });
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "");
    setUserData(user);
    setUserInfo(user);
  }, []);

  const setUserData = (user: any) => {
    user?.email != "null" &&
      setEmail({ isInvalid: false, value: user?.email, err: "" });
  };

  const validatePassword = () => {
    let isValidFlag = true;

    if (newPassword.value.length < 8) {
      let err = "Password must contain atleast eight characters!";
      setNewPassword({ isInvalid: true, value: newPassword.value, err: err });
      isValidFlag = false;
    }

    const errors = isValid(newPassword.value, { password: true });

    if (errors.length) {
      setNewPassword({
        isInvalid: true,
        value: newPassword.value,
        err: errors[0],
      });

      isValidFlag = false;
    }

    return isValidFlag;
  };

  const validateEmail = () => {
    let isValidFlag = true;
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

  const handleSubmission = () => {
    const formData: any = new FormData();

    if (validatePassword()) {
      formData.append("old_password", currentPassword.value);
      formData.append("new_password", newPassword.value);
      dispatch(showLoading());
      AuthServices.changePassword(formData)
        .then((data: any) => {
          setTimeout(() => {
            dispatch(hideLoading());
          }, 1000);
          toast.success("Password updated successfully", {
            position: toast.POSITION.TOP_RIGHT,
          });
        })
        .catch((error: any) => {
          toast.error(error?.old_password, {
            position: toast.POSITION.TOP_RIGHT,
          });
          setTimeout(() => {
            dispatch(hideLoading());
          }, 1000);
        });
    }
  };

  const emailChangeSubmit = () => {
    const formData: any = new FormData();

    if (validateEmail()) {
      formData.append("email", email.value);
      dispatch(showLoading());
      AuthServices.changeEmail(formData)
        .then((data: any) => {
          dispatch(setUser(data.user));
          localStorage.setItem("user", JSON.stringify(data.user));
          setIsChangeEmail(false);
          setTimeout(() => {
            dispatch(hideLoading());
          }, 1000);
          toast.success(data.message, {
            position: toast.POSITION.TOP_RIGHT,
          });
        })
        .catch((error: any) => {
          toast.error(error?.email, {
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
      <div className={styles["subscription-box"]}>
        <div>
          <p className={styles["plan-title"]}>
            Current subscription: Starter plan (Free)
          </p>
          <p className={styles["plan-description"]}>
            Li Europan lingues es membres del sam familie. Lor separat
            existentie es un myth. Por scientie,
          </p>
        </div>
        <div>
          <Button className={styles["upgrade-btn"]}>Upgrade</Button>
        </div>
      </div>

      <p className={styles["login-details"]}>Login Details</p>

      <Form className={styles["profile-details"]}>
        <Form.Label className={styles["profile-input-label"] + " mt-1"}>
          Email
        </Form.Label>
        <Form.Control
          value={email.value}
          onChange={handleEmail}
          className={styles["profile-input"]}
          type="text"
          placeholder="Email"
          disabled={!isChangeEmail}
        />

        {email.isInvalid && (
          <div style={{ color: "red", fontSize: "12px", marginTop: "5px" }}>
            {email.err}
          </div>
        )}

        <div className="d-flex justify-content-between mt-3">
          {!isChangeEmail && (
            <p
              onClick={() => {
                setIsChangeEmail(true);
              }}
              className={styles["change-email"]}
            >
              Change your email
            </p>
          )}
          {isChangeEmail && (
            <div>
              <Button
                onClick={() => {
                  emailChangeSubmit();
                }}
                className={styles["upgrade-btn"] + " " + styles["update-email"]}
              >
                Save
              </Button>
            </div>
          )}
        </div>
        <p className={styles["login-details"]}>Change Password</p>

        <Form.Label className={styles["profile-input-label"] + " mt-3"}>
          Current Password
        </Form.Label>
        <Form.Control
          value={currentPassword.value}
          onChange={handleCurrentPassword}
          className={styles["profile-input"]}
          type="password"
          placeholder="Current Password"
        />

        {currentPassword.isInvalid && (
          <div style={{ color: "red", fontSize: "12px", marginTop: "5px" }}>
            {currentPassword.err}
          </div>
        )}

        <Form.Label className={styles["profile-input-label"] + " mt-4"}>
          New Password
        </Form.Label>
        <Form.Control
          value={newPassword.value}
          onChange={handleNewPassword}
          className={styles["profile-input"]}
          type="password"
          placeholder="New Password"
        />

        {newPassword.isInvalid && (
          <div style={{ color: "red", fontSize: "12px", marginTop: "5px" }}>
            {newPassword.err}
          </div>
        )}

        <Button
          className={styles["submit-btn"] + " my-5"}
          onClick={handleSubmission}
        >
          Save Changes
        </Button>

        <div className={styles["line-break"] + " mb-4"}></div>

        <div className="align-items-center d-flex justify-content-between w-100">
          <div>
            <p className={styles["login-details"]}>Close your account</p>
            <p className={styles["login-description"]}>
              Delete your account and account data
            </p>
          </div>
          <div>
            <p className={styles["close-account"]}>Close Account</p>
          </div>
        </div>
      </Form>
    </>
  );
};

export default AccountDetails;
