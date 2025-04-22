"use client";

import { useContext } from "react";
import Modal from "react-modal";
import { SiteContext } from "@/context/SiteContext";
// import ContactForm from "@/components/ContactForm/ContactForm";
import "./Modal.css";

const ModalR = () => {
    const { isModalOpen, closeModal } = useContext(SiteContext);

    return (
        <Modal
            isOpen={isModalOpen}
            overlayClassName={"backdrop"}
            className={"modalContent"}
            closeTimeoutMS={700}
            onRequestClose={closeModal}
            ariaHideApp={false}
        >
            {/* <ContactForm /> */}

            <div>Here will be form </div>
        </Modal>
    );
};

export default ModalR;
