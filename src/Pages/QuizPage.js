import React, { useContext, useEffect, useState } from "react";
import { categoryContext } from "../Context/CategoryContextProvider";
import { QuestionContext } from "../Context/QuestionContextProvider";
import { IoMdArrowRoundBack } from "react-icons/io";
import { NavLink, useNavigate } from "react-router-dom";
import Spinners from "../Components/Spinner/Spinner";
import CorrectAnimation from "../Animation/Correct.json";
import WrongAnimation from "../Animation/Wrong.json";
import Stepperss from "../Components/Stepper/Stepperss";
import toast, { Toaster } from "react-hot-toast";
import { ScoreContext } from "../Context/ScoreContextProvider";
import "./Styles/QuizPage.css";
import { FcInfo } from "react-icons/fc";
// import Smallsteppers from "../Components/ProgressStepper/smallStepper";
import { Progress } from "@chakra-ui/react";

const QuizPage = () => {
  const history = useNavigate();
  const { user, Setcategory, SetcategoryValue } = useContext(categoryContext);
  const { Questions } = useContext(QuestionContext);
  const { SetMyScore } = useContext(ScoreContext);

  const [Options, SetOptions] = useState();
  const [CurrentQuestion, SetCurrentQuestion] = useState(0);
  const [score, SetScore] = useState(0);
  const [wrong, SetWrong] = useState(false);
  const [right, SetRight] = useState(false);

  useEffect(() => {
    if (Questions.length > 1) {
      SetOptions(
        Questions &&
          SuffleQuestions([
            Questions[CurrentQuestion]?.correct_answer,
            ...Questions[CurrentQuestion]?.incorrect_answers,
          ])
      );
    } else {
      toast.error("please try again");
      history("/quizsetting");
    }
  }, [CurrentQuestion]);

  const SuffleQuestions = (allOptions) => {
    return allOptions.sort(() => Math.random() - 0.5);
  };
  const HandleAnswer = async (answer) => {
    if (!answer) {
      return toast.error("no answer selected");
    }
    console.log(CurrentQuestion);
    const rightAnswer = await Questions[CurrentQuestion]?.correct_answer;

    if (answer === rightAnswer) {
      SetRight(true);
      setTimeout(() => {
        SetRight(false);
      }, 1000);
      SetScore(score + 1);

      if (CurrentQuestion < Questions?.length - 1) {
        SetCurrentQuestion(CurrentQuestion + 1);
      } else {
        SetMyScore(score + 1);
        history("/progress");
      }
    } else {
      SetWrong(true);
      setTimeout(() => {
        SetWrong(false);
      }, 1000);
      if (CurrentQuestion < Questions?.length - 1) {
        SetCurrentQuestion(CurrentQuestion + 1);
      } else {
        SetMyScore(score);
        history("/progress");
      }
    }
  };

  return (
    <div>
      <Toaster />
      <div className="p-3">
        <div className="d-flex justify-content-between  gap-5   align-items-center">
          <div className="brainGames mb-4">
            <NavLink to="/" className="text-reset text-decoration-none">
              <div className="d-flex justify-content-center align-items-center gap-1">
                <b>
                  <b className="B fs-2">B</b>
                  rain
                </b>

                <b>
                  <b className="G fs-2">G</b>ames
                </b>
              </div>
            </NavLink>
          </div>

          <div className="d-flex  justify-content-center align-items-center   ">
            {Questions.length > 30 ? (
              <></>
            ) : (
              <div>
                <div className="  d-flex justify-content-center align-items-center flex-wrap py-2">
                  <div className="desktopStepper">
                    <Stepperss
                      steps={Questions && Questions}
                      index={CurrentQuestion}
                      count={Questions?.length}
                    />
                  </div>
                </div>

                <div className="mobileStepper">
                  <div className=" d-flex justify-content-center align-items-center flex-wrap  py-2 px-3">
                    {/*              
                    <Progress
                      hasStripe
                      size="lg"
                      colorScheme="yellow"
                      value={Math.floor(
                        (CurrentQuestion / Questions.length) * 100
                      )}
                      
                    /> */}
                    <Stepperss
                    // oriented="vertical"
                      steps={Questions && Questions}
                      index={CurrentQuestion}
                      count={Questions?.length}
                    />
                    {/* <hr/> */}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mobileStepper my-2">
          <div className="d-flex justify-content-center  px-2 align-items-center">
            <button className="button-33 " role="button" disabled>
              <b className="fs-6">{Questions[CurrentQuestion]?.category}</b>
            </button>
          </div>
        </div>

        <div>
          <div className="row p-2">
            <div className="col-4 mt-3 divider leftQuizPage">
              <div className="d-flex flex-column justify-content-center align-items-center gap-3">
                <button className="button-33 " role="button" disabled>
                  <b className="fs-6">
                    Topic : {Questions[CurrentQuestion]?.category}
                  </b>
                </button>
                {!right ? (
                  <div>
                    {!wrong ? (
                      <>
                        <div>
                          <img style={{ height: "200px" }} src="QuizPage.svg" />
                        </div>
                      </>
                    ) : (
                      <>
                        <Spinners
                          height="200px"
                          animationData={WrongAnimation}
                        />
                      </>
                    )}
                  </div>
                ) : (
                  <Spinners height="200px" animationData={CorrectAnimation} />
                )}
                <h6 className="text-center">
                  Welcome,{" "}
                  {user ? (
                    <b className="vibrant "> {user.toUpperCase()} </b>
                  ) : (
                    <b className="vibrant">user</b>
                  )}
                </h6>
                <button
                  className="button-52"
                  onClick={() => {
                    Setcategory("");
                    SetcategoryValue(null);

                    history("/quizsetting");
                  }}
                  role="button"
                >
                  {" "}
                  <div className="d-flex justify-content-center align-items-center gap-3">
                    <IoMdArrowRoundBack /> <b> Quit</b>
                  </div>
                </button>{" "}
              </div>
            </div>

            <div className="col-lg-8 col-sm-12 col-md-12">
              <div className="d-flex questionBox justify-content-start ">
                <div className="d-flex justify-content-center align-items-top gap-3 px-2 ">
                  <h3>
                    <b className="vibrant fs-3">Q</b>
                    {CurrentQuestion + 1}.
                  </h3>
                  <div>
                    <h4> {Questions[CurrentQuestion]?.question}</h4>{" "}
                  </div>
                </div>
              </div>
              <div className="scoreBox d-flex justify-content-end align-items-center gap-2 px-5 py-3  mb-2">
                <div className="fs-4 d-flex justify-content-center align-items-center gap-3">
                  {" "}
                  <div className="desktopScore">
                    <span>
                      <b className="vibrantss ">S</b>core :{" "}
                    </span>
                    <span>
                      {" "}
                      <b>{score} </b>
                    </span>
                  </div>
                </div>
              </div>
              <div className="mobileScore">
                <div className="d-flex justify-content-center py-3 flex-wrap">
                  <span>
                    <b className="vibrant ">S</b>core :{" "}
                  </span>
                  <span>
                    {" "}
                    <b> {score} </b>
                  </span>
                </div>
              </div>
              <div className="mobileQuizPageAnimation mobileQuizPageAnimationSize my-3 ">
                <div className="d-flex   justify-content-center px-5 py-1 ">
                  {!right ? (
                    <div>
                      {!wrong ? (
                        <>
                          <div>
                            <img
                              className="mobileQuizPageAnimationSize"
                              src="QuizPage.svg"
                            />
                          </div>
                        </>
                      ) : (
                        <>
                          <Spinners
                            height="200px"
                            animationData={WrongAnimation}
                          />
                        </>
                      )}
                    </div>
                  ) : (
                    <Spinners height="200px" animationData={CorrectAnimation} />
                  )}
                </div>
              </div>

              <div className=" px-4 optionBox d-flex flex-wrap justify-content-center gap-4 align-items-center  ">
                {Options?.map((option, i) => {
                  return (
                    <div key={i} onClick={() => HandleAnswer(option)}>
                      <button
                        style={{
                          cursor: "pointer",
                          width: "300px",
                          height: "80px",

                          fontWeight: "revert",
                        }}
                        className="button-52"
                        role="button"
                      >
                        <b>{option}</b>
                      </button>
                    </div>
                  );
                })}
              </div>

              <div className="d-flex justify-content-start align-items-center gap-2 mt-5 px-4">
                <FcInfo className="fs-4" />
                <b>
                  {" "}
                  <b className="vibrant"> Please, </b> click the appropriate
                  response.
                </b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
