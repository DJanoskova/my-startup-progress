import { createGlobalState } from "rgstate";

import { PhaseType } from "../types/phase.types";

export const PhasesState = createGlobalState<PhaseType[]>([], {
  name: "PhaseState",
  persist: true,
});
