import React, { createContext, useState } from "react";

export const categoryContext = createContext();

const CategoryContextProvider = ({ children }) => {
  const [category, Setcategory] = useState("");
  const [CategoryValue, SetcategoryValue] = useState(0);
  const [user, SetUser] = useState("")
  const[AllQuestions,SetAllQuestion] = useState([])

  return (
    <categoryContext.Provider
      value={{category, Setcategory, CategoryValue, SetcategoryValue, user, SetUser,AllQuestions,SetAllQuestion }}
    >
      {children}
    </categoryContext.Provider>
  );
};

export default CategoryContextProvider;
