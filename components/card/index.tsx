import { Card } from "react-bootstrap";
import Image from "next/image";
import { ICard } from "../../interfaces/card";
import styles from "../../styles/Client-Card.module.scss";
import Agent from "../../public/static/images/agent1.png";

const CustomCard = ({
  image,
  title,
  description,
  subDescription,
  width,
  height,
}: ICard) => {
  return (
    <>
      <div className={styles["client-card"]}>
        <Card style={{ width: "100%", borderRadius: "18px", border: 0 }}>
          <Image
            className={styles["profile-pic"]}
            src={image ? image : Agent}
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

export default CustomCard;
