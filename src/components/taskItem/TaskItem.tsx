import { useState } from "react";
import { Task } from "../../interfaces/tasksInterfaces";
import Modal from "../modal/Modal";
import { Card, CardContent, Typography, Button } from "@mui/material";

interface TaskItemProps {
  task: Task;
  onDelete: () => void;
}

const TaskItem = ({ task, onDelete }: TaskItemProps) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  console.log(task);
  const { id, title, description, status, category, deadline } = task;
  const cardStyle = {
    background: "#f0f0f0",
    border: "1px solid #ccc",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  };

  return (
    <>
      <Card style={cardStyle}>
        <CardContent>
          <Button variant="outlined" onClick={onDelete}>
            Delete
          </Button>
          <Button variant="outlined" onClick={openModal}>
            Edit
          </Button>
          <Typography variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" component="p">
            {description}
          </Typography>
          <Typography color="textSecondary">Status: {status}</Typography>
          <Typography color="textSecondary">Category: {category}</Typography>
          <Typography color="textSecondary">Deadline: {deadline}</Typography>
        </CardContent>
      </Card>
      {isModalOpen && (
        <Modal toggleModal={() => setIsModalOpen(false)} taskToEdit={task} />
      )}
    </>
  );
};

export default TaskItem;
