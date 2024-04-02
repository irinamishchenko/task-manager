import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addTask } from "../../redux/actions/addTask";
import { editTask } from "../../redux/actions/editTask";
import {
  Task,
  TaskStatus,
  TaskCategory,
} from "../../interfaces/tasksInterfaces";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Grid,
} from "@mui/material";
import "./TaskForm.css";

interface TaskFormProps {
  toggleModal: () => void;
  taskToEdit?: Task;
}

const TaskForm = ({ toggleModal, taskToEdit }: TaskFormProps) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [status, setStatus] = useState<TaskStatus>(TaskStatus.NOT_STARTED);
  const [category, setCategory] = useState<TaskCategory>(TaskCategory.HOME);
  const [deadline, setDeadline] = useState<string>("");

  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title);
      setDescription(taskToEdit.description);
      setStatus(taskToEdit.status);
      setCategory(taskToEdit.category);
      setDeadline(taskToEdit.deadline);
    }
  }, [taskToEdit]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTask = {
      id: taskToEdit ? taskToEdit.id : uuidv4(),
      title,
      description,
      status,
      category,
      deadline,
    };
    if (taskToEdit) {
      dispatch(editTask(newTask));
    } else {
      dispatch(addTask(newTask));
    }
    setTitle("");
    setDescription("");
    setStatus(TaskStatus.NOT_STARTED);
    setCategory(TaskCategory.HOME);
    setDeadline("");
    toggleModal();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            label="Title"
            variant="outlined"
            fullWidth
            value={title}
            required={true}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Description"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            value={description}
            required={true}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel>Status</InputLabel>
            <Select
              value={status}
              onChange={(e) => setStatus(e.target.value as TaskStatus)}
              label="Status"
            >
              <MenuItem value={TaskStatus.NOT_STARTED}>Not Started</MenuItem>
              <MenuItem value={TaskStatus.IN_PROGRESS}>In Progress</MenuItem>
              <MenuItem value={TaskStatus.COMPLETED}>Completed</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel>Category</InputLabel>
            <Select
              value={category}
              onChange={(e) => setCategory(e.target.value as TaskCategory)}
              label="Category"
            >
              <MenuItem value={TaskCategory.HOME}>Home</MenuItem>
              <MenuItem value={TaskCategory.WORK}>Work</MenuItem>
              <MenuItem value={TaskCategory.STUDY}>Study</MenuItem>
              <MenuItem value={TaskCategory.TRAVEL}>Travel</MenuItem>
              <MenuItem value={TaskCategory.OTHER}>Other</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
            type="date"
            variant="outlined"
            fullWidth
            value={deadline}
            required={true}
            onChange={(e) => setDeadline(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} className="form-buttons">
          <Button type="submit" variant="contained" color="primary">
            {taskToEdit ? "Save Changes" : "Add Task"}
          </Button>
          <Button variant="contained" color="primary" onClick={toggleModal}>
            Cancel
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default TaskForm;
