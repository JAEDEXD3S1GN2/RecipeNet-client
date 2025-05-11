import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
import { MdOutlineStarBorder } from "react-icons/md";
import "./blogd.css";
import { useContext } from "react";
import { Welcome, AppContext, UserL } from "../AppContext";
import config from "../../config";
import { FaRegStar } from "react-icons/fa";
import profile from "../assets/Ellipse 38.png";
import { Link, useNavigate } from "react-router-dom";

const Blogd = () => {
  const id = useParams().id;

  const [post, setPost] = useState(null);
  const [comments, setComments] = useState(null);
  const [makeComment, setMakeComment] = useState({
    post_id: `${id}`,
    comment: "",
  });
  const [edit, setEdit] = useState(false);

  const token = localStorage.getItem("token");

  const welc = useContext(Welcome);
  const data = useContext(AppContext);
  const usr = useContext(UserL);

  const uid = localStorage.getItem("user_id");

  const userLastName = localStorage.getItem("user_lastName");

  if (token) {
    welc.setWelcome(true);
    data.setIsLoggedin(true);
    usr.setUserLN(userLastName);
  }

  const headers = { Authorization: `Bearer ${token}` };

  const navigateTo = useNavigate();

  const baseUrl = "https://recp-backend.onrender.com";

  const GetApost = async () => {
    console.log(id);
    const response = await axios.get(`${config.baseUrl}/posts/${id}`);
    setPost(response?.data);
    console.log(response);
  };

  const GetComments = async () => {
    console.log(id);
    const response = await axios.get(`${config.baseUrl}/posts/${id}/comments`);
    setComments(response.data);
    console.log(response);
  };

  const handleReview = (e) => {
    const { name, value } = e.target;
    setMakeComment((prevVal) => ({ ...prevVal, [name]: value }));
  };

  const sendReview = async (e) => {
    e.preventDefault();
    console.log(makeComment);
    const response = await axios.post(
      `${config.baseUrl}/posts/${id}/comments`,
      makeComment,
      { headers }
    );
    GetComments();
    console.log(response);
  };

  useEffect(() => {
    GetApost();
    GetComments();
  }, []);

  return (
    <div className="post-cont">
      <div className="d-cont">
        <div className="wrapper">
          <img className="meat" src={} alt="" /> 
        </div>
        {
          <div className="d-det">
            <div className="ini">
              <div className="bars"></div>
              <div className="bap-name">
                <p className="tittle">{post?.title}</p>
                {/* <span className="d-stars">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <MdOutlineStarBorder />
                </span> */}
              </div>
            </div>

            <span className="date-details">
              Date: <span className="d">{post?.updatedAt.slice(0, 10)}</span>
            </span>
            <div className="inin">
              <div className="d-content">
                <p className="p-connttt">{post?.description}</p>
              </div>
            </div>
          </div>
        }
      </div>

      <div className="comment-cont">
        {token ? (
          <div>
            <div className="blog-r">
              <div className="blog-hd">
                <span className="star">
                  <FaRegStar />
                </span>
                <span className="hd-text">Reviews & Rating</span>
              </div>
              <div className="blog-g">
                {edit ? (
                  <div className="review-cont">
                    <div className="rev">
                      <h3 className="rev-title">Edit review</h3>

                      <form onSubmit={sendReview} className="rev-form">
                        <textarea
                          className="review-ting"
                          cols={30}
                          rows={10}
                          value={makeComment.description}
                          name="description"
                          id=""
                          onChange={handleReview}
                        ></textarea>
                        <button className="rev-sb">Submit</button>
                      </form>
                    </div>
                  </div>
                ) : (
                  <div className="blobbb-tin">
                    {comments?.map((blob) => (
                      <div className="blo" key={blob}>
                        <div className="blo-cont">
                          <div className="auth-cont">
                            <div className="author-tings">
                              <span className="auth">{blob.text}</span>
                              <span></span>
                              <div>
                                {blob?.user_id == uid ? (
                                  <div className="options-cont">
                                    {/* <button className="eb" onClick={EditReview}>
                                  Edit
                                </button> */}
                                    <form action="">
                                      <button
                                        className="del-b"
                                        onClick={async () => {
                                          const del = await axios.delete(
                                            `${config.baseUrl}/reviews/${blob.id}`,
                                            {
                                              headers,
                                            }
                                          );
                                        }}
                                      >
                                        Delete
                                      </button>
                                    </form>
                                  </div>
                                ) : (
                                  ""
                                )}
                              </div>
                            </div>{" "}
                            <div>
                              <span className="date-details">
                                Date:{" "}
                                <span className="d">
                                  {blob?.updatedAt.slice(0, 10)}
                                </span>
                              </span>
                            </div>
                          </div>
                          <div className="b-cont">{blob.comment}</div>
                        </div>
                      </div>
                    ))}{" "}
                  </div>
                )}
              </div>
            </div>

            <div className="blog-review-cont">
              <div className="rev">
                <h3 className="rev-title">Write a review</h3>

                <form onSubmit={sendReview} className="rev-form">
                  <textarea
                    className="review-ting"
                    cols={30}
                    rows={10}
                    value={makeComment.comment}
                    name="comment"
                    id=""
                    onChange={handleReview}
                  ></textarea>
                  <button className="rev-sb">Submit</button>
                </form>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Blogd;
