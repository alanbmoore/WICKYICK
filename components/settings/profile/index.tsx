import styles from "../../../styles/Profile.module.scss";
import { Button, Form } from "react-bootstrap";

const Profile = ({ goToNextStep }: any) => {
  return (
    <>
      <Form className={styles["profile"]}>
        <Form.Label className={styles["profile-input-label"] + " mt-2"}>
          Location
        </Form.Label>
        <Form.Select
          className={styles["profile-input"]}
          aria-label="Select your location"
        >
          <option>Select your location</option>
          <option value="1">USA</option>
          <option value="2">CA</option>
          <option value="3">AUS</option>
        </Form.Select>

        <Form.Label className={styles["profile-input-label"] + " mt-4"}>
          Bio
        </Form.Label>
        <Form.Control
          as="textarea"
          rows={4}
          className={styles["profile-input"] + " resize-none"}
          type="text"
          placeholder="Describe yourself..."
        />

        <Form.Label className={styles["profile-input-label"] + " mt-4"}>
          Username
        </Form.Label>
        <Form.Control
          className={styles["profile-input"]}
          type="text"
          placeholder="@username"
        />

        <p className={styles["helper-text"] + " border-0 p-0"}>
          This is how you will be found in the platform. You’ll be found by your
          full name and email as well.
        </p>

        <Button
          className={styles["submit-btn"] + " mb-3"}
          onClick={(e) => {
            e.preventDefault();
            goToNextStep(2);
          }}
        >
          Continue
        </Button>
      </Form>
    </>
  );
};

export default Profile;
