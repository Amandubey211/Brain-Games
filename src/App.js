import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Category from "./Pages/Category";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import QuizSettingPage from "./Pages/QuizSettingPage";
import Error from "./Pages/Error";
import QuizPage from "./Pages/QuizPage";
import { ChakraProvider } from "@chakra-ui/react";
import Progress from "./Pages/Progress";
import Contact from "./Pages/Contact";
import { useEffect, useState } from "react";

function App() {
  const [loading, SetLoading] = useState(true);
  const MovingAnimation = document.getElementById("loading-animation");
  useEffect(() => {
    if (MovingAnimation) {
      setTimeout(() => {
        MovingAnimation.style.display = "none";
        SetLoading(false);
      }, 1000);
    }
  }, []);

  return (
    !loading && (
      <div className="App">
        <ChakraProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/category" element={<Category />} />
              <Route path="/quizsetting" element={<QuizSettingPage />} />
              <Route path="/quizpage" element={<QuizPage />} />
              <Route path="/progress" element={<Progress />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </BrowserRouter>
        </ChakraProvider>
      </div>
    )
  );
}

export default App;
