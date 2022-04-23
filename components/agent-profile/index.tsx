import { useRouter, withRouter } from "next/router";
import { useEffect, useState } from "react";
import { RiShareFill } from "react-icons/ri";
import { FcApproval } from "react-icons/fc";
import { AiOutlineHeart } from "react-icons/ai";
import FeedImage from "../../public/static/images/feed-img.png";
import Instagram from "../../public/static/images/instgram-post.svg";
import FollowIcon from "../../public/static/images/follow-icon.svg";
import FollowBlack from "../../public/static/images/follow-icon-black.svg";
import MessageIcon from "../../public/static/images/messageIcon.svg";
import CautionIcon from "../../public/static/images/caution.svg";
import UserIcon from "../../public/static/images/userIcon.jpeg";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { hideLoading, showLoading } from "../../store/loadingSlice";
import { UserService } from "../../services/user";
// @ts-ignore
import ModalImage from "react-modal-image";
import { toast } from "react-toastify";

const AgentProfileBanner = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [userData, setUserData] = useState<any>({});
  const [media, setMedia] = useState([]);
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      dispatch(showLoading());
      UserService.getInstagramData(id)
        .then((response: any) => {
          setTimeout(() => {
            dispatch(hideLoading());
          }, 1000);
          setUserData(response.user);
          setMedia(response.media.data);
        })
        .catch((error: any) => {
          setTimeout(() => {
            dispatch(hideLoading());
          }, 1000);
        });
    }
  }, [dispatch, id]);

  return (
    <>
      <div className="container mt-5">
        <div className="row d-flex justify-content-center">
          <div className="col-12">
            <div className="bg-white agent-card p-3 py-4 mx-2 mx-md-0">
              <div className="agent-card-main d-flex">
                <div className="img-section">
                  <Image
                    src={
                      userData && userData?.picture
                        ? userData.picture
                        : UserIcon
                    }
                    height={"150px"}
                    width={"150px"}
                    className="rounded-circle"
                    alt="user-pic"
                  />
                </div>
                <div className="px-4">
                  <div className="title-name d-flex align-items-center">
                    <h5 className="d-flex align-items-center mb-0">
                      {userData?.first_name} {userData?.last_name}
                      {userData.is_verified && (
                        <FcApproval className="approve-icon mx-2" />
                      )}
                    </h5>
                    <span className="mx-2">. {userData?.license_number}</span>
                  </div>
                  <div className=" mt-1">
                    <p className="fonts">Email: {userData?.email}</p>
                    <p className="fonts mt-2">Company: {userData?.company}</p>
                    <p className="fonts mt-2">Tags: {userData?.tags}</p>
                    <p className="fonts mt-2">
                      Phone No: {userData?.phone_number}
                    </p>
                    <p className="fonts mt-2">Location: {userData?.location}</p>
                  </div>
                  <div className="social-list mt-3">
                    {userData?.instagram_connected && (
                      <Image
                        onClick={() =>
                          window.open(
                            `https://www.instagram.com/${userData?.instagram_data?.instagram_user_name}`,
                            "_blank"
                          )
                        }
                        width="30px"
                        height="30px"
                        src={Instagram}
                        alt="instagram-icon"
                      />
                    )}
                  </div>
                </div>
              </div>
              <div className="buttons d-flex justify-content-between mt-4">
                <div>
                  <button className="btn btn-primary px-4 ms-3">
                    <div className="d-flex align-items-center">
                      <Image src={FollowIcon} alt="follow-icon" />
                      <span
                        className="mx-2 font-bold"
                        style={{ fontSize: "16px" }}
                      >
                        Follow
                      </span>
                    </div>
                  </button>
                  <button
                    onClick={() => {
                      document.location = `mailto:${userData.email}?subject=Message: `;
                    }}
                    className="btn btn-outline-primary px-4 mx-2"
                  >
                    <div className="d-flex align-items-center">
                      <Image src={MessageIcon} alt="message-icon" />
                      <span
                        className="mx-2 font-bold"
                        style={{ fontSize: "16px" }}
                      >
                        Message
                      </span>
                    </div>
                  </button>
                </div>
                <div className="d-flex align-items-center">
                  <div className="follow-icon d-flex align-items-center mx-3">
                    <Image
                      src={FollowBlack}
                      width="25px"
                      height="25px"
                      alt="follow-back-icon"
                    />
                    <span className="mx-1"> 1.2K</span>
                  </div>
                  <AiOutlineHeart className="mx-3" size="23px" />
                  <RiShareFill
                    title="share"
                    onClick={() => {
                      navigator.clipboard.writeText(window.location.toString());
                      toast.success("Copied to clipboard", {
                        position: toast.POSITION.TOP_RIGHT,
                      });
                    }}
                    className="mx-3"
                    size="23px"
                  />
                  <div className="social-list align-items-center d-flex mx-4">
                    <Image
                      onClick={() => {
                        document.location = `mailto:alanbmoore@wickyick.com?subject=Reported User&body=${window.location.toString()}`;
                      }}
                      width="25px"
                      height="25px"
                      src={CautionIcon}
                      alt="caution-icon"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*  feed and post section */}

        <div className="container mt-4">
          <div className="row">
            <div className="col-md-3 col-12 px-2 px-md-0 ">
              <div className="bg-white feed-section">
                <p className="title">Feed</p>
                <p className="notification-title">
                  Stephanie liked this property from <b> Dana Frank</b>{" "}
                  <span className="time">· 12m ago</span>
                </p>

                <div className="card feed-card">
                  <Image
                    className="card-img-top"
                    src={FeedImage}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title" style={{ fontWeight: 700 }}>
                      $600,000
                    </h5>
                    <p className="card-text m-0" style={{ fontSize: "14px" }}>
                      2 Beds · 2 baths · 772 sqf
                    </p>
                    <p className="card-text m-0" style={{ fontSize: "14px" }}>
                      159 S Murphy Rd, Wewahitchka, F...
                    </p>
                  </div>
                </div>

                <hr />
                <p className="notification-title mt-4">
                  Stephanie liked this property from <b> Dana Frank</b>{" "}
                  <span className="time">· 12m ago</span>
                </p>

                <div className="card feed-card">
                  <Image
                    className="card-img-top"
                    src={FeedImage}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title" style={{ fontWeight: 700 }}>
                      $600,000
                    </h5>
                    <p className="card-text m-0" style={{ fontSize: "14px" }}>
                      2 Beds · 2 baths · 772 sqf
                    </p>
                    <p className="card-text m-0" style={{ fontSize: "14px" }}>
                      159 S Murphy Rd, Wewahitchka, F...
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-9 col-12 px-2 pr-0 my-md-0 my-4">
              <div className="bg-white post-section">
                <div className="tabs-section p-3 d-flex">
                  <p className="tabs active m-0">Posts</p>
                  <p className="tabs mx-3 mb-0">Listings</p>
                </div>
                <hr />
                {userData?.instagram_connected ? (
                  <div className="posts">
                    <div className="row">
                      {media &&
                        media.map((item: any, index: number) => {
                          return (
                            <div
                              key={index}
                              className="col-md-3 col-12 position-relative mb-3"
                            >
                              {item.media_url.includes("video") ? (
                                <video
                                  style={{ objectFit: "cover" }}
                                  width="220.13px"
                                  height="225px"
                                  controls
                                >
                                  <source
                                    src={item.media_url}
                                    type="video/mp4"
                                  />
                                </video>
                              ) : (
                                <ModalImage
                                  className="user-instagram-pic"
                                  small={item.media_url}
                                  large={item.media_url}
                                  alt={"user-pic"}
                                />
                              )}

                              {/*<div className="post-type">*/}
                              {/*  <Image*/}
                              {/*    alt={"post-type-pic"}*/}
                              {/*    width="30px"*/}
                              {/*    height="30px"*/}
                              {/*    src={Instagram}*/}
                              {/*  />*/}
                              {/*</div>*/}
                            </div>
                          );
                        })}
                    </div>
                  </div>
                ) : (
                  <p className="p-5 text-center mx-3 mb-0">
                    Instagram Not Connected
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(AgentProfileBanner);
