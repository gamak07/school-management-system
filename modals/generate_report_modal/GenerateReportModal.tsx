"use client";

import { useState } from "react";
import { X, FileBarChart, ArrowRight, FileCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useModal } from "@/hooks/useModalStore";
import { StepOneType } from "./StepOneType";
import { StepTwoConfig } from "./StepTwoConfig";

export function GenerateReportModal() {
  const { isOpen, onClose, type } = useModal();
  const [step, setStep] = useState(1);
  const [selectedReport, setSelectedReport] = useState<string | null>(null);

  const isModalOpen = isOpen && type === "generateReport";
  if (!isModalOpen) return null;

  const handleNext = () => {
    if (step === 1 && selectedReport) setStep(2);
  };

  const handleBack = () => {
    if (step === 2) setStep(1);
  };

  const handleClose = () => {
    setStep(1);
    setSelectedReport(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200" 
        onClick={handleClose}
      />

      {/* Modal Content */}
      <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden animate-in zoom-in-95 duration-200">
        
        {/* HEADER */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
              <FileBarChart className="text-xl text-purple-600 w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Generate Report</h2>
              <p className="text-sm text-gray-500">
                {step === 1 ? "Select report type" : "Configure options"}
              </p>
            </div>
          </div>
          <button 
            onClick={handleClose}
            className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors cursor-pointer text-gray-500"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* PROGRESS INDICATOR */}
        <div className="px-6 pt-4">
          <div className="flex items-center gap-2">
            {/* Step 1 Indicator */}
            <div className="flex items-center gap-2 text-teal-600">
              <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium bg-teal-600 text-white">1</div>
              <span className="text-sm font-medium">Report Type</span>
            </div>
            
            {/* Connector Line */}
            <div className={cn("flex-1 h-0.5 transition-colors duration-300", step === 2 ? "bg-teal-600" : "bg-gray-200")} />
            
            {/* Step 2 Indicator */}
            <div className={cn("flex items-center gap-2 transition-colors duration-300", step === 2 ? "text-teal-600" : "text-gray-400")}>
              <div className={cn("w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium transition-colors duration-300", step === 2 ? "bg-teal-600 text-white" : "bg-gray-200 text-gray-500")}>2</div>
              <span className="text-sm font-medium">Configure</span>
            </div>
          </div>
        </div>

        {/* BODY */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
          {step === 1 && (
            <StepOneType 
              selected={selectedReport} 
              onSelect={setSelectedReport} 
            />
          )}
          {step === 2 && <StepTwoConfig />}
        </div>

        {/* FOOTER */}
        <div className="flex items-center justify-between p-6 border-t border-gray-200 bg-gray-50">
          <Button 
            variant="outline" 
            onClick={step === 1 ? handleClose : handleBack}
            className="text-gray-700 bg-white border-gray-300 hover:bg-gray-50"
          >
            {step === 1 ? "Cancel" : "Back"}
          </Button>

          <Button 
            onClick={step === 1 ? handleNext : handleClose}
            disabled={step === 1 && !selectedReport}
            className="bg-teal-600 hover:bg-teal-700 text-white flex items-center gap-2"
          >
            {step === 1 ? (
              <>Next <ArrowRight className="w-4 h-4" /></>
            ) : (
              <>Generate Report <FileCheck className="w-4 h-4" /></>
            )}
          </Button>
        </div>

      </div>
    </div>
  );
}