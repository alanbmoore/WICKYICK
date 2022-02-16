import styles from "../../../styles/Settings.module.scss";
import { useEffect, useState } from "react";

const navLinks = [
  {
    name: "License Verification",
    link: "/license",
  },
  {
    name: "Create Profile",
    link: "/profile",
  },
  {
    name: "Connect Social Media",
    link: "/social",
  },
];

const SideNav = ({ currentStep, goToNextStep }: any) => {
  const [activeLink, setActiveLink] = useState<number>(0);

  useEffect(() => {
    setActiveLink(currentStep);
  }, [currentStep]);

  const navChangeHandler = (activeItemIndex: number) => {
    goToNextStep(activeItemIndex);
    setActiveLink(activeItemIndex);
  };

  return (
    <>
      {navLinks.map((item: any, index: number) => {
        return (
          <div
            key={index}
            className={styles["setting-side-nav"]}
            onClick={() => {
              navChangeHandler(index);
            }}
          >
            <p
              className={styles["nav-text"].concat(
                index === activeLink
                  ? " " + styles["active-link"]
                  : activeLink > index
                  ? " " + styles["completed"]
                  : ""
              )}
            >
              {item.name}
            </p>
          </div>
        );
      })}
    </>
  );
};

export default SideNav;
