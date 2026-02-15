"use client";

import { useState } from "react";
import { X, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useModal } from "@/hooks/useModalStore";
import StepOnePersonal from "./StepOnePersonal";
import StepTwoGuardian from "./StepTwoGuardian";
import StepThreeMedical from "./StepThreeMedical";

export function AddStudentModal() {
  const { isOpen, onClose, type } = useModal();
  const [step, setStep] = useState(1);

  const isModalOpen = isOpen && type === "addStudent";
  
  if (!isModalOpen) return null;

  // 2. Handlers
  const handleNext = () => setStep((prev) => Math.min(prev + 1, 3));
  const handleBack = () => setStep((prev) => Math.max(prev - 1, 1));
  
  const handleClose = () => {
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-lg shadow-xl max-w-3xl w-full my-8">
        
        {/* HEADER */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">New Student Admission</h3>
            <p className="text-sm text-gray-600 mt-1">Step {step} of 3</p>
          </div>
          <button 
            onClick={handleClose}
            className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* BODY */}
        <div className="p-6">
          {/* Progress Bar */}
          <div className="flex items-center gap-2 mb-6">
            <div className="flex-1">
              <div className={cn("h-2 rounded-full transition-colors duration-300", step >= 1 ? "bg-teal-600" : "bg-gray-200")} />
            </div>
            <div className="flex-1">
              <div className={cn("h-2 rounded-full transition-colors duration-300", step >= 2 ? "bg-teal-600" : "bg-gray-200")} />
            </div>
            <div className="flex-1">
              <div className={cn("h-2 rounded-full transition-colors duration-300", step >= 3 ? "bg-teal-600" : "bg-gray-200")} />
            </div>
          </div>

          {/* Form Content */}
          <div className="space-y-4">
            {step === 1 && <StepOnePersonal />}
            {step === 2 && <StepTwoGuardian />}
            {step === 3 && <StepThreeMedical />}
          </div>
        </div>

        {/* FOOTER */}
        <div className="flex items-center justify-between p-6 border-t border-gray-200">
          <Button 
            variant="ghost" 
            onClick={step === 1 ? handleClose : handleBack} 
            className="text-gray-700 hover:bg-gray-100"
          >
            {step === 1 ? "Cancel" : "Back"}
          </Button>
          
          <Button 
            onClick={step === 3 ? handleClose : handleNext} 
            className="bg-teal-600 hover:bg-teal-700 text-white px-6"
          >
            {step === 3 ? "Submit Admission" : "Next"}
          </Button>
        </div>
      </div>
    </div>
  );
}
