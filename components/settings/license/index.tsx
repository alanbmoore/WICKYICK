import styles from "../../../styles/License.module.scss";
import { Form, Row, Col, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { UserService } from "../../../services/user";
import { useDispatch } from "react-redux";
import { hideLoading, showLoading } from "../../../store/loadingSlice";

const LicenseForm = ({ goToNextStep }: any) => {
  const dispatch = useDispatch();

  const [licenseNumber, setLicenseNumber] = useState({
    isInvalid: false,
    value: "",
    err: "",
  });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "");

    setLicenseNumber({
      isInvalid: false,
      value: user?.license_number,
      err: "",
    });
  }, [setLicenseNumber]);

  const handleLicenseNumber = (e: React.FormEvent<any>) => {
    // const re = /^[0-9\b]+$/;
    const re = /^[a-zA-Z0-9 ]+$/;

    if (e.currentTarget.value === "" || re.test(e.currentTarget.value)) {
      setLicenseNumber({
        isInvalid: false,
        value: e.currentTarget.value,
        err: "",
      });
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (licenseNumber.value) {
      let obj = {
        license_number: licenseNumber.value,
      };
      dispatch(showLoading());
      UserService.updateProfile(obj)
        .then((data: any) => {
          // //console.log("updateProfile: data", data);
          setTimeout(() => {
            dispatch(hideLoading());
          }, 1000);
          localStorage.setItem("user", JSON.stringify(data.user));
          toast.success("License Number added successfully", {
            position: toast.POSITION.TOP_RIGHT,
          });
          goToNextStep(1);
        })
        .catch((error: any) => {
          setTimeout(() => {
            dispatch(hideLoading());
          }, 1000);
        });
    } else {
      let err = "License Number is required !";
      setLicenseNumber({
        isInvalid: true,
        value: licenseNumber.value,
        err: err,
      });
    }
  };

  return (
    <>
      <style jsx>{`
        .input-group-text {
          position: relative !important;
        }
      `}</style>

      {/*{searchData && searchData.length === 0 ? (*/}
      <div className={styles["license-form"] + " px-3"}>
        <h1 className={styles["heading"]}>Enter your license number</h1>
        <p className={styles["description"]}>
          Enter your license number to create your profile
        </p>
        <Row className="mt-4">
          <Col xs={12} md={11}>
            <Form>
              <Form.Control
                value={licenseNumber.value}
                onChange={handleLicenseNumber}
                className={styles["license-input"]}
                type="text"
              />
              {licenseNumber.isInvalid && (
                <div
                  style={{ color: "red", fontSize: "12px", marginTop: "5px" }}
                >
                  {licenseNumber.err}
                </div>
              )}
              <Button
                className={styles["submit-btn"] + " mb-4"}
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </div>
      {/*) : (*/}
      {/*  <div className={styles["search-result"]}>*/}
      {/*    <ProfileTopSection*/}
      {/*      changeLicense={() => {*/}
      {/*        setSearchData([]);*/}
      {/*      }}*/}
      {/*      stepNo={0}*/}
      {/*    />*/}
      {/*    <h5 className={styles["total-locations"]}>*/}
      {/*      {properties.length} listings*/}
      {/*    </h5>*/}
      {/*    <p className={styles["helper-text"]}>*/}
      {/*      We pull your listings from 3rd party systems you have listings*/}
      {/*      active. <span>Learn more.</span>*/}
      {/*    </p>*/}

      {/*    <div className={styles["select-count"]}>*/}
      {/*      <Checkbox />*/}
      {/*      <p className={"m-0 px-2"}>Deselect all</p>*/}
      {/*    </div>*/}

      {/*    <Row className="mt-4">*/}
      {/*      {properties.map((item: ICard, index: number) => {*/}
      {/*        return (*/}
      {/*          <Col xs={12} md={6} key={index}>*/}
      {/*            <SelectableCustomCard*/}
      {/*              image={item.image}*/}
      {/*              title={item.title}*/}
      {/*              subDescription={item.subDescription}*/}
      {/*              description={item.description}*/}
      {/*              width={320}*/}
      {/*              height={251}*/}
      {/*            />*/}
      {/*          </Col>*/}
      {/*        );*/}
      {/*      })}*/}
      {/*    </Row>*/}

      {/*    <div className={styles["continue-btn"]}>*/}
      {/*      <Button*/}
      {/*        onClick={handleSubmit}*/}
      {/*        className={styles["subscribe-btn"]}*/}
      {/*        type="submit"*/}
      {/*      >*/}
      {/*        Continue*/}
      {/*      </Button>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*)}*/}
    </>
  );
};

export default LicenseForm;
