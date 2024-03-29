export enum TaskStatus {
  NOT_STARTED = "Not Started",
  IN_PROGRESS = "In Progress",
  COMPLETED = "Completed",
}

export enum TaskCategory {
  HOME = "Home",
  WORK = "Work",
  STUDY = "Study",
  TRAVEL = "Travel",
  OTHER = "Other",
}

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  category: TaskCategory;
  deadline: string;
}

export interface Tasks {
  tasks: Task[];
}
