import React, { useState } from "react";

export const GlobalVariablesContext = React.createContext({});
export const GlobalVariablesContextProvider = GlobalVariablesContext.Provider;

const GlobalVariablesContextWrapper = (props) => {
  const [loginModalVisibility, setLoginModalVisibility] = useState(false);
  const [registerModalVisibility, setRegisterModalVisibility] = useState(false);
  return (
    <GlobalVariablesContextProvider
      value={{
        loginModalVisibility,
        setLoginModalVisibility,
        registerModalVisibility,
        setRegisterModalVisibility,
      }}
    >
      {props.children}
    </GlobalVariablesContextProvider>
  );
};

export default GlobalVariablesContextWrapper;
