import { Card } from "react-bootstrap";
import Image from "next/image";
import { ICard } from "../../interfaces/card";
import styles from "../../styles/Selectable-Card.module.scss";
import Checkbox from "../checkbox";

const SelectableCustomCard = ({
  image,
  title,
  description,
  subDescription,
  width,
  height,
}: ICard) => {
  return (
    <>
      <div className={styles["selectable-card"]}>
        <Card className="border-0">
          <div className={styles["image-checkbox"]}>
            <Checkbox />
          </div>
          <Image
            src={image}
            alt="Picture of the agent"
            width={width}
            height={height}
          />
          <Card.Body className={styles["card-body"]}>
            <Card.Title className={styles["agent-name"]}>{title}</Card.Title>
            <Card.Text className={styles["agent-followers"] + " mb-0"}>
              {description}
            </Card.Text>
            <Card.Text className={styles["agent-location"]}>
              {subDescription}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default SelectableCustomCard;
