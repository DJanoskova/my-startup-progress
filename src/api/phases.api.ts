import { PhaseType } from "../types/phase.types";

export const fetchPhases = async () => {
  const response = await fetch("/data/phases.json");
  const data = await response.json();
  return data as PhaseType[];
};
