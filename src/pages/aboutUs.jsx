import React from "react";
import { useContext } from "react";
import { AppContext, Welcome, UserL } from "../AppContext";
import "./AboutUs.css";

const AboutUs = () => {
  const welc = useContext(Welcome);
  const data = useContext(AppContext);
  const usr = useContext(UserL);

  const token = localStorage.getItem("token");
  const userLastName = localStorage.getItem("user_lastName");

  if (token) {
    welc.setWelcome(true);
    data.setIsLoggedin(true);
    usr.setUserLN(userLastName);
  }
  return (
    <div>
      {" "}
      <div className="intro-2">
        <div className="abt">
          <span className="acct-33">About us</span>
          <p className="tng-g">About Recipe net</p>
        </div>
      </div>
      <div className="about-things">
        <div className="Head">
          {" "}
          <h2>Welcome to Recipe Net!</h2>
        </div>
        <div className="Head">
          <span>
            At Recipe Net, we believe that cooking is more than just preparing
            meals—it's a journey of discovery, creativity, and joy. Our mission
            is to inspire and empower home cooks of all levels to create
            delicious and nutritious meals for themselves and their loved ones.
          </span>
        </div>
        <div className="who-cont">
          <h2>Who We Are</h2>
          <span>
            Recipe Net is a community-driven platform dedicated to sharing the
            best food recipes and food-related posts. Our team of passionate
            food enthusiasts, professional chefs, and nutrition experts work
            tirelessly to bring you a diverse range of recipes from around the
            world. Whether you're a beginner looking for simple, quick meals or
            an experienced cook seeking new challenges, Recipe Net has something
            for everyone.
          </span>
        </div>
        <div className="Mission-cont">
          <h2>Our Mission</h2>
          <span>Our mission is to:</span>
          <ul>
            <li>
              Inspire Creativity: We provide a wide variety of recipes that
              encourage creativity and experimentation in the kitchen. From
              traditional dishes to modern twists, we aim to spark your culinary
              imagination.
            </li>
            <li>
              Promote Healthy Eating: We believe that good food is the
              foundation of a healthy lifestyle. Our recipes are crafted with
              quality ingredients and balanced nutrition in mind, ensuring that
              you and your family can enjoy wholesome, delicious meals.
            </li>
            <li>
              Foster Community: Cooking is a communal activity, and we strive to
              build a supportive community where food lovers can connect, share,
              and learn from each other. Our platform allows users to share
              their own recipes, tips, and food experiences, fostering a rich
              and interactive culinary network.
            </li>
          </ul>
        </div>
        <div className="offer-cont">
          <h2>What We Offer</h2>
          <ol>
            <li>
              Extensive Recipe Collection: Browse through our extensive library
              of recipes, ranging from appetizers and main courses to desserts
              and snacks. Each recipe is meticulously tested and reviewed to
              guarantee its accuracy and taste.
            </li>
            <li>
              Food Blogs and Articles: Stay updated with the latest food trends,
              cooking tips, and culinary news through our engaging blog posts
              and articles. Our content is crafted to educate, entertain, and
              inspire food enthusiasts.
            </li>
            <li>
              {" "}
              Interactive Community: Join our vibrant community of food lovers.
              Share your own recipes, comment on posts, and exchange ideas with
              fellow home cooks. At Recipe Net, every member's contribution is
              valued and celebrated.
            </li>
            <li>
              Step-by-Step Guides: Our detailed step-by-step guides and video
              tutorials make cooking accessible to everyone. Whether you're
              mastering a complex dish or learning a basic cooking technique,
              we've got you covered.
            </li>
          </ol>
        </div>
        <div className="Join-cont">
          <h2>Join Us on Our Culinary Journey</h2>
          <span>
            At Recipe Net, we believe that every meal has a story, and every
            recipe is a chance to create lasting memories. Join us on our
            culinary journey and discover the joys of cooking. Explore new
            flavors, improve your cooking skills, and connect with a community
            that shares your passion for food.
          </span>

          <span>
            Thank you for being a part of Recipe Net. Together, let's make every
            meal a masterpiece.
          </span>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
