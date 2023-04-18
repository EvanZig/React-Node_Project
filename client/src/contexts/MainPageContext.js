import React, { useState } from "react";

export const MainPageContext = React.createContext({});
export const MainPageContextProvider = MainPageContext.Provider;

const MainPageContextWraper = (props) => {
  const [loginModalVisibility, setLoginModalVisibility] = useState(false);
  const [registerModalVisibility, setRegisterModalVisibility] = useState(false);

  return (
    <MainPageContextProvider
      value={{
        loginModalVisibility,
        setLoginModalVisibility,
        registerModalVisibility,
        setRegisterModalVisibility,
      }}
    >
      {props.children}
    </MainPageContextProvider>
  );
};

export default MainPageContextWraper;
