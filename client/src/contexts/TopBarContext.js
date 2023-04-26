import React, { useState } from "react";

export const topBarContext = React.createContext({});
export const TopBarContextProvider = topBarContext.Provider;

const TopBarContextWrapper = (props) => {
  const [busketClicked, setBusketClicked] = useState(false);
  const [changeLanguageClicked, setChangeLanguageClicked] = useState(false);

  return (
    <TopBarContextProvider
      value={{
        busketClicked,
        setBusketClicked,
        changeLanguageClicked,
        setChangeLanguageClicked,
      }}
    >
      {props.children}
    </TopBarContextProvider>
  );
};
