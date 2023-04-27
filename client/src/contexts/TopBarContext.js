import React, { useState, useCallback, useEffect } from "react";
import UkFlag from "../images/svgs/Flag_of_the_United_Kingdom.svg";
import FlagOfSwitzerland from "../images/svgs/Flag_of_Switzerland.svg";

export const TopBarContext = React.createContext({});
export const TopBarContextProvider = TopBarContext.Provider;

const TopBarContextWrapper = (props) => {
  const [currentLanguage, setCurrentLanguage] = useState("En");
  const currentFlag = currentLanguage === "En" ? UkFlag : FlagOfSwitzerland;

  const useOutsideClick = (menuRef, setMenuVisibility, menuVisibility) => {
    const handler = useCallback(
      (event) => {
        // Close the dropdown if the user clicks outside of the menu
        if (menuRef.current && !menuRef.current.contains(event.target)) {
          setMenuVisibility(false);
        }
      },
      [menuRef, setMenuVisibility]
    );

    useEffect(() => {
      document.addEventListener("mousedown", handler);

      // Unbind the event listener on cleanup
      return () => {
        document.removeEventListener("mousedown", handler);
      };
    }, [menuVisibility, handler]);
  };

  return (
    <TopBarContextProvider
      value={{
        currentLanguage,
        setCurrentLanguage,
        currentFlag,
        useOutsideClick,
      }}
    >
      {props.children}
    </TopBarContextProvider>
  );
};

export default TopBarContextWrapper;
