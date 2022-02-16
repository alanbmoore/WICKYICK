import Image from "next/image";
import styles from "../../../../styles/Profile.module.scss";
import Person from "../../../../public/static/images/person.svg";
import { useState } from "react";

interface IProfileTopSection {
  changeLicense?: any;
  stepNo: number;
}

const ProfileTopSection = ({ changeLicense, stepNo }: IProfileTopSection) => {
  // const [picture, setPicture] = useState(null);
  const [imgData, setImgData] = useState(Person);

  const onChangePicture = (e: any) => {
    if (e.target.files[0]) {
      // setPicture(e.target.files[0]);
      const reader: any = new FileReader();
      reader.addEventListener("load", () => {
        setImgData(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <>
      <div className={styles["profile-top-section"] + " px-3"}>
        <Image
          src={imgData}
          width={"95px"}
          height={"95px"}
          alt={"profile picture"}
        />
        <div className={styles["user-info"]}>
          <p className={styles["user-name"]}>Amanda Cassel · 89482748</p>
          <p className={styles["user-email"]}>
            amandacassel@propertydomain.com
          </p>
        </div>
      </div>
      <div>
        {stepNo === 0 ? (
          <p className={styles["helper-text"]}>
            Not you?{" "}
            <span
              onClick={() => {
                changeLicense && changeLicense();
              }}
            >
              Change license number
            </span>
          </p>
        ) : (
          <div>
            <p className={styles["helper-text"]}>
              <label htmlFor="uploadImage">Upload Photo</label>
              <input
                accept="image/png, image/jpeg"
                type="file"
                className="form-control-file d-none"
                id="uploadImage"
                onChange={onChangePicture}
              />
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default ProfileTopSection;
