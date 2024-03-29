import { createPortal } from "react-dom";
import { Task } from "../../interfaces/tasksInterfaces";
import { Box } from "@mui/material";
import TaskForm from "../taskForm/TaskForm";

const modalRoot = document.querySelector("#modal-root");

interface ModalProps {
  toggleModal: () => void;
  taskToEdit?: Task;
}

const Modal = ({ toggleModal, taskToEdit }: ModalProps) => {
  return createPortal(
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: " rgba(0, 0, 0, 0.8)",
        zIndex: 1200,
      }}
    >
      <TaskForm toggleModal={toggleModal} taskToEdit={taskToEdit} />
    </Box>,
    modalRoot as Element
  );
};

export default Modal;
