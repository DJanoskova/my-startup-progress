import { PhaseWithGroupedTasksType } from "../types/phase.types";
import { Task } from "./Task";

interface PhaseTaskListProps {
  phase: PhaseWithGroupedTasksType;
  isLocked: boolean;
}

export const PhaseTaskList = ({ phase, isLocked }: PhaseTaskListProps) => {
  const isCompleted = phase.completed && !isLocked;

  return (
    <div>
      <h2
        className={`flex-row justify-between ${isCompleted && "text-success"}`}
      >
        {phase.title}
        {isLocked && <span className="icon">🔒</span>}
        {isCompleted && <span className="icon">✅</span>}
      </h2>
      <div>
        {phase.tasks.map((task) => {
          return <Task task={task} key={task.id} isDisabled={isLocked} />;
        })}
      </div>
    </div>
  );
};
