import { useGlobalSetter } from "rgstate";
import { FormEvent } from "react";

import { TaskType } from "../types/task.types";
import { TasksState } from "../state/TasksState";

interface TaskProps {
  task: TaskType;
  isDisabled: boolean;
}

export const Task = ({ task, isDisabled }: TaskProps) => {
  const setTasks = useGlobalSetter(TasksState);

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    const isChecked = e.currentTarget.checked;

    if (isChecked && isDisabled) {
      // we can check the task as finished only if the previous phase is completed
      // ideally we'd show some snackbar here because a log isn't very visible
      console.warn(
        "You cannot complete a task in this phase with an unfinished previous phase"
      );
      e.preventDefault();
      return;
    }

    setTasks((tasks) => {
      const taskIndex = tasks.findIndex((t) => t.id === task.id);
      const newTask: TaskType = { ...tasks[taskIndex], completed: isChecked };
      const newTasks = [...tasks];
      newTasks.splice(taskIndex, 1, newTask);

      return newTasks;
    });
  };

  return (
    <label className="flex-row checkbox">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={handleChange}
        disabled={isDisabled}
      />
      {task.label}
    </label>
  );
};
