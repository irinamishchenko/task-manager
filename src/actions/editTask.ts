import { EDIT_TASK } from "../constants/actionTypes";
import { Task } from "../interfaces/tasksInterfaces";

// type UpdatedTaskDataType = Omit<Task, "id">;

export const editTask = (updatedTaskData: Task) => ({
  type: EDIT_TASK,
  payload: { updatedTaskData },
});
