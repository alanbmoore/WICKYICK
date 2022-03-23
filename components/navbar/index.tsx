import {
  Button,
  Container,
  Dropdown,
  Form,
  Nav,
  Navbar,
} from "react-bootstrap";
import styles from "../../styles/Navbar.module.scss";
import router, { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import logoImage from "../../public/static/images/logo.png";
import { getUser, isLogin, logout } from "../../services/isLoggedIn";
import UserIcon from "../../public/static/images/userIcon.jpeg";
// @ts-ignore
import Sidebar from "react-sidebar";
import { useCallback, useEffect, useState } from "react";
import { IoIosSettings } from "react-icons/io";
import { BiSearch } from "react-icons/bi";
import { MdOutlineLogout } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { UserService } from "../../services/user";
// @ts-ignore
import _ from "lodash";
import { hideLoading, showLoading } from "../../store/loadingSlice";

const AppNavbar = () => {
  const dispatch = useDispatch();
  const [userList, setUserList] = useState([]);
  const [searchedText, setSearchedText] = useState<string>("");
  const router = useRouter();
  // const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const { user } = useSelector((state: any) => state.user);
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    !userData && setUserData(getUser());
  }, [userData, setUserData]);

  useEffect(() => {
    user && setUserData(user);
  }, [setUserData, user]);

  // const onSetSidebarOpen = (open: boolean) => {
  //   setSidebarOpen(open);
  // };

  const getUsers = useCallback(
    _.debounce((text: any) => {
      if (text && text.length > 0) {
        dispatch(showLoading());
        UserService.getUserList({ keyword: text })
          .then((response: any) => {
            setUserList(response.results);
            dispatch(hideLoading());
          })
          .catch((error: any) => {
            dispatch(hideLoading());
            setTimeout(() => {}, 1000);
          });
      } else {
        setUserList([]);
      }
    }, 400),
    [dispatch]
  );

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
          <div className="position-relative">
            {/*<Button*/}
            {/*  type="submit"*/}
            {/*  className={styles["search-btn"] + " position-absolute"}*/}
            {/*>*/}
            {/*  Search*/}
            {/*</Button>*/}
            <BiSearch
              className={styles["search-icon"] + " position-absolute"}
            />
            <Form.Control
              onChange={(e) => {
                setSearchedText(e.target.value);
                getUsers(e.target.value);
              }}
              value={searchedText}
              className={styles["search-input"] + " py-3"}
              type="text"
              placeholder="Search..."
            />
            {userList.length > 0 && (
              <div className={styles["search-result"]}>
                {userList.map((item: any, index: number) => {
                  return (
                    <div
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        router.push("/agent-profile/" + item.pk);
                        setUserList([]);
                        setSearchedText("");
                      }}
                      className={styles["search-obj"]}
                      key={index}
                    >
                      {item.first_name} {item.last_name}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
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
                            <Link passHref href="/settings">
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
