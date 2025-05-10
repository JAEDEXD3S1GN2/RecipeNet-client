import React from "react";
import "./SubmitRecipe.css";
import { useState, useEffect } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import ReactHtmlParser from "@orrisroot/react-html-parser";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "sonner";
import { useContext } from "react";
import { Welcome, AppContext, UserL } from "../AppContext";
import config from "../../config";

// import fs from "fs";

const AddRecipe = () => {
  const [ingr, setIngr] = useState("");
  const [steps, setSteps] = useState("");
  const token = localStorage.getItem("token");
  const userLastName = localStorage.getItem("user_lastName");
  // const baseUrl = "https://recp-backend.onrender.com";
  const baseUrl = "http://localhost:3000";
  const [image, setImage] = useState(null);
  const [previewFile, setPreviewFile] = useState(null);
  const navigateTo = useNavigate();

  const welc = useContext(Welcome);
  const data = useContext(AppContext);
  const usr = useContext(UserL);

  if (token) {
    welc.setWelcome(true);
    data.setIsLoggedin(true);
    usr.setUserLN(userLastName);
  }

  const headers = {
    Authorization: `Bearer ${token} `,
    "Content-Type": "multipart/form-data",
  };

  const handleI = (e, editor) => {
    setIngr(editor.getData());
  };

  const handleImage = (e) => {
    setImage(e.target.files[0]);
    console.log(e.target.files[0]);
    const file = e.target.files[0];
    previewImage(file);
  };

  const handleP = (e, editor) => {
    setSteps(editor.getData());
  };

  const previewImage = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewFile(reader.result);
    };
  };

  const handleSub = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("food_name", `${repValues.food_name}`);
      formData.append("description", `${repValues.description}`);
      formData.append("ingredients", `${ingr}`);
      formData.append("preparation", `${steps}`);
      formData.append("image", image);
      formData.append("video_url", `${repValues.video_url}`);

      // const data = {
      //   food_name: `${repValues.food_name}`,
      //   description: `${repValues.description}`,
      //   ingredients: `${ingr}`,
      //   preparation: `${steps}`,
      //   image: `${image.name}`,
      //   video_url: `video`,
      // };
      // console.log(data);

      const response = await axios.post(`${config.baseUrl}/recipes`, formData, {
        headers,
      });

      console.log(response);

      console.log(image);

      if (response) {
        setTimeout(() => {
          toast.success("Recipe sent successfully");
        }, 1000);
      }

      navigateTo("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRepValues((prevVal) => ({ ...prevVal, [name]: value }));
  };

  const [repValues, setRepValues] = useState({
    food_name: "",
    description: "",
    ingredients: `${ingr}`,
    preparation: `${steps}`,
    image: "",
    video_url: "",
  });
  return (
    <div className="add-cont">
      <div className="intro-2">
        <div className="abt">
          <span className="acc-3">Add a Recipe</span>
          <p className="tng">Share your delicious creations with the world.</p>
        </div>
      </div>
      <form onSubmit={handleSub} className="fom">
        <div className="title-contt">
          <div className="til">
            <div className="tt">
              <label className="tingss" htmlFor="">
                Recipe Title
              </label>
              <input
                name="food_name"
                onChange={handleChange}
                className="r-name"
                type="text"
                value={repValues.food_name}
              />
            </div>
          </div>
          <div className="dd">
            <label className="tingss" htmlFor="">
              Description
            </label>
            <textarea
              cols="30"
              rows="3"
              onChange={handleChange}
              className="d-name"
              name="description"
              type="text"
              value={repValues.description}
            ></textarea>
          </div>
        </div>

        <div className="ingr-prep">
          <div className="tpp">
            <div className="food-n">
              <div className="op">
                <p className="tingss">Ingredients</p>
                <CKEditor
                  className=""
                  name="ingredients"
                  value={repValues.ingredients}
                  editor={ClassicEditor}
                  onChange={(e, editor) => {
                    handleI(e, editor);
                  }}
                />
              </div>
            </div>
          </div>

          <div className="food-prep">
            <div className="pp-cc">
              <div>
                <p className="tingss">Preparation</p>
                <CKEditor
                  name="preparation"
                  value={repValues.preparation}
                  editor={ClassicEditor}
                  onChange={(e, editor) => {
                    handleP(e, editor);
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="img-video-sec">
          <div className="firstcont">
            <label className="tingss2" htmlFor="">
              Image and Video upload
            </label>
          </div>
          <div className="food-imgr">
            <input
              className=""
              type="file"
              name="image"
              onChange={handleImage}
              accept="image/*"
              value={repValues.image_url}
            />
            <div>
              {previewFile && (
                <img src={previewFile} alt="food-img" className="preview-img" />
              )}
            </div>
          </div>
          <div className="vid-cont">
            <input
              name="video_url"
              type="text"
              placeholder="Video-url e.g https://www.youtube.com/embed/XeZJlxAsP18?si=-qJT6v9yZQ9UOlPn"
              onChange={handleChange}
              value={repValues.video_url}
            />
            <span className="if-embed">
              click share on the desired video and copy embed code
            </span>
            <iframe
              className="ffr"
              src="https://www.youtube.com/embed/u1FAoLEG16c?si=CO8u5FWN8nnWxrPV"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <button className="sb">Submit</button>
      </form>
    </div>
  );
};

export default AddRecipe;
