import styles from "../../styles/Footer.module.scss";
import Image from "next/image";
import { Button, Container, Form } from "react-bootstrap";
import { showModal } from "../../store/modalSlice";
import { useDispatch } from "react-redux";
import { hideLoading, showLoading } from "../../store/loadingSlice";
import { AuthServices } from "../../services/auth";
import { toast } from "react-toastify";
import { useState } from "react";
import { isValid } from "../../utils/helper";

const AppFooter = () => {
  const [email, setEmail] = useState({ isInvalid: false, value: "", err: "" });
  const dispatch = useDispatch();

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
      AuthServices.requestAccess(obj)
        .then((data: any) => {
          toast.success(data.detail, {
            position: toast.POSITION.TOP_RIGHT,
          });
          setTimeout(() => {
            dispatch(hideLoading());
          }, 1000);
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
      <Container fluid>
        <footer className={styles["footer-section"]}>
          <div className={styles["custom-container"]}>
            <div className={styles["footer-content"] + " pb-5"}>
              <div className="row">
                <div className="col-12 mb-50 ">
                  <div className={styles["footer-widget"]}>
                    <div className={styles["footer-logo"]}>
                      <div
                        className={
                          styles["footer-logo"] + " d-flex align-items-center"
                        }
                      >
                        <Image
                          src="/logo.png"
                          alt="Footer Logo"
                          width={33}
                          height={33}
                        />
                        <p className={styles["footer-text"]}>WickYick</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={
                    styles["footer-columns"] +
                    " col-12 d-flex flex-column flex-md-row"
                  }
                >
                  <div className="col-md-6 col-12 row m-0">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-6 mb-30">
                      <div className={styles["footer-widget"]}>
                        <div className={styles["footer-widget-heading"]}>
                          <h3>Explore WickYick</h3>
                        </div>
                        <ul className="d-flex flex-column m-0 p-0">
                          <li>
                            <a href="#">Agents</a>
                          </li>
                          <li>
                            <a href="#">Pricing</a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-6 col-6 mb-30">
                      <div className={styles["footer-widget"]}>
                        <div className={styles["footer-widget-heading"]}>
                          <h3>Company</h3>
                        </div>
                        <ul className="d-flex flex-column m-0 p-0">
                          <li>
                            <a href="#">About</a>
                          </li>
                          <li>
                            <a href="#">Contact Us</a>
                          </li>
                          <li>
                            <a href="#">Advertising</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 col-12 d-flex flex-column flex-md-row">
                    <div className="col-12 mb-50 row">
                      <div className={styles["footer-widget"]}>
                        <div className={styles["footer-widget-heading"]}>
                          <h3 className=" mt-md-0 mt-4 mx-md-0 px-md-0 mx-2 px-1">
                            Not a real estate agent, but have a story to tell?
                          </h3>
                        </div>
                        <div className={styles["subscribe-form"]}>
                          <Form.Control
                            onChange={handleEmail}
                            value={email.value}
                            type="text"
                            placeholder="Enter email address..."
                          />
                          {email.isInvalid && (
                            <div
                              style={{
                                color: "red",
                                fontSize: "12px",
                                marginTop: "5px",
                              }}
                            >
                              {email.err}
                            </div>
                          )}
                          <Button
                            onClick={handleSubmit}
                            className={styles["subscribe-btn"]}
                            type="submit"
                          >
                            Request Invite
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles["copyright-area"]}>
              <div className="row">
                <div className="col-xl-6 col-lg-6 text-left text-lg-left">
                  <div className={styles["copyright-text"]}>
                    <p className="m-0 pb-1">
                      © 2022 WickYick. All rights reserved
                    </p>
                  </div>
                  <div className={styles["copyright-text"]}>
                    <p onClick={() => dispatch(showModal())}>Terms of Use</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </Container>
    </>
  );
};

export default AppFooter;
