import { createPortal } from "react-dom";
import { Task } from "../../interfaces/tasksInterfaces";
import { Box } from "@mui/material";
import TaskForm from "../taskForm/TaskForm";
import "./Modal.css";

const modalRoot = document.querySelector("#modal-root");

interface ModalProps {
  toggleModal: () => void;
  taskToEdit?: Task;
}

const Modal = ({ toggleModal, taskToEdit }: ModalProps) => {
  return createPortal(
    <Box className="modal">
      <TaskForm toggleModal={toggleModal} taskToEdit={taskToEdit} />
    </Box>,
    modalRoot as Element
  );
};

export default Modal;
