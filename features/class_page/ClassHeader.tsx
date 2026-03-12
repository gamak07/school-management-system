import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export function ClassHeader() {
  return (
    <div className="flex items-center justify-between mb-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Class Management</h1>
        <p className="text-sm text-gray-600 mt-1">
          Manage all classes and their assignments
        </p>
      </div>
      <Button className="bg-teal-600 text-white hover:bg-teal-700 transition-colors flex items-center gap-2">
        <Plus className="w-5 h-5" />
        Add Class
      </Button>
    </div>
  );
}
