import HeroSection from "../components/hero-section";
import CustomCard from "../components/card";
import Agent1 from "../public/static/images/agent1.png";
import Agent2 from "../public/static/images/agent2.png";
import Agent3 from "../public/static/images/agent3.png";
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
import { Col, Row } from "react-bootstrap";
import CityCard from "../components/city-card";
import AppFooter from "../components/footer";
import Head from "next/head";
import AppNavbar from "../components/navbar";

const agents: Array<ICard> = [
  {
    title: "Amanda Cassel Subatis",
    image: Agent1,
    description: "1.2k followers · 764 listings",
    subDescription: "Los Angeles, CA",
  },
  {
    title: "Virginia Sosa",
    image: Agent2,
    description: "1.2k followers · 764 listings",
    subDescription: "Los Angeles, CA",
  },
  {
    title: "Kerry Ann Sullivan",
    image: Agent3,
    description: "1.2k followers · 764 listings",
    subDescription: "Los Angeles, CA",
  },
  {
    title: "Amanda Cassel Subatis",
    image: Agent1,
    description: "1.2k followers · 764 listings",
    subDescription: "Los Angeles, CA",
  },
  {
    title: "Virginia Sosa",
    image: Agent2,
    description: "1.2k followers · 764 listings",
    subDescription: "Los Angeles, CA",
  },
  {
    title: "Kerry Ann Sullivan",
    image: Agent3,
    description: "1.2k followers · 764 listings",
    subDescription: "Los Angeles, CA",
  },
];

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
  return (
    <>
      <AppNavbar />

      <HeroSection />

      {/* Trending Agents Section */}

      <div
        className={
          styles["heading-title"] +
          " d-flex justify-content-between align-items-center pt-5 mt-3"
        }
      >
        <h1 className={styles["heading"]}>Trending Agents</h1>
        <a className={styles["link"]}>View all 187 {">"} </a>
      </div>

      <Row className="my-5" style={{ maxWidth: "95%", margin: "auto" }}>
        {agents.map((item: ICard, index: number) => {
          return (
            <Col xs={12} md={2} key={index}>
              <CustomCard
                image={item.image}
                title={item.title}
                subDescription={item.subDescription}
                description={item.description}
                width={320}
                height={251}
              />
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
        <a className={styles["link"]}>View all 187 {">"} </a>
      </div>

      <Row className="my-5" style={{ maxWidth: "95%", margin: "auto" }}>
        {agents.map((item: ICard, index: number) => {
          return (
            <Col xs={12} md={2} key={index}>
              <CustomCard
                image={item.image}
                title={item.title}
                subDescription={item.subDescription}
                description={item.description}
                width={320}
                height={251}
              />
            </Col>
          );
        })}
      </Row>

      {/* Trending Properties Section */}

      <div
        className={
          styles["heading-title"] +
          " d-flex justify-content-between align-items-center"
        }
      >
        <h1 className={styles["heading"]}>Trending Properties</h1>
        <a className={styles["link"]}>View all 1,000+ {">"} </a>
      </div>

      <Row className="my-5" style={{ maxWidth: "95%", margin: "auto" }}>
        {properties.map((item: ICard, index: number) => {
          return (
            <Col xs={12} md={2} key={index}>
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

      <Row className="my-5" style={{ maxWidth: "95%", margin: "auto" }}>
        {properties.map((item: ICard, index: number) => {
          return (
            <Col xs={12} md={2} key={index}>
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

      <div
        className="my-5 d-flex justify-content-between flex-column flex-md-row flex-lg-row flex-xl-row"
        style={{ maxWidth: "95%", margin: "auto" }}
      >
        <div style={{ maxWidth: "100%" }}>
          <CityCard
            image={City1}
            title={"Atlanta"}
            description={"134 homes · 12 agents"}
            width={550}
            height={545}
          />
        </div>

        <div>
          <Row style={{ maxWidth: "100%", margin: "auto" }}>
            {cities.map((item: ICard, index: number) => {
              return (
                <Col xs={12} md={3} key={index}>
                  <CityCard
                    image={item.image}
                    title={item.title}
                    description={item.description}
                    width={299}
                    height={242}
                  />
                </Col>
              );
            })}
          </Row>
          <Row className="my-5" style={{ maxWidth: "100%", margin: "auto" }}>
            {cities.map((item: ICard, index: number) => {
              return (
                <Col xs={12} md={3} key={index}>
                  <CityCard
                    key={index}
                    image={item.image}
                    title={item.title}
                    description={item.description}
                    width={299}
                    height={242}
                  />
                </Col>
              );
            })}
          </Row>
        </div>
      </div>

      <AppFooter />
    </>
  );
};

export default Home;
