import { ADD_TASK, DELETE_TASK, EDIT_TASK } from "../constants/actionTypes";
import { Tasks, Task } from "../interfaces/tasksInterfaces";

const initialState: Tasks = {
  tasks: JSON.parse(localStorage.getItem("state") || "[]"),
};

const taskReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_TASK:
      const newTasks = [...state.tasks, action.payload];
      localStorage.setItem("state", JSON.stringify(newTasks));
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };

    case DELETE_TASK:
      const updatedTasksDelete = state.tasks.filter(
        (task: Task) => task.id !== action.payload
      );
      localStorage.setItem("state", JSON.stringify(updatedTasksDelete));

      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };

    case EDIT_TASK:
      const taskIndex = state.tasks.findIndex(
        (task) => task.id === action.payload.updatedTaskData.id
      );

      if (taskIndex !== -1) {
        const updatedTasks = [...state.tasks];
        updatedTasks[taskIndex] = {
          ...updatedTasks[taskIndex],
          ...action.payload.updatedTaskData,
        };
        localStorage.setItem("state", JSON.stringify(updatedTasks));
        return {
          ...state,
          tasks: updatedTasks,
        };
      }
      return state;
    default:
      return state;
  }
};

export default taskReducer;
