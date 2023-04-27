import { createGlobalState } from "rgstate";
import { TaskType } from "../types/task.types";

export const TasksState = createGlobalState<TaskType[]>([], {
  name: "TasksState",
  persist: true,
});
