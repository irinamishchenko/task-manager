import { useSelector, useDispatch } from "react-redux";
import { Tasks } from "../../interfaces/tasksInterfaces";
import TaskItem from "../taskItem/TaskItem";
import { deleteTask } from "../../actions/deleteTask";
import { Grid } from "@mui/material";

const TaskList = () => {
  const tasks = useSelector((state: Tasks) => state.tasks);
  const dispatch = useDispatch();
  console.log(tasks);

  const handleDeleteTask = (id: string) => {
    dispatch(deleteTask(id));
  };

  return (
    <Grid container spacing={3}>
      {tasks.map((task) => {
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
