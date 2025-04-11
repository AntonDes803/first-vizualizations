"use client";
import { useState, createContext } from "react";

export const SiteContext = createContext();

export const SiteProvider = ({ children }) => {
  const [isMobileMenu, setIsMobileMenu] = useState(false);

  //   const [modalFrame, setModalFrame] = useState(false);
  //   const [backDrop, setBackDrop] = useState(false);

  return (
    <SiteContext.Provider
      value={{
        isMobileMenu,
        setIsMobileMenu,
        // modalFrame,
        // setModalFrame,
        // backDrop,
        // setBackDrop,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
};
