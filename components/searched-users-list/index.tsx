import styles from "../../styles/SearchResult.module.scss";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import MapContainer from "../Maps/index";
import { hideLoading, showLoading } from "../../store/loadingSlice";
import { UserService } from "../../services/user";
import CustomCard from "../card";
import router from "next/router";

const SearchedUsersList = ({ keyword }: any) => {
  const dispatch = useDispatch();
  const [userList, setUserList] = useState([]);
  const [searchedText, setSearchedText] = useState<string>("");
  const [count, setCount] = useState([]);
  const [marker, setMarkers] = useState([]);

  const getUsers = useCallback(
    (text: any) => {
      if (text && text.length > 0) {
        dispatch(showLoading());
        UserService.getUserList({ keyword: text })
          .then((response: any) => {
            setTimeout(() => {
              dispatch(hideLoading());
            }, 1000);
            setUserList(response.results);
            setCount(response.count);
            let arr = response.results.map((item: any, index: number) => {
              if (item.address) {
                return {
                  id: 1,
                  latitude: item.address.latitude,
                  longitude: item.address.longitude,
                  shelter: "marker " + index,
                };
              }
            });
            debugger;
            setMarkers(arr);
          })
          .catch((error: any) => {
            setTimeout(() => {
              dispatch(hideLoading());
            }, 1000);
          });
      }
    },
    [dispatch]
  );

  useEffect(() => {
    if (Object.keys(keyword).length > 0 && userList.length === 0) {
      getUsers(keyword.keyword);
      setSearchedText(keyword.keyword);
    }
  }, [getUsers, keyword, userList.length]);

  return (
    <>
      <Container className="mt-5">
        <div className={styles["search-result"]}>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              searchedText && getUsers(searchedText);
            }}
          >
            <div className="position-relative">
              <Form.Control
                onChange={(e) => setSearchedText(e.target.value)}
                value={searchedText}
                className={styles["search-input"] + " py-3"}
                type="text"
                placeholder="City, State, Agent Name, Brokerage, #"
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
        <Row className="mt-4">
          <Col xs={12} md={6} lg={6}>
            <Row>
              {userList.map((item: any, index: number) => {
                return (
                  <Col
                    xs={12}
                    md={5}
                    lg={5}
                    key={index}
                    onClick={() => {
                      router.push("/agent-profile/" + item.pk);
                    }}
                  >
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
            <MapContainer marker={marker} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SearchedUsersList;
