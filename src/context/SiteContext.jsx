"use client";
import { useState, createContext } from "react";

export const SiteContext = createContext();

export const SiteProvider = ({ children }) => {
    const [mobileMenu, setMobileMenu] = useState(false);
    const [mobileMenuContent, setmobileMenuContent] = useState(false);
    const [isModalOpen, setModalOpen] = useState(false);
    // const [servisType, setServisType] = useState("");

    //   const [backDrop, setBackDrop] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        // setServisType("");
        setModalOpen(false);
    };

    return (
        <SiteContext.Provider
            value={{
                mobileMenu,
                setMobileMenu,
                mobileMenuContent,
                setmobileMenuContent,
                isModalOpen,
                openModal,
                closeModal,
                // backDrop,
                // setBackDrop,
            }}
        >
            {children}
        </SiteContext.Provider>
    );
};
