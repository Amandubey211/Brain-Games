import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import { createBrowserRouter,RouterProvider } from "react-router-dom";
import CategoryContextProvider from "./Context/CategoryContextProvider";
import QuestionContextProvider from "./Context/QuestionContextProvider";
import ScoreContextProvider from "./Context/ScoreContextProvider";
import HomeLoadingContextProvider from "./Context/HomeLoadingContextProvider";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <CategoryContextProvider>
    <ScoreContextProvider>
      <HomeLoadingContextProvider>
        <QuestionContextProvider>
          <App />
        </QuestionContextProvider>
      </HomeLoadingContextProvider>
    </ScoreContextProvider>
  </CategoryContextProvider>
);

// const AppRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//     errorElement: <Error />,
//   },
//   {
//     path: "/contact",
//     element: <Contact />,
//     errorElement: <Error />,
//   },
//   {
//     path: "/category",
//     element: <Category />,
//     errorElement: <Error />,
//   },
//   {
//     path: "/quizsetting",
//     element: <QuizSettingPage />,
//     errorElement: <Error />,
//   },
//   {
//     path: "/quizpage",
//     element: <QuizPage />,
//     errorElement: <Error />,
//   },
//   {
//     path: "/progress",
//     element: <Home />,
//     errorElement: <Progress />,
//   },
// ]);
