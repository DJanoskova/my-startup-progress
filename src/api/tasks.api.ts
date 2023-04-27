import { TaskType } from "../types/task.types";

export const fetchTasks = async () => {
  const response = await fetch("/data/tasks.json");
  const data = await response.json();
  return data as TaskType[];
};
