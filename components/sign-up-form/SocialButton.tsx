import React from "react";
import SocialLogin from "react-social-login";
import styles from "../../styles/SignUp.module.scss";
import { Button } from "react-bootstrap";
import Image from "next/image";

class SocialButton extends React.Component {
  render() {
    // @ts-ignore
    const { children, triggerLogin, icon, ...props }: any = this.props;

    return (
      <Button
        className={styles["social-btn"] + " mb-2"}
        onClick={triggerLogin}
        {...props}
      >
        <Image src={icon} width={"33px"} height={"33px"} alt={"social icon"} />
        <p> {children}</p>
      </Button>
    );
  }
}

export default SocialLogin(SocialButton);
