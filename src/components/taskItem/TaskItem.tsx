import { useState } from "react";
import { useDispatch } from "react-redux";
import { editTask } from "../../redux/actions/editTask";
import { Task, TaskStatus } from "../../interfaces/tasksInterfaces";
import Modal from "../modal/Modal";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import "./TaskItem.css";

interface TaskItemProps {
  task: Task;
  onDelete: () => void;
}

const TaskItem = ({ task, onDelete }: TaskItemProps) => {
  const { id, title, description, status, category, deadline } = task;
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [editedStatus, setEditedStatus] = useState<TaskStatus>(status);

  const dispatch = useDispatch();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const handleStatusChange = (event: SelectChangeEvent<TaskStatus>) => {
    setEditedStatus(event.target.value as TaskStatus);

    const newTask: Task = {
      id,
      title,
      description,
      status: event.target.value as TaskStatus,
      category,
      deadline,
    };
    dispatch(editTask(newTask));
  };

  return (
    <>
      <Card className="task-card">
        <CardContent className="task-card-content">
          <div className="task-card-buttons">
            <Button variant="outlined" onClick={openModal}>
              Edit
            </Button>
            <Button variant="outlined" onClick={onDelete}>
              Delete
            </Button>
          </div>
          <Typography variant="h5" component="h2">
            {title}
          </Typography>
          <Typography
            className="task-card-description"
            variant="body2"
            component="p"
          >
            {description}
          </Typography>
          <Select
            className="task-card-status"
            value={status}
            onChange={handleStatusChange}
          >
            <MenuItem value={TaskStatus.NOT_STARTED}>
              {TaskStatus.NOT_STARTED}
            </MenuItem>
            <MenuItem value={TaskStatus.IN_PROGRESS}>
              {TaskStatus.IN_PROGRESS}
            </MenuItem>
            <MenuItem value={TaskStatus.COMPLETED}>
              {TaskStatus.COMPLETED}
            </MenuItem>
          </Select>
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
