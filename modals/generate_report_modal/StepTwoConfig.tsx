"use client";

import { useState } from "react";
import { FileText, TableProperties, FileSpreadsheet } from "lucide-react";
import { cn } from "@/lib/utils";

export function StepTwoConfig() {
  const [format, setFormat] = useState("pdf");

  return (
    <div className="space-y-6 animate-in slide-in-from-right-4 duration-300 fade-in">
      
      {/* Date Range Section */}
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-3">Date Range</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs text-gray-500 mb-1">Start Date</label>
            <input className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" type="date" defaultValue="2026-01-16" />
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-1">End Date</label>
            <input className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" type="date" defaultValue="2026-02-16" />
          </div>
        </div>
        <div className="flex gap-2 mt-3 overflow-x-auto pb-1">
          {["This Week", "This Month", "This Term", "This Year"].map((range) => (
            <button key={range} type="button" className="px-3 py-1.5 text-xs font-medium text-gray-600 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors whitespace-nowrap">
              {range}
            </button>
          ))}
        </div>
      </div>

      {/* Filters Section */}
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-3">Filters</h3>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-xs text-gray-500 mb-1">Class</label>
            <select className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white">
              <option value="All Classes">All Classes</option>
              <option value="JSS 1">JSS 1</option>
              <option value="JSS 2">JSS 2</option>
              <option value="JSS 3">JSS 3</option>
            </select>
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-1">Arm</label>
            <select className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white">
              <option value="All Arms">All Arms</option>
              <option value="Gold">Gold</option>
              <option value="Silver">Silver</option>
            </select>
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-1">Department</label>
            <select className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white">
              <option value="All Departments">All</option>
              <option value="Sciences">Sciences</option>
              <option value="Arts">Arts</option>
            </select>
          </div>
        </div>
      </div>

      {/* Export Format Section */}
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-3">Export Format</h3>
        <div className="flex gap-3">
          <button 
            type="button" 
            onClick={() => setFormat("pdf")}
            className={cn("flex items-center gap-2 px-4 py-3 rounded-lg border-2 transition-all cursor-pointer", format === "pdf" ? "border-teal-500 bg-teal-50" : "border-gray-200 hover:border-gray-300")}
          >
            <FileText className={cn("w-5 h-5", format === "pdf" ? "text-teal-600" : "text-gray-500")} />
            <span className={cn("text-sm font-medium", format === "pdf" ? "text-teal-700" : "text-gray-700")}>PDF Document</span>
          </button>
          
          <button 
            type="button" 
            onClick={() => setFormat("excel")}
            className={cn("flex items-center gap-2 px-4 py-3 rounded-lg border-2 transition-all cursor-pointer", format === "excel" ? "border-teal-500 bg-teal-50" : "border-gray-200 hover:border-gray-300")}
          >
            <FileSpreadsheet className={cn("w-5 h-5", format === "excel" ? "text-teal-600" : "text-gray-500")} />
            <span className={cn("text-sm font-medium", format === "excel" ? "text-teal-700" : "text-gray-700")}>Excel Sheet</span>
          </button>
          
          <button 
            type="button" 
            onClick={() => setFormat("csv")}
            className={cn("flex items-center gap-2 px-4 py-3 rounded-lg border-2 transition-all cursor-pointer", format === "csv" ? "border-teal-500 bg-teal-50" : "border-gray-200 hover:border-gray-300")}
          >
            <TableProperties className={cn("w-5 h-5", format === "csv" ? "text-teal-600" : "text-gray-500")} />
            <span className={cn("text-sm font-medium", format === "csv" ? "text-teal-700" : "text-gray-700")}>CSV File</span>
          </button>
        </div>
      </div>

      {/* Checkboxes */}
      <div className="flex gap-6 pt-2">
        <label className="flex items-center gap-2 cursor-pointer">
          <input className="w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500 cursor-pointer" type="checkbox" defaultChecked />
          <span className="text-sm text-gray-700">Include Charts & Graphs</span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input className="w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500 cursor-pointer" type="checkbox" defaultChecked />
          <span className="text-sm text-gray-700">Include Detailed Breakdown</span>
        </label>
      </div>

    </div>
  );
}