"use client";

import { useContext } from "react";
import Modal from "react-modal";
import { SiteContext } from "@/context/SiteContext";
import OrderForm from "../OrderForm/OrderForm";

import "./Modal.css";

const ModalR = ({ dictionaryForm, dictionarySuccess }) => {
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
            <OrderForm
                dictionaryForm={dictionaryForm}
                dictionarySuccess={dictionarySuccess}
            />
        </Modal>
    );
};

export default ModalR;
