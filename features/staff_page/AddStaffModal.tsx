"use client";

import { useState, useCallback } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { X, ArrowRight, ArrowLeft, Info, Mail } from "lucide-react";

interface AddStaffModalProps {
  open: boolean;
  onClose: () => void;
  onSuccess: (data: StaffFormData) => void;
}

export interface StaffFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  gender: string;
  address: string;
  role: string;
  department: string;
  employmentType: string;
  salary: string;
  joinDate: string;
  emergencyContactName: string;
  emergencyContactPhone: string;
}

const initialFormData: StaffFormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  dateOfBirth: "",
  gender: "",
  address: "",
  role: "",
  department: "",
  employmentType: "",
  salary: "",
  joinDate: "",
  emergencyContactName: "",
  emergencyContactPhone: "",
};

const STEP_LABELS = ["Personal Info", "Role & Employment", "Emergency Contact"];

const ROLES = [
  "Administrator",
  "Accountant",
  "Librarian",
  "Security Officer",
  "Janitor",
  "Nurse",
  "IT Support",
  "Receptionist",
  "Driver",
  "Counselor",
  "HR Manager",
  "Procurement Officer",
];

const DEPARTMENTS = [
  "Administration",
  "Finance",
  "Library",
  "Security",
  "Maintenance",
  "Health",
  "IT",
  "Front Desk",
  "Transport",
  "Counseling",
  "Human Resources",
  "Procurement",
];

