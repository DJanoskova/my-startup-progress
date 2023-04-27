import { describe, it, expect } from "vitest";

import { TaskType } from "../types/task.types";
import { PhaseType } from "../types/phase.types";
import { getPhasesWithGroupedTasks } from "./phases.helpers";

describe("Phases helpers", () => {
  const dummyTasks: TaskType[] = [
    { id: 1, phase_id: 1, completed: true, label: "Task 1" },
    { id: 2, phase_id: 2, completed: false, label: "Task 2" },
  ];

  const dummyPhases: PhaseType[] = [
    { id: 1, title: "Phase 1" },
    { id: 1, title: "Phase 2" },
  ];

  describe("getPhasesWithGroupedTasks", () => {
    it("should group tasks per phase id and assign them to phases correctly"),
      () => {
        const result = getPhasesWithGroupedTasks(dummyPhases, dummyTasks);
        expect(result).toMatchObject([
          {
            id: 1,
            title: "Phase 1",
            tasks: [{ id: 1, phase_id: 1, completed: true, label: "Task 1" }],
            completed: true,
          },
          {
            id: 2,
            title: "Phase 2",
            tasks: [{ id: 2, phase_id: 2, completed: false, label: "Task 2" }],
            completed: false,
          },
        ]);
      };
  });
});
