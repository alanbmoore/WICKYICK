import Image from "next/image";
import styles from "../../../styles/License.module.scss";
import QuestionMark from "../../../public/static/images/question-mark.svg";
import { Form, Row, Col, Button } from "react-bootstrap";
import SelectableCustomCard from "../../selectable-card";
import { ICard } from "../../../interfaces/card";
import Property1 from "../../../public/static/images/property1.png";
import Property2 from "../../../public/static/images/property2.png";
import Property3 from "../../../public/static/images/property3.png";
import { useState } from "react";
import ProfileTopSection from "../profile/profile-top-section";
import Checkbox from "../../checkbox";

const properties: Array<ICard> = [
  {
    title: "$600,000",
    image: Property1,
    description: "2 Beds · 2 baths · 772 sqf",
    subDescription: "4004 Colcord Ave, Waco, TX 76707",
  },
  {
    title: "$600,000",
    image: Property2,
    description: "2 Beds · 2 baths · 772 sqf",
    subDescription: "4004 Colcord Ave, Waco, TX 76707",
  },
  {
    title: "$600,000",
    image: Property3,
    description: "2 Beds · 2 baths · 772 sqf",
    subDescription: "4004 Colcord Ave, Waco, TX 76707",
  },
  {
    title: "$600,000",
    image: Property1,
    description: "2 Beds · 2 baths · 772 sqf",
    subDescription: "4004 Colcord Ave, Waco, TX 76707",
  },
];

const LicenseForm = ({ goToNextStep }: any) => {
  const [searchData, setSearchData] = useState<any>([]);

  return (
    <>
      <style jsx>{`
        .input-group-text {
          position: relative !important;
        }
      `}</style>

      {searchData && searchData.length === 0 ? (
        <div className={styles["license-form"] + " px-3"}>
          <h1 className={styles["heading"]}>Enter your license number</h1>
          <p className={styles["description"]}>
            Enter your license number to create your profile and add listings
            you have in your listings services.
          </p>
          <div className={styles["helper-text"]}>
            <Image src={QuestionMark} alt={"question mark"} />
            <p>How we manage license number</p>
          </div>
          <Row className="mt-4">
            <Col xs={12} md={11}>
              <Form>
                <Form.Label className={styles["license-input-label"]}>
                  Enter your license number
                </Form.Label>
                <Form.Control className={styles["license-input"]} type="text" />
                <Button
                  className={styles["submit-btn"] + " mb-4"}
                  onClick={(e) => {
                    e.preventDefault();
                    setSearchData([{}]);
                  }}
                >
                  Extract data
                </Button>
              </Form>
            </Col>
          </Row>
        </div>
      ) : (
        <div className={styles["search-result"]}>
          <ProfileTopSection
            changeLicense={() => {
              setSearchData([]);
            }}
            stepNo={0}
          />
          <h5 className={styles["total-locations"]}>
            {properties.length} listings
          </h5>
          <p className={styles["helper-text"]}>
            We pull your listings from 3rd party systems you have listings
            active. <span>Learn more.</span>
          </p>

          <div className={styles["select-count"]}>
            <Checkbox />
            <p className={"m-0 px-2"}>Deselect all</p>
          </div>

          <Row className="mt-4">
            {properties.map((item: ICard, index: number) => {
              return (
                <Col xs={12} md={6} key={index}>
                  <SelectableCustomCard
                    image={item.image}
                    title={item.title}
                    subDescription={item.subDescription}
                    description={item.description}
                    width={320}
                    height={251}
                  />
                </Col>
              );
            })}
          </Row>

          <div className={styles["continue-btn"]}>
            <Button
              onClick={() => {
                goToNextStep(1);
              }}
              className={styles["subscribe-btn"]}
              type="submit"
            >
              Continue
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default LicenseForm;
