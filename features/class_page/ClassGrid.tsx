import { mockClasses } from "@/mock_datas/classes";
import { ClassCard } from "./ClassCard";

export function ClassGrid() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
      {mockClasses.map((classItem) => (
        <ClassCard key={classItem.id} classItem={classItem} />
      ))}
    </div>
  );
}
