import { ClassHeader } from "./ClassHeader";
import { ClassStats } from "./ClassStats";
import { ClassToolbar } from "./ClassToolbar";
import { ClassGrid } from "./ClassGrid";

export function ClassPageContainer() {
  return (
    <>
      <ClassHeader />
      <ClassStats />
      <ClassToolbar />
      <ClassGrid />
    </>
  );
}
