import { InputGroup } from "react-bootstrap";
import styles from "../../styles/Checkbox.module.scss";

const Checkbox = () => {
  return (
    <>
      <InputGroup className={styles["checkbox"]}>
        <InputGroup.Checkbox
          className={styles["form-check-input"]}
          aria-label="Checkbox for following text input"
        />
      </InputGroup>
    </>
  );
};

export default Checkbox;
