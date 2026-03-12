import { Search, Download } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export function ClassToolbar() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 z-10" />
          <Input
            placeholder="Search by class name or teacher..."
            className="w-full pl-10 pr-4 py-2.5 h-auto text-sm border-gray-300 rounded-lg focus-visible:ring-teal-500 focus-visible:border-transparent"
          />
        </div>

        <div className="w-full lg:w-48">
          <Select defaultValue="all">
            <SelectTrigger className="w-full px-4 py-2.5 h-auto text-sm border-gray-300 rounded-lg focus:ring-teal-500 text-gray-700">
              <SelectValue placeholder="All Levels" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Levels</SelectItem>
              <SelectItem value="JSS">Junior Secondary (JSS)</SelectItem>
              <SelectItem value="SSS">Senior Secondary (SSS)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="w-full lg:w-48">
          <Select defaultValue="all">
            <SelectTrigger className="w-full px-4 py-2.5 h-auto text-sm border-gray-300 rounded-lg focus:ring-teal-500 text-gray-700">
              <SelectValue placeholder="All Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="Active">Active</SelectItem>
              <SelectItem value="Inactive">Inactive</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button
          variant="secondary"
          className="px-6 py-2.5 h-auto bg-gray-100 text-gray-700 hover:bg-gray-200 text-sm font-medium rounded-lg whitespace-nowrap flex items-center justify-center gap-2"
        >
          <Download className="w-5 h-5" />
          Export CSV
        </Button>
      </div>
    </div>
  );
}
