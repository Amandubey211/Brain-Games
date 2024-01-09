import React, { createContext, useState } from 'react'

export const QuestionContext = createContext()

const QuestionContextProvider = ({ children }) => {
  const [Questions, SetQuestions] = useState([])
  return (
    <QuestionContext.Provider value={{ Questions, SetQuestions }} >
      {children}
    </QuestionContext.Provider>
  )
}

export default QuestionContextProvider
