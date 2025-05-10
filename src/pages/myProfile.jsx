import React from "react";
import "./Profile.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { Welcome, AppContext, UserL, User } from "../AppContext";
import config from "../../config";
import { Link } from "react-router-dom";

const Profile = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [imgAvailable, setImgAvailable] = useState(false);
  const token = localStorage.getItem("token");
  const userLastName = localStorage.getItem("user_lastName");
  const userFN = useContext(User);

  const headers = { Authorization: `Bearer ${token}` };

  const getUserData = async () => {
    const userData = await axios.get(`${config.baseUrl}/user`, {
      headers,
    });

    if (userData.status === 200) {
      console.log(userData);
      setUserInfo(userData.data);
      if (
        userFN !== userData?.data?.first_name &&
        usr !== userData?.data?.last_name
      ) {
        userFN.setUser(userData?.data?.first_name);
        usr.setUserLN(userData?.data?.last_name);
        localStorage.setItem("user_lastName", userData?.data?.last_name);
      } else {
        console.log(" everything is good here!");
      }
    } else {
      // console.log("An error occured");
      // localStorage.setItem("user_id", "");
    }

    console.log(userData);
  };

  useEffect(() => {
    getUserData();
  }, []);

  const usr = useContext(UserL);
  const welc = useContext(Welcome);
  const data = useContext(AppContext);

  if (token) {
    welc.setWelcome(true);
    data.setIsLoggedin(true);
    usr.setUserLN(userLastName);
  }

  return (
    <div className="profile-container">
      <div className="prof-top">
        <span className="profff">My profile details</span>
      </div>

      <div className="prof-cont">
        <div className="profile-details">
          <div>
            <span>Profile Image</span>
          </div>
          <div className="profile-inp">
            <img src={`${userInfo?.image_url}`} alt="" className="user-prof" />
          </div>
          <div>
            <div className="user-d-containerrrr">
              {" "}
              <span className="details-container">Profile details</span>
            </div>
            <div className="USER-details-container">
              <div className="user-details-sub-cont">
                <div className="User-details-name">
                  {" "}
                  <div>Name:</div>{" "}
                  <div>
                    <span>{userInfo?.first_name}</span>
                    <span> {userInfo?.last_name}</span>
                  </div>{" "}
                </div>
                <div className="">
                  <span>Email: {userInfo?.email}</span>
                </div>
                <div className="">
                  <span>Number of Recipes created: {""}</span>
                </div>
              </div>
              <div className="user-details-subcontainer-2">
                <div>
                  <span>Number of Posts created: {""}</span>
                </div>
                <div>
                  <span>Number of Reviews: {""}</span>
                </div>
                <div>
                  <span>Overall Rating: {""}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Management-container">
        <div className="">
          <span className="">Account Managment</span>
        </div>
        <div>
          <Link className="addi" to={"/Addimg"}>
            Update user details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
