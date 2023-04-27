import { useEffect, useMemo, useState } from "react";
import { useGlobalState } from "rgstate";

import { PhasesState } from "./state/PhasesState";
import { TasksState } from "./state/TasksState";

import { fetchPhases } from "./api/phases.api";
import { fetchTasks } from "./api/tasks.api";
import { fetchRandomFact } from "./api/facts.api";
import {
  getIsPhaseLocked,
  getPhasesWithGroupedTasks,
} from "./helpers/phases.helpers";

import { PhaseTaskList } from "./components/PhaseTaskList";

function App() {
  const [phases, setPhases] = useGlobalState(PhasesState);
  const [tasks, setTasks] = useGlobalState(TasksState);
  const [randomFact, setRandomFact] = useState("");

  useEffect(() => {
    const handleFetchData = async () => {
      const [phasesResponse, tasksResponse] = await Promise.all([
        fetchPhases(),
        fetchTasks(),
      ]);

      setPhases(phasesResponse);
      setTasks(tasksResponse);
    };

    // this condition is in place for only initial data fetch
    // otherwise local storage-stored data would get replaced with server data again
    if (!phases.length || !tasks.length) handleFetchData();
  }, [phases, tasks, setPhases, setTasks]);

  // some would consider memoization here an overkill
  // I will put in place to show I'm familiar with the concept
  // but very much advocate for its reasonable usage
  const phasesWithTasks = useMemo(() => {
    return getPhasesWithGroupedTasks(phases, tasks);
  }, [phases, tasks]);

  useEffect(() => {
    const handleFetchFunFact = async () => {
      const response = await fetchRandomFact();
      setRandomFact(response);
    };

    const areAllTasksCompleted = tasks.length && tasks.every((task) => task.completed);

    if (areAllTasksCompleted) {
      handleFetchFunFact();
    } else {
      setRandomFact("");
    }
  }, [tasks]);

  return (
    <div>
      <div className="app">
        <h1>My startup progress</h1>
        {phasesWithTasks.map((phase, index) => {
          const isLocked = getIsPhaseLocked(phasesWithTasks, index);

          return (
            <PhaseTaskList phase={phase} key={phase.id} isLocked={isLocked} />
          );
        })}
      </div>
      {randomFact}
    </div>
  );
}

export default App;
