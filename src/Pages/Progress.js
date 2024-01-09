import React, { useContext, useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import { ScoreContext } from "../Context/ScoreContextProvider";
import { QuestionContext } from "../Context/QuestionContextProvider";
import { categoryContext } from "../Context/CategoryContextProvider";
import { IoMdArrowRoundBack } from "react-icons/io";
import { MdOutlineMoodBad } from "react-icons/md";
import { BiHappyAlt } from "react-icons/bi";
import "./Styles/Progress.css";
import { useNavigate } from "react-router-dom";
import Spinners from "../Components/Spinner/Spinner";
import FirstTimeAnimation from "../Animation/Winner.json";
import GoodGrade from "../Animation/GoodGrade.json";
import BadGrade from "../Animation/BadGrade.json";
const Progress = () => {
  const { myScore } = useContext(ScoreContext);
  const { Questions } = useContext(QuestionContext);
  const { user, Setcategory } = useContext(categoryContext);
  const [myQuestions, SetMyQuestions] = useState(Questions);
  const [firstTime, SetFirstTime] = useState(false);

  const history = useNavigate();

  useEffect(() => {
    SetFirstTime(true);

    setTimeout(() => {
      SetFirstTime(false);
    }, 3000);
  }, []);
  return (
    <div>
      <Layout title="Progress Page">
        <div>
          {firstTime ? (
            <div className="d-flex justify-content-center flex-column align-items-center  rounded-4 mt-1    ">
              <h2 className=" fw-semibold">
                Congratulations, <b className="vibrant fs-1">{user} </b>
              </h2>
              <p className="fs-3">
                You Got<b className="vibrant fs-1"> {myScore}</b>/
                {Questions.length}
              </p>
              <div className="d-flex  align-items-center gap-2">
                {/* <b>Grade: </b> */}
                <div>
                  {myScore > Questions.length / 2 ? (
                    <div className="d-flex justify-content-center gap-1 align-items-center">
                      {" "}
                      {/* <b style={{ color: "green" }}> Good</b>{" "} */}
                      <Spinners
                        height="80px"
                        width="80px"
                        animationData={GoodGrade}
                      />
                    </div>
                  ) : (
                    <div className="d-flex justify-content-center gap-2 align-items-center">
                      {" "}
                      {/* <b style={{ color: "red" }}> bad</b>{" "} */}
                      <Spinners
                        height="80px"
                        width="80px"
                        animationData={BadGrade}
                      />
                    </div>
                  )}
                </div>
              </div>
              <div className="">
                <Spinners
                  height="300px"
                  width="300px"
                  animationData={FirstTimeAnimation}
                />
              </div>
              <b>please wait...</b>
            </div>
          ) : (
            <div className="row px-1 pe-4 pt-3">


              <div className="col-lg-3 col-md-12 col-sm-12 divider ">
                <div className="d-flex justify-content-center align-items-center flex-column gap-1">
                  <div className="d-flex justify-content-center align-items-center flex-column  ">
                    <h5 className="border-bottom pb-2">
                      {" "}
                      <b className="vibrant fs-4">O</b>ver{" "}
                      <b className="vibrant fs-4">A</b>ll{" "}
                      <b className="vibrant fs-4">S</b>tats
                    </h5>
                  </div>
                  <div>
                    <img src="ProgressPage3.svg" style={{ height: "140px" }} />
                  </div>
                  <p className="fs-3">
                    <b className="vibrant fs-1">{myScore}</b>/{Questions.length}
                  </p>
                  <div className="statBox d-flex flex-column align-items-start">
                    <div className="d-flex justify-content-between gap-2">
                      <b>Wrong : </b>
                      <b className="vibrant"> {Questions.length - myScore}</b>
                    </div>
                    <div className="d-flex justify-content-center align-items-center gap-2">
                      <b>Right : </b>
                      <b className="vibrant">{myScore}</b>
                    </div>{" "}
                    <div className="d-flex justify-content-center align-items-center gap-2">
                      <b> Total : </b>
                      <b className="vibrant">{Questions.length}</b>
                    </div>{" "}
                    <div className="d-flex justify-content-center align-items-center gap-2">
                      <b>Grade: </b>
                      <b>
                        {myScore > Questions.length / 2 ? (
                          <div
                            className="d-flex justify-content-center gap-1 align-items-center"
                            style={{ color: "green" }}
                          >
                            {" "}
                            <b> Good</b>{" "}
                            <Spinners
                              animationData={GoodGrade}
                              height="40px"
                              width="40px"
                            />
                            {/* <BiHappyAlt className="fs-4" />  */}
                          </div>
                        ) : (
                          <div
                            className="d-flex justify-content-center gap-2 align-items-center"
                            style={{ color: "red" }}
                          >
                            {" "}
                            {/* <MdOutlineMoodBad className="fs-4" /> */}
                            <b> Average</b>{" "}
                            <Spinners
                              animationData={BadGrade}
                              height="40px"
                              width="40px"
                            />
                          </div>
                        )}
                      </b>
                    </div>
                  </div>
                </div>
              </div>



              <div className="col-lg-6  col-md-12 col-sm-12">
                <div className="d-flex flex-column gap-2 align-items-center  justify-content-center">
                  <div className="mb-3 mt-1">
                    {" "}
                    <b> All Questions/Answers</b>
                  </div>
                  <div className="summaryBox rounded-3">
                    <div className=" rounded-3 p-2 d-flex p-3 justify-content-center gap-3 flex-column">
                      {myQuestions?.map((quest, i) => {
                        return (
                          <>
                            <div key={i}>
                              <div className="d-flex gap-2 justify-content-start align-items-start gap-2">
                                <b className="vibrant">Q{i + 1}.</b>
                                <div className="d-flex flex-column align-items-start">
                                  {" "}
                                  <span className="fs-6">
                                    {quest?.question}
                                  </span>
                                  <b> Ans: {quest.correct_answer}</b>
                                </div>
                              </div>
                            </div>
                          </>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-12 col-sm-12">
                <div className="d-flex flex-column gap-1 pt-4 justify-content-center align-items-center flex-column">
                  <b>Thanks for choosing us</b>
                  <h4 className="border-bottom">
                    <b className="vibrant fs-3">H</b>ave{" "}
                    <b className=" fw-semibold fs-3">A</b>{" "}
                    <b className="vibrant fs-2">G</b>
                    ood <b className="vibrant fs-3">T</b>ime
                  </h4>
                  <div className="progressRightBox">
                    <img
                      src="ProgressPage1.svg"
                      className="mb-2 progressRightImage"
                      style={{ height: "200px" }}
                    />
                  </div>
                  <button
                    className="button-52"
                    onClick={() => {
                      Setcategory("");
                      history("/category");
                    }}
                    role="button"
                  >
                    {" "}
                    <div className="d-flex justify-content-center align-items-center gap-3">
                      <IoMdArrowRoundBack /> <b> Take Another Quiz</b>
                    </div>
                  </button>{" "}
                </div>
              </div>
            </div>
          )}
        </div>
      </Layout>
    </div>
  );
};

export default Progress;
