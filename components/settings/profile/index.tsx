import styles from "../../../styles/Profile.module.scss";
import { Button, Form } from "react-bootstrap";
import Creatable from "react-select/creatable";
import { useEffect, useState } from "react";
import { USACities } from "../../../utils/usCities";
import { createFilter } from "react-select";
import Image from "next/image";
import Person from "../../../public/static/images/person.svg";
import { UserService } from "../../../services/user";
import { toast } from "react-toastify";

const Profile = ({ goToNextStep }: any) => {
  const [cityList, setCityList] = useState([]);
  const [img, setImage] = useState(Person);
  const [selectedFile, setSelectedFile] = useState();
  const [user, setUser] = useState<any>(null);
  const [phone, setPhone] = useState({
    isInvalid: false,
    value: "",
    err: "",
  });

  const [company, setCompany] = useState({
    isInvalid: false,
    value: "",
    err: "",
  });

  const [jobTitle, setJobTitle] = useState({
    isInvalid: false,
    value: "",
    err: "",
  });

  const [bio, setBio] = useState({
    isInvalid: false,
    value: "",
    err: "",
  });

  const [username, setUsername] = useState({
    isInvalid: false,
    value: "",
    err: "",
  });

  const [location, setLocation] = useState({
    isInvalid: false,
    label: "",
    value: "",
    err: "",
  });

  useEffect(() => {
    if (cityList.length === 0) {
      let arr: any = [];
      USACities.forEach((item: any) => {
        arr.push({
          label: item.name,
          value: item.name,
        });
      });
      setCityList(arr);
    }
  }, [cityList]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "");
    setUserData(user);
    setUser(user);
  }, []);

  const setUserData = (user: any) => {
    setCompany({ isInvalid: false, value: user?.company, err: "" });
    setLocation({
      isInvalid: false,
      value: user?.location,
      label: user?.location,
      err: "",
    });
    setImage(user?.picture ? user.picture : Person);
    setPhone({ isInvalid: false, value: user?.phone_number, err: "" });
    user?.job_title != "null" &&
      setJobTitle({ isInvalid: false, value: user?.job_title, err: "" });
    user?.bio != "null" &&
      setBio({ isInvalid: false, value: user?.bio, err: "" });
    user?.site_username != "null" &&
      setUsername({ isInvalid: false, value: user?.site_username, err: "" });
  };

  const onChangePicture = (e: any) => {
    if (e.target.files[0]) {
      // setPicture(e.target.files[0]);
      const reader: any = new FileReader();
      reader.addEventListener("load", () => {
        setImage(reader.result);
      });
      setSelectedFile(e.target.files[0]);
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handlePhone = (e: React.FormEvent<any>) => {
    setPhone({ isInvalid: false, value: e.currentTarget.value, err: "" });
  };

  const handleCompany = (e: React.FormEvent<any>) => {
    setCompany({ isInvalid: false, value: e.currentTarget.value, err: "" });
  };

  const handleTitle = (e: React.FormEvent<any>) => {
    setJobTitle({ isInvalid: false, value: e.currentTarget.value, err: "" });
  };

  const handleBio = (e: React.FormEvent<any>) => {
    setBio({ isInvalid: false, value: e.currentTarget.value, err: "" });
  };

  const handleUsername = (e: React.FormEvent<any>) => {
    setUsername({ isInvalid: false, value: e.currentTarget.value, err: "" });
  };

  const validate = () => {
    let isValidFlag = true;

    if (location.value === "") {
      let err = "Location is required !";
      setLocation({
        isInvalid: true,
        value: location.value,
        label: location.value,
        err: err,
      });
      isValidFlag = false;
    }

    if (company.value === "") {
      let err = "Company title is required !";
      setCompany({ isInvalid: true, value: company.value, err: err });
      isValidFlag = false;
    }

    if (phone.value === "") {
      let err = "Phone number title is required !";
      setPhone({ isInvalid: true, value: phone.value, err: err });
      isValidFlag = false;
    }

    // if (jobTitle.value === "") {
    //   let err = "Job title is required !";
    //   setJobTitle({ isInvalid: true, value: jobTitle.value, err: err });
    //   isValidFlag = false;
    // }

    // if (bio.value === "") {
    //   let err = "Bio is required !";
    //   setBio({ isInvalid: true, value: bio.value, err: err });
    //   isValidFlag = false;
    // }
    //
    // if (username.value === "") {
    //   let err = "Username is required !";
    //   setUsername({ isInvalid: true, value: username.value, err: err });
    //   isValidFlag = false;
    // }

    return isValidFlag;
  };

  const handleSubmission = () => {
    const formData: any = new FormData();

    if (validate()) {
      selectedFile && formData.append("picture", selectedFile);
      formData.append("location", location.value);
      formData.append("company", company.value);
      formData.append("phone_number", phone.value);
      formData.append("bio", bio.value);
      formData.append("job_title", jobTitle.value);
      formData.append("site_username", username.value);

      UserService.updateProfile(formData)
        .then((data: any) => {
          localStorage.setItem("user", JSON.stringify(data));
          toast.success(data.message, {
            position: toast.POSITION.TOP_RIGHT,
          });
          goToNextStep(1);
        })
        .catch((error: any) => {});
      // goToNextStep(2);
    }

    //   fetch(
    //       'https://freeimage.host/api/1/upload?key=<YOUR_API_KEY>',
    //       {
    //         method: 'POST',
    //         body: formData,
    //       }
    //   )
    //       .then((response) => response.json())
    //       .then((result) => {
    //         console.log('Success:', result);
    //       })
    //       .catch((error) => {
    //         console.error('Error:', error);
    //       });
    // };
  };

  return (
    <>
      <div className={styles["profile-top-section"] + " px-3"}>
        <Image
          className={styles["profile-pic"]}
          src={img}
          width={"95px"}
          height={"95px"}
          alt={"profile picture"}
        />
        <div className={styles["user-info"]}>
          <p className={styles["user-name"]}>
            {user?.first_name} {user?.last_name} · {user?.license_number}
          </p>
          <p className={styles["user-email"]}>{user?.email}</p>
        </div>
      </div>
      <div>
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
      </div>
      <Form className={styles["profile"]}>
        <Form.Label className={styles["profile-input-label"] + " mt-2"}>
          Location
        </Form.Label>

        <Creatable
          placeholder={"Select your location"}
          theme={(theme) => ({
            ...theme,
            borderRadius: 7,
            opacity: "0.25%",
            spacing: {
              ...theme.spacing,
              controlHeight: 44,
            },
            colors: {
              ...theme.colors,
              primary: "#0d6efd40",
            },
          })}
          styles={{
            control: (provided: any, state: any) => ({
              ...provided,
              border: "1px solid #888C94",
            }),
          }}
          value={
            location.value && { value: location.value, label: location.value }
          }
          options={cityList}
          isClearable={true}
          filterOption={createFilter({ ignoreCase: true })}
          onChange={(opt: any) =>
            setLocation({
              isInvalid: false,
              value: opt.value,
              label: opt.value,
              err: "",
            })
          }
        />

        {location.isInvalid && (
          <div style={{ color: "red", fontSize: "12px", marginTop: "5px" }}>
            {location.err}
          </div>
        )}

        <Form.Label className={styles["profile-input-label"] + " mt-4"}>
          Phone#
        </Form.Label>
        <Form.Control
          value={phone.value}
          onChange={handlePhone}
          className={styles["profile-input"]}
          type="text"
          placeholder="Phone number"
        />
        {phone.isInvalid && (
          <div style={{ color: "red", fontSize: "12px", marginTop: "5px" }}>
            {phone.err}
          </div>
        )}

        <Form.Label className={styles["profile-input-label"] + " mt-4"}>
          Company
        </Form.Label>
        <Form.Control
          value={company.value}
          onChange={handleCompany}
          className={styles["profile-input"]}
          type="text"
          placeholder="Company"
        />

        {company.isInvalid && (
          <div style={{ color: "red", fontSize: "12px", marginTop: "5px" }}>
            {company.err}
          </div>
        )}

        <Form.Label className={styles["profile-input-label"] + " mt-4"}>
          Job Title (Optional)
        </Form.Label>
        <Form.Control
          value={jobTitle.value}
          onChange={handleTitle}
          className={styles["profile-input"]}
          type="text"
          placeholder="Job title"
        />

        {jobTitle.isInvalid && (
          <div style={{ color: "red", fontSize: "12px", marginTop: "5px" }}>
            {jobTitle.err}
          </div>
        )}

        <Form.Label className={styles["profile-input-label"] + " mt-4"}>
          Bio (Optional)
        </Form.Label>
        <Form.Control
          value={bio.value}
          onChange={handleBio}
          as="textarea"
          rows={4}
          className={styles["profile-input"] + " resize-none"}
          type="text"
          placeholder="Describe yourself..."
        />

        {bio.isInvalid && (
          <div style={{ color: "red", fontSize: "12px", marginTop: "5px" }}>
            {bio.err}
          </div>
        )}

        <Form.Label className={styles["profile-input-label"] + " mt-4"}>
          Username (Optional)
        </Form.Label>
        <Form.Control
          value={username.value}
          onChange={handleUsername}
          className={styles["profile-input"]}
          type="text"
          placeholder="@username"
        />

        {username.isInvalid && (
          <div style={{ color: "red", fontSize: "12px", marginTop: "5px" }}>
            {username.err}
          </div>
        )}

        <p className={styles["helper-text"] + " border-0 p-0"}>
          This is how you can be found in the platform. You’ll be found by your
          name and email as well.
        </p>

        <Button
          className={styles["submit-btn"] + " mb-3"}
          onClick={handleSubmission}
        >
          Continue
        </Button>
      </Form>
    </>
  );
};

export default Profile;
