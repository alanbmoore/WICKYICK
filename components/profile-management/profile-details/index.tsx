import styles from "../../../styles/Profile.module.scss";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { USACities } from "../../../utils/usCities";
import Select, { createFilter } from "react-select";
import Image from "next/image";
import Person from "../../../public/static/images/person.svg";
import { UserService } from "../../../services/user";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { hideLoading, showLoading } from "../../../store/loadingSlice";
import { setUser } from "../../../store/userSlice";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
// @ts-ignore
import TagsInput from "react-tagsinput";
import "react-tagsinput/react-tagsinput.css";
import dynamic from "next/dynamic";
import { languages } from "../../../utils/languages";
import { FcApproval } from "react-icons/fc";
// @ts-ignore
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import Uppy from "@uppy/core";
import { Dashboard } from "@uppy/react";
import ImageEditor from "@uppy/image-editor";

import "@uppy/image-editor/dist/style.css";
import "@uppy/core/dist/style.css";
import "@uppy/dashboard/dist/style.css";
import Webcam from "@uppy/webcam";

const Avatar = dynamic(() => import("react-avatar-edit"), { ssr: false });
const langOptions = languages;

const themeStyle = (theme: any) => ({
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
});

const ProfileDetails = ({ goToNextStep }: any) => {
  let uppy = new Uppy().use(Webcam);

  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [cityList, setCityList] = useState([]);
  const [img, setImg] = useState(Person);
  const [selectedFile, setSelectedFile] = useState<any>();
  const [userInfo, setUserInfo] = useState<any>(null);
  const [tags, setTags] = useState<any>([]);
  const [preview, setPreview] = useState<any>(null);
  const [startDate, setStartDate] = useState(new Date());
  const [date, setDate] = useState({
    isInvalid: false,
    value: new Date(),
    err: "",
  });

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

  const [firstName, setFirstName] = useState({
    isInvalid: false,
    value: "",
    err: "",
  });

  const [lastName, setLastName] = useState({
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

  const [language, setLanguage] = useState({
    isInvalid: false,
    label: "",
    value: "",
    err: "",
  });

  const handleClose = async () => {
    setShow(false);
    setImg(preview);
    const res: Response = await fetch(preview);
    const blob: Blob = await res.blob();
    let file = new File([blob], "test.png", { type: "image/png" });
    setSelectedFile(file);
  };

  const onClose = () => {
    setPreview(null);
  };

  const onCrop = (preview: any) => {
    setPreview(preview);
  };

  useEffect(() => {
    if (cityList.length === 0) {
      let arr: any = [];
      USACities.forEach((name: any) => {
        arr.push({
          label: name,
          value: name,
        });
      });
      setCityList(arr);
    }
  }, [cityList]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "");
    setUserData(user);
    setUserInfo(user);
  }, []);

  const setUserData = (user: any) => {
    setCompany({ isInvalid: false, value: user?.company, err: "" });
    setLocation({
      isInvalid: false,
      value: user?.location,
      label: user?.location,
      err: "",
    });
    setLanguage({
      isInvalid: false,
      value: user?.language,
      label: user?.language,
      err: "",
    });

    if (user.experience) setStartDate(new Date(user.experience));
    setImg(user?.picture ? user.picture : Person);
    user?.tags && setTags(user.tags.split(","));
    setPhone({ isInvalid: false, value: user?.phone_number, err: "" });
    user?.job_title != "null" &&
      setJobTitle({ isInvalid: false, value: user?.job_title, err: "" });
    user?.bio != "null" &&
      setBio({ isInvalid: false, value: user?.bio, err: "" });
    user?.site_username != "null" &&
      setUsername({ isInvalid: false, value: user?.site_username, err: "" });
    user?.first_name != "null" &&
      setFirstName({ isInvalid: false, value: user?.first_name, err: "" });
    user?.last_name != "null" &&
      setLastName({ isInvalid: false, value: user?.last_name, err: "" });
  };

  const formatPhoneNumber = (value: any) => {
    // if input value is falsy eg if the user deletes the input, then just return
    if (!value) return value;

    // clean the input for any non-digit values.
    const phoneNumber = value.replace(/[^\d]/g, "");

    // phoneNumberLength is used to know when to apply our formatting for the phone number
    const phoneNumberLength = phoneNumber.length;

    // we need to return the value with no formatting if its less then four digits
    // this is to avoid weird behavior that occurs if you  format the area code to early

    if (phoneNumberLength < 4) return phoneNumber;

    // if phoneNumberLength is greater than 4 and less the 7 we start to return
    // the formatted number
    if (phoneNumberLength < 7) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    }

    // finally, if the phoneNumberLength is greater then seven, we add the last
    // bit of formatting and return it.
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
      3,
      6
    )}-${phoneNumber.slice(6, 10)}`;
  };

  const handlePhone = (e: React.FormEvent<any>) => {
    const formattedPhoneNumber = formatPhoneNumber(e.currentTarget.value);
    setPhone({
      isInvalid: false,
      value: formattedPhoneNumber,
      err: "",
    });
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
    // if (!location.value) {
    //   let err = "Location is required !";
    //   setLocation({
    //     isInvalid: true,
    //     value: location.value,
    //     label: location.value,
    //     err: err,
    //   });
    //   isValidFlag = false;
    // }

    if (!firstName.value) {
      let err = "First Name is required !";
      setFirstName({ isInvalid: true, value: firstName.value, err: err });
      isValidFlag = false;
    }

    if (!lastName.value) {
      let err = "Last Name is required !";
      setLastName({ isInvalid: true, value: lastName.value, err: err });
      isValidFlag = false;
    }

    if (!startDate) {
      let err = "Date is required !";
      setDate({ isInvalid: true, value: startDate, err: err });
      isValidFlag = false;
    }

    if (!company.value) {
      let err = "Company title is required !";
      setCompany({ isInvalid: true, value: company.value, err: err });
      isValidFlag = false;
    }
    let re = /^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$/;
    if (!phone.value) {
      let err = "Phone number is required !";
      setPhone({ isInvalid: true, value: phone.value, err: err });
      isValidFlag = false;
    } else if (!re.test(phone.value)) {
      let err = "Wrong Phone Format (e.g. (123) 123-1234 )";
      setPhone({ isInvalid: true, value: phone.value, err: err });
      isValidFlag = false;
    }
    return isValidFlag;
  };

  const handleSubmission = () => {
    const formData: any = new FormData();

    if (validate()) {
      selectedFile && formData.append("picture", selectedFile);
      formData.append("location", location.value);
      formData.append("first_name", firstName.value);
      formData.append("last_name", lastName.value);
      formData.append("company", company.value);
      formData.append("phone_number", phone.value);
      formData.append("bio", bio.value);
      formData.append("job_title", jobTitle.value);
      formData.append("site_username", username.value);
      formData.append("experience", moment(startDate).format());
      formData.append("language", language.value);
      formData.append("tags", tags.join(","));
      dispatch(showLoading());
      UserService.updateProfile(formData)
        .then((data: any) => {
          console.log("updateProfile: data", data);
          setTimeout(() => {
            dispatch(hideLoading());
          }, 1000);
          dispatch(setUser(data));
          localStorage.setItem("user", JSON.stringify(data.user));
          toast.success("Profile updated successfully", {
            position: toast.POSITION.TOP_RIGHT,
          });
        })
        .catch((error: any) => {
          setTimeout(() => {
            dispatch(hideLoading());
          }, 1000);
        });
    }
  };

  const locationChangeHandler = (opt: any) => {
    setLocation({
      isInvalid: false,
      value: opt?.value.description,
      label: opt?.value,
      err: "",
    });
  };

  const languageChangeHandler = (opt: any) => {
    setLanguage({
      isInvalid: false,
      value: opt?.value,
      label: opt?.value,
      err: "",
    });
  };

  const handleChange = (tag: any) => {
    setTags(tag);
  };

  const handleNameChange = (e: any) => {
    if (e.target.name === "firstName") {
      setFirstName({ isInvalid: false, value: e.currentTarget.value, err: "" });
    } else if (e.target.name === "lastName") {
      setLastName({ isInvalid: false, value: e.currentTarget.value, err: "" });
    }
  };

  const dateChangeHandler = (date: Date) => {
    setDate({ isInvalid: false, value: date, err: "" });
    setStartDate(date);
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
            {userInfo?.first_name} {userInfo?.last_name}
            {userInfo?.is_verified && (
              <FcApproval className="approve-icon mx-2" />
            )}{" "}
            · {userInfo?.license_number}
          </p>
          <p className={styles["user-email"]}>{userInfo?.email}</p>
        </div>
      </div>
      <div>
        <div>
          {/*<Dashboard id="Dashboard" uppy={uppy} plugins={["Webcam"]} />*/}

          <p className={styles["helper-text"]}>
            <p
              onClick={() => {
                setShow(true);
              }}
            >
              Upload Photo
            </p>
          </p>

          <Modal show={show} onHide={handleClose}>
            <Modal.Body>
              <Avatar
                width={468}
                height={295}
                onCrop={onCrop}
                onClose={onClose}
                onFileLoad={(obj: any) => {
                  setShow(true);
                }}
                exportAsSquare={false}
              />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button
                disabled={!preview}
                className={styles["modal-save"]}
                onClick={handleClose}
              >
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
      <Form className={styles["profile"]}>
        <Row>
          <Col xs={12} md={6} lg={6}>
            <Form.Label className={styles["profile-input-label"] + " mt-4"}>
              First Name
            </Form.Label>
            <Form.Control
              value={firstName.value}
              name={"firstName"}
              onChange={handleNameChange}
              className={styles["profile-input"]}
              type="text"
              placeholder="First Name"
            />

            {firstName.isInvalid && (
              <div style={{ color: "red", fontSize: "12px", marginTop: "5px" }}>
                {firstName.err}
              </div>
            )}
          </Col>
          <Col xs={12} md={6} lg={6}>
            <Form.Label className={styles["profile-input-label"] + " mt-4"}>
              Last Name
            </Form.Label>
            <Form.Control
              value={lastName.value}
              name={"lastName"}
              onChange={handleNameChange}
              className={styles["profile-input"]}
              type="text"
              placeholder="Last Name"
            />

            {lastName.isInvalid && (
              <div style={{ color: "red", fontSize: "12px", marginTop: "5px" }}>
                {lastName.err}
              </div>
            )}
          </Col>
        </Row>

        <Form.Label
          style={{ fontSize: "16px" }}
          className={styles["profile-input-label"] + " mt-2"}
        >
          Personalize Your Profile With Tags (ex: #veteran #ALC #CRS #tulanealum
          #gardendistrict)
        </Form.Label>
        <TagsInput
          className={styles["profile-input-label"] + " form-control"}
          value={tags}
          onChange={handleChange}
        />

        <Form.Label className={styles["profile-input-label"] + " mt-2"}>
          Location
        </Form.Label>

        <GooglePlacesAutocomplete
          selectProps={{
            isClearable: true,
            placeholder: "Select your location",
            styles: {
              control: (provided: any, state: any) => ({
                ...provided,
                border: "1px solid #888C94",
              }),
            },
            filterOption: createFilter({ ignoreCase: true }),
            theme: themeStyle,
            value: location.value && {
              value: location.value,
              label: location.value,
            },
            onChange: locationChangeHandler,
          }}
          autocompletionRequest={{
            componentRestrictions: {
              country: ["us"],
            },
            types: ["(regions)"],
          }}
          debounce={300}
          apiKey={process.env.REACT_APP_GOOGLE_MAP_KEY}
        />

        {location.isInvalid && (
          <div style={{ color: "red", fontSize: "12px", marginTop: "5px" }}>
            {location.err}
          </div>
        )}

        <Form.Label className={styles["profile-input-label"] + " mt-4"}>
          Licensed Since
        </Form.Label>

        <DatePicker
          className={styles["date-picker"]}
          onChange={dateChangeHandler}
          selected={startDate}
          dateFormat="MM/yyyy"
          showMonthYearPicker
          isClearable
          showFullMonthYearPicker
          showTwoColumnMonthYearPicker
        />

        <Form.Label className={styles["profile-input-label"] + " mt-4"}>
          Phone#
        </Form.Label>
        <Form.Control
          value={phone.value}
          onChange={handlePhone}
          className={styles["profile-input"]}
          type="tel"
          placeholder="Phone number (123)123-1234"
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

        <Form.Label className={styles["profile-input-label"] + " mt-4"}>
          Languages (Optional)
        </Form.Label>

        <Select
          styles={{
            control: (provided: any, state: any) => ({
              ...provided,
              border: "1px solid #888C94",
            }),
          }}
          filterOption={createFilter({ ignoreCase: true })}
          theme={themeStyle}
          value={
            location.value && {
              value: language.value,
              label: language.value,
            }
          }
          onChange={languageChangeHandler}
          isSearchable={true}
          isClearable={true}
          placeholder={"Language"}
          options={langOptions}
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

export default ProfileDetails;
