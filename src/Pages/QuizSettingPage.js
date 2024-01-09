import React, { useContext, useState } from "react";
import { categoryContext } from "../Context/CategoryContextProvider.js";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import { NavLink, useNavigate } from "react-router-dom";
import { IoEnterOutline } from "react-icons/io5";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import "./Styles/QuizSettingPage.css";
import { QuestionContext } from "../Context/QuestionContextProvider.js";
import Spinners from "../Components/Spinner/Spinner.js";
import LLoading from "../Animation/Loading.json";
import Warning from "../Animation/Warning.json";
const QuizSettingPage = () => {
  const { category, CategoryValue, user, SetUser } =
    useContext(categoryContext);
  const [Loading, SetLoading] = useState(false);
  const { Questions, SetQuestions } = useContext(QuestionContext);
  const [level, SetLevel] = useState("");
  const [noOfQuestions, SetNoOFQuestions] = useState(10);
  const history = useNavigate();

  const Play = async () => {
    SetLoading(true);

    try {
      if (!noOfQuestions || !level || !CategoryValue) {
        setTimeout(() => {
          SetLoading(false);
        }, 2000);
        return toast.error("please fill all the required fields");
      }
      const { data } = await axios.get(
        `https://opentdb.com/api.php?amount=${noOfQuestions}&category=${CategoryValue}&difficulty=${level}&type=multiple`
      );
      if (data?.results.length > 1) {
        history("/quizpage");
        SetQuestions(data?.results);
        SetLoading(false);
      } else {
        SetLoading(false);
        toast.error("Please try diffrent Category");
      }
    } catch (error) {
      SetLoading(false);
      toast.error("something went wrong Please try again!");
    }
  };
  return (
    <div className="p-3 ">
      <Toaster />
      <div className="d-flex justify-content-between my-2  px-4 align-items-center">
        <NavLink to="/" className="text-reset text-decoration-none">
          <h4>
            <b className="B">B</b>rain <b className="G">G</b>ames
          </h4>
        </NavLink>
        <button
          className="button-52"
          onClick={() => history("/quizpage")}
          role="button"
        >
          <div className="d-flex justify-content-center align-items-center gap-3">
            <b> next </b> <FaArrowRightLong className="fs-4" />
          </div>{" "}
        </button>
      </div>

      <div className="d-flex justify-content-center ">
        <div className="chooseLevel  m-2 p-3  rounded-3">
          <div className="d-flex  justify-content-center align-items-center p-2  gap-4 ">
            <div className="d-flex gap-3 flex-column justify-content-center align-items-center divider  p-2">
              <div className="choosedLeftCategoryName ">
                <div className="d-flex justify-content-center  pb-3 border-bottom">
                  {" "}
                  <div className="d-flex justify-content-center align-items-center gap-2 ">
                    <div className="d-flex justify-content-center gap-2 align-items-center">
                      {category ? (
                        <></>
                      ) : (
                        <Spinners
                          height="30px"
                          width="30px"
                          animationData={Warning}
                        />
                      )}{" "}
                      <b>Category : </b>
                    </div>
                    <b>
                      {" "}
                      {category ? (
                        <b>
                          {" "}
                          <b className="vibrant">#{category.charAt(0)}</b>
                          {category.substring(1)}
                        </b>
                      ) : (
                        <>
                          <NavLink className="" to="/category ">
                            <button className="button-33 " role="button">
                              <span>Choose </span>
                            </button>
                          </NavLink>
                        </>
                      )}{" "}
                    </b>
                  </div>
                </div>
              </div>

              <div className="px-4 quizsettingleftAnimation">
                {Loading ? (
                  <div style={{ height: "250px" }} className="p-2">
                    {" "}
                    <Spinners
                      height="200px"
                      width="250px"
                      animationData={LLoading}
                    />
                    <div className="d-flex justify-content-center ">
                      {" "}
                      <b className="text-center">Loading...</b>
                    </div>
                  </div>
                ) : (
                  <div style={{ height: "250px" }} className="p-2">
                    {" "}
                    <img height={200} width={250} src="/LevelPage.svg" />
                  </div>
                )}
              </div>

              <div className="changeCategoryLeftButton">
                <NavLink to="/category ">
                  <button className="button-33" role="button">
                    <b> Change Category</b>
                  </button>
                </NavLink>
              </div>
            </div>

            <div>
              <div className="rightSideQuizSetting">
                <div className="d-flex justify-content-center align-items-center">
                  <h4>
                    <b className="vibrant fs-2">L</b>ast{" "}
                    <b className="vibrant fs-2">S</b>tep
                  </h4>
                </div>

                <b className="">
                  <b className="vibrant">N-</b>ame :
                </b>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}
                  className="d-flex flex-column mb-2 justify-content-center align-items-center gap-2"
                >
                  <div className="nameInputField d-flex align-items-center rounded-1  ps-3 pe-2 ">
                    <input
                      type="text"
                      className="nameInput pe-4 py-2 "
                      value={user}
                      required
                      onChange={(e) => {
                        SetUser(e.target.value);
                      }}
                      placeholder="Your Name"
                    />

                    <IoEnterOutline className="fs-3 border-start" />
                  </div>
                </form>
                <hr />
                <div className="choosedRightCategoryName ">
                  <div className="d-flex justify-content-start  pb-3 ">
                    {" "}
                    <div className="d-flex justify-content-center align-items-center gap-2  ">
                      <div className="d-flex justify-content-center gap-2 align-items-center">
                        <b>
                          {" "}
                          <b className="vibrant">C</b>ategory :{" "}
                        </b>
                      </div>
                      <div>
                        {" "}
                        {category ? (
                          <>
                            {" "}
                            <b className="vibrant">#{category}</b>
                          </>
                        ) : (
                          <>
                            <NavLink className="" to="/category ">
                              <button className="button-33 " role="button">
                                <span>Choose </span>
                              </button>
                            </NavLink>
                          </>
                        )}{" "}
                      </div>
                      {category ? (
                        <></>
                      ) : (
                        <Spinners
                          height="25px"
                          width="25px"
                          animationData={Warning}
                        />
                      )}{" "}
                    </div>
                  </div>
                  <hr />
                </div>

                <div className="d-flex align-items-center gap-1 justify-content-between pb-2 ">
                  <b className="">
                    <b className="vibrant">D-</b>ifficulty
                  </b>
                  {level ? (
                    <></>
                  ) : (
                    <Spinners height="20px" animationData={Warning} />
                  )}
                </div>

                <div className="d-flex mb-3 justify-content-start gap-3">
                  <label htmlFor="easy">
                    <input
                      required
                      type="radio"
                      onClick={(e) => SetLevel(e.target.value)}
                      className="me-2 "
                      id="easy"
                      name="level"
                      value="easy"
                    />
                    <span className="custom-radio"></span> Easy
                  </label>
                  <label htmlFor="medium">
                    <input
                      type="radio"
                      className="me-2"
                      onClick={(e) => SetLevel(e.target.value)}
                      id="medium"
                      name="level"
                      value="medium"
                    />
                    <span className="custom-radio"></span> Medium
                  </label>
                  <label htmlFor="hard">
                    <input
                      type="radio"
                      className="me-2"
                      onClick={(e) => SetLevel(e.target.value)}
                      id="hard"
                      name="level"
                      value="hard"
                    />
                    <span className="custom-radio"></span> Hard
                  </label>
                </div>
                <hr />
                <div className="d-flex align-items-center gap-2 pb-2">
                  <b>
                    {" "}
                    <b className="vibrant">Q-</b>uestions{" "}
                  </b>
                </div>

                <div className="d-flex justify-content-start gap-3">
                  <label htmlFor="10">
                    <input
                      type="radio"
                      className="me-2 "
                      id="10"
                      name="questions"
                      onClick={(e) => SetNoOFQuestions(e.target.value)}
                      value="10"
                    />
                    <span className="custom-radio"></span> 10
                  </label>
                  <label htmlFor="20">
                    <div className="d-felx justify-content-center align-items-center ">
                      <input
                        type="radio"
                        onClick={(e) => SetNoOFQuestions(e.target.value)}
                        className="me-2"
                        id="20"
                        name="questions"
                        value="20"
                      />
                      <span className="custom-radio"></span> <span>20</span>
                    </div>
                  </label>
                  <label htmlFor="25">
                    <input
                      type="radio"
                      onClick={(e) => SetNoOFQuestions(e.target.value)}
                      className="me-2"
                      id="25"
                      name="questions"
                      value="25"
                    />
                    <span className="custom-radio"></span> 25
                  </label>
                  <label htmlFor="30">
                    <input
                      type="radio"
                      onClick={(e) => SetNoOFQuestions(e.target.value)}
                      className="me-2"
                      id="30"
                      name="questions"
                      value="30"
                    />
                    <span className="custom-radio"></span> 30
                  </label>
                </div>
                <hr />
                <div className="changeCategoryRightButton">
                  <div className="d-flex justify-content-center py-2">
                    <NavLink to="/category ">
                      <button className="button-33" role="button">
                        <b> Change Category ?</b>
                      </button>
                    </NavLink>
                  </div>
                </div>
                <div className="px-4 quizsettingrightAnimation">
                  <hr />
                  {Loading ? (
                    <div className="p-2 rightAnimationSize">
                      {" "}
                      <Spinners
                        height="150px"
                        width="200px"
                        animationData={LLoading}
                      />
                      <div className="d-flex justify-content-center ">
                        {" "}
                        <b className="text-center">Loading...</b>
                      </div>
                    </div>
                  ) : (
                    <div className="p-2 rightAnimationSize">
                      {" "}
                      <img height={150} width={200} src="/LevelPage.svg" />
                    </div>
                  )}
                </div>
              </div>
              <div className="d-flex p-3 justify-content-center ">
                <button className="button-52" role="button" onClick={Play}>
                  {" "}
                  Play The Quiz
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizSettingPage;
