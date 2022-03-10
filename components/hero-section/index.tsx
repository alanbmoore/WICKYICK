import styles from "../../styles/Hero.module.scss";
import Search from "../search";
import { Container } from "react-bootstrap";

const HeroSection = () => {
  return (
    <>
      <div className={styles["hero-section"]}>
        <Container>
          <p className={styles["heading-text"] + " pt-3 text-center"}>
            Every Home Has A Story
          </p>
          <p className={styles["subtext"] + " text-center pt-2 mb-4"}>
            Engage With Our Community Of Real Estate Experts
          </p>
          <div>
            <Search />
          </div>
        </Container>
      </div>
    </>
  );
};

export default HeroSection;
