"use client";

import { Search, Filter, Download, FileInput, ListChecks } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import BulkActionsModal from "./BulkActionsModal";

interface StudentFiltersProps {
  selectedCount: number;
}

export function StudentFilters({ selectedCount }: StudentFiltersProps) {
  const [isBulkModalOpen, setIsBulkModalOpen] = useState(false);
  return (
    <>
      <Card className="mb-6">
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 text-lg" />
              <input
                placeholder="Search by name, admission number, or parent phone..."
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2">
              <Button
                size="filter"
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg border transition-colors cursor-pointer whitespace-nowrap bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                <Filter className="text-lg" />
                <span className="text-sm font-medium">Filters</span>
              </Button>

              {selectedCount > 0 && (
                <Button
                  className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2.5 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap h-auto"
                  onClick={() => setIsBulkModalOpen(true)}
                >
                  <ListChecks className="w-5 h-5" />
                  <span className="text-sm font-medium">
                    Bulk Actions ({selectedCount})
                  </span>
                </Button>
              )}

              <Button
                size="filter"
                className="flex items-center gap-2 bg-white border border-gray-300 text-gray-700 px-4 py-2.5 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer whitespace-nowrap"
              >
                <Download className="text-lg" />
                <span className="text-sm font-medium">Export</span>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {isBulkModalOpen && (
        <BulkActionsModal
          selectedCount={selectedCount}
          onClose={() => setIsBulkModalOpen(false)}
        />
      )}
    </>
  );
}
