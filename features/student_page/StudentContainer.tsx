"use client";

import { useState } from "react";
import { StudentFilters } from "./StudentFilters";
import { StudentTable, students } from "./StudentTable";
import { Card } from "@/components/ui/card";

export default function StudentContainer() {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  // Toggle all rows
  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedIds(students.map((s) => s.id));
    } else {
      setSelectedIds([]);
    }
  };

  // Toggle single row
  const handleSelectRow = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) 
        ? prev.filter((item) => item !== id) 
        : [...prev, id]
    );
  };

  return (
    <>
      {/* Pass the count to filters */}
      <StudentFilters selectedCount={selectedIds.length} />
      
      {/* Pass the state and handlers to table */}
      <Card className="overflow-hidden">
         <StudentTable 
           selectedIds={selectedIds} 
           onSelectAll={handleSelectAll} 
           onSelectRow={handleSelectRow} 
         />
      </Card>
    </>
  );
}