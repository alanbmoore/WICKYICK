import HeroSection from "../components/hero-section";
import CustomCard from "../components/card";
import Property1 from "../public/static/images/property1.png";
import Property2 from "../public/static/images/property2.png";
import Property3 from "../public/static/images/property3.png";
import City1 from "../public/static/images/city1.png";
import City2 from "../public/static/images/city2.png";
import City3 from "../public/static/images/city3.png";
import City4 from "../public/static/images/city4.png";
import City5 from "../public/static/images/city5.png";
import { ICard } from "../interfaces/card";
import styles from "../styles/Home.module.css";
import { Col, Container, Row } from "react-bootstrap";
import CityCard from "../components/city-card";
import AppFooter from "../components/footer";
import { useEffect, useState } from "react";
import { UserService } from "../services/user";
import { useDispatch } from "react-redux";
import { hideLoading, showLoading } from "../store/loadingSlice";
import router from "next/router";

const properties: Array<ICard> = [
  {
    title: "$600,000",
    image: Property1,
    description: "2 Beds · 2 baths · 772 sqf",
    subDescription: "4004 Colcord Ave, Waco, TX 76707",
  },
  {
    title: "$600,000",
    image: Property2,
    description: "2 Beds · 2 baths · 772 sqf",
    subDescription: "4004 Colcord Ave, Waco, TX 76707",
  },
  {
    title: "$600,000",
    image: Property3,
    description: "2 Beds · 2 baths · 772 sqf",
    subDescription: "4004 Colcord Ave, Waco, TX 76707",
  },
  {
    title: "$600,000",
    image: Property1,
    description: "2 Beds · 2 baths · 772 sqf",
    subDescription: "4004 Colcord Ave, Waco, TX 76707",
  },
  {
    title: "$600,000",
    image: Property2,
    description: "2 Beds · 2 baths · 772 sqf",
    subDescription: "4004 Colcord Ave, Waco, TX 76707",
  },
  {
    title: "$600,000",
    image: Property3,
    description: "2 Beds · 2 baths · 772 sqf",
    subDescription: "4004 Colcord Ave, Waco, TX 76707",
  },
];

const cities: Array<ICard> = [
  {
    title: "Los Angeles",
    image: City2,
    description: "134 homes · 12 agents",
  },
  {
    title: "Pasadena",
    image: City3,
    description: "134 homes · 12 agents",
  },
  {
    title: "New York",
    image: City4,
    description: "134 homes · 12 agents",
  },
  {
    title: "Texas",
    image: City5,
    description: "134 homes · 12 agents",
  },
];

