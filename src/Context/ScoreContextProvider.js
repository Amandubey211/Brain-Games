import React, { createContext, useState } from "react";

export const ScoreContext = createContext();

const ScoreContextProvider = ({ children }) => {
  const [myScore, SetMyScore] = useState(0);
  return (
    <ScoreContext.Provider
      value={{ myScore, SetMyScore }}
    >
      {children}
    </ScoreContext.Provider>
  );
};

export default ScoreContextProvider;
