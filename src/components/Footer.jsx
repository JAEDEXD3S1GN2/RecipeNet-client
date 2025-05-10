import React from "react";
import "./Footer.css";
import { useState, useEffect } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoGoogleplus } from "react-icons/io";
import { Link } from "react-router-dom";
import axios from "axios";
import config from "../../config";

const Footer = () => {
  const [foods, setFoods] = useState(null);
  const [Blog, setBlog] = useState(null);

  const getAllRecipes = async () => {
    const response = await axios.get(`${config.baseUrl}/recipes`);
    setFoods(response?.data?.recipes);
    console.log(response);
  };

  const GetAllPosts = async () => {
    const response = await axios.get(`${config.baseUrl}/posts`);
    setBlog(response?.data);
    console.log(response);
  };

  useEffect(() => {
    // AOS.init({
    //   offset: 200,
    //   duration: 1500,
    //   easing: "ease",
    //   startEvent: "load",
    // });

    getAllRecipes();
    GetAllPosts();
  }, []);

  return (
    <div className="footer">
      <div className="first-f">
        <div className="left-ting">
          <div className="tin-cont">
            <div>
              <h2 className="Title-w">Recipe Net</h2>
              <p className="des">An Encyclopedia of recipies</p>
            </div>
            <div className="secc"> </div>
          </div>
          <div>
            <p className="f-ting">
              At Recipe Net, we believe that cooking is more than just preparing
              meals it's a journey of discovery, creativity, and joy. Our
              mission is to inspire and empower home cooks of all levels to
              create delicious and nutritious meals for themselves and their
              loved ones.
            </p>
          </div>
          <div>
            <Link to="/AboutUs" className="Readdd">
              Read More
            </Link>
          </div>
        </div>
        <div className="middle-ting">
          <div>
            {foods?.slice(8, 10).map((food) => (
              <div key={food}>
                <div>
                  <div>
                    <span>{food?.food_name}</span>
                    <span></span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="right-ting">
          {Blog?.slice(8, 10).map((blo) => (
            <div key={blo}>
              <div>
                <div>
                  <span>{blo?.title}</span>
                  <span></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bottom">
        <div>
          <span className="copy">
            Copyright © 2024 Recipe Net. All Right Reserved
          </span>
        </div>
        <div className="by-cont">
          <span className="by">
            <FaFacebookF />
          </span>
          <span className="by">
            <FaTwitter />
          </span>
          <span className="by">
            <IoLogoGoogleplus />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
