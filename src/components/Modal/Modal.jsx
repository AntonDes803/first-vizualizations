"use client";

import { useContext } from "react";
import Modal from "react-modal";
import { SiteContext } from "@/context/siteContext";
import ContactForm from "@/components/OrderForm/OrderForm";
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
            <ContactForm />
        </Modal>
    );
};

export default ModalR;
