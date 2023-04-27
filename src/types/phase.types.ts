import { TaskType } from "./task.types";

export interface PhaseType {
  id: number;
  title: string;

  // If you want to store the state in database
  // if the completed state is just visual, it's okay to calculate it from phases's tasks
  // completed: boolean;
}

export interface PhaseWithGroupedTasksType extends PhaseType {
  tasks: TaskType[];
  completed: boolean;
}
