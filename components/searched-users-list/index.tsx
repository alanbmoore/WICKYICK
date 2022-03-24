import styles from "../../styles/SearchResult.module.scss";
import {
  Form,
  Button,
  Row,
  Col,
  Container,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import MapContainer from "../Maps/index";
import { hideLoading, showLoading } from "../../store/loadingSlice";
import { UserService } from "../../services/user";
import CustomCard from "../card";
import router from "next/router";
import Select from "react-select";
import { BiSearch } from "react-icons/bi";

const experienceOptions = [
  { value: "> 5 Years", label: "> 5 Years" },
  { value: "< 5 Years", label: "< 5 Years" },
];

const verifiesOptions = [{ value: "Verified", label: "Verified" }];
const langOptions = [{ value: "English", label: "English" }];
const sortByOptions = [
  { value: "first_name", label: "A to Z" },
  { value: "-first_name", label: "Z to A" },
  { value: "Followers (High to Low)", label: "Followers (High to Low)" },
  { value: "Followers (Low to High)", label: "Followers (Low to High)" },
];

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
        getList({ keyword: text });
      }
    },
    [dispatch]
  );

  const getList = (params: any) => {
    UserService.getUserList(params)
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
        setMarkers(arr);
      })
      .catch((error: any) => {
        setTimeout(() => {
          dispatch(hideLoading());
        }, 1000);
      });
  };

  useEffect(() => {
    if (Object.keys(keyword).length > 0 && userList.length === 0) {
      getUsers(keyword.keyword);
      setSearchedText(keyword.keyword);
    }
  }, [getUsers, keyword, userList.length]);

  const sortHandler = (e: any) => {
    dispatch(showLoading());
    getList({ keyword: searchedText, ordering: e.value });
  };

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
              <BiSearch
                className={styles["search-icon"] + " position-absolute"}
              />
              <Form.Control
                onChange={(e) => setSearchedText(e.target.value)}
                value={searchedText}
                className={styles["search-input"] + " py-3"}
                type="text"
                placeholder="City, State, Agent Name, Brokerage, #"
              />

              {/*<Button*/}
              {/*  type="submit"*/}
              {/*  className={styles["search-btn"] + " position-absolute"}*/}
              {/*>*/}
              {/*  Search*/}
              {/*</Button>*/}
            </div>
          </Form>
        </div>

        <Row className="mt-4">
          <Col xs={12} md={6} lg={6}>
            {userList.length > 0 && (
              <div className="d-flex justify-content-between">
                <p className={styles["total-search"]}>
                  Showing {userList.length} results{" "}
                </p>

                <Select
                  isSearchable={false}
                  isClearable={false}
                  placeholder={"Sort by"}
                  classNamePrefix={"map-sort-by-btn"}
                  options={sortByOptions}
                  onChange={sortHandler}
                />
              </div>
            )}
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
          <Col xs={12} md={6} lg={6} className={"position-relative"}>
            <div className={styles["map-btn-1"] + " position-absolute"}>
              <Select
                isSearchable={false}
                isClearable={false}
                placeholder={"Experience"}
                classNamePrefix={"map-filter-btn"}
                options={experienceOptions}
              />
            </div>
            <div className={styles["map-btn-2"] + " position-absolute"}>
              <Select
                isSearchable={false}
                isClearable={false}
                placeholder={"Verified"}
                classNamePrefix={"map-filter-btn"}
                options={verifiesOptions}
              />
            </div>
            <div className={styles["map-btn-3"] + " position-absolute"}>
              <Select
                isSearchable={false}
                isClearable={false}
                placeholder={"Language"}
                classNamePrefix={"map-filter-btn"}
                options={langOptions}
              />
            </div>
            <MapContainer marker={marker} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SearchedUsersList;