const Home = () => {
  const dispatch = useDispatch();
  const [userList, setUserList] = useState([]);
  const [count, setCount] = useState([]);

  useEffect(() => {
    if (userList.length === 0) {
      dispatch(showLoading());
      UserService.getUserList({ offset: 0, limit: 6 })
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
  }, [dispatch, userList]);

  return (
    <>
      <HeroSection />
      <Container>
        {/* Trending Agents Section */}
        <div
          className={
            styles["heading-title"] +
            " d-flex justify-content-between align-items-center pt-2 mt-3"
          }
        >
          <h1 className={styles["heading"]}>Trending Agents</h1>
          <a className={styles["link"]}>
            View all {count} {">"}{" "}
          </a>
        </div>

        <Row className="my-3">
          {userList.map((item: any, index: number) => {
            return (
              <Col xs={12} md={4} lg={2} key={index}>
                <div
                  onClick={() => {
                    router.push("/agent-profile/" + item.pk);
                  }}
                >
                  <CustomCard
                    image={item.picture}
                    title={item.first_name + " " + item.last_name}
                    subDescription={item?.location}
                    description={item.company}
                    width={"100%"}
                    height={"160px"}
                  />
                </div>
              </Col>
            );
          })}
        </Row>

        {/* Top Agents Section */}

        <div
          className={
            styles["heading-title"] +
            " d-flex justify-content-between align-items-center"
          }
        >
          <h1 className={styles["heading"]}>Top Agents</h1>
          <a className={styles["link"]}>
            View all {count} {">"}{" "}
          </a>
        </div>

        <Row className="my-3">
          {userList.map((item: any, index: number) => {
            return (
              <Col
                xs={12}
                md={4}
                lg={2}
                key={index}
                onClick={() => {
                  router.push("/agent-profile/" + item.pk);
                }}
              >
                <CustomCard
                  image={item.picture}
                  title={item.first_name + " " + item.last_name}
                  subDescription={item?.location}
                  description={item.company}
                  width={"100%"}
                  height={"160px"}
                />
              </Col>
            );
          })}
        </Row>

        {/*  Featured Agents */}

        <div
          className={
            styles["heading-title"] +
            " d-flex justify-content-between align-items-center"
          }
        >
          <h1 className={styles["heading"]}>Featured Agents</h1>
          <a className={styles["link"]}>
            View all {count} {">"}{" "}
          </a>
        </div>

        <Row className="my-3">
          {userList.map((item: any, index: number) => {
            return (
              <Col
                xs={12}
                md={4}
                lg={2}
                key={index}
                onClick={() => {
                  router.push("/agent-profile/" + item.pk);
                }}
              >
                <CustomCard
                  image={item.picture}
                  title={item.first_name + " " + item.last_name}
                  subDescription={item.location}
                  description={item.company}
                  width={"100%"}
                  height={"160px"}
                />
              </Col>
            );
          })}
        </Row>

        {/* Trending Properties Section */}

        {/*<div*/}
        {/*  className={*/}
        {/*    styles["heading-title"] +*/}
        {/*    " d-flex justify-content-between align-items-center"*/}
        {/*  }*/}
        {/*>*/}
        {/*  <h1 className={styles["heading"]}>Trending Properties</h1>*/}
        {/*  <a className={styles["link"]}>View all 1,000+ {">"} </a>*/}
        {/*</div>*/}

        {/*<Row className="my-3"  >*/}
        {/*  {properties.map((item: ICard, index: number) => {*/}
        {/*    return (*/}
        {/*      <Col xs={12} md={2} key={index}>*/}
        {/*        <CustomCard*/}
        {/*          image={item.image}*/}
        {/*          title={item.title}*/}
        {/*          subDescription={item.subDescription}*/}
        {/*          description={item.description}*/}
        {/*          width={350}*/}
        {/*          height={309}*/}
        {/*        />*/}
        {/*      </Col>*/}
        {/*    );*/}
        {/*  })}*/}
        {/*</Row>*/}

        {/* Top Properties Section */}

        <div
          className={
            styles["heading-title"] +
            " d-flex justify-content-between align-items-center"
          }
        >
          <h1 className={styles["heading"]}>Top Properties</h1>
          <a className={styles["link"]}>View all 1,000+ {">"} </a>
        </div>

        <Row className="my-3">
          {properties.map((item: ICard, index: number) => {
            return (
              <Col xs={12} md={4} lg={2} key={index}>
                <CustomCard
                  image={item.image}
                  title={item.title}
                  subDescription={item.subDescription}
                  description={item.description}
                  width={350}
                  height={309}
                />
              </Col>
            );
          })}
        </Row>

        {/* Cities Section */}

        <div
          className={
            styles["heading-title"] +
            " d-flex justify-content-between align-items-center"
          }
        >
          <h1 className={styles["heading"]}>Top Cities</h1>
          <a className={styles["link"]}>View all {">"} </a>
        </div>

        <div className="my-3">
          <Row className="mx-0" style={{ maxWidth: "100%" }}>
            <Col xs={12} md={12} lg={5} className={"px-0 px-md-2"}>
              <CityCard
                image={City1}
                title={"Atlanta"}
                description={"134 homes · 12 agents"}
                width={550}
                height={515}
              />
            </Col>
            <Col xs={12} md={12} lg={7} className={"px-0 px-md-2"}>
              <Row style={{ maxWidth: "100%", margin: "auto" }}>
                {cities.map((item: ICard, index: number) => {
                  return (
                    <Col
                      className={"px-0 mb-3 px-md-2 mt-3 mt-lg-0"}
                      xs={12}
                      md={6}
                      lg={6}
                      key={index}
                    >
                      <CityCard
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        width={350}
                        height={242}
                      />
                    </Col>
                  );
                })}
              </Row>
            </Col>
          </Row>
        </div>
      </Container>
      <AppFooter />
    </>
  );
};

export default Home;
