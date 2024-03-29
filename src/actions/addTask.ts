import { ADD_TASK } from "../constants/actionTypes";
import { Task } from "../interfaces/tasksInterfaces";

export const addTask = (task: Task) => ({
  type: ADD_TASK,
  payload: task,
});
