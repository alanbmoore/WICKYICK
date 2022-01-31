import { Button, Container, Nav, Navbar } from "react-bootstrap";
import styles from "../../styles/Navbar.module.scss";
import { useRouter } from "next/router";
import Link from "next/link";

const AppNavbar = () => {
  const router = useRouter();

  return (
    <>
      <Navbar className={styles["nav-bar"]} bg="white" expand="lg">
        <Container fluid>
          <Navbar.Brand className={styles["title"]} href="#">
            <Link href={"/"} passHref>
              WickYick
            </Link>
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
              <Nav.Link className={styles["nav-links"]} href="#action2">
                Help
              </Nav.Link>
              <Nav.Link
                className={styles["nav-links"] + " " + styles["last-child"]}
                href="#"
              >
                <Link href={"/login"} passHref>
                  Login
                </Link>
              </Nav.Link>
              <Button
                onClick={() => router.push("/signup")}
                className={styles["signup-btn"]}
              >
                Sign up
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default AppNavbar;