const EMPLOYMENT_TYPES = ["Full-time", "Part-time", "Contract"];

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function AddStaffModal({
  open,
  onClose,
  onSuccess,
}: AddStaffModalProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<StaffFormData>(initialFormData);

  const updateField = useCallback(
    (field: keyof StaffFormData, value: string) => {
      setFormData((prev) => ({ ...prev, [field]: value }));
    },
    [],
  );

  const handleClose = useCallback(() => {
    setStep(1);
    setFormData(initialFormData);
    onClose();
  }, [onClose]);

  // Validation per step
  const isStep1Valid =
    formData.firstName.trim() !== "" &&
    formData.lastName.trim() !== "" &&
    formData.email.trim() !== "" &&
    isValidEmail(formData.email) &&
    formData.phone.trim() !== "" &&
    formData.dateOfBirth !== "" &&
    formData.gender !== "" &&
    formData.address.trim() !== "";

  const isStep2Valid =
    formData.role !== "" &&
    formData.department !== "" &&
    formData.employmentType !== "" &&
    formData.salary.trim() !== "" &&
    formData.joinDate !== "";

  const isStep3Valid =
    formData.emergencyContactName.trim() !== "" &&
    formData.emergencyContactPhone.trim() !== "";

  const canProceed =
    (step === 1 && isStep1Valid) ||
    (step === 2 && isStep2Valid) ||
    (step === 3 && isStep3Valid);

  const handleNext = () => {
    if (step < 3) setStep((s) => s + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep((s) => s - 1);
  };

  const handleSubmit = () => {
    if (canProceed) {
      onSuccess(formData);
      setStep(1);
      setFormData(initialFormData);
    }
  };

  return (
    <Dialog open={open} onOpenChange={(v) => !v && handleClose()}>
      <DialogContent
        showCloseButton={false}
        className="p-0 gap-0 min-w-3xl min-w-[300px] max-h-[90vh] overflow-hidden flex flex-col rounded-xl"
      >
        {/* Visually hidden accessible title */}
        <DialogTitle className="sr-only">Add New Staff Member</DialogTitle>

        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-gray-900">
              Add New Staff Member
            </h2>
            <p className="text-sm text-gray-500 mt-1">Step {step} of 3</p>
          </div>
          <button
            onClick={handleClose}
            className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="px-6 py-4 bg-gray-50">
          <div className="flex items-center justify-between mb-2">
            {STEP_LABELS.map((label, i) => (
              <span
                key={label}
                className={`text-xs font-medium ${
                  i + 1 <= step ? "text-teal-600" : "text-gray-400"
                }`}
              >
                {label}
              </span>
            ))}
          </div>
          <div className="flex gap-2">
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className={`h-2 rounded-full flex-1 ${
                  s <= step ? "bg-teal-600" : "bg-gray-200"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Form Body */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          {step === 1 && (
            <Step1 formData={formData} updateField={updateField} />
          )}
          {step === 2 && (
            <Step2 formData={formData} updateField={updateField} />
          )}
          {step === 3 && (
            <Step3 formData={formData} updateField={updateField} />
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between bg-gray-50">
          <button
            onClick={handleClose}
            className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors whitespace-nowrap cursor-pointer"
          >
            Cancel
          </button>
          <div className="flex gap-2">
            {step > 1 && (
              <button
                onClick={handleBack}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors whitespace-nowrap cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4 inline mr-1" />
                Back
              </button>
            )}
            {step < 3 ? (
              <button
                disabled={!canProceed}
                onClick={handleNext}
                className="px-4 py-2 text-sm font-medium text-white bg-teal-600 rounded-lg hover:bg-teal-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer"
              >
                Next
                <ArrowRight className="w-4 h-4 inline ml-1" />
              </button>
            ) : (
              <button
                disabled={!canProceed}
                onClick={handleSubmit}
                className="px-4 py-2 text-sm font-medium text-white bg-teal-600 rounded-lg hover:bg-teal-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer"
              >
                <Mail className="w-4 h-4 inline mr-1" />
                Send Invitation
              </button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

/* ─── Shared input styles ─── */
const inputClass =
  "w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500";
const labelClass = "block text-sm font-medium text-gray-700 mb-1";

/* ─── Step 1: Personal Info ─── */
function Step1({
  formData,
  updateField,
}: {
  formData: StaffFormData;
  updateField: (field: keyof StaffFormData, value: string) => void;
}) {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>
            First Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            className={inputClass}
            placeholder="Enter first name"
            value={formData.firstName}
            onChange={(e) => updateField("firstName", e.target.value)}
          />
        </div>
        <div>
          <label className={labelClass}>
            Last Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            className={inputClass}
            placeholder="Enter last name"
            value={formData.lastName}
            onChange={(e) => updateField("lastName", e.target.value)}
          />
        </div>
      </div>

      <div>
        <label className={labelClass}>
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          className={inputClass}
          placeholder="staff@school.com"
          value={formData.email}
          onChange={(e) => updateField("email", e.target.value)}
        />
      </div>

      <div>
        <label className={labelClass}>
          Phone Number <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          className={inputClass}
          placeholder="+234 XXX XXX XXXX"
          value={formData.phone}
          onChange={(e) => updateField("phone", e.target.value)}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>
            Date of Birth <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            className={inputClass}
            value={formData.dateOfBirth}
            onChange={(e) => updateField("dateOfBirth", e.target.value)}
          />
        </div>
        <div>
          <label className={labelClass}>
            Gender <span className="text-red-500">*</span>
          </label>
          <select
            className={`${inputClass} cursor-pointer`}
            value={formData.gender}
            onChange={(e) => updateField("gender", e.target.value)}
          >
            <option value="">Select gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
      </div>

      <div>
        <label className={labelClass}>
          Home Address <span className="text-red-500">*</span>
        </label>
        <textarea
          rows={3}
          className={`${inputClass} resize-none`}
          placeholder="Enter full home address"
          value={formData.address}
          onChange={(e) => updateField("address", e.target.value)}
        />
      </div>
    </div>
  );
}

/* ─── Step 2: Role & Employment ─── */
function Step2({
  formData,
  updateField,
}: {
  formData: StaffFormData;
  updateField: (field: keyof StaffFormData, value: string) => void;
}) {
  return (
    <div className="space-y-4">
      <div>
        <label className={labelClass}>
          Role <span className="text-red-500">*</span>
        </label>
        <select
          className={`${inputClass} cursor-pointer`}
          value={formData.role}
          onChange={(e) => updateField("role", e.target.value)}
        >
          <option value="">Select role</option>
          {ROLES.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className={labelClass}>
          Department <span className="text-red-500">*</span>
        </label>
        <select
          className={`${inputClass} cursor-pointer`}
          value={formData.department}
          onChange={(e) => updateField("department", e.target.value)}
        >
          <option value="">Select department</option>
          {DEPARTMENTS.map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className={labelClass}>
          Employment Type <span className="text-red-500">*</span>
        </label>
        <select
          className={`${inputClass} cursor-pointer`}
          value={formData.employmentType}
          onChange={(e) => updateField("employmentType", e.target.value)}
        >
          <option value="">Select employment type</option>
          {EMPLOYMENT_TYPES.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className={labelClass}>
          Annual Salary (₦) <span className="text-red-500">*</span>
        </label>
        <input
          type="number"
          className={inputClass}
          placeholder="Enter annual salary"
          value={formData.salary}
          onChange={(e) => updateField("salary", e.target.value)}
        />
      </div>

      <div>
        <label className={labelClass}>
          Join Date <span className="text-red-500">*</span>
        </label>
        <input
          type="date"
          className={inputClass}
          value={formData.joinDate}
          onChange={(e) => updateField("joinDate", e.target.value)}
        />
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex gap-3">
        <Info className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
        <div>
          <p className="text-sm font-medium text-blue-900 mb-1">
            Employment Information
          </p>
          <p className="text-xs text-blue-700">
            Please ensure all employment details are accurate. This information
            will be used for payroll and HR records.
          </p>
        </div>
      </div>
    </div>
  );
}

/* ─── Step 3: Emergency Contact ─── */
function Step3({
  formData,
  updateField,
}: {
  formData: StaffFormData;
  updateField: (field: keyof StaffFormData, value: string) => void;
}) {
  return (
    <div className="space-y-4">
      <div>
        <label className={labelClass}>
          Emergency Contact Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          className={inputClass}
          placeholder="Enter emergency contact name"
          value={formData.emergencyContactName}
          onChange={(e) => updateField("emergencyContactName", e.target.value)}
        />
      </div>

      <div>
        <label className={labelClass}>
          Emergency Contact Phone <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          className={inputClass}
          placeholder="+234 XXX XXX XXXX"
          value={formData.emergencyContactPhone}
          onChange={(e) => updateField("emergencyContactPhone", e.target.value)}
        />
      </div>

      {/* Onboarding email notice */}
      {formData.email && (
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex gap-3">
          <Mail className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-amber-900 mb-1">
              Onboarding Email
            </p>
            <p className="text-xs text-amber-700">
              An onboarding email will be sent to{" "}
              <strong>{formData.email}</strong> with login credentials and next
              steps.
            </p>
          </div>
        </div>
      )}

      {/* Summary */}
      <div className="bg-gray-50 rounded-lg p-4 space-y-3">
        <h4 className="text-sm font-semibold text-gray-900">Summary</h4>
        <div className="grid grid-cols-2 gap-3 text-xs">
          <div>
            <span className="text-gray-500">Name:</span>
            <p className="font-medium text-gray-900">
              {formData.firstName} {formData.lastName}
            </p>
          </div>
          <div>
            <span className="text-gray-500">Email:</span>
            <p className="font-medium text-gray-900">{formData.email}</p>
          </div>
          <div>
            <span className="text-gray-500">Role:</span>
            <p className="font-medium text-gray-900">{formData.role}</p>
          </div>
          <div>
            <span className="text-gray-500">Department:</span>
            <p className="font-medium text-gray-900">{formData.department}</p>
          </div>
          <div>
            <span className="text-gray-500">Employment Type:</span>
            <p className="font-medium text-gray-900">
              {formData.employmentType}
            </p>
          </div>
          <div>
            <span className="text-gray-500">Join Date:</span>
            <p className="font-medium text-gray-900">{formData.joinDate}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
