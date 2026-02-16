"use client";

import { AddStudentModal } from "@/modals/add_student_modal/AddStudentModal";
import AddTeacherModal from "@/modals/add_teacher_modal/AddTeacherModal";
import { GenerateReportModal } from "@/modals/generate_report_modal/GenerateReportModal";
import { ScheduleEventModal } from "@/modals/schedule_modal/ScheduleEventModal";
import { useEffect, useState } from "react";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <AddStudentModal />
      <AddTeacherModal />
      <ScheduleEventModal />
      <GenerateReportModal />
    </>
  );
};
