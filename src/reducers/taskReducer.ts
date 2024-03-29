import { ADD_TASK, DELETE_TASK, EDIT_TASK } from "../constants/actionTypes";
import { Tasks } from "../interfaces/tasksInterfaces";

const initialState: Tasks = {
  tasks: [],
};

const taskReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };

    case DELETE_TASK:
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
