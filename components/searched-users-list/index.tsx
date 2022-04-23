import styles from "../../styles/SearchResult.module.scss";
import { Form, Row, Col, Container } from "react-bootstrap";
import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import MapContainer from "../Maps/index";
import { hideLoading, showLoading } from "../../store/loadingSlice";
import { UserService } from "../../services/user";
import CustomCard from "../card";
import router from "next/router";
import Select from "react-select";
import { BiSearch } from "react-icons/bi";
import { languages } from "../../utils/languages";

const experienceOptions = [
  { value: "> 5 Years", label: "> 5 Years" },
  { value: "< 5 Years", label: "< 5 Years" },
];

const verifiesOptions = [{ value: "Verified", label: "Verified" }];
const langOptions = languages;
const sortByOptions = [
  { value: "first_name", label: "A to Z" },
  { value: "-first_name", label: "Z to A" },
  { value: "Followers (High to Low)", label: "Followers (High to Low)" },
  { value: "Followers (Low to High)", label: "Followers (Low to High)" },
];

const SearchedUsersList = ({ keyword, viewAll }: any) => {
  const dispatch = useDispatch();
  const [userList, setUserList] = useState([]);
  const [searchedText, setSearchedText] = useState<string>("");
  const [orderBy, setOrderBy] = useState<string>("");
  const [count, setCount] = useState([]);
  const [language, setLanguage] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [marker, setMarkers] = useState([]);

  const getUsers = useCallback(
    (text: any) => {
      if (text && text.length > 0) {
        dispatch(showLoading());
        let isVerify = isVerified ? "True" : "False";
        getList({
          keyword: text,
          language: language,
          ordering: orderBy,
          is_verified: isVerify,
        });
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
        let arr: any = [];
        response.results.forEach((item: any, index: number) => {
          if (item.address) {
            arr.push({
              id: index,
              latitude: item.address.latitude,
              longitude: item.address.longitude,
              shelter: "marker " + index,
            });
          }
        });
        if (arr.length === 0) {
          arr.push(undefined);
        }
        setMarkers(arr);
      })
      .catch((error: any) => {
        setTimeout(() => {
          dispatch(hideLoading());
        }, 1000);
      });
  };

  useEffect(() => {
    if (keyword?.length > 0 && userList.length === 0) {
      getUsers(keyword);
      setSearchedText(keyword);
    }
  }, [getUsers, keyword]);

  useEffect(() => {
    if (keyword?.length == 0 && Boolean(viewAll)) {
      dispatch(showLoading());
      getList({});
    }
  }, [getUsers, keyword]);

  const sortHandler = (e: any) => {
    dispatch(showLoading());
    setOrderBy(e.value);
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
                placeholder="City, State, Agent Name, Company, #"
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
            {userList.length > 0 ? (
              <div className="d-flex justify-content-between">
                <p className={styles["total-search"]}>
                  Showing {userList.length} results
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
            ) : (
              <div className={styles["no-result"]}>No result found</div>
            )}
            <Row
              style={{
                maxHeight: "70vh",
                height: "70vh",
                overflow: "auto",
              }}
            >
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
                      isVerified={item.is_verified}
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
                value={
                  isVerified && {
                    value: "Verified",
                    label: "Verified",
                  }
                }
                onChange={(e: any) => {
                  if (!isVerified) {
                    setIsVerified(true);
                    dispatch(showLoading());
                    getList({
                      keyword: searchedText,
                      ordering: orderBy,
                      language: language,
                      is_verified: "True",
                    });
                  } else {
                    setIsVerified(false);
                    getList({
                      keyword: searchedText,
                      ordering: orderBy,
                      language: language,
                      is_verified: "False",
                    });
                  }
                }}
              />
            </div>
            <div className={styles["map-btn-3"] + " position-absolute"}>
              <Select
                isSearchable={true}
                isClearable={true}
                placeholder={"Language"}
                classNamePrefix={"map-filter-btn"}
                options={langOptions}
                onChange={(e: any) => {
                  if (e?.value) {
                    setLanguage(e.value);
                    dispatch(showLoading());
                    getList({
                      keyword: searchedText,
                      ordering: orderBy,
                      language: e.value,
                    });
                  } else {
                    getList({
                      keyword: searchedText,
                      ordering: orderBy,
                      language: "",
                      is_verified: "False",
                    });
                  }
                }}
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
