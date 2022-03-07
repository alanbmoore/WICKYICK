import styles from "../../styles/Footer.module.scss";
import Image from "next/image";
import { Button, Container, Form } from "react-bootstrap";

const AppFooter = () => {
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
                            type="text"
                            placeholder="Enter email address..."
                          />
                          <Button
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
                    <p>Terms of Use</p>
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
