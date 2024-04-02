import { EDIT_TASK } from "../constants/actionTypes";
import { Task } from "../../interfaces/tasksInterfaces";

export const editTask = (updatedTaskData: Task) => ({
  type: EDIT_TASK,
  payload: { updatedTaskData },
});
