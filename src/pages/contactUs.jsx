import React from "react";
import "./contactUs.css";
import { useContext } from "react";
import { Welcome, AppContext, UserL } from "../AppContext";

const Contact = () => {
  const token = localStorage.getItem("token");

  const userLastName = localStorage.getItem("user_lastName");

  const welc = useContext(Welcome);
  const data = useContext(AppContext);
  const usr = useContext(UserL);

  if (token) {
    welc.setWelcome(true);
    data.setIsLoggedin(true);
    usr.setUserLN(userLastName);
  }

  return (
    <div>
      <div className="intro-2">
        <div className="abt">
          <span className="acc-3">Contact us</span>
          <p className="tng">Get in Touch with Recipe Net</p>
        </div>
      </div>
      <div className="contact-us-cont">
        <div className="contact-head">
          <h2>Contact Us</h2>
          <h3>Get in Touch with Recipe Net</h3>
          <span>
            We'd love to hear from you! Whether you have a question, feedback,
            or simply want to share your culinary experiences, the Recipe Net
            team is here to connect with you. Your thoughts and suggestions are
            invaluable to us as we strive to improve our platform and better
            serve our community of food enthusiasts.
          </span>
        </div>
        <div className="reach-cont">
          <h2>How to Reach Us</h2>
          <h3>Email:</h3>
          <span>
            For general inquiries, recipe submissions, or support, please email
            us at: contact@recipenetwork.com
          </span>
        </div>
        <div className="social-cont">
          <h2>Social Media:</h2>
          <span>
            Connect with us on our social media platforms for the latest
            updates, cooking tips, and food inspiration:
          </span>
          <div className="soc-arr">
            <div className="soc">
              <span className="soc-i">Facebook:</span>
              <span className="soc-it">facebook.com/recipenetwork</span>
            </div>
            <div className="soc">
              <span className="soc-i">Twitter:</span>
              <span className="soc-it">twitter.com/recipenetwork</span>
            </div>
            <div className="soc">
              <span className="soc-i">Instagram:</span>
              <span className="soc-it">instagram.com/recipenetwork</span>
            </div>
            <div className="soc">
              <span className="soc-i">Pinterest:</span>
              <span className="soc-it">pinterest.com/recipenetwork</span>
            </div>
          </div>
        </div>
        <div className="Address-cont">
          <h2>Mailing Address:</h2>
          <span>
            If you prefer to reach us by mail, you can send your correspondence
            to:
          </span>
          <div>
            <p>Recipe Net</p>
            <p>123 Culinary Avenue</p>
            <p>Gourmet City, FL 54321</p>
          </div>
        </div>
        <div className="Phone-cont">
          <h2>Phone:</h2>
          <span>
            For urgent matters, feel free to call us at: (123) 456-7890
          </span>
          <p>
            Our phone lines are open Monday to Friday, from 9:00 AM to 5:00 PM
            (EST).
          </p>
        </div>
        <div className="Feeddss-cont">
          <div>
            <h2>Feedback and Suggestions</h2>
            <span>
              Your feedback helps us grow and improve. If you have any
              suggestions on how we can enhance your experience on Recipe Net,
              please don't hesitate to let us know. We're always eager to hear
              your thoughts and implement changes that benefit our community.
            </span>
          </div>
          <div>
            <h2>Recipe Submissions</h2>
            <span>
              Do you have a delicious recipe that you'd like to share with the
              world? Submit your recipes to us, and you might see them featured
              on Recipe Net! Email your recipes, along with any photos and a
              brief description, to recipes@recipenetwork.com.
            </span>
          </div>
          <div>
            <h2>Collaborations and Partnerships</h2>
            <span>
              We're open to collaborations with brands, influencers, and fellow
              food enthusiasts. If you're interested in partnering with Recipe
              Net for special projects, events, or content creation, please
              reach out to us at 
              partnerships@recipenetwork.com.
            </span>
          </div>
          <div>
            <h2>Technical Support</h2>
            <span>
              If you're experiencing any technical issues with our website or
              have questions about using our platform, our support team is here
              to help. Please email us at support@recipenetwork.com, and we'll
              assist you as soon as possible.
            </span>
          </div>
          <div>
            <h2>Join Our Community</h2>
            <span>
              Stay connected and be part of our growing community by signing up
              for our newsletter. Receive the latest recipes, cooking tips, and
              exclusive content straight to your inbox. Subscribe here.
            </span>
          </div>
        </div>
        <div className="Thanks-cont">
          <span>
            Thank you for visiting Recipe Net! We're excited to connect with you
            and share our love for food and cooking. Your support and engagement
            make our community vibrant and inspiring.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
