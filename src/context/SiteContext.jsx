"use client";
import { useState, createContext } from "react";

export const SiteContext = createContext();

export const SiteProvider = ({ children }) => {
    const [mobileMenu, setMobileMenu] = useState(false);
    const [mobileMenuContent, setmobileMenuContent] = useState(false);
    const [isModalOpen, setModalOpen] = useState(false);

    //   const [backDrop, setBackDrop] = useState(false);

    return (
        <SiteContext.Provider
            value={{
                mobileMenu,
                setMobileMenu,
                mobileMenuContent,
                setmobileMenuContent,
                isModalOpen,
                setModalOpen,
                // backDrop,
                // setBackDrop,
            }}
        >
            {children}
        </SiteContext.Provider>
    );
};
