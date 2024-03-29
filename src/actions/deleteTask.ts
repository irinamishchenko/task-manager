import { DELETE_TASK } from "../constants/actionTypes";

export const deleteTask = (id: string) => {
  return {
    type: DELETE_TASK,
    payload: id,
  };
};
