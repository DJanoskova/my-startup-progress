import { PhaseType, PhaseWithGroupedTasksType } from "../types/phase.types";
import { TaskType } from "../types/task.types";

export const getPhasesWithGroupedTasks = (
  phases: PhaseType[],
  tasks: TaskType[]
): PhaseWithGroupedTasksType[] => {
  return phases.map((phase) => {
    const phaseTasks = tasks.filter((task) => task.phase_id === phase.id);

    return {
      ...phase,
      tasks: phaseTasks,
      completed: phaseTasks.every((task) => task.completed),
      locked: false,
    };
  });
};

// if any of the phases before are not completed, then the current phase is locked
export const getIsPhaseLocked = (
  phasesWithTasks: PhaseWithGroupedTasksType[],
  index: number
): boolean => {
  const previousPhases = [...phasesWithTasks].slice(0, index);

  return previousPhases.some((phase) => !phase.completed);
};
