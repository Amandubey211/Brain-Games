import React, { createContext, useState } from 'react'
export const HomeLoadingContext = createContext()

const HomeLoadingContextProvider = ({ children }) => {
  const [homeloading, SetHomeLoading] = useState(false);
  return (
    <HomeLoadingContext.Provider value={{homeloading,SetHomeLoading}}>
      {children}
    </HomeLoadingContext.Provider>
  )
}

export default HomeLoadingContextProvider
