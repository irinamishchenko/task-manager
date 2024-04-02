import { createPortal } from "react-dom";
import { Task } from "../../interfaces/tasksInterfaces";
import { Box } from "@mui/material";
import TaskForm from "../taskForm/TaskForm";
import "./Modal.css";
import React from "react";

const modalRoot = document.querySelector("#modal-root");

interface ModalProps {
  toggleModal: () => void;
  taskToEdit?: Task;
}

const Modal = ({ toggleModal, taskToEdit }: ModalProps) => {
  const handleModal = (event: React.MouseEvent) => {
    const target = event.target as HTMLElement;
    const classListArray = Array.from(target.classList);
    if (classListArray.includes("modal")) {
      toggleModal();
    }
  };
  return createPortal(
    <Box className="modal" onClick={(event) => handleModal(event)}>
      <TaskForm toggleModal={toggleModal} taskToEdit={taskToEdit} />
    </Box>,
    modalRoot as Element
  );
};

export default Modal;
