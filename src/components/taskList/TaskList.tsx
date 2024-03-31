import { useSelector, useDispatch } from "react-redux";
import { Tasks } from "../../interfaces/tasksInterfaces";
import TaskItem from "../taskItem/TaskItem";
import { deleteTask } from "../../actions/deleteTask";
import { Grid } from "@mui/material";

interface TaskListProps {
  searchQuery: string;
  selectedStatus: string;
}

const TaskList = ({ searchQuery, selectedStatus }: TaskListProps) => {
  const tasks = useSelector((state: Tasks) => state.tasks);

  const dispatch = useDispatch();
  console.log(tasks);
  console.log(selectedStatus);

  const handleDeleteTask = (id: string) => {
    dispatch(deleteTask(id));
  };

  const filteredTasks = tasks.filter((task) => {
    if (selectedStatus === "All") {
      return task.title.toLowerCase().includes(searchQuery.toLowerCase());
    } else {
      return (
        task.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
        task.status === selectedStatus
      );
    }
  });

  return (
    <Grid container spacing={3}>
      {filteredTasks.map((task) => {
        return (
          <Grid item xs={12} sm={6} md={4} key={task.id}>
            <TaskItem task={task} onDelete={() => handleDeleteTask(task.id)} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default TaskList;
