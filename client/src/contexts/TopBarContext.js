import React, { useState } from "react";

export const topBarContext = React.createContext({});
export const TopBarContextProvider = topBarContext.Provider;

const TopBarContextWrapper = (props) => {
  const [currentLanguage, setCurrentLanguage] = useState("En");

  return (
    <TopBarContextProvider
      value={{
        currentLanguage,
        setCurrentLanguage,
      }}
    >
      {props.children}
    </TopBarContextProvider>
  );
};
