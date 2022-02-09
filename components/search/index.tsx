import styles from "../../styles/Search.module.scss";
import { Form, Button } from "react-bootstrap";

const Search = () => {
  return (
    <>
      <div className={styles["search"]}>
        <Form>
          <div className="position-relative">
            <Form.Control
              className={styles["search-input"] + " py-3"}
              type="text"
              placeholder="Address, City, State, Neighborhood, Zip Code, Agent Name, Brokerage,#"
            />

            <Button
              className={styles["search-btn"] + " position-absolute"}
              type="submit"
            >
              Search
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default Search;
