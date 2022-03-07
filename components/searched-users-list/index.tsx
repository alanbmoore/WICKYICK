import styles from "../../styles/SearchResult.module.scss";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import MapContainer from "../Maps/index";
import { hideLoading, showLoading } from "../../store/loadingSlice";
import { UserService } from "../../services/user";
import CustomCard from "../card";

const SearchedUsersList = ({ keyword }: any) => {
  const dispatch = useDispatch();
  const [userList, setUserList] = useState([]);
  const [searchedText, setSearchedText] = useState<string>("");
  const [count, setCount] = useState([]);

  useEffect(() => {
    if (Object.keys(keyword).length > 0 && userList.length === 0) {
      getUsers(keyword.keyword);
    }
  }, [keyword]);

  const getUsers = (text: any) => {
    if (text && text.length > 0) {
      dispatch(showLoading());
      UserService.getUserList({ keyword: text })
        .then((response: any) => {
          setTimeout(() => {
            dispatch(hideLoading());
          }, 1000);
          setUserList(response.results);
          setCount(response.count);
        })
        .catch((error: any) => {
          setTimeout(() => {
            dispatch(hideLoading());
          }, 1000);
        });
    }
  };

  return (
    <>
      <Container className="mt-5">
        <div className={styles["search-result"]}>
          <Form>
            <div className="position-relative">
              <Form.Control
                onChange={(e) => setSearchedText(e.target.value)}
                value={searchedText}
                className={styles["search-input"] + " py-3"}
                type="text"
                placeholder="City, State, Agent Name, Brokerage, #"
              />

              <Button
                onClick={() => {
                  getUsers(searchedText);
                }}
                className={styles["search-btn"] + " position-absolute"}
              >
                Search
              </Button>
            </div>
          </Form>
        </div>
        <Row className="mt-4">
          <Col xs={12} md={6} lg={6}>
            <Row>
              {userList.map((item: any, index: number) => {
                return (
                  <Col xs={12} md={5} lg={5} key={index}>
                    <CustomCard
                      image={item.picture}
                      title={item.first_name + " " + item.last_name}
                      subDescription={item.location}
                      description={item.bio}
                      width={"270px"}
                      height={"200"}
                    />
                  </Col>
                );
              })}
            </Row>
          </Col>
          <Col xs={12} md={6} lg={6}>
            <MapContainer />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SearchedUsersList;
