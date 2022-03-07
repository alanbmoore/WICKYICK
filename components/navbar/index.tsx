import { Button, Container, Dropdown, Nav, Navbar } from "react-bootstrap";
import styles from "../../styles/Navbar.module.scss";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import logoImage from "../../public/static/images/logo.png";
import { getUser, isLogin, logout } from "../../services/isLoggedIn";
import UserIcon from "../../public/static/images/userIcon.jpeg";
// @ts-ignore
import Sidebar from "react-sidebar";
import { useEffect, useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { MdOutlineLogout } from "react-icons/md";
import { useSelector } from "react-redux";
import { setUser } from "../../store/userSlice";

const AppNavbar = () => {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const { user } = useSelector((state: any) => state.user);
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    !userData && setUserData(getUser());
  });

  useEffect(() => {
    user && setUserData(user);
  }, [user]);

  const onSetSidebarOpen = (open: boolean) => {
    setSidebarOpen(open);
  };

  return (
    <>
      {/*<Sidebar*/}
      {/*  sidebar={<b>Sidebar content</b>}*/}
      {/*  open={sidebarOpen}*/}
      {/*  onSetOpen={onSetSidebarOpen}*/}
      {/*>*/}
      {/*  Tayyab*/}
      {/*</Sidebar>*/}

      <Navbar className={styles["nav-bar"]} bg="white" expand="lg">
        {/*<button onClick={() => onSetSidebarOpen(true)}>Open sidebar</button>*/}
        <Navbar.Brand
          className={styles["title"]}
          onClick={() => router.push("/")}
        >
          <Image
            src={logoImage}
            width={"30px"}
            height={"30px"}
            alt={"logo image"}
          />
          <p className={"px-2"}>WickYick</p>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 w-100 justify-content-end"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link className={styles["nav-links"]} href="#action1">
              Advertise
            </Nav.Link>
            <Nav.Link
              href="mailto:alanbmoore@wickyick.com?subject=Help: "
              className={styles["nav-links"]}
            >
              Help
            </Nav.Link>
            {!isLogin() ? (
              <>
                <div
                  className={styles["nav-links"] + " " + styles["last-child"]}
                >
                  <Link href={"/login"} passHref>
                    Login
                  </Link>
                </div>

                <Button
                  onClick={() => router.push("/signup")}
                  className={styles["signup-btn"]}
                >
                  Sign Up
                </Button>
              </>
            ) : (
              <>
                {isLogin() && (
                  <div className={styles["user-profile"]}>
                    <li className="nav-item dropdown nav-user">
                      <Dropdown>
                        <Dropdown.Toggle className="" as="span">
                          <span
                            onClick={() => {}}
                            className="nav-link"
                            id="navbarDropdownMenuLink2"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <Image
                              unoptimized={true}
                              className={styles["user-avatar"]}
                              width="40px"
                              height="40px"
                              src={
                                userData && userData.picture
                                  ? userData.picture
                                  : UserIcon
                              }
                              alt=""
                            />
                          </span>
                        </Dropdown.Toggle>

                        <Dropdown.Menu className="dropdown-menu dropdown-menu-right nav-user-dropdown">
                          <Dropdown.Item className="nav-user-info">
                            <h5 className="mb-0 text-white nav-user-name">
                              {userData && userData.first_name}{" "}
                              {userData && userData.last_name}
                            </h5>
                          </Dropdown.Item>
                          {/*<Dropdown.Item>*/}
                          {/*  <a*/}
                          {/*    href="javascript:void(0)"*/}
                          {/*    className="dropdown-item"*/}
                          {/*  >*/}
                          {/*    <FaUserAlt fontSize="17px" />*/}
                          {/*    <span className="px-2"> Account</span>*/}
                          {/*  </a>*/}
                          {/*</Dropdown.Item>*/}
                          <Dropdown.Item>
                            <Link href="/settings">
                              <div className="dropdown-item">
                                <IoIosSettings fontSize="20px" />
                                <span className="px-2">Setting</span>
                              </div>
                            </Link>
                          </Dropdown.Item>
                          <Dropdown.Item>
                            <a
                              href="javascript:void(0)"
                              onClick={logout}
                              className="dropdown-item"
                            >
                              <MdOutlineLogout />
                              <span className="px-2">Logout</span>
                            </a>
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </li>
                  </div>
                )}
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default AppNavbar;
