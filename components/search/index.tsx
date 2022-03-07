import styles from "../../styles/Search.module.scss";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useRouter } from "next/router";

const Search = () => {
  const [searchText, setSearchText] = useState<string>("");

  const router = useRouter();

  return (
    <>
      <div className={styles["search"]}>
        <Form>
          <div className="position-relative">
            <Form.Control
              onChange={(e) => setSearchText(e.target.value)}
              className={styles["search-input"] + " py-3"}
              value={searchText}
              type="text"
              placeholder="City, State, Agent Name, Brokerage, #"
            />

            <Button
              className={styles["search-btn"] + " position-absolute"}
              onClick={() => {
                searchText &&
                  router.push(`/search-results?keyword=${searchText}`);
              }}
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
