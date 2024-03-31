import { useState } from "react";
import { useDispatch } from "react-redux";
import { editTask } from "../../actions/editTask";
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

interface TaskItemProps {
  task: Task;
  onDelete: () => void;
}

const TaskItem = ({ task, onDelete }: TaskItemProps) => {
  const { id, title, description, status, category, deadline } = task;
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [editedStatus, setEditedStatus] = useState<string>(status);

  const dispatch = useDispatch();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const handleStatusChange = (event: SelectChangeEvent<string>) => {
    setEditedStatus(event.target.value);

    function assertTaskStatus(value: string): value is TaskStatus {
      console.log(Object.values(TaskStatus).includes(value as TaskStatus));
      return Object.values(TaskStatus).includes(value as TaskStatus);
    }

    if (assertTaskStatus(editedStatus)) {
      const newTask: Task = {
        id,
        title,
        description,
        status: editedStatus,
        category,
        deadline,
      };
      dispatch(editTask(newTask));
    }
  };

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
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "10px",
            }}
          >
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
          <Typography variant="body2" component="p">
            {description}
          </Typography>
          <Select
            value={editedStatus}
            onChange={handleStatusChange}
            sx={{ height: "35px" }}
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
