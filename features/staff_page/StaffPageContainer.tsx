"use client";

import { UserPlus, Mail, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import StaffStats from "./StaffStats";
import StaffFilters from "./StaffFilters";
import StaffTable from "./StaffTable";
import AddStaffModal from "./AddStaffModal";
import AddStaffSuccessModal from "./AddStaffSuccessModal";
import ViewProfileModal from "./ViewProfileModal";
import EditStaffProfileModal from "./EditStaffProfileModal";
import type { EditTab } from "./EditStaffProfileModal";
import { useState } from "react";
import { staffMembers } from "@/mock_datas/staff";
import type { StaffMember } from "@/mock_datas/staff";
import type { StaffFormData } from "./AddStaffModal";

export default function StaffPageContainer() {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [successStaffName, setSuccessStaffName] = useState("");
  const [viewProfileStaff, setViewProfileStaff] = useState<StaffMember | null>(
    null,
  );
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editInitialTab, setEditInitialTab] = useState<EditTab>("personal");
  const [editStaff, setEditStaff] = useState<StaffMember | null>(null);

  const isAllSelected =
    staffMembers.length > 0 && selectedIds.length === staffMembers.length;

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedIds(staffMembers.map((s) => s.id));
    } else {
      setSelectedIds([]);
    }
  };

  const handleSelectRow = (id: string, checked: boolean) => {
    if (checked) {
      setSelectedIds((prev) => [...prev, id]);
    } else {
      setSelectedIds((prev) => prev.filter((selectedId) => selectedId !== id));
    }
  };

  const handleAddStaffSuccess = (data: StaffFormData) => {
    setShowAddModal(false);
    setSuccessStaffName(`${data.firstName} ${data.lastName}`);
    setShowSuccessModal(true);
  };

  const handleEditProfile = (staff: StaffMember, tab: EditTab) => {
    setViewProfileStaff(null); // close view profile modal first
    setEditStaff(staff);
    setEditInitialTab(tab);
    setEditModalOpen(true);
  };

  return (
    <>
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Staff Management</h1>
          <p className="text-sm text-gray-600 mt-1">
            Manage non-academic staff members and their information
          </p>
        </div>

        <Button
          onClick={() => setShowAddModal(true)}
          className="bg-teal-600 hover:bg-teal-700 text-white rounded-lg flex items-center gap-2 px-5 py-2.5 h-auto shadow-none w-fit"
        >
          <UserPlus className="w-4 h-4" />
          Add Staff
        </Button>
      </div>

      {/* Components */}
      <StaffStats />
      <StaffFilters />

      {/* Bulk Action Bar */}
      {selectedIds.length > 0 && (
        <div className="bg-teal-50 border border-teal-200 rounded-lg p-4 mb-6 flex items-center justify-between">
          <p className="text-sm font-medium text-teal-900">
            {selectedIds.length} staff member
            {selectedIds.length !== 1 ? "s" : ""} selected
          </p>
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              className="px-4 py-2 bg-white border-teal-300 text-teal-700 text-sm font-medium rounded-lg hover:bg-teal-50 transition-colors whitespace-nowrap h-auto shadow-none"
            >
              <Mail className="w-4 h-4 mr-2" />
              Send Email
            </Button>
            <Button className="px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-lg hover:bg-red-700 transition-colors whitespace-nowrap h-auto shadow-none">
              <Trash2 className="w-4 h-4 mr-2" />
              Remove
            </Button>
          </div>
        </div>
      )}

      <StaffTable
        handleSelectAll={handleSelectAll}
        handleSelectRow={handleSelectRow}
        isAllSelected={isAllSelected}
        selectedIds={selectedIds}
        onViewProfile={(staff) => setViewProfileStaff(staff)}
      />

      {/* Add Staff Modal */}
      <AddStaffModal
        open={showAddModal}
        onClose={() => setShowAddModal(false)}
        onSuccess={handleAddStaffSuccess}
      />

      {/* Success Modal */}
      <AddStaffSuccessModal
        open={showSuccessModal}
        staffName={successStaffName}
        onClose={() => setShowSuccessModal(false)}
      />

      {/* View Profile Modal */}
      <ViewProfileModal
        open={viewProfileStaff !== null}
        staff={viewProfileStaff}
        onClose={() => setViewProfileStaff(null)}
        onEdit={(tab) =>
          viewProfileStaff && handleEditProfile(viewProfileStaff, tab)
        }
      />

      {/* Edit Staff Profile Modal */}
      {editStaff && (
        <EditStaffProfileModal
          open={editModalOpen}
          staff={editStaff}
          initialTab={editInitialTab}
          onClose={() => {
            setEditModalOpen(false);
            setEditStaff(null);
          }}
        />
      )}
    </>
  );
}
