import styles from "../../styles/Hero.module.scss";
import Search from "../search";

const HeroSection = () => {
  return (
    <>
      <div className={styles["hero-section"]}>
        <p className={styles["heading-text"] + " pt-5 text-center"}>
          Every Home Has A Story
        </p>
        <p className={styles["subtext"] + " text-center pt-2 mb-4"}>
          Engage In Our Community Of Real Estate Experts
        </p>
        <div>
          <Search />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
