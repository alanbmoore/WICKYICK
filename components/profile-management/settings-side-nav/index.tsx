import styles from "../../../styles/Profile-Settings.module.scss";
import { useEffect, useState } from "react";

const navLinks = [
  {
    name: "Edit Profile",
    link: "/edit-profile",
    disabled: false,
  },
  {
    name: "Account Settings",
    link: "/account-settings",
  },
  {
    name: "Billing",
    link: "/billing",
    disabled: true,
  },
  {
    name: "Social Profiles",
    link: "/social-profiles",
    disabled: false,
  },
  {
    name: "Listings",
    link: "/listings",
    disabled: true,
  },
  {
    name: "Saved Searches",
    link: "/saved-searches",
    disabled: true,
  },
  {
    name: "Notifications",
    link: "/notifications",
    disabled: true,
  },
];

const ProfileSideNav = ({ currentStep, goToNextStep }: any) => {
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
            className={styles["profile-setting-side-nav"].concat(
              item.disabled ? " disabled" : ""
            )}
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

export default ProfileSideNav;
