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
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            searchText && router.push(`/search-results?keyword=${searchText}`);
          }}
        >
          <div className="position-relative">
            <Form.Control
              onChange={(e) => {
                e.preventDefault();
                setSearchText(e.target.value);
              }}
              className={styles["search-input"] + " py-3"}
              value={searchText}
              type="text"
              placeholder="City, State, Agent Name, Company, #"
            />

            <Button
              type="submit"
              className={styles["search-btn"] + " position-absolute"}
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
