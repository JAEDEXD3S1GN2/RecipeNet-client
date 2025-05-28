import React from "react";
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext, UserL, Welcome, User } from "../AppContext";
import axios from "axios";
import { Toaster, toast } from "sonner";
import config from "../../config";
import "./AddImage.css";

const AddImage = () => {
  const [image, setImage] = useState(null);
  const [previewFile, setPreviewFile] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const [id, setId] = useState(null);

  const handleImage = (e) => {
    setImage(e.target.files[0]);
    console.log(e.target.files[0]);
    const file = e.target.files[0];
    previewImage(file);
  };

  const navigateTo = useNavigate();

  const token = localStorage.getItem("token");

  const userLastName = localStorage.getItem("user_lastName");

  const welc = useContext(Welcome);
  const data = useContext(AppContext);
  const usr = useContext(UserL);
  const userFN = useContext(User);

 

  const headers = { Authorization: `Bearer ${token} ` };

  const getUserData = async () => {
    const userData = await axios.get(`${config.baseUrl}/user`, {
      headers,
    });

    if (userData.status === 200) {
      console.log(userData);
      setUserInfo(userData.data);
    } else {
      // console.log("An error occured");
      // localStorage.setItem("user_id", "");
    }
    console.log(userData);
  };

 useEffect(() => {
  if (token) {
    welc.setWelcome(true);
    data.setIsLoggedin(true);
    usr.setUserLN(userLastName);
  }

  GetApost();
}, []);

  const handleSub = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("first_name", `${repValue.first_name}`);
      formData.append("last_name", `${repValue.last_name}`);
      formData.append("phone", `${repValue.phone}`);
      formData.append("image", image);
      formData.append("user_id", userInfo.id);
      console.log(formData);

      const response = await axios.put(
        `${config.baseUrl}/users/${userInfo.id}`,
        formData,
        {
          headers,
        }
      );

      console.log(response);

      if (response.status === 204) {
        setTimeout(() => {
          toast.success("Post sent successfully");
        }, 1000);
        // if (
        //   userFN !== userData?.data?.first_name &&
        //   usr !== userData?.data?.last_name
        // ) {
        //   userFN.setUser(userData?.data?.first_name);
        //   usr.setUserLN(userData?.data?.last_name);
        //   localStorage.setItem("user_lastName", userData?.data?.last_name);
        // } else {
        //   console.log(" everything is good here!");
        // }
        navigateTo("/Me");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [repValue, setRepValue] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRepValue((prevVal) => ({ ...prevVal, [name]: value }));
  };

  const previewImage = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewFile(reader.result);
    };
  };

  return (
    <div className="ad">
      <form className="adim-cont" onSubmit={handleSub}>
        <div>
          <div>FirstName</div>
          <input
            type="text"
            name="first_name"
            onChange={handleChange}
            value={repValue.first_name}
            id=""
          />
        </div>
        <div>
          <div>LastName</div>
          <input
            type="text"
            name="last_name"
            onChange={handleChange}
            value={repValue.last_name}
          />
        </div>
        <div>
          <div>Phone</div>
          <input
            type="tel"
            name="phone"
            onChange={handleChange}
            value={repValue.phone}
          />
        </div>
        <div className="food-im">
          <input
            className="ii"
            type="file"
            name="image"
            onChange={handleImage}
            accept="image/*"
          />

          <div>
            {previewFile && (
              <img src={previewFile} alt="food-img" className="preview-img" />
            )}
          </div>
        </div>

        <button className="sb">Submit</button>
      </form>
    </div>
  );
};

export default AddImage;
